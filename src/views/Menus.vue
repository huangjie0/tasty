<template>
  <div class="menus">
    <div class="menus_1">
      <!-- 菜单首页部分 -->
      <div class="menus_title">
        <div class="restaurant_1">
          <div class="restaurant_1_title">{{restaurantTitle}}</div>
          <div class="restaurant_2_title">{{varieties}}</div>
        </div>
      </div>
      <div class="foodMenus">
        <div class="foodMenusLeft">
          <div class="foodMenusLeft_left">
            <div>111</div>
            <div>2222</div>
            <div>2222</div>
            <div>2222</div>
          </div>
          <div class="foodMenusLeft_right">
            <div>33333</div>
            <div>333</div>
            <div>333</div>
            <div>333</div>
          </div>
        </div>
        <div class="foodMenusRight">
          <MenusDropDown/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//导入发请求模块
import menusget from '@/api/menus/index.js'
import {getloacalStore} from '@/common/until.js'
import MenusDropDown from '@/views/menus/MenusDropDown.vue'

export default {
    name:"Menus",
    data() {
      return {
        //页面数据
        restaurantTitle:'',
        varieties:''
      }
    },
     components:{
        MenusDropDown
    },
    created(){
      //从本地浏览器里面取数据
      const restaurant= getloacalStore('restaurant');
      //将数据灌进去
      this.restaurantTitle = restaurant.name['zh-CN']
       //将数据灌进去
      this.varieties = restaurant.tags[0]
      //获取餐馆的id值
      const {id} = this.$route.params
      //根据所传来的id进行发请求进行渲染页面
      menusget(id).then(res=>{
        console.log('res: ', res);
      })
    }
}
</script>
<style lang='less' scoped>
.foodMenus{
  width: 100%;
  height: 1000px;
  position: absolute;
  top: 50px;
  display: flex;
  justify-content: space-between;
  .foodMenusLeft{
    background-color: cadetblue;
    top: 150px;
    position: absolute;
    width: 70%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    .foodMenusLeft_left{
      width: 50%;
      height: 100%;
      background-color: blueviolet
    };
    .foodMenusLeft_right{
      width: 50%;
      height: 100%;
      background-color: brown;
    }
  }
}
.menus{
  position: relative;
  top: 100px;
  .menus_1{
    position: absolute;
    min-height: 608px;
    display: flex;
    align-items: center;
    position: relative;
    .menus_title{
      position: absolute;
      top: 80px;
      width: 100%;
      height: 100px;
      .restaurant_1{
        width: 40%;
        height: 100px;
        .restaurant_1_title{
          font-size: 35px;
          font-weight: 600;
        };
        .restaurant_2_title{
          font-size: 20px;
          color: rgb(153, 153, 153);
        }
      }
    }
  }
}
</style>