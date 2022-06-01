<template>
       <div class="orderListBody_2">
            <div>花椒油</div>
            <div class="orderListBody_3">1</div>
        </div>
</template>

<script>
export default {
    name:'OrderList_one'
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

</style>