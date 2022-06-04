<template>
<div class="overFloat" :class="[changeStyle ? 'changeStyle':'']">
    <div class="addFoods" v-for="(item,index) in list" :key="index">
      <div class="addFoodsLeft">
          {{item.name['zh-CN']}}
      </div>
      <div class="addFoodsRight">
          <div class="addFoodsRight_1">{{item.price | currencyUSD}}</div>
          <div class="addFoodsRight_2">
              <div @click="sub(item)">-</div>
              <div>{{item.count}}</div>
              <div @click="add(item)">+</div>
          </div>
      </div>
    </div>
</div>
</template>

<script>
import {setloacalStore} from '@/common/until'
export default {
    name:'MenusFoodsList',
    data() {
        return {
            menusFoodsList:[],
            changeStyle:false
        }
    },
    //当组件创建时候接受到的值
    mounted(){
        this.$bus.$on('changeStyle',()=>{
            this.changeStyle=true
        })
        //接受数据
        this.$bus.$on('foodList',v=>{
            //在下一次节点更新时候调用的函数
            this.$nextTick(function(){
                //判断是否是同一个元素
                if(!this.menusFoodsList.includes(v)){
                    //不包含的元素添加到数组中
                    this.menusFoodsList.push(v);
                    //将用户的点击的信息存在浏览本地存储中
                    setloacalStore('cars',this.menusFoodsList)
                }
            })
        })
    },
    updated(){
        //组件挂载完毕后将列表发送给兄弟组件
        this.$bus.$emit('fullPrice',this.menusFoodsList);
        //调用接受的函数,来清空数据
        this.$bus.$on('clearList',(v)=>{
            this.$nextTick(function(){
                this.menusFoodsList=v
            })
        })
        this.$bus.$on('closeStyle',()=>{
        this.changeStyle=false
        })
    },
    methods: {
        //点击减号是数量减少
        sub(item){
            if (item.count>0) {
                item.count--
            }
        },
        //点击减号是数量增加
        add(item){
            item.count++
        }
    },
    computed:{
        //通过计算属性所的出来的列表过滤出来
        list(){
            //从本地浏览器中取数据,如果有,则渲染,如果没有,则渲染用户要点击的商品
            return this.menusFoodsList.filter((item)=>{
                return item.count > 0
            })
        }
    }
}
</script>

<style lang='less' scoped>
.changeStyle{
    height: 700px !important;
}
.overFloat{
    overflow: auto;
    max-height: 700px;
}
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