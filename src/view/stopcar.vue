<template>
  <section class="stopcarBox">
    <van-nav-bar title="错时停车" left-text="" left-arrow>
      <!-- <van-icon name="search" slot="right" /> -->
    </van-nav-bar>

    <van-row class="platerow">
      <van-col span="24">
        <van-cell><span class="colorff8c00">9:00—18:00</span> 以下停车场可错时停车:</van-cell>
      </van-col>
    </van-row>

    <div style="padding:15px 0">
      <van-row v-for="i in 3" :key="i" class="platerow">
        <van-col span="4">
          <van-cell><img src="../assets/logo.png" style="width:90%;vertical-align: middle;" /></van-cell>
        </van-col>
        <van-col span="12">
          <van-cell>
            <p> 宁波栎社国际机场 </p>
            <p class="tl"> 浙江省宁波市鄞州区航空路 </p>
            <p class="tl"> 可预约时间:<span class="colorff8c00">14:00:00-17:00:00</span> </p>
          </van-cell>
        </van-col>
        <van-col span="8">
          <van-cell>
            <div class="tc">
              <p class="tl">空车位：<span class="colorff8c00">451</span>/1318</p>
              <p class="tl">收费：<span class="colorff8c00">¥6</span>/小时</p>
              <van-button color="#3091d6" size="mini" @click="reserve">预定</van-button>
            </div>
          </van-cell>
        </van-col>
      </van-row>
    </div>

    <van-overlay :show="showOverlay" @click="closeOverlay">
      <div class="coverBox">
        <div class="coverDiv">
          <van-icon name="passed" size="55px" color="#09ba07" />
          <h4>预定成功！</h4>
          <p class="stopcar" style="border-left:3px solid #3091d6;">浙A12345</p>
          <p class="stopcar">已预约停车场：宁波栎社国际机场</p>
          <p class="stopcar">已预约时间：2019-11-25 15:30:00</p>
        </div>
      </div>
    </van-overlay>
  </section>
</template>

<script>
export default {
  data() {
    return {
      showOverlay: false
    }
  },
  mounted() {

  },
  methods: {
    reserve() {
      this.showOverlay = true;
    },

    closeOverlay() {
      this.showOverlay = false;
    }
  }
}
</script>

<style>
.stopcarBox .van-cell {
  padding: 10px 0px;
}

.stopcarBox .van-button--mini {
  padding: 0 10px;
  border-radius: 10px;
}
.stopcarBox .tc {
  font-size: 12px;
  text-align: center;
}
.stopcarBox .tl {
  font-size: 12px;
  text-align: left;
}
.stopcarBox .tr {
  text-align: right;
}
.platerow {
  border-bottom: 1px solid #ebebed;
  margin-left: 15px;
}
.colorff8c00 {
  color: #ff8c00;
}

.coverDiv p.stopcar {
  font-size: 14px;
  border-left: 3px solid #fff;
  padding-left: 5px;
  color: #333;
}
</style>