<template>
  <section class="payBox">
    {{res}}
  </section>
</template>

<script>
/* eslint-disable */
import { testPost } from '@/libs/api'
export default {
  data() {
    return {
      res: null
    }
  },
  mounted() {
    this.testPost()
  },
  methods: {
    // 测试调接口
    testPost() {
      var para = {
        parkNumber: 'p190719151450',
        plate: '京P32332',
        ticketCode: '',
        orderId: '',
        wxOpenId: '',
        couponTime: ''
      }
      console.log(para)
      testPost(para).then(res => {
        console.log(res)
        this.res = res
      })
    }
  }
}
</script>

<style>
</style>