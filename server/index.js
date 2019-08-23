var express = require("express");
var app = express();
var bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
require("dotenv").config();
var cors = require("cors");

const catgCtrl = require("./controllers/categories");
const prodCtrl = require("./controllers/products");

app.use(cors());
app.use(bodyParser.json());
// 解析 application/x-www-form-urlencoded
app.use(bodyParser.urlencoded());

// app.use((req, res, next) => {
//     if (req.url.match(/\/admin/)) {
//         try {
//             const decoded = jwt.verify(req.headers['authorization'], process.env.secret);
//             req.state = decoded;
//             return next();
//         } catch (err) {
//             console.log('err')
//             res.status(403).send('您没有权限，请登录')
//         }
//     } else {
//         return next()
//     }

// })

const asyncMiddleware = fn => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

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
  "/admin/products/:id",
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

app.listen(process.env.port, () =>
  console.log(`flower app listening on port ${process.env.port}!`)
);
