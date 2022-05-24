import instance from "@/api/common";
export function restaurantget(){
    return instance.get('/restaurant/location/-74.0059413,40.7127837')
}