<template>
  <section class="plateBindBox">
    <van-nav-bar title="增改车牌" left-text="" left-arrow>
      <!-- <van-icon name="search" slot="right" /> -->
    </van-nav-bar>

    <van-row class="platerow">
      <van-col span="5">
        <van-cell>账户：</van-cell>
      </van-col>
      <van-col span="18">
        <van-cell>13000000000</van-cell>
      </van-col>
    </van-row>

    <!-- <van-divider>未绑定车辆信息</van-divider> -->
    <!-- 未绑定车辆信息 -->
    <van-row>
      <van-col span="24" style="text-align:center;padding-top:30px">
        <van-icon name="info" size="115px" color="#bebdc2" />
      </van-col>
      <van-col span="24" class="tc">
        <van-cell>您还没有绑定车辆</van-cell>
      </van-col>
      <van-col span="24" class="tc">
        <van-cell>请先点击增改车牌进行绑定</van-cell>
      </van-col>
    </van-row>

    <van-row>
      <van-col span="24" class="tipsPay">
        <van-cell>浙P 81069</van-cell>
      </van-col>
    </van-row>
    <van-row class="platerow" style="border-bottom:0">
      <van-col span="7">
        <van-cell>入场时间:</van-cell>
      </van-col>
      <van-col span="17">
        <van-cell>
          <span>2019年11月10日 15时13分58秒</span>
          <span v-show="noPlate">车辆未在场内</span>
        </van-cell>
      </van-col>
    </van-row>
    <van-row class="platerow">
      <van-col span="7">
        <van-cell>停靠时间:</van-cell>
      </van-col>
      <van-col span="17">
        <van-cell>
          <span>00小时10分06秒</span>
          <span v-show="noPlate">--:--:--</span>
        </van-cell>
      </van-col>
    </van-row>

    <van-row class="platerow" style="border-bottom:0">
      <van-col span="7">
        <van-cell>应付金额:</van-cell>
      </van-col>
      <van-col span="9">
        <van-cell>3.0元</van-cell>
      </van-col>
      <van-col span="7">
        <div style="text-align:right" v-show="!noPlate">
          <van-button color="#ff8c00" plain size="small">支付</van-button>
        </div>
      </van-col>
    </van-row>

    <!-- 提示信息 -->
    <van-row>
      <van-col span="24" class="tipsTit">
        <van-cell>温馨提示 </van-cell>
      </van-col>
      <van-col span="24" class="tips">
        <van-cell>
          <van-tag round type="primary">1</van-tag> 点击增改车辆转换为付款车牌号。
        </van-cell>
      </van-col>
      <van-col span="24" class="tips">
        <van-cell>
          <van-tag round type="primary">2</van-tag> 绑定车牌后，会员可实时查询车辆入场时间和当前车费。
        </van-cell>
      </van-col>
      <van-col span="24" class="tips">
        <van-cell>
          <van-tag round type="primary">3</van-tag> 线上支付成功后，您将有15分钟时间离场，超过15分钟后将按照6元/小时另行结算停车费。
        </van-cell>
      </van-col>
    </van-row>

    <van-row>
      <van-col span="16" offset="4" style="padding-top:30px">
        <van-button icon="records" type="info" size="large" round @click="addPlate">增改车辆</van-button>
      </van-col>

      <van-col span="16" offset="4" style="padding-top:30px">
        <van-button icon="records" type="info" size="large" round @click="addPlateOk">绑定成功</van-button>
      </van-col>
    </van-row>

    <!-- <van-divider>读到绑定车辆信息</van-divider> -->
    <!-- 读到绑定车辆信息 -->
    <van-row class="platerow" v-for="i in 3" :key="i">
      <van-col span="6">
        <van-cell>对应车辆</van-cell>
      </van-col>
      <van-col span="14">
        <van-cell>京P81069</van-cell>
      </van-col>
      <van-col span="4">
        <van-cell @click="delPlate(i)">
          <img src="../assets/icondel.png" style="width:16px;height:19px;vertical-align: middle;" />
        </van-cell>
      </van-col>
    </van-row>

    <van-row>
      <van-col span="24" class="">
        <van-cell @click="addPlate(i)">
          <img src="../assets/iconadd.png" style="width:20px;height:20px;vertical-align: middle;" /> 添加新车辆
        </van-cell>
      </van-col>
    </van-row>

    <van-row style="padding:20px 0;color:#969696">
      <van-col span="24" class="tc">
        <van-cell>温馨提示：每个手机号码最多可关联三部车辆。</van-cell>
      </van-col>
    </van-row>

    <!-- 弹出层 添加新车辆 -->
    <van-overlay :show="showOverlayAddPlate">
      <div class="coverBox">
        <div class="coverDivAdd">
          <!-- <van-icon name="passed" size="55px" color="#09ba07" /> -->
          <h4>添加新车辆</h4>
          <div style="padding:15px 0">
            <van-field v-model="plate" placeholder="例：浙K 12345" />
          </div>
          <van-button type="info" size="large" style="border-radius:15px" @click="closeOverlayAddPlate">确认并返回</van-button>
        </div>
      </div>
    </van-overlay>

    <!-- 弹出层 绑定成功 -->
    <van-overlay :show="showOverlay" @click="closeOverlay">
      <div class="coverBox">
        <div class="coverDiv">
          <!-- <van-icon name="passed" size="55px" color="#09ba07" /> -->
          <img src="../assets/iconpass.png" style="width:54px;vertical-align: middle;" />
          <h4>绑定成功！</h4>
          <van-button type="default" size="small">确定</van-button>
        </div>
      </div>
    </van-overlay>
  </section>
</template>

<script>
/* eslint-disable */
import { ContactCard, ContactList, ContactEdit } from 'vant';
export default {
  components: {
    [ContactCard.name]: ContactCard,
    [ContactList.name]: ContactList,
    [ContactEdit.name]: ContactEdit,
  },
  data() {
    return {

      plate: '浙A12345',
      noPlate: false,
      showOverlay: false,
      showOverlayAddPlate: false,

    }
  },
  mounted() {

  },
  methods: {
    // 增加车辆
    addPlateOk() {
      this.showOverlay = true;
      console.log("增加车辆")
    },

    // 增加车辆
    addPlate() {
      this.showOverlayAddPlate = true;
      console.log("增加车辆")
    },

    delPlate(i) {
      console.log(i)
      this.$dialog.confirm({
        title: '标题',
        message: '确定删除车牌吗？'
      }).then(() => {
        // console.log("删除")
      }).catch(() => {
        // console.log("取消")
      });
    },

    closeOverlay() {
      this.showOverlay = false;
    },

    closeOverlayAddPlate() {
      this.showOverlayAddPlate = false;
    }
  }
}
</script>

<style>
.plateBindBox .tc .van-cell__value--alone {
  text-align: center;
}
.plateBindBox .tc .van-cell {
  padding: 10px;
  font-size: 14px;
}
.plateBindBox .tipsTit .van-cell__value--alone {
  font-size: 14px;
  color: #1989fa;
  border-left: 3px solid #1989fa;
  padding-left: 10px;
}
.plateBindBox .tipsTit .van-cell {
  padding: 10px 25px;
}

.plateBindBox .tipsPay .van-cell__value--alone {
  font-size: 14px;
  color: #333;
  border-left: 3px solid #1989fa;
  padding-left: 10px;
}
.plateBindBox .tipsPay .van-cell {
  padding: 10px 25px;
}
.plateBindBox .tips .van-cell__value--alone {
  font-size: 12px;
  color: #969696;
}
.plateBindBox .tips .van-cell {
  padding: 0 25px;
}

.platerow {
  border-bottom: 1px solid #ebebed;
  margin-left: 15px;
}

.coverBox {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.coverDiv {
  width: 260px;
  padding: 20px;
  height: 130px;
  background-color: #fff;
  border-radius: 20px;
  text-align: center;
  line-height: 35px;
}

.coverDiv h4 {
  font-size: 18px;
  padding-bottom: 5px;
}

.coverDivAdd {
  width: 90%;
  padding: 0px;
  height: 155px;
  background-color: #fff;
  border-radius: 20px;
  line-height: 25px;
}
.coverDivAdd h4 {
  border-bottom: 1px solid #ebebed;
  font-size: 17px;
  padding: 10px 15px;
}
</style>