import instance from "@/api/common";
import crypto from 'crypto';

/* 加密用户名，密码 */
export function encode (str){
    const cipher = crypto.createCipher('aes192', 'deliveryIsen');
    var crypted = cipher.update(str, 'utf8', 'hex');
    crypted += cipher.final('hex');
    return crypted;
}

export default function registerpost(name,password){
    return instance.post('api/user/register',{username:encode(name),password:encode(password)})
}