<template>
  <div class="dropdown">
    <div class="shopping">请选择购物车</div>
    <div class="dropdown_1">$0.00</div>
  </div>
</template>

<script>
export default {
    name:'MenusDropDown'
}
</script>

<style lang='less' scoped>
.shopping{
  font-size: 20px;
  color: rgb(150, 150, 150);
}
.dropdown{
  top: 850px;
  right: 305px;
  position: fixed;
  width: 400px;
  min-height: 120px;
  max-height: 500px;
  box-shadow: 0px 0px 10px rgb(150, 150, 150);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  .dropdown_1{
    width: 350px;
    height: 50px;
    border-radius: 30px;
    background-color: rgb(189, 189, 189);
    line-height: 50px;
    text-align: center;
    font-size: 20px;
    color: white;
  }
}

</style>