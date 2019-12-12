<template>
  <section class="couponBox">
    <van-nav-bar title="优惠券" left-text="" left-arrow>
      <!-- <van-icon name="search" slot="right" /> -->
    </van-nav-bar>

    <!-- 根据invoiceType切换数据 -->
    <div style="padding:15px 0">
      <van-row v-for="i in 3" :key="i" class="platerow">
        <!-- {{i}} -->
        <van-col span="5">
          <van-cell>
            <img src="../assets/logo.png" style="width:90%;vertical-align: middle;" />
          </van-cell>
        </van-col>
        <van-col span="12">
          <van-cell>
            <p> 宁波栎社国际机场 </p>
            <p style="font-size:13px;"> 1小时停车券/6元抵扣券 </p>
          </van-cell>
        </van-col>
        <van-col span="7">
          <van-cell>
            <div>
              <span class="btnUse" @click="useCoupon(i)" v-if="i=='1'">去使用</span>
              <span class="btnUse dis" v-else>已失效</span>
              <!-- <van-button plain color="" size="mini" @click="goExpensePage(i)">去使用</van-button> -->
            </div>
          </van-cell>
        </van-col>
        <van-col span="24">
          <van-cell style="font-size:13px;">有效期：2018年4月5日 —— 2019年4月6日</van-cell>
        </van-col>

      </van-row>

    </div>

    <van-row>
      <van-col span="24">
        <img src="../assets/adcoupon.png" style="width:100%;vertical-align: middle;" />
      </van-col>
    </van-row>
  </section>
</template>

<script>
export default {
  data() {
    return {
      invoiceType: 0
    }
  },
  mounted() {},
  methods: {
    // 使用优惠券
    useCoupon(i) {
      console.log('使用优惠券' + i)
    }
  }
}
</script>

<style>
.couponBox .van-cell {
  padding: 10px 5px;
  background: none;
}
.couponBox .van-cell__value--alone {
  color: #fff;
}

.couponBox .btnUse {
  width: 65px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  display: inline-block;
  border: 1px solid #fff;
  border-radius: 5px;
  padding: 3px;
}

.couponBox .btnUse.dis {
  border: 1px solid #ccc;
  color: #ccc;
}

.couponBox .van-button--mini {
  padding: 0 10px;
  border-radius: 10px;
}
.couponBox .tc {
  text-align: center;
}
.couponBox .platerow {
  background: url(../assets/bgcoupon.png) no-repeat;
  background-size: 100% 100%;
  height: 138px;
  width: 330px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
}
</style>