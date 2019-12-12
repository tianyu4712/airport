<template>
  <section class="invoiceListBox">
    <van-nav-bar title="电子发票" left-text="" left-arrow>
      <!-- <van-icon name="search" slot="right" /> -->
    </van-nav-bar>

    <van-tabs @click="onClick" color="#3091d6" title-active-color="#3091d6">
      <van-tab title="待开票"> </van-tab>
      <van-tab title="已开票"> </van-tab>
    </van-tabs>

    <!-- 根据invoiceType切换数据 -->
    <div style="padding:15px 0">
      <van-row v-for="i in 3" :key="i" class="platerow">
        <van-col span="6">
          <van-cell><img src="../assets/logo.png" style="width:90%;vertical-align: middle;" /></van-cell>
        </van-col>
        <van-col span="12">
          <van-cell>
            <p> 宁波栎社国际机场 </p>
            <p> 2019-11-25 13:35 </p>
          </van-cell>
        </van-col>
        <van-col span="6">
          <van-cell>
            <div>
              <van-button color="#3091d6" size="mini" v-show="invoiceType=='0'" @click="goInvoicePage">点击开票</van-button>
              <van-button color="#bebdc2" size="mini" v-show="invoiceType=='1'">点击开票</van-button>
            </div>
            <div class="tc">3.0元 </div>
          </van-cell>
        </van-col>
      </van-row>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      invoiceType: 0
    }
  },
  mounted() {

  },
  methods: {
    onClick(name, title) {
      console.log(name)
      this.invoiceType = name
      // 根据invoiceType切换数据
    },
    goInvoicePage() {
      this.$router.push("/invoice")
    }
  }
}
</script>

<style>
.invoiceListBox .van-cell {
  padding: 10px 5px;
}

.invoiceListBox .van-button--mini {
  padding: 0 10px;
  border-radius: 10px;
}
.invoiceListBox .tc {
  text-align: center;
}
.platerow {
  border-bottom: 1px solid #ebebed;
  margin-left: 15px;
}
</style>