<template>
  <section>
    <van-nav-bar title="包月续费" left-text="" left-arrow>
      <!-- <van-icon name="search" slot="right" /> -->
    </van-nav-bar>

    <van-row>
      <van-col span="24">
        <van-cell-group>
          <van-field v-model="form.name" label="姓名" />
          <van-field v-model="form.phone" label="手机号*" />
          <van-field v-model="form.plate" label="车牌号*" />
          <van-field v-model="form.aaa" label="停车场/路段*" />
          <van-field v-model="form.bbb" label="月租周期*" />
          <van-field v-model="form.ccc" label="包期时长*" />
          <van-field v-model="form.ddd" label="包期金额*" />
        </van-cell-group>
      </van-col>

      <van-col span="16" offset="4" style="padding-top:30px">
        <van-button type="info" size="large" round @click="btnPay">确认续费</van-button>
      </van-col>

    </van-row>

    <van-overlay :show="showOverlay" @click="closeOverlay">
      <div class="coverBox">
        <div class="coverDiv">
          <van-icon name="passed" size="55px" color="#09ba07" />
          <h4>支付成功！</h4>
          <p>感谢您的支持！</p>
          <h5>¥500.00</h5>
        </div>
      </div>
    </van-overlay>
  </section>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '张三',
        phone: '13312345678',
        plate: '浙A12345',
        aaa: '宁波栎社国际机场',
        bbb: '2019-11-14   至   2019-12-13',
        ccc: '30天',
        ddd: '500元'
      },

      showOverlay: false

    }
  },
  mounted() {

  },
  methods: {
    btnPay() {
      this.showOverlay = true;
      // this.$dialog.alert({
      //   title: '支付成功！',
      //   message: '感谢您的支持！'
      // }).then(() => {
      //   // on close
      // });
    },

    closeOverlay() {
      this.showOverlay = false;
    }
  }
}
</script>

<style>
.coverBox {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.coverDiv {
  width: 260px;
  padding: 20px;
  height: 160px;
  background-color: #fff;
  border-radius: 20px;
  text-align: center;
  line-height: 35px;
}

.coverDiv h4 {
  font-size: 18px;
}
.coverDiv p {
  font-size: 12px;
}
.coverDiv h5 {
  font-size: 20px;
  color: #ff8c00;
}
</style>