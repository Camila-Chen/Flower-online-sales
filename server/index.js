var express = require("express");
var path = require('path');
var app = express();
var bodyParser = require("body-parser");
var crypto = require('crypto');
var axios = require('axios');
const jwt = require("jsonwebtoken");
const assert = require("assert");
require("dotenv").config();
var cors = require("cors");
const fileUpload = require('express-fileupload');
const catgCtrl = require("./controllers/categories");
const prodCtrl = require("./controllers/products");
const orderCtrl = require("./controllers/orders");
const wechatCtrl = require("./controllers/wechat");
const wechatHelper = require('./utils/wechat.helper')

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use((req, res, next) => {
  if (req.url.match(/\/admin/)) {
    try {
      const decoded = jwt.verify(req.headers['authorization'], process.env.secret);
      req.state = decoded;
      return next();
    } catch (err) {
      res.status(403).send('您没有权限，请登录')
    }
  } else {
    return next()
  }
})

const asyncMiddleware = fn => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

app.use(fileUpload({
  safeFileNames: true,
  createParentPath: true,
  uriDecodeFileNames: true,
  useTempFiles: true,
  tempFileDir: path.resolve(__dirname, './tmp/'),
  preserveExtension: true,
}));

app.post('/admin/upload', function (req, res) {
  if (Object.keys(req.files).length == 0) {
    return res.status(400).send('No files were uploaded.');
  }
  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  res.send(req.files.file.tempFilePath.replace(path.resolve(__dirname, './tmp/'), ''))
});
app.use(express.static('tmp'))

// Admin

app.get(
  "/admin/authorize",
  asyncMiddleware(async (req, res) => {
    if (req.state && process.env.adminUsername === req.state.username) {
      const user = {
        username: process.env.adminUsername
      };
      const token = jwt.sign(user, process.env.secret, { expiresIn: "24h" });
      res.send({ user, token });
    } else {
      res.status(403).send("您没有权限，请重新登录");
    }
  })
);

app.post(
  "/public/login",
  asyncMiddleware(async (req, res) => {
    if (
      process.env.adminUsername === req.body.username &&
      process.env.password === req.body.password
    ) {
      const user = {
        username: process.env.adminUsername
      };
      const token = jwt.sign(user, process.env.secret, { expiresIn: "24h" });
      res.send({ user, token });
    } else {
      res.status(403).send("用户名或密码错误");
    }
  })
);

// category
app.get(
  "/admin/categories",
  asyncMiddleware(async (req, res) => {
    const cates = await catgCtrl.getCategories();
    res.send(cates);
  })
);

app.get(
  "/public/categories",
  asyncMiddleware(async (req, res) => {
    const cates = await catgCtrl.getCategories();
    res.send(cates);
  })
);

app.post(
  "/admin/categories",
  asyncMiddleware(async (req, res) => {
    await catgCtrl.addCategory(req.body);
    res.send(true);
  })
);

app.put(
  "/admin/categories/:id",
  asyncMiddleware(async (req, res) => {
    req.body.id = req.params.id;
    await catgCtrl.updateCategory(req.body);
    res.send(true);
  })
);

app.delete(
  "/admin/categories/:id",
  asyncMiddleware(async (req, res) => {
    await catgCtrl.deleteCategory(req.params.id);
    res.send(true);
  })
);

// products

app.get(
  "/admin/products",
  asyncMiddleware(async (req, res) => {
    let products = await prodCtrl.getAllProducts();
    const cates = await catgCtrl.getCategories();
    products = products.map(p => ({
      ...p,
      category: cates.find(c => c.id === p.catg_id)
    }));
    res.send(products);
  })
);

app.get(
  "/admin/products/:id",
  asyncMiddleware(async (req, res) => {
    let product = await prodCtrl.getProductById(req.params.id);
    res.send(product);
  })
);

app.get(
  "/public/products/category/:id",
  asyncMiddleware(async (req, res) => {
    let product = await prodCtrl.getProductsByCategory(req.params.id);
    res.send(product);
  })
);

app.post(
  "/admin/products",
  asyncMiddleware(async (req, res) => {
    await prodCtrl.addProduct(req.body);
    res.send(true);
  })
);

app.put(
  "/admin/products/:id",
  asyncMiddleware(async (req, res) => {
    req.body.id = req.params.id;
    await prodCtrl.updateProduct(req.body);
    res.send(true);
  })
);

app.delete(
  "/admin/products/:id",
  asyncMiddleware(async (req, res) => {
    await prodCtrl.deleteProduct(req.params.id);
    res.send(true);
  })
);

//orders
app.post(
  "/public/orders",
  asyncMiddleware(async (req, res) => {
    await orderCtrl.addOrder(req.body);
    res.send(true);
  })
);

app.get(
  "/admin/orders",
  asyncMiddleware(async (req, res) => {
    const orders = await orderCtrl.getAllOrders();
    res.send(orders);
  })
);

// wechat
app.get(
  "/public/wechat/token",
  asyncMiddleware(async (req, res) => {
    const token = process.env.wechat_token;
    const { signature, echostr, timestamp, nonce } = req.query;
    const str = [timestamp, nonce, token].sort().join('');
    const hash = crypto.createHash('sha1').update(str).digest('hex');
    if (hash === signature) {
      res.send(echostr)
      console.log(echostr)
    } else {
      res.status(401).send('验签失败')
    }
  })
)

app.get('/public/wechat/auth', asyncMiddleware(async (req, res) => {
  const { code } = req.query;
  try {
    const url = `https://api.weixin.qq.com/sns/oauth2/access_token?appid=${process.env.wechat_app_id}&secret=${process.env.wechat_app_secret}&code=${code}&grant_type=authorization_code`;
    const { data: { access_token, openid } } = await axios.get(url);
    const { data } = await axios.get(`https://api.weixin.qq.com/sns/userinfo?access_token=${access_token}&openid=${openid}`);
    res.send(data)
  } catch (error) {
    res.status(400).send(error.response && error.response.data && error.response.data.message || error.message);
  }
}))


var access_token = {}
var jsapi_key = {}

app.get("/public/wechat/jsapi",
  asyncMiddleware(async (req, res) => {
    try {
      if (jsapi_key.ticket && jsapi_key.expire_time + 7100 > new Date().getTime()) {
        res.send(wechatHelper.signJsApiKey(jsapi_key.ticket))
      }
      if (!(access_token.token && access_token.expire_time + 7100 > new Date().getTime())) {
        const url = `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${process.env.wechat_app_id}&secret=${process.env.wechat_app_secret}`;
        accessData = (await axios.get(url)).data
        if (accessData.errcode) {
          throw (new Error(accessData.errmsg))
        }
        access_token.token = accessData.access_token
        access_token.expire_time = new Date().getTime()
      }
      const { data } = await axios.get(`https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=${access_token.token}&type=jsapi`);
      jsapi_key.ticket = data.ticket
      jsapi_key.expire_time = new Date().getTime()
      if (data.errcode === 0) {
        res.send(wechatHelper.signJsApiKey(data.ticket))
      } else {
        throw (data.errmsg)
      }
    } catch (error) {
      console.log(error)
      res.status(500).send('授权失败')
    }
  }))

app.post('/public/wechat/pay', asyncMiddleware(async (req, res) => {
  const { openid } = req.body
  assert(openid, "no_openid")
  const data = await wechatCtrl.requestPrepay({
    body: '免费赠送IPhone X',
    out_trade_no: '453234533123',
    nonce_str: wechatHelper.createNonceStr(),
    spbill_create_ip: '192.168.1.45',  //一般可以从客户端获取用户IP,
    total_fee: '1',                    //单位为分
    openid,
    timestamp: wechatHelper.createTimeStamp()
  })
  console.log(data)
  res.send(data)
}))

app.listen(process.env.port, () =>
  console.log(`flower app listening on port ${process.env.port}!`)
);
