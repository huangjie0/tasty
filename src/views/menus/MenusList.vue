<template>
  <div>
    <div class="smallList"  v-for="item in foodsList" :key="item.nanoid">
      <div class="smallList_1"  @click="showSmallRound(item)">
        <div class="smallRound" v-show="item.count > 0 && item.available">
          {{item.count}}
        </div>
        <div class="smallfoodsname" :class="{grayFont:!item.available}">
          {{item.name['zh-CN']}}
        </div>
      </div>
      <div class="smallList_2" :class="{grayFont:!item.available}">
        {{item.price | currencyUSD}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:"MenusList",
    props:['foodsList'],
    methods: {
      //鼠标点击是让其显示与隐藏，并且加++
      showSmallRound(item){
        item.count +=1;
        //发送数据
        if(item.available){
          //判断available属性的是true,或者false来决定是否发送数据
          this.$bus.$emit('foodList',item)
        }
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