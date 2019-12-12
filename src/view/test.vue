<template>
  <section>
    <div class="home">
      <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
      <HelloWorld msg="Welcome App Route List" />
      <!-- {{routesTTTT}} -->
      <van-col span="24" v-for="item in routesTTTT" :key="item.name">
        <!-- <van-cell>{{item.name}}</van-cell> -->
        <van-cell :title="item.meta.title" icon="location-o" @click="changeRoute(item.name)" />
      </van-col>
    </div>
  </section>
</template>

<script>
/* eslint-disable */
import wx from 'weixin-js-sdk'
import axios from 'axios'
import { getJsSDK, testPost } from '@/libs/api'
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
// https://www.jianshu.com/p/e1e11e1f6dec
export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data() {
    return {
      locationUrl: '',
      routesTTTT: [
        {
          name: 'test',
          meta: { title: 'test' }
        },
        {
          name: 'testpost',
          meta: { title: '接口测试' }
        },
        {
          name: 'coupon',
          meta: { title: '优惠券' }
        },
        {
          name: 'renew',
          meta: { title: '包月续费' }
        },
        {
          name: 'platebind',
          meta: { title: '车牌绑定' }
        },
        {
          name: 'invoiceList',
          meta: { title: '发票' }
        },
        {
          name: 'invoice',
          meta: { title: '开发票' }
        },
        {
          name: 'stopcar',
          meta: { title: '错时停车' }
        },
        {
          name: 'expenseList',
          meta: { title: '消费记录' }
        },
        {
          name: 'expense',
          meta: { title: '消费详情' }
        },
        {
          name: 'pay',
          meta: { title: '停车缴费' }
        }
      ]
    }
  },
  mounted() {
    console.log(wx)
    this.locationUrl = location.href
    console.log(this.locationUrl)
    // this.getWxToken()
    // this.applyForOpenid("aaaaaa")
    // this.getJsSDK()

    wx.config({
      debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
      appId: 'wxb5b1b7fe6fcab9d1', // 必填，公众号的唯一标识
      timestamp: '', // 必填，生成签名的时间戳
      nonceStr: '', // 必填，生成签名的随机串
      signature: '', // 必填，签名
      jsApiList: ['chooseImage'] // 必填，需要使用的JS接口列表
    })

    wx.checkJsApi({
      jsApiList: ['chooseImage'], // 需要检测的JS接口列表，所有JS接口列表见附录2,
      success: function(res) {
        console.log(res)
        // 以键值对的形式返回，可用的api值true，不可用为false
        // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
      }
    })
  },
  methods: {
    changeRoute(route) {
      this.$router.push(route)
    },

    getWxToken() {
      // https://developers.weixin.qq.com/doc/offiaccount/Basic_Information/Get_access_token.html
      // https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=APPID&secret=APPSECRET

      console.log(axios)
      axios
        .get('https://api.weixin.qq.com/cgi-bin/token', {
          params: {
            grant_type: 'client_credential',
            appid: 'wx1ed628ada097224a',
            secret: '1ea76b9ea99d2cea0c85e92af125b8cf'
          }
        })
        .then(function(response) {
          console.log(response)
        })
        .catch(function(error) {
          console.log(error)
        })
    },

    getJsSDK() {
      // 这些东西，除了jsApiList，我们都需要从后端获取，那我们就向后台发起一个请求，然后后台封装一下返回给前端是不是就好了，很简单吧。
      // appId简单，直接从微信后台拿来用就行。
      // timestamp，后台直接生成就行，但要注意要以秒为单位。
      // nonceStr，java后台随便使用个uuid就可以了。
      // signature，这个有点东西啊，但也别急，微信有文档，我们慢慢看。
      var para = {}

      getJsSDK(para).then(res => {
        console.log(res)
        if (res.msg == 'ok') {
          wx.config({
            debug: true,
            appId: '你的appId',
            timestamp: data.timestamp,
            nonceStr: data.nonceStr,
            signature: data.signature,
            jsApiList: [
              'onMenuShareTimeline', // 分享到朋友圈
              'onMenuShareAppMessage', // 分享给朋友
              'onMenuShareQQ', // 分享到QQ
              'onMenuShareWeibo', // 分享到腾讯微博
              'onMenuShareQZone' // 分享到QQ空间
            ]
          })
        }
      })
    },

    applyForOpenid(params) {
      var redirectUri = 'http://www.bjzsis.com/invoicelist'
      window.location.href =
        'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx1ed628ada097224a&redirect_uri=' +
        redirectUri +
        '&response_type=code&scope=snsapi_base&state=' +
        params +
        '#wechat_redirect'
    }
  }
}
</script>
