<template>
  <div class="login_mask">
      <div class="loin_mask_1">
          <div class="login_mask_2"> 
            <div>用户名: <input type="text" v-model="users.username"></div>
            <div>密码:<input type="text" v-model="users.password"></div>
            <div>
                <button @click="isconfirm">确认</button>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import  registerpost from '@/api/register/index.js'
export default {
    name:'LoginMask',
    data() {
        return {
            users:{
                username:'',
                password:''
            }
        }
    },
    methods:{
        isconfirm(){
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
                    registerpost(this.users.username,this.users.password).then(res=>{
                    alert('注册成功!')
                     //关闭弹窗
                    this.$emit('isconfirm')
                    }).catch(err=>{
                        console.log(err)
                    }).finally(()=>{

                    })
                }
               
            }         
        }
    }
}
</script>

<style lang='less' scoped>
.login_mask{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0,0.6);
    display: flex;
    justify-content: center;
    align-items: center;
}
.loin_mask_1{
    width: 600px;
    height: 800px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    .login_mask_2{
        width: 400px;
        height: 300px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        font-size: 25px;
        input{
            width: 300px;
            height: 30px;
            outline: none;
            border: 1px solid black;
        };
        button{
            width: 90px;
            height: 40px;
            font-size: 20px
        }
    };
}
</style>