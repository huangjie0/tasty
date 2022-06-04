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
            <div class="foodMenusLeft_list" v-for="item in categories" :key="item._id">
              <div class="smallTitle">
                <div class="smallTitle_1">{{item.name['zh-CN']}}</div>
                <div class="smallTitle_2"></div>
              </div>
            <MenusList :foodsList="item.foods"/>
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
import { olderGet } from '@/api/order'
import {getloacalStore} from '@/common/until.js'
import MenusDropDown from '@/views/menus/MenusDropDown.vue'
import MenusList from '@/views/menus/MenusList.vue'
import  {nanoid} from 'nanoid'

export default {
    name:"Menus",
    data() {
      return {
        //页面数据
        restaurantTitle:'',
        varieties:'',
        categories:[],
        foodsList:[]
      }
    },
     components:{
        MenusDropDown,
        MenusList,
    },
    created(){
      olderGet('628b2c5edd3bc85851d4f2eb')
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
        //将得到的数据进行重构
        const categories=[]
        res.data.categories.forEach(item_1=>{
          const foods=[]
          res.data.foods.forEach(item_2=>{
            if(item_1._id==item_2.category['_id']){
              //初始化点击开始的值，给后端传值
              this.$set(item_2,'count',0)
              item_2.nanoid = nanoid()
              foods.push(item_2)
            }
        })
          //将每个菜馆下面的菜进行一一对应进行装进去
          item_1.foods = foods;
          //将数据进行组装
          categories.push(item_1)
        })
        this.categories = categories
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
    top: 150px;
    position: absolute;
    width: 70%;
    height: 100%;
    .foodMenusLeft_list{
      width: 450px;
      min-height: 200px;
    }
    .foodMenusLeft_left{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .smallTitle{
        height: 50px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .smallTitle_2{
          width: 60px;
          height: 10px;
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