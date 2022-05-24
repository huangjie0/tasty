<template>
  <div class="bounced">
      <div class="login_bounced" @click="tologin">登录</div>
      <div class="login_bounced_1">
        <div class="bounced_l">中</div>
        <div class="bounced_r">En</div>
      </div>
  </div>
</template>

<script>
export default {
    name:'SmallMask',
    methods:{
      tologin(){
        this.$router.push('/login')
      }
    }
}
</script>

<style lang='less' scoped>
.bounced{
  background-color: aquamarine;
  width: 300px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  .login_bounced_1{
    width: 280px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .bounced_l{
      width: 50px;
      height: 50px;
      background-color: black;
      color: white;
      border-radius: 50%;
      text-align: center;
      line-height: 50px;
      font-size: 20px;
    }
    .bounced_r{
      width: 50px;
      height: 50px;
      border-radius: 50%;
      text-align: center;
      line-height: 50px;
      font-size: 20px;
      border:2px solid rgb(148, 148, 148);
    }
  }
  .login_bounced{
    width: 280px;
    height: 50px;
    border-radius: 50px;
    border: 3px solid rgb(165, 165, 165);
    line-height: 50px;
    text-align: center;
    font-size: 25px;
  }
}
</style>