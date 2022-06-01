<template>
  <div class="orderList">
    <div class="restaurantTitle">
        <div class="restaurantTitle_1">
            邓记云南过桥
        </div>
        <div class="restaurantTitle_time">
            2021-04-13 11:30
        </div>
    </div>
     <div class="orderListBody">
        <div class="orderListBody_1">
            <OrderList_one/>
        </div>
    </div>
    <div class="orderListBody_2">
        <div>总价:</div>
        <div>$119.20</div>
    </div>
    <div class="more_1">
        <div class="more">
           更多
        </div>
    </div>
  </div>
</template>

<script>
import OrderList_one from '@/views/order/OrderList_one'
export default {
    name:'OrderList',
    components:{
        OrderList_one
    }
}
</script>

<style scoped lang='less'>
.more{
    width: 60px;
    height: 30px;
    background-color: black;
    color: white;
    border-radius: 20px;
    text-align: center;
    align-items: center;
    line-height: 30px;
    }
.orderList{
    width: 300px;
    height: 500px;
    border: 1px solid rgb(161, 161, 161);
    .more_1{
        width: 300px;
        height: 70px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .orderListBody_2{
        width: 300px;
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