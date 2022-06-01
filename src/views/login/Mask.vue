<template>
  <div class="login_mask">
      <div class="loin_mask_1">
          <div class="login_mask_2"> 
            <div>用户名: <input type="text" v-model="users.username"></div>
            <div>密码:<input type="password" v-model="users.password"></div>
            <div>
                <button @click="isConfirm">确认</button>
                <button @click="isCancel">取消</button>
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
        isConfirm(){
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
                    //跳转到登录页面
                    this.$router.push('/login')
                    }).catch(err=>{
                        console.log(err)
                    }).finally(()=>{

                    })
                }
            }else{
                alert('用户名和密码不能为空!')
            }       
        },
        //当用户点击取消按钮，清空用户名和密码并且跳转到登录页面
        isCancel(){
            this.users.username=''
            this.users.password=''
            //跳转到登录页面，并且关闭弹框
            this.$emit('cancelBounced')
        }
    }
}
</script>

<style lang='less' scoped>
.login_mask{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.3);
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
            font-size: 20px;
            margin-right: 10px
        }
    };
}
</style>