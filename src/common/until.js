//工具类封装从本地存和取
export function getloacalStore(v){
    if(v){
       window.localStorage.getItem(v)
    }
    
}
export function setloacalStore(k,v){
    const v_1 = JSON.stringify(v)
    window.localStorage.setItem(k,v_1)
}