<template>
  <section class="expenseBox">
    <van-nav-bar title="交易详情" left-text="" left-arrow>
      <!-- <van-icon name="search" slot="right" /> -->
    </van-nav-bar>

    <van-row>
      <van-col span="24" style="text-align:center;padding-top:30px">
        <!-- <van-icon name="passed" size="55px" color="#09ba07" /> -->
        <img src="../assets/iconpass.png" style="width:54px;vertical-align: middle;" />
      </van-col>
      <van-col span="24" class="tc">
        <van-cell>交易完成！</van-cell>
      </van-col>
      <van-col span="24" class="tc">
        <van-cell>2019-11-25 14:09</van-cell>
      </van-col>
    </van-row>

    <van-row>
      <van-col span="24">
        <van-cell>车牌号 浙P12345</van-cell>
      </van-col>
    </van-row>

    <van-cell-group>
      <van-cell title="停车地点" value="宁波栎社国际机场" />
      <van-cell title="进场时间" value="2019-11-25  12:15:48" />
      <van-cell title="缴费时间" value="2019-11-25  14:07:48" />
      <van-cell title="停车时长" value="1小时42分钟" />
      <van-cell title="收费标准" value="6元/小时" />
      <van-cell title="应缴费用" value="¥ 10.5元" />
      <van-cell title="使用免费停车券" value="抵扣1小时" />
      <van-cell title="实付金额" value="¥ 4.5元" />
      <van-cell title="付款方式" value="微信支付" />
      <van-cell title="订单编号" value="1808121407480166" />
    </van-cell-group>

  </section>
</template>

<script>
/* eslint-disable */

export default {

  data() {
    return {

    }
  },
  mounted() {

  },
  methods: {

  }
}
</script>

<style>
.expenseBox .tc .van-cell__value--alone {
  text-align: center;
}
.expenseBox .tc .van-cell {
  padding: 10px;
  font-size: 14px;
}

</style>