<template>
  <div class="restaurant">
    <div class="restaurant_1">
      <div class="restaurant_left">
        <div class="all">
          所有餐馆
        </div>
      </div>
      <!-- <div class="restaurant_right">
        <div class="children_1">
          <div>1111</div>
          <div>1111</div>
          <div>1111</div>
          <div>1111</div>
          <div>1111</div>
          <div>1111</div>
          <div>1111</div>
          <div>1111</div>
          <div>1111</div>
          <div>1111</div>
        </div>
        <div class="children_2">
            <div>5555</div>
            <div>5555</div>
            <div>5555</div>
            <div>5555</div>
            <div>5555</div>
            <div>5555</div>
            <div>5555</div>
        </div>
      </div> -->
    </div>
  </div>
</template>s

<script>
import restaurantget from '@/api/restaurant/index'
export default {
    name:'Restaurant',
    created(){
      restaurantget().then(res=>{
        // console.log(res)
      }).catch(err=>{
        console.log(err)
      })
    }
}
</script>

<style lang='less' scoped>
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