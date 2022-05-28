<template>
  <div>
    <div class="smallList"  v-for="(item,index) in foodsList" :key="item._id">
      <div class="smallList_1">{{item.name['zh-CN']}}</div>
      <div class="smallList_2">￥{{item.price/100}}</div>
    </div>
  </div>
</template>

<script>
export default {
    name:"MenusList",
    props:['foodsList'],
}
</script>

<style scoped lang='less'>
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
}

</style>