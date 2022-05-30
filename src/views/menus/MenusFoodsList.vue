<template>
  <div class="addFoods">
      <div class="addFoodsLeft">
          云南米线
      </div>
      <div class="addFoodsRight">
          <div class="addFoodsRight_1">$20.00</div>
          <div class="addFoodsRight_2">
              <div>-</div>
              <div>$20.00</div>
              <div>+</div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'MenusFoodsList'

}
</script>

<style lang='less' scoped>
.addFoods{
    width: 400px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .addFoodsLeft{
        width: 180px;
        height: 50px;
        text-align: center;
        line-height: 50px;
        font-size: 18px;
    }
    .addFoodsRight{
        width: 200px;
        height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .addFoodsRight_1{
            width: 100px;
            height: 50px;
            line-height: 50px;
            text-align: center;
            font-size: 18px;
        }
        .addFoodsRight_2{
            width: 100px;
            height: 35px;
            background-color: black;
            color: white;
            border-radius: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 18px;
        }
    }
}

</style>