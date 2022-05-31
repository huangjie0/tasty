<template>
<div>
    <!-- v-if和v-for不推荐在同一标签使用 -->
    <div class="addFoods" v-if="item.count>0" v-for="(item,index) in menusFoodsList" :key="index">
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
export default {
    name:'MenusFoodsList',
    data() {
        return {
            menusFoodsList:[],
        }
    },
    //当组件创建时候接受到的值
    mounted(){
        //接受数据
        this.$bus.$on('foodList',v=>{
            //在下一次节点更新时候调用的函数
            this.$nextTick(function(){
                //判断是否是同一个元素
                if(!this.menusFoodsList.includes(v)){
                    //不包含的元素添加到数组中
                    this.menusFoodsList.push(v);
                }
            })
        })
    },
    updated(){
        //组件挂载完毕后将列表发送给兄弟组件
        this.$bus.$emit('fullPrice',this.menusFoodsList);
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