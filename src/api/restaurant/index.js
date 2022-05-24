import instance from "@/api/common";
export default function restaurantget(){
    return instance.get('api/restaurant/location/-74.0059413,40.7127837')
}