<template>
  <div>
    <div class="login_1">
      <div class="login_2">
        <div class="input">
          <div>用户名:</div>
          <div>
            <input
              type="text"
              v-model="users.username"
              placeholder="请输入用户名"
            />
          </div>
        </div>
        <div class="input">
          <div>密码:</div>
          <div>
            <input
              type="password"
              v-model="users.password"
              placeholder="请输入密码"
            />
          </div>
        </div>
        <div>
          <div class="login_3" @click="login_1">登录</div>
        </div>
        <div>
          <div class="register" @click="register_1">注册</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import loginpost from '@/api/login/index'
import {setloacalStore} from '@/common/until'
export default {
  name: "LoginPage",
  props:['isShow'],
  data() {
      return {
          users:{
              username:'',
              password:''
          }
      }
  },
  methods:{
      register_1(){
        this.$emit('maskclick');
      },
      login_1(){
        //当用户点击登录按钮时候要做的事
          if(this.users.username && this.users.password){
                //用户名的正则表达式
              const userregex = /^[a-zA-Z0-9_-]{4,16}$/
              //密码的正则表达式
              const password = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/
                if(!userregex.test(this.users.username)){
                    alert('用户名输入有误!,请重新输入')
                }
                if(!password.test(this.users.password)){
                    alert('密码输入有误，请重新输入')
                }
                if(userregex.test(this.users.username)&&password.test(this.users.password)){
                    loginpost(this.users.username,this.users.password).then(res=>{
                    alert('登录成功!')
                    console.log(res)
                    //将本地的用户的token存储在本地浏览器上
                    setloacalStore('token',res.data.token)

                    setloacalStore('users',res.data)
                    this.$router.push('/restaurant')
                    }).catch(err=>{
                        alert('登录失败')
                        console.log(err)
                    })
                }
          }         
      }
  }
};
</script>

<style lang='less' scoped>
.register{
  margin-top: 20px;
  font-size: 18px;
}

.login_3{
  margin-top: 30px;
  width: 400px;
  height: 40px;
  background-color: black;
  border-radius: 30px;
  color: white;
  text-align: center;
  line-height: 40px;
  font-size: 20px;
}
input::-webkit-input-placeholder {
    color: #aab2bd;
    font-size: 20px;
}
.login_1{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 100%;
  }
.login_2{
      width: 50%;
      height: 50%;
      font-size: 35px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      input{
        outline: none;
        border: 0;
        width: 400px;
        height: 50px;
      }
    }
</style>