<template>
  <section class="expenseListBox">
    <van-nav-bar title="消费记录" left-text="" left-arrow>
      <!-- <van-icon name="search" slot="right" /> -->
    </van-nav-bar>

    <!-- 根据invoiceType切换数据 -->
    <div style="padding:15px 0">
      <van-row v-for="i in 3" :key="i" class="platerow">
        <van-col span="5">
          <van-cell><img src="../assets/logo.png" style="width:90%;vertical-align: middle;" /></van-cell>
        </van-col>
        <van-col span="13">
          <van-cell>
            <p> 宁波栎社国际机场 </p>
            <p> 2019-11-25 13:35 </p>
          </van-cell>
        </van-col>
        <van-col span="6">
          <van-cell>
            <div>
              <van-button color="#3091d6" size="mini" @click="goExpensePage(i)">查看详情</van-button>
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

    goExpensePage(i) {
      this.$router.push("/expense?id=" + i)
    }
  }
}
</script>

<style>
.expenseListBox .van-cell {
  padding: 10px 5px;
}

.expenseListBox .van-button--mini {
  padding: 0 10px;
  border-radius: 10px;
}
.expenseListBox .tc {
  text-align: center;
}
.platerow {
  border-bottom: 1px solid #ebebed;
  margin-left: 15px;
}
</style>