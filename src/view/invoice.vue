<template>
  <section class="invoiceBox">
    <van-nav-bar title="电子发票" left-text="" left-arrow>
      <!-- <van-icon name="search" slot="right" /> -->
    </van-nav-bar>

    <van-row class="platerow" style="border-bottom:0">
      <!-- <van-col span="7">
        <van-cell>开票类型:</van-cell>
      </van-col> -->
      <van-col span="24">
        <van-dropdown-menu>
          <van-dropdown-item v-model="invoiceCode" :options="invoiceType" />
        </van-dropdown-menu>
      </van-col>
    </van-row>
    <van-row>
      <van-col span="24">
        <van-cell-group v-show="invoiceCode=='1'">
          <!-- 开票类型： -->
          <van-field v-model="form.name" label="抬头：" placeholder="请填写抬头" />
          <van-field v-model="form.phone" label="邮箱：" placeholder="请填写邮箱" />
          <van-field v-model="form.plate" label="纳税识别号：" placeholder="请填写纳税人识别号" />
          <van-field v-model="form.aaa" label="单位电话：" placeholder="请填写单位电话" />
          <van-field v-model="form.bbb" label="开户行：" placeholder="请填写开户行" />
          <van-field v-model="form.ccc" label="开户账号：" placeholder="请填写开户账号" />
          <van-field v-model="form.ddd" label="地址：" placeholder="请填写地址" />
        </van-cell-group>
        <van-cell-group v-show="invoiceCode=='2'">
          <!-- 开票类型： -->
          <van-field v-model="form.name" label="抬头：" placeholder="请填写抬头" />
          <van-field v-model="form.phone" label="邮箱：" placeholder="请填写邮箱" />
          <van-field v-model="form.aaa" label="电话：" placeholder="请填写单位电话" />
        </van-cell-group>
      </van-col>

      <van-col span="16" offset="4" style="padding-top:30px">
        <van-button type="info" size="large" round @click="btnPay">确认开票</van-button>
      </van-col>

    </van-row>

    <van-overlay :show="showOverlay" @click="closeOverlay">
      <div class="coverBox">
        <div class="coverDiv">
          <van-icon name="passed" size="55px" color="#09ba07" />
          <h4>开票成功！</h4>
          <p>您可以通过以下途径获取电子发票：</p>
          <p>1、发送至您的个人邮箱。</p>
          <p>2、关注公众号，及时获取开票信息。</p>
          <p>3、查看微信卡包。</p>
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
        name: '',
        phone: '',
        plate: '',
        aaa: '',
        bbb: '',
        ccc: '',
        ddd: ''
      },
      invoiceCode: 1,
      invoiceType: [
        { text: '开票类型：单位', value: 1 },
        { text: '开票类型：个人', value: 2 }
      ],
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
  height: auto;
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
  text-align: left;
  color: #969696;
  padding-left: 30px;
  line-height: 1.5;
}
</style>