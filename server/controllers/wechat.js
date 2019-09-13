var crypto = require('crypto');
var axios = require("axios");

var helper = require('../utils/wechat.helper')

// 配置相关变量
const APPID = process.env.wechat_app_id          //你的微信应用APPID
const MCH_ID = process.env.wechat_mch_id         //你的商户ID
const KEY = process.env.wechat_pay_key            //设置的密钥key 
const NOTIFY_URL = `${process.env.server}/wechat/notify_url`

var prepaySign = function (order) {
    var ret = {
        appid: APPID,
        body: order.body,
        mch_id: MCH_ID,
        nonce_str: order.nonce_str,
        notify_url: NOTIFY_URL,
        out_trade_no: order.out_trade_no,
        spbill_create_ip: order.spbill_create_ip,
        total_fee: order.total_fee,
        openid: order.openid,
        trade_type: 'JSAPI'
    };
    var string = helper.raw(ret);
    string = string + '&key=' + KEY;
    var crypto = require('crypto');
    var sign = crypto.createHash('md5').update(string, 'utf8').digest('hex');
    return sign.toUpperCase();
}

var sign = function (param) {
    var string = helper.raw(param);
    string = string + '&key=' + KEY;
    var sign = crypto.createHash('md5').update(string, 'utf8').digest('hex');
    return sign.toUpperCase();
}

/**
 * 访问微信，根据订单信息，获取prepay并且生成最后的支付订单内容
 * @param {object} order 
 */
var requestPrepay = async function (order) {
    var url = "https://api.mch.weixin.qq.com/pay/unifiedorder";
    var formData = "<xml>";
    formData += "<appid>" + APPID + "</appid>"; //appid  
    formData += "<body>" + order.body + "</body>";
    formData += "<mch_id>" + MCH_ID + "</mch_id>"; //商户号  
    formData += "<nonce_str>" + order.nonce_str + "</nonce_str>"; //随机字符串，不长于32位。  
    formData += "<notify_url>" + NOTIFY_URL + "</notify_url>";
    formData += "<openid>" + order.openid + "</openid>";
    formData += "<out_trade_no>" + order.out_trade_no + "</out_trade_no>";
    formData += "<spbill_create_ip>" + order.spbill_create_ip + "</spbill_create_ip>";
    formData += "<total_fee>" + order.total_fee + "</total_fee>";
    formData += "<trade_type>JSAPI</trade_type>";
    formData += "<sign>" + prepaySign(order) + "</sign>";
    formData += "</xml>";
    const body = (await axios({
        url,
        method: 'POST',
        data: formData
    })).data
    const XML_RETURN = await helper.getXMLNodeValue(body.toString("utf-8"))
    var code = XML_RETURN.result_code[0];
    var msg = XML_RETURN.return_msg[0];
    if (code != 'SUCCESS' || msg != 'OK') {
        console.log(XML_RETURN)
        throw (new Error(`支付失败 ${XML_RETURN.err_code_des[0]}`))
    }

    var prepay_id = XML_RETURN.prepay_id[0];

    //签名
    var args = {
        appId: APPID,
        timeStamp: order.timestamp,
        nonceStr: order.nonce_str,
        package: `prepay_id=${prepay_id}`,
        signType: 'MD5'
    }
    args.paySign = sign(args)
    return args
}

module.exports = {
    requestPrepay
}