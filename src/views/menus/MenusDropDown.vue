<template>
  <div class="dropdown11">
    <div v-if="isMove" :class="{movePrice:ismovePrice}">
      <div class="close" @click="closeList">
        <img src="@/assets/image/close_btn.png" alt="">
      </div>
      <div class="closeLogo">
        <img src="@/assets/image/logo.png" alt="">
      </div>
      <div class="payment" @click="showMenusDropDownList">
        <div>
          <!-- 上面要渲染的页面 -->
          <img :src="paymentImg[index].src">
        </div>
      </div>
      <!-- 下属的图片列表组件 -->
      <MenusDropDownList @payment='payment' v-if="isMenusDropDownList"/>
    </div>
    <div class="popped" v-if="isPopped">
    </div>
    <MenusFoodsList/>
    <div class="shopping" v-if="fullPrice==0">请选择购物车</div>
  <!-- 即将要修改的值 -->
    <div class="dropdown_1 animated" :class="[{dropdowntop:isdropdowntop},
    {blackBackground:fullPrice > 0 ? 'blackBackground' :''}]" 
    @click="popped()">{{fullPrice | currencyUSD}}</div>
  </div>
</template>

<script>
import MenusDropDownList from '@/views/menus/MenusDropDownList.vue'
import MenusFoodsList from '@/views/menus/MenusFoodsList.vue'

import {getloacalStore,setloacalStore,removelocalStore} from '@/common/until.js'
import {olderPut} from '@/api/order/index'
export default {
    name:'MenusDropDown',
    data() {
      return {
        isPopped:false,
        isdropdowntop:false,
        ismovePrice:false,
        isMove:false,
        isMenusDropDownList:false,
        //准备一个空的价格
        fullPrice:'',
        //准备一个空数组
        Array:[],
        // 初始化的图片数组
        paymentImg:[{src: require('@/assets/image/alipay.png'),payment:'alipay'},{src:require('@/assets/image/wechatpay.png'),payment:'wechat'},
        {src:require('@/assets/image/applepay_small.png'),payment:'applePay'},{src: require('@/assets/image/alipay.png')}],
        // 初始化索引值是0，第一个
        index:3
      }
    },
    mounted(){
      //在组件挂载完毕后所触发的事件
      this.$bus.$on('fullPrice',v=>{
        //将数据灌进去
        var fullPrice=0;
        v.forEach(item=>{
          fullPrice+=item.price*item.count
        })
        this.fullPrice = fullPrice
      })
      //当页面挂载完成时候,将用户的支付方式存储在本地浏览器中
      setloacalStore('payment','')
    },
    methods: {
      payment(v){
        this.index=v
      },
      //点击的时候弹出菜单提示框
      popped(){
        //触发修改样式的函数将高度修改
        if(this.fullPrice==0){
          this.$bus.$emit('closeStyle')
        }else{
          this.$bus.$emit('changeStyle')
        }

        this.isPopped=true
        this.isdropdowntop=true
        this.ismovePrice=true
        this.isMove=true
        //检查用户是否下单可以点击产生动画
        if(this.fullPrice==0){
          //如果用户什么都没买将所有的动画效果取消
            this.isPopped=false;
            this.isdropdowntop=false
            this.ismovePrice=false
            this.isMove=false
            //将列表清除发送给兄弟组件
        }
        //点击在本地浏览器中存储一份支付方式
        setloacalStore('payment',this.paymentImg[this.index].payment)

        if(getloacalStore('token')){
          //如果有token值则发送用户put请求
          //发送order请求
           var payment=this.paymentImg[this.index].payment
           var restaurantId = getloacalStore('restaurant')._id
           var cart = getloacalStore('cars')
           var userId= getloacalStore('users')._id
          //在左侧动画出来之后发请求
          //根据用户的用哪种支付去发请求
          olderPut(payment,cart,userId,restaurantId).then(res=>{
            if(confirm('确定要支付吗?')){
              //告诉用户支付成功
              alert('支付成功');
              //再次存入用户登录信息
              setloacalStore('payment',payment)
              //跳转到历史订单页面
              this.$router.push('/order')
              //将用户id存入本地浏览器中
              setloacalStore('userId',userId);
            }else{
              //如果用户取消了
              alert('支付失败')
            }
          }).catch(err=>{
            // 在请求发成功时执行异步操作
            if(err.response.data.code=='auth-failed'){
              //提示用户重复登录的信息
              alert('用户过期,请重新登录!');
              // 跳转到登录页面
              this.$router.push('/login');
              //同时清理用户的user信息
              removelocalStore('users');
            }
            }).finally(()=>{
          })
        }else{
          alert('请登录!')
          this.$router.push('/login')
          removelocalStore('users');
        }
      },
      //判断图片是否显示与隐藏
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
        //当点击清除按钮,
      }
    },
    components:{
      MenusDropDownList,
      MenusFoodsList,
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
  height: 746px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0px 0px 10px rgb(150, 150, 150);
  top: 210px;
  right: 305px;
  z-index: -1;
}
.popped{
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

.blackBackground{
  background-color: black !important;
  color: white;
}
.dropdown11{
  background-color: rgb(255, 255, 255);
  cursor: pointer;
  right: 305px;
  bottom: 45px;
  position: fixed;
  width: 400px;
  max-height: 750px;
  overflow-x: hidden;
  overflow-y: auto;
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
    line-height: 50px;
    text-align: center;
    font-size: 20px;
    background-color:rgb(189, 189, 189);
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
    background-color: rgb(55, 145, 55);
    animation-name: anim1;
}
</style>