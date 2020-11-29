<template>
  <div class="container">
    <div class="nav">
      <div class="time">{{ localTime }}</div>
      <div class="city">切换城市</div>
    </div>
    <div class="city-info">
      <p class="city">{{ info.city }}</p>
      <p class="weather">{{ info.weather }}</p>
      <h1 class="temp">
        <em>{{ info.temperature }}</em
        >℃
      </h1>
      <div class="detail">
        <span>风力:{{ info.windPower }}</span> |
        <span>风向:{{ info.windDirection }}<span>风</span></span> |
        <span>空气湿度:{{info.humidity}}%</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      localTime: "",
      info: {},
    };
  },
  created() {
    setInterval(() => {
      this.localTime = this.getLocalTime();
    }, 1000);
    this.initMap();
    setInterval(()=>{
      this.initMap();
    },600000)

  },
  methods: {
    getLocalTime() {
      return new Date().toLocaleTimeString();
    },
    initMap() {
      // 获取当前城市
      let self = this;
      AMap.plugin("AMap.CitySearch", function () {
        var citySearch = new AMap.CitySearch();
        citySearch.getLocalCity(function (status, result) {
          if (status === "complete" && result.info === "OK") {
            // 查询成功，result即为当前所在城市信息
            // console.log(result);
            self.getCurrentCityData(result.city)
            .then((res)=>{
              // console.log(res);
              self.info = res;
            })
          }
        });
      });
    },
    getCurrentCityData(city) {
      // 查询天气
      return new Promise((resolve, reject) => {
        AMap.plugin("AMap.Weather", function () {
          //创建天气查询实例
          var weather = new AMap.Weather();
          //执行实时天气信息查询
          weather.getLive(city, function (err, data) {
            console.log(err, data);
            resolve(data);
          });
        });
      });
    },
  },
};
</script>

<style lang="less">
.container {
  min-height: 100vh;
  background-color: #000;
  opacity: 0.7;
  color: #fff;
  .nav {
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }
  .city-info {
    p {
      margin-bottom: 10px;
    }
    .temp {
      font-size: 26px;
      em {
        font-size: 34px;
        font-style: normal;
      }
    }
  }
}
</style>