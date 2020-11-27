<template>
  <div class="user-info">
    这是用户的详细信息页面
    {{ value }}--{{ totalPrice }}
    <ul>
      <li v-for="(item, index) in date" :key="index">
        {{ item.title }}--{{ item.date }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 3,
      newNum: 0,
      price: 100,
      news: [
        {
          title: '"空降"不到一周 韩俊任吉林代省长 曾是刘鹤"副手"',
          date: "2020/11/21",
        },
        {
          title: "上门女婿成村霸，敲诈勒索故意纵火还打伤司法人员",
          date: "2020/11/24",
        },
        {
          title: "X光显示肚子内有异物 港媒:黄之锋被关医院单人囚室",
          date: "2020/11/28",
        },
        {
          title: "特朗普突然出手，举行了史上最短一次记者会！",
          date: "2020/11/29",
        },
      ],
    };
  },
  created() {
    this.newNum = this.num ** 3;
  },
  computed: {
    value() {
      return this.newNum ** 4;
    },
    totalPrice() {
      return this.num ** 4;
    },
    date() {
      let newss = this.news;
      return newss.reverse();
    },
  },
};
</script>

<style>
</style>