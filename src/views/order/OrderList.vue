<template>
<div class="order_right">
    <div class="orderList" v-for="item in restaurantList" :key="item._id">
        <div class="restaurantTitle">
            <div class="restaurantTitle_1">
                {{item.restaurant.name['zh-CN']}}
            </div>
            <div class="restaurantTitle_time">
                {{item.createdAt | timeFormat}}
            </div>
        </div>
        <div class="orderListBody">
            <div class="orderListBody_1">
                 <div class="orderListBody_2" v-for="(item_2,index) in item.cart" :key="index">
                    <div>{{item_2.name['zh-CN']}}</div>
                    <div class="orderListBody_3">{{item_2.count}}</div>
                </div>
            </div>
        </div>
        <div class="orderListBody_2">
            <div>总价:</div>

            <div>{{fullPrice(item) | currencyUSD}}</div>
        </div>
        <div class="more_1">
            <div class="more">
                更多
            </div>
        </div>
    </div>
</div>
  
</template>

<script>
export default {
    name:'OrderList',
    props:['restaurantList'],
    methods:{
        //通過方法返回
        fullPrice(item){
            //初始化一个数值
            var sum = 0;
             item.cart.forEach(item_1=>{
                 sum += item_1.count*item_1.price
            })
            return sum
        }
    },
}
</script>

<style scoped lang='less'>
 .orderListBody_2{
    width: 230px;
    height: 35px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .orderListBody_3{
        width: 30px;
        height: 30px;
        background-color: rgb(189, 189, 189);
        color: white;
        border-radius: 50%;
        text-align: center;
        line-height: 35px;
        font-size: 25px;
    }
}
.order_right{
  width: 70%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.more{
    width: 60px;
    height: 30px;
    background-color: black;
    color: white;
    border-radius: 20px;
    text-align: center;
    align-items: center;
    line-height: 30px;
    cursor: pointer;
    }
.move{
    width: 320px !important;
    height: 520px !important;
}
.orderList{
    width: 300px;
    height: 500px;
    border: 1px solid rgb(161, 161, 161);
    margin-bottom: 30px;
    .more_1{
        width: 300px;
        height: 70px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .orderListBody_2{
        width: 218px;
        height: 70px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: 26px;
    }
    
    .orderListBody{
        width: 300px;
        height: 250px;
        display: flex;
        justify-content: center;
        align-items: center;
        .orderListBody_1{
            width: 230px;
            height: 250px;
            border-bottom: 2px solid rgb(161, 161, 161);
            overflow: auto;
        }
    }
    .restaurantTitle{
        width: 300px;
        height: 100px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        border-bottom: 2px solid rgb(161, 161, 161);
        .restaurantTitle_1{
            font-size: 30px;
            font-weight: 700;
            
        }
    }
}

</style>