<template>
  <div>
    <!-- 下属的图片列表 -->
    <div class="paymentList">
        <div class="paymentList_1" @click="payment_1">
            <div>
              <img src="@/assets/image/alipay.png" alt="">
            </div>
        </div>
        <div class="paymentList_2" @click="payment_2">
            <div>
              <img src="@/assets/image/wechatpay.png" alt="">
            </div>
        </div>
        <div class="paymentList_3" @click="payment_3">
            <div>
              <img src="@/assets/image/applepay_small.png" alt="">
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'MenusDropDownList',
    methods:{
      payment_1(){
        this.$emit('payment',0)
      },
      payment_2(){
        //子传父
        this.$emit('payment',1)
      },
      payment_3(){
        this.$emit('payment',2)
      }
    }

}
</script>

<style scoped lang='less'>
  .paymentList{
    width: 320px;
    height: 200px;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    top: 310px;
    left: 55px;
    border: 2px solid rgb(189, 189, 189);
    border-radius: 10px;
    .paymentList_1,.paymentList_2,.paymentList_3{
      width: 320px;
      height: 45px;
      border-radius: 30px;
      border: 2px solid  rgb(189, 189, 189);
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>