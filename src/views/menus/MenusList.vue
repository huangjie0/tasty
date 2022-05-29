<template>
  <div>
    <div class="smallList">
      <div class="smallList_1">
        <div class="smallfoodsname">
          1111
        </div>
      </div>
      <div class="smallList_2">

      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:"MenusList",
    props:['foodsList'],
    mounted(){                                                                            
      console.log( this.foodsList)
    }
    
}
</script>

<style scoped lang='less'>
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
  }
}

</style>