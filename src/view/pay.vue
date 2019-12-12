<template>
  <section class="payBox">
    <van-nav-bar title="停车缴费" left-text="" left-arrow>
      <!-- <van-icon name="search" slot="right" /> -->
    </van-nav-bar>

    <!-- 停车缴费 -->
    <div v-show="payStatus=='noPay'">
      <div style="padding-top:20px;">
        <van-row class="payrow">
          <van-col span="24" class="fs18">
            <van-cell>车牌号 {{getChargebfDatas.plate}}</van-cell>
          </van-col>
          <van-col span="24" class="fs14">
            <van-cell>进场时间 {{getChargebfDatas.inTime}}</van-cell>
          </van-col>
        </van-row>
      </div>

      <van-row>
        <van-col span="12">
          <van-cell>停车时长</van-cell>
        </van-col>
        <van-col span="12" class="tr">
          <van-cell>{{getChargebfDatas.stopTimeTotal}}</van-cell>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="12">
          <van-cell>收费标准</van-cell>
        </van-col>
        <van-col span="12" class="tr">
          <van-cell>6元/小时</van-cell>
        </van-col>
      </van-row>
      <van-row class="payrow">
        <van-col span="12">
          <van-cell>应缴费用</van-cell>
        </van-col>
        <van-col span="12" class="tr colorff8c00">
          <van-cell>¥{{getChargebfDatas.charge}}</van-cell>
        </van-col>
      </van-row>

      <van-row>
        <van-col span="20">
          <van-cell>停车优惠券</van-cell>
        </van-col>
        <van-col span="4">
          <van-cell class="tr">
            <van-checkbox v-model="yhChecked" checked-color="#07c160"></van-checkbox>
          </van-cell>
        </van-col>
      </van-row>
      <!-- 使用抵扣金额 或是 使用抵扣时间 -->
      <van-row class="txtMonay">
        <van-col span="12">
          <van-cell>抵扣金额</van-cell>
        </van-col>
        <van-col span="12" class="tr colorff8c00" v-if="yhChecked">
          <van-cell> -¥6.0 </van-cell>
        </van-col>
        <van-col span="12" class="tr" v-else>
          <van-cell> -¥6.0 </van-cell>
        </van-col>
      </van-row>

      <van-row class="txtMonay">
        <van-col span="12">
          <van-cell>抵扣时长</van-cell>
        </van-col>
        <van-col span="12" class="tr colorff8c00" v-if="yhChecked">
          <van-cell> 1小时 </van-cell>
        </van-col>
        <van-col span="12" class="tr" v-else>
          <van-cell> 1小时 </van-cell>
        </van-col>
      </van-row>

      <van-row>
        <van-col span="20">
          <van-cell>阳光会员优惠</van-cell>
        </van-col>
        <van-col span="4">
          <van-cell class="tr">
            <van-checkbox v-model="ygChecked" checked-color="#07c160"></van-checkbox>
          </van-cell>
        </van-col>
      </van-row>
      <van-row class="txtMonay">
        <van-col span="12">
          <van-cell>抵扣金额</van-cell>
        </van-col>
        <van-col span="12" class="tr colorff8c00" v-if="ygChecked">
          <van-cell> -¥5.0 </van-cell>
        </van-col>
        <van-col span="12" class="tr" v-else>
          <van-cell> -¥5.0 </van-cell>
        </van-col>
      </van-row>

      <van-row class="payrowtop">
        <van-col span="12" class="fs18">
          <van-cell>应缴费用</van-cell>
        </van-col>
        <van-col span="12" class="tr fs18 colorff8c00">
          <van-cell>¥{{getChargebfDatas.payCharge}}</van-cell>
        </van-col>
      </van-row>

      <van-row>
        <van-col span="16" offset="4" style="padding-top:30px">
          <van-button type="info" size="large" round @click="showPayConfim">支付</van-button>
        </van-col>
      </van-row>
    </div>

    <!-- 缴费成功 -->
    <div v-show="payStatus=='success'">
      <van-row>
        <van-col span="24" style="text-align:center;padding-top:60px">
          <!-- <van-icon name="passed" size="55px" color="#09ba07" /> -->
          <img src="../assets/iconpass.png" style="width:54px;vertical-align: middle;" />
        </van-col>
        <van-col span="24" class="payOktit">
          <van-cell>
            {{getChargebfDatas.plate}} 停车缴费成功！
          </van-cell>
        </van-col>
      </van-row>

      <van-cell-group>
        <van-cell title="进场时间" :value="getChargebfDatas.inTime" />
        <van-cell title="缴费时间" :value="getChargebfDatas.getTime" />
      </van-cell-group>

      <van-row>
        <van-col span="24">
          <van-cell>请在<span class="colorff8c00">15分钟</span>离开停车场</van-cell>
        </van-col>
        <van-col span="16" offset="4" style="padding-top:30px">
          <van-button type="info" size="large" round @click="goInvoiceList">获取电子发票</van-button>
        </van-col>
      </van-row>
    </div>

    <!-- 弹出层 添加新车辆 -->
    <van-overlay :show="showOverlayPay">
      <div class="coverBox">
        <div class="coverDivAdd">
          <!-- <van-icon name="passed" size="55px" color="#09ba07" /> -->
          <h4>{{getChargebfDatas.plate}}</h4>
          <h5>¥{{getChargebfDatas.payCharge}}</h5>
          <p>已优惠：¥6.0</p>
          <van-row>
            <van-col span="12">
              <van-button type="info" size="small" style="border-radius:10px" @click="goPay">确认支付
              </van-button>
            </van-col>
            <van-col span="12">
              <van-button type="default" size="small" color="#ccc" style="border-radius:10px"
                @click="closeOverlayAddPlate"> 取消 </van-button>
            </van-col>
          </van-row>
        </div>
      </div>
    </van-overlay>

  </section>
</template>

<script>
/* eslint-disable */

import { getChargebf, sendPayRes } from '@/libs/api'
export default {
  data() {
    return {
      parkNumber: 'p190719151450',
      //是否使用优惠
      yhChecked: true,
      //是否使用阳光会员优惠
      ygChecked: false,

      showOverlayPay: false,

      getChargebfDatas: {},

      payStatus: 'noPay'
    }
  },
  mounted() {
    this.getChargebf()
  },
  methods: {
    // 请求算费
    getChargebf() {
      var para = {
        parkNumber: this.parkNumber,
        plate: '京P32332',
        ticketCode: '',
        orderId: '',
        wxOpenId: '',
        couponTime: ''
      }
      console.log(para)
      getChargebf(para).then(res => {
        console.log(res)

        // res = {
        //   datas: {
        //     profitTimeTotal: '0',
        //     charge: '25',
        //     orderId: '245',
        //     getTime: '2019-12-11 14:20:41',
        //     memo: '',
        //     plate: '京P32332',
        //     payCharge: '25',
        //     paidfreeTime: '5',
        //     inTime: '2019-12-06 16:20:00',
        //     imgName: '1912490003_20191206162000_0000000001_test_zip.jpg^1',
        //     timeStamp: '1576045241147',
        //     paidTotal: '0',
        //     outTradeNo: 'p190719151450_0_245_142042',
        //     profitChargeTotal: '0',
        //     stopTimeTotal: '7080'
        //   },
        //   status: 'success'
        // }

        this.getChargebfDatas = res.datas
      })
    },

    // 弹出支付
    showPayConfim() {
      this.showOverlayPay = true
    },

    goPay() {
      var para = {
        parkNumber: this.parkNumber,
        orderId: this.getChargebfDatas.orderId,
        plate: this.getChargebfDatas.plate,
        payCharge: this.getChargebfDatas.payCharge,
        realCharge: this.getChargebfDatas.payCharge,
        payTime: '2018-03-29 17:28:02',
        payType: '现金',
        payChannel: '提前付',
        transactionID: '1',
        getTimes: this.getChargebfDatas.getTime,
        outTradeNo: this.getChargebfDatas.outTradeNo
      }

      sendPayRes(para).then(res => {
        console.log(res)

        if (res.status == 'success') {
          this.payStatus = 'success'
          this.showOverlayPay = false
        }
      })
      console.log('去支付')
    },

    // 获取发票
    goInvoiceList() {
      this.$router.push('/invoiceList')
    },

    closeOverlayAddPlate() {
      this.showOverlayPay = false
    }
  }
}
</script>

<style>
.payBox .payOktit .van-cell__value--alone {
  padding: 20px;
  text-align: center;
  font-weight: 600;
  font-size: 17px;
}

.payBox .van-cell {
  padding-top: 5px;
  padding-bottom: 5px;
}

.payBox .txtMonay .van-cell {
  padding-left: 30px;
  padding-top: 0;
  padding-bottom: 0;
  font-size: 12px;
}

.payBox .tr .van-cell__value--alone {
  text-align: right;
}

.payBox .colorff8c00 .van-cell__value--alone {
  color: #ff8c00;
}

.payBox .payrow {
  border-bottom: 1px solid #ebebed;
}

.payBox .payrowtop {
  padding: 20px 0;
  margin-top: 10px;
  border-top: 1px solid #ebebed;
}
.payBox .fs20 .van-cell__value--alone {
  font-size: 20px;
}
.payBox .fs18 .van-cell__value--alone {
  font-size: 18px;
}
.payBox .fs18 .van-cell {
  padding-bottom: 0;
}
.payBox .fs12 .van-cell__value--alone {
  font-size: 12px;
}
.payBox .fs14 .van-cell__value--alone {
  font-size: 14px;
}

.payBox .colorff8c00 {
  color: #ff8c00;
}

.payBox .coverBox {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.payBox .coverDivAdd {
  padding: 20px;
  width: 70%;
  height: auto;
  background-color: #fff;
  border-radius: 20px;
  text-align: center;
}
.payBox .coverDivAdd h4 {
  text-align: center;
  font-size: 25px;
}
.payBox .coverDivAdd h5 {
  color: #ff8c00;
  font-size: 30px;
  padding: 10px 0;
}
.payBox .coverDivAdd p {
  font-size: 15px;
  padding: 0 0 20px 0;
}
</style>