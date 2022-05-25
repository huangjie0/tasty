<template>
  <div class="restaurant">
    <div class="restaurant_1">
      <div class="restaurant_left">
        <div class="all">
          所有餐馆
        </div>
      </div>
      <div class="restaurant_right">
        <div class="foodsLeft">
          <div v-for="(item,index) in restaurantList" :key="item._id">
            {{item.name['zh-HK']}}
          </div>
        </div>
        <div class="foodsRight">
          <div class="foodsRight_1"> 
            111
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import restaurantget from '@/api/restaurant/index'
export default {
    name:'Restaurant',
    methods:{
      ...mapMutations(['closeLoading','openLoading'])
    },
    data() {
      return {
        //当请求发送成功时所渲染的数据
        restaurantList:[]
      }
    },
    created(){
      //在发请求之前关闭loading
      //再发请求之前开启loading页面
      this.openLoading()
      restaurantget().then(res=>{
        this.restaurantList=res.data
        console.log(this.restaurantList)
      }).catch(err=>{
        // console.log(err)
      }).finally(()=>{
        this.closeLoading()
      })
    }
}
</script>

<style lang='less' scoped>
@width:400px;
@height:1000px;
.foodsLeft,.foodsRight{
  min-width:@width;
  min-height:@height;
  position: relative;
}
.foodsRight_1{
  position: absolute;
  min-width:@width;
  min-height:800px;;
  top: 200px;
  background-color: chocolate;
  
}
.restaurant_right{
  display: flex;
  justify-content: space-between;
}
.children_1>div{
  min-width:400px;
  min-height: 440px;
  max-height: 600px;
  background-color: chocolate;
}
.children_3{
  position: absolute;
  top: 100px;
}
.children_2>div{
  min-width:250px;
  min-height: 440px;
  max-height: 600px;
  background-color: rgb(81, 38, 121);
}
.restaurant{
  position: relative;
  top: 100px;
  min-height: calc(100vh-45px);
  .restaurant_1{
    display: flex;
    justify-content: space-between;
    align-items: center;
    .restaurant_left{
      width: 30%;
      font-size: 50px;
      font-weight: 1000;
      .all{
        position: absolute;
        top: 20px;
        left: 20px;
      }
    }
    .restaurant_right{
      position: relative;
      width: 70%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .children_1,.children_2{
        width: 45%;
        height: 100%;
      }
    }
  }
}
</style>