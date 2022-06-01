import instance from "@/api/common";
import crypto from 'crypto';

/* 加密用户名，密码 */
export function encode (str){
    const cipher = crypto.createCipher('aes192', 'deliveryIsen');
    var crypted = cipher.update(str, 'utf8', 'hex');
    crypted += cipher.final('hex');
    return crypted;
}

//发送put请求模块
export  function olderPut(payment,cart,userId,restaurantId){
    return instance.put('/api/order',{payment:payment,cart:cart,userId:userId,restaurantId:restaurantId})
}

//发送消息获取order信息
export function olderGet(userId){
    return instance.get(`/api/order/${userId}`)
}