<template>
  <div>
    <div class="smallList" v-for="(item,index) in foodsList" :key="item._id">
      <div class="smallList_1"  @click="showSmallRound(index)">
        <div class="smallRound" v-show="isSmallRound==index">
          {{item.count++}}
        </div>
        <div class="smallfoodsname" :class="{grayFont:!item.available}">
          {{item.name['zh-CN']}}
        </div>
      </div>
      <div class="smallList_2" :class="{grayFont:!item.available}">
        ￥{{item.price/100}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:"MenusList",
    props:['foodsList'],
    data() {
      return {
        //控制个数的数量
        isSmallRound:-1,
      }
    },
    mounted(){
      console.log(this.foodsList);
    },
    methods: {
      //鼠标点击是让其显示与隐藏，并且加++
      showSmallRound(index){
        this.isSmallRound=index
      }
    },
}
</script>

<style scoped lang='less'>
.grayFont{
  color: rgb(155, 155, 155);
}
.smallfoodsname{
  cursor: pointer;
}
.gray_price{
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: rgb(155, 155, 155);
  color: white;
  text-align: center;
  line-height: 30px;
}
.smallList{
  width: 450px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  line-height: 40px;
  font-size: 18px;
  .small{
    width: 35px;
    height: 35px;
    background-color: rgb(153, 153, 153);
    color: white;
    border-radius: 50%;
    line-height: 35px;
    text-align: center;
    cursor: pointer;
  }
  .smallList_1{
    display: flex;
    justify-content: space-between;
    align-items: center;
    .smallRound{
      width: 30px;
      height: 30px;
      background-color: rgb(153, 153, 153);
      color: white;
      border-radius: 50%;
      text-align: center;
      line-height: 30px;
    }
  }
}

</style>