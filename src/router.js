import Vue from "vue";
import Router from "vue-router";

import wx from "weixin-js-sdk";

Vue.use(Router);

const routes = [
  {
    path: "*",
    redirect: "/test"
  },
  {
    name: "test",
    component: () => import("./view/test"),
    meta: { title: "test" }
  },
  {
    name: "testpost",
    component: () => import("./view/testpost"),
    meta: { title: "接口测试" }
  },
  {
    name: "coupon",
    component: () => import("./view/coupon"),
    meta: { title: "优惠券" }
  },
  {
    name: "renew",
    component: () => import("./view/renew"),
    meta: { title: "包月续费" }
  },
  {
    name: "platebind",
    component: () => import("./view/platebind"),
    meta: { title: "车牌绑定" }
  },
  {
    name: "invoiceList",
    component: () => import("./view/invoiceList"),
    meta: { title: "发票" }
  },
  {
    name: "invoice",
    component: () => import("./view/invoice"),
    meta: { title: "开发票" }
  },
  {
    name: "stopcar",
    component: () => import("./view/stopcar"),
    meta: { title: "错时停车" }
  },
  {
    name: "expenseList",
    component: () => import("./view/expenseList"),
    meta: { title: "消费记录" }
  },
  {
    name: "expense",
    component: () => import("./view/expense"),
    meta: { title: "消费详情" }
  },
  {
    name: "pay",
    component: () => import("./view/pay"),
    meta: { title: "停车缴费" }
  }
];

// add route path
routes.forEach(route => {
  route.path = route.path || "/" + (route.name || "");
});

const router = new Router({
  mode: "history",
  routes
});


router.beforeEach((to, from, next) => {
  //设置title
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
  }

  // 微信相关
  // https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html#2
  // 同一个url仅需调用一次，对于变化url的SPA的web app可在每次url变化时进行调用
  console.log(wx)
  // wx.config({
  //   debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
  //   appId: "wx1ed628ada097224a", // 必填，公众号的唯一标识
  //   timestamp: "", // 必填，生成签名的时间戳
  //   nonceStr: "", // 必填，生成签名的随机串
  //   signature: "", // 必填，签名
  //   jsApiList: ['chooseImage'] // 必填，需要使用的JS接口列表
  // });

  // wx.ready(function(){
  //   console.log("wx.ready")
  //   // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
  // });

  // wx.checkJsApi({
  //   jsApiList: ['chooseImage'], // 需要检测的JS接口列表，所有JS接口列表见附录2,
  //   success: function(res) {
  //     console.log(res)
  //   // 以键值对的形式返回，可用的api值true，不可用为false
  //   // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
  //   }
  // });

  //蓝卡心跳接口

  next();
});

export { router };
