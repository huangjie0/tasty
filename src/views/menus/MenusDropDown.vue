<template>
  <div class="dropdown">
    <div v-if="isMove" :class="{movePrice:ismovePrice}">
      <div class="close" @click="closeList">
        <img src="@/assets/close_btn.png" alt="">
      </div>
      <div class="closeLogo">
        <img src="@/assets/logo.png" alt="">
      </div>
      <div class="payment" @click="showMenusDropDownList">
        <div>
          <img src="@/assets/alipay.png">
        </div>
      </div>
      <MenusDropDownList v-if="isMenusDropDownList"/>
    </div>
    <div class="popped" v-if="isPopped">
      <!-- 用户点了餐的列表 -->
      <div class="foodList"> 
        <div class="foodList_1">香菇肉末米线 不辣</div>
        <div class="foodList_2">
          <div class="foodListPrice">
            ￥20.00
          </div>
          <div class="foodListPrice_1">
            <div>-</div>
            <div>1</div>
            <div>+</div>
          </div>
        </div>
      </div>
    </div>

    <MenusFoodsList/>
    <div class="shopping">请选择购物车</div>
  
    <div class="dropdown_1 animated bounce" :class="{dropdowntop:isdropdowntop}" @click="popped()">$0.00</div>
  </div>
</template>

<script>
import MenusDropDownList from '@/views/menus/MenusDropDownList.vue'
import MenusFoodsList from '@/views/menus/MenusFoodsList.vue'
import {getloacalStore} from '@/common/until.js'
export default {
    name:'MenusDropDown',
    data() {
      return {
        isPopped:false,
        isdropdowntop:false,
        ismovePrice:false,
        isMove:false,
        isMenusDropDownList:false,
        // 初始化的图片数组
        // paymentImg:['@/assets/alipay.png','@/assets/wechatpay.png','@/assets/applepay_small.png'],
        //初始化索引值是0，第一个
        // index:0
      }
    },
    methods: {
      //点击的时候弹出菜单提示框
      popped(){
        this.isPopped=true
        this.isdropdowntop=true
        this.ismovePrice=true
        this.isMove=true
        //检查用户是否登录进行判断，如果有就可以跳转到订单页面
        if(getloacalStore('token')){
          setTimeout(()=>{
            // this.$router.push('/order')
          },4000)
        }else{
          alert('请登录!')
          this.$router.push('/login')
        }
      },
      showMenusDropDownList(){
        if(this.isMenusDropDownList){
          this.isMenusDropDownList=false
        }else{
           this.isMenusDropDownList=true
        }
      },
      closeList(){
        this.isPopped=false
        this.isMove=false
      }
    },
    components:{
      MenusDropDownList,
      MenusFoodsList
    }
}
</script>

<style lang='less' scoped>
@keyframes movePrice{
  0%{
    transform: translate(0px);
  }
  100%{
    transform: translate(-400px);
  }
}
.movePrice{
  animation-fill-mode: forwards;
  animation-name: movePrice;
  animation-duration: 0.5s;
  position: fixed;
  width: 400px;
  height: 670px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0px 0px 10px rgb(150, 150, 150);
  top: 210px;
  right: 305px;
}
.popped{
  height:670px;
  width: 400px;
  border-bottom:2px solid  rgb(190, 190, 190);
  .foodList{
    width: 400px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .foodList_1{
      width: 170px;
      height: 50px;
      text-align: center;
      line-height: 50px;
      font-size: 18px;
    }
    .foodList_2{
      width: 210px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      font-size: 18px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .foodListPrice_1{
        width: 120px;
        height: 40px;
        background-color: rgb(0, 0, 0);
        border-radius: 20px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: 18px;
        color: white;
      }
      .foodListPrice{
        width: 90px;
        height: 50px;
        font-size: 18px;
        text-align: center;
        align-items: center;
      }
    }
  }
}
.shopping{
  font-size: 20px;
  color: rgb(150, 150, 150);
}
.dropdowntop{
  top:210px;
}
.dropdown{
  background-color: rgb(255, 255, 255);
  cursor: pointer;
  right: 305px;
  bottom: 45px;
  position: fixed;
  width: 400px;
  min-height: 120px;
  max-height: 745px;
  overflow: auto;
  box-shadow: 0px 0px 10px rgb(150, 150, 150);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  .payment{
    width: 300px;
    height: 50px;
    border-radius: 30px;
    border:2px solid rgb(150, 150, 150);
    position: absolute;
    top: 250px;
    left: 66px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .closeLogo{
    width: 50px;
    height: 50px;
    position: absolute;
    top: 0px;
    left: 85px;
  }
  .close{
    width: 60px;
    height: 60px;
    position: absolute;
    top: 0px;
    left: 0px;
    img{
      width: 60px;
      height: 60px;
    }
  }
  .dropdown_1{
    width: 350px;
    height: 50px;
    border-radius: 30px;
    background-color: rgb(189, 189, 189);
    line-height: 50px;
    text-align: center;
    font-size: 20px;
    color: white;
  }
}
@keyframes anim1{
  0% {
     background-color: rgb(189, 189, 189);
  }
  100% {
    background-color: rgb(55, 145, 55);
  }
}
.dropdown_1:hover{
  animation-name: anim1;
  background-color: rgb(55, 145, 55);
}
</style>