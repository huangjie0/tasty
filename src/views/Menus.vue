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
            <!-- 每一个菜单列表页 -->
            <div class="foodMenusLeft_list">
              <div class="smallTitle">
                <div class="smallTitle_1">小料</div>
                <div class="smallTitle_2"></div>
              </div>
            </div>
            <!-- ------------------------------------------------------- -->
            <div class="foodMenusLeft_list">
              <div class="smallTitle">
                <div class="smallTitle_1">小料</div>
                <div class="smallTitle_2"></div>
              </div>
            </div>
            <!-- ------------------------------------------------------------------- -->
              <div class="foodMenusLeft_list">
              <div class="smallTitle">
                <div class="smallTitle_1">小料</div>
                <div class="smallTitle_2"></div>
              </div>
            </div>
            <!-- ------------------------------------------------------- -->
              <div class="foodMenusLeft_list">
              <div class="smallTitle">
                <div class="smallTitle_1">小料</div>
                <div class="smallTitle_2"></div>
              </div>
            </div>
            <!-- ------------------------------------------------------- -->
               <div class="foodMenusLeft_list">
              <div class="smallTitle">
                <div class="smallTitle_1">小料</div>
                <div class="smallTitle_2"></div>
              </div>
            </div>
            <!-- ------------------------------------------------------- -->
                <div class="foodMenusLeft_list">
              <div class="smallTitle">
                <div class="smallTitle_1">小料</div>
                <div class="smallTitle_2"></div>
              </div>
            </div>





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
        varieties:'',
        //食品分类
        categories:[],
        //食品类别
        foods:[]
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
        this.categories = res.data.categories
        this.foods = res.data.foods
        console.log(this.categories)
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
    .foodMenusLeft_list{
      width: 100%;
      min-height: 200px;
      background-color:aqua;
    }
    .foodMenusLeft_left{
      width: 50%;
      height: 100%;
      background-color: blueviolet;
      .smallTitle{
        height: 50px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .smallTitle_2{
          width: 60px;
          height: 8px;
          background-color: black;
        }
        .smallTitle_1{
          font-size: 30px;
          font-weight: 700;
        }
      }
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
    max-height: 1000px;
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