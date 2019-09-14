import axios from 'axios';
import { getParamValue } from './helper';

export let user;

export async function configure() {
    const config = (await axios.get('/public/wechat/jsapi')).data
    window.wx.config({
        debug: process.env.NODE_ENV === 'development', // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: config.appId,
        timestamp: config.timestamp, // 必填，生成签名的时间戳
        nonceStr: config.nonceStr, // 必填，生成签名的随机串
        signature: config.signature,// 必填，签名，见附录1
        jsApiList: ['checkJsApi', 'chooseWXPay'] // 必填，需要使用的JS接口列表
    });

    window.wx.ready(function () {
        console.log("微信JS SDK配置成功！");
    });
    window.wx.error(function (res) {
        console.log("微信JS SDK配置错误！", res);
    });
}

export async function pay(order) {
    try {
        if (user && user.openid) {
            let cip = '27.19.181.89'
            try {
                cip = (await axios.get('http://pv.sohu.com/cityjson?ie=utf-8')).data.cip
            } catch (error) {

            }
            order.openid = user.openid
            order.spbill_create_ip = cip
            order.clientNickname = user.nickname
            order.headimgurl = user.headimgurl
            const config = (await axios.post('/public/wechat/pay', { order })).data
            window.wx.chooseWXPay({
                timestamp: config.timeStamp,
                nonceStr: config.nonceStr,
                package: config.package,
                signType: 'MD5',
                paySign: config.paySign,
                success: function (res) {
                    localStorage.removeItem("cart");
                    alert('订单支付成功，我们会尽快给您发货，有任何问题请随时联系，多谢！')
                    setTimeout(() => {
                        window.location.reload()
                    }, 3000);
                },
                // 支付失败回调函数
                fail: function (res) {
                    alert(`支付失败:${JSON.stringify(res)}`)
                }
            })
        } else {
            getUserInfo()
        }
    } catch (error) {
        console.log(error)
        alert("非常抱歉！生成订单失败，请重新扫描二维码尝试购买或联系管理员")
    }

}

export async function getUserInfo() {
    var code = getParamValue('code')
    if (code) {
        window.sessionStorage.setItem('code', code)
        window.location.href = '/'
        return
    }
    code = window.sessionStorage.getItem('code')
    try {
        if (!code) {
            throw (new Error('no code'))
        }
        user = (await axios.get('/public/wechat/auth', { params: { code } })).data
    } catch (error) {
        window.location.href = process.env.REACT_APP_REDIRECT_WECHAT
    }
}