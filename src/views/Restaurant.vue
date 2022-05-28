<template>
  <div class="restaurant">
    <div class="restaurant_1">
      <div class="restaurant_left">
        <div class="all">
          <div class="underline"></div>
          所有餐馆
        </div>
      </div>
      <div class="restaurant_right">
        <div class="foodsLeft">
          <!-- 即将要渲染的数据 -->
          <div
            class="foodList"
            v-for="(item, index) in restaurantList"
            :key="item._id"
          >
            <div class="title">
              {{ item.name["zh-CN"] }}
            </div>
            <div class="title_1">
              {{ item.tags[0] }}
            </div>
            <div class="img" @click="toMenus(item)">
              <div class="dishes_1">
                {{ item.items[0] ? item.items[0].name['zh-CN'] : defaultItems[0].name['zh-CN'] }}
              </div>
              <div class="dishes_2">{{item.items[1] ? item.items[1].name['zh-CN'] : defaultItems[1].name['zh-CN']}}</div>
              <div class="dishes_3">{{item.items[2] ? item.items[2].name['zh-CN'] : defaultItems[2].name['zh-CN']}}</div>
              <div class="plate">
                <!-- 盘子 -->
                <img src="@/assets/dark-dish.png" alt="" />
                <!-- 菜名 -->
                <img
                  class="smallFood_img"
                  :src="item.items[0] ? item.items[0].image['url']: defaultItems[0].image"
                  alt=""
                />
              </div>
              <div class="plate_1">
                <img src="@/assets/dark-dish.png" alt="" />
                <!-- 菜名 -->
                <img
                  class="smallFood_img_1"
                  :src="item.items[1] ? item.items[1].image['url']: defaultItems[1].image"
                  alt=""
                />
              </div>
              <div class="plate_2">
                <img src="@/assets/dark-dish.png" alt="" />
                <!-- 菜名 -->
                <img
                  class="smallFood_img_2"
                  :src="item.items[2] ? item.items[2].image['url']: defaultItems[2].image"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import restaurantget from "@/api/restaurant/index";
//导入时间处理的时区的模块
import moment from "moment-timezone";
//导入loash库
import _ from "lodash";
import { setloacalStore } from '@/common/until';

export default {
  name: "Restaurant",
  methods: {
    //checkClosed方法
    checkClosed(item) {
      const closed = _.get(item, "closed", null);
      if (closed !== null) {
        return false;
      }
      //获取当前时间
      const m = moment.tz("America/New_York");
      //获取纽约时间的分钟数
      const mins = m.hours() * 60 + m.minute();
      //获取当前是周几
      const dayOfWeek = m.isoWeekday() - 1;
      //拿到每个餐馆开始和结束时间
      const start = _.get(item, `hours[${dayOfWeek}].start`, 0);
      const end = _.get(item, `hours[${dayOfWeek}].end`, 0);
      //返回的是排序好的结果
      if (mins >= start && mins <= end) {
        return true;
      } else {
        return false;
      }
    },
    ...mapMutations(["closeLoading", "openLoading"]),
    //配置这个方法跳转到菜单页面
    toMenus(item) {

      this.$router.push(`/menus/${item._id}`);
      setloacalStore('restaurant',item);

    }
  },
  data() {
    return {
      //当请求发送成功时所渲染的数据
      restaurantList: [],
      defaultItems :[
      {
        name: {
          "zh-CN": "红烧狮子头",
          "en-US": "Stewed Lion Head Chinese Meatballs",
        },
        image:
          "https://s3.amazonaws.com/ricepo-food/image-3r7hnd04jyk7nbn3.png",
      },
      {
        name: {
          "zh-CN": "三杯鸡",
          "en-US": "Three Cups Chicken",
        },
        image:
          "https://s3.amazonaws.com/ricepo-food/image-5b7jxyy2jvu95frk.png",
      },
      {
        name: {
          "zh-CN": "番茄鸡蛋面",
          "en-US": "Tomato Egg Noodle",
        },
        image:
          "https://s3.amazonaws.com/ricepo-food/image-o1bt3qsjz0fhei4.png",
      },
    ]
    };
  },
  created() {
    //在发请求之前关闭loading
    //再发请求之前开启loading页面
    this.openLoading();
    restaurantget()
      .then((res) => {
        //拿到每一个餐馆的名称
        const foodsList = res.data;
        const newfoodList = _.orderBy(
          foodsList,
          ["featured", "zscore"],
          ["desc", "desc"]
        );
        const openArray = [];
        const closeArray = [];
        _.forEach(newfoodList, (item) => {
          if (this.checkClosed(item)) {
            openArray.push(item);
          } else {
            closeArray.push(item);
          }
        });
        const newFoodlist = openArray.concat(closeArray);
        this.restaurantList = newFoodlist;
      })
      .catch((err) => {})
      .finally(() => {
        this.closeLoading();
      });
  },
}
</script>

<style lang='less' scoped>
.title {
  min-width: 400px;
  height: 60px;
  font-size: 35px;
  font-weight: 600;
  line-height: 60px;
}
.title_1 {
  min-width: 400px;
  height: 30px;
  line-height: 30px;
  font-size: 18px;
  color: rgb(124, 124, 124);
}
.img:hover > .dishes_1 {
  display: block;
}
.img:hover > .plate {
  transform: translateY(10px);
}
.img:hover > .plate_1 {
  transform: translateY(10px);
}
.img:hover > .plate_2 {
  transform: translateX(10px);
}
.img:hover > .dishes_2 {
  display: block;
}
.img:hover > .dishes_3 {
  display: block;
}
.img {
  min-width: 400px;
  height: 420px;
  position: relative;
  .plate_2 {
    width: 100px;
    height: 100px;
    position: absolute;
    top: 250px;
    left: 60px;
    .smallFood_img_2 {
      width: 100px;
      height: 90px;
    }
    img {
      width: 100px;
      height: 110px;
    }
  }
  .plate_1 {
    width: 150px;
    height: 150px;
    position: absolute;
    top: 150px;
    left: 200px;
    .smallFood_img_1 {
      width: 150px;
      height: 135px;
    }
    img {
      width: 150px;
      height: 180px;
    }
  }
  .plate {
    width: 180px;
    height: 180px;
    position: absolute;
    top: 50px;
    left: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    .smallFood_img {
      width: 200px;
      height: 163px;
    }
  }
  img {
    width: 180px;
    height: 200px;
    position: absolute;
    top: 10px;
  }
  .dishes_1 {
    top: 10px;
    left: 40px;
    position: absolute;
    font-size: 18px;
    color: rgb(124, 124, 124);
    display: none;
  }
  .dishes_2 {
    top: 110px;
    left: 250px;
    position: absolute;
    font-size: 18px;
    color: rgb(124, 124, 124);
    display: none;
  }
  .dishes_3 {
    top: 230px;
    left: 90px;
    position: absolute;
    font-size: 18px;
    color: rgb(124, 124, 124);
    display: none;
  }
}
.foodList {
  min-width: 400px;
  min-height: 500px;
}
@width: 400px;
@height: 1000px;
.foodsLeft,
.foodsRight {
  min-width: @width;
  min-height: @height;
  position: relative;
}
.foodsRight_1 {
  position: absolute;
  min-width: @width;
  min-height: 500px;
  top: 200px;
  background-color: chocolate;
}
.restaurant_right {
  display: flex;
  justify-content: space-between;
}
.children_1 > div {
  min-width: 400px;
  min-height: 440px;
  max-height: 600px;
  background-color: chocolate;
}
.children_3 {
  position: absolute;
  top: 100px;
}
.children_2 > div {
  min-width: 250px;
  min-height: 440px;
  max-height: 600px;
  background-color: rgb(81, 38, 121);
}
.restaurant {
  position: relative;
  top: 100px;
  .restaurant_1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .restaurant_left {
      width: 30%;
      font-size: 50px;
      font-weight: 1000;
      .all {
        position: absolute;
        top: 20px;
        left: 20px;
        .underline {
          position: absolute;
          top: 65px;
          width: 50px;
          height: 8px;
          background-color: black;
        }
      }
    }
    .restaurant_right {
      position: relative;
      width: 70%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .children_1,
      .children_2 {
        width: 45%;
        height: 100%;
      }
    }
  }
}
</style>