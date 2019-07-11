<template>
  <div :style="{backgroundColor:bgcolor}" class="box"></div>
</template>

<script>
export default {
  props: ["text"],
  data() {
    return {
      colors: {
        CLEAR_DAY: "#FEDFE1",
        CLEAR_NIGHT: "#111",
        PARTLY_CLOUDY_DAY: "#6E75A4",
        PARTLY_CLOUDY_NIGHT: "#333",
        CLOUDY: "#444",
        WIND: "#555",
        HAZE: "#666",
        RAIN: "#777",
        SNOW: "#888"
      },
      wtApi: {},
      bgcolor: ""
    };
  },
  computed: {},
  methods: {
    getLocation() {
      wx.getSetting({
        success: res => {
          console.log(res);
          if (
            res.authSetting["scope.userLocation" != undefined] &&
            res.authSetting["scope.userLocation"] != true
          ) {
            wx.showModal({
              title: "请求授权当前位置",
              content: "需要获取您的地理位置，请确认授权",
              success: function(res) {
                if (res.cancel) {
                  wx.showToast({
                    title: "拒绝授权",
                    icon: "none",
                    duration: 1000
                  });
                } else if (res.confirm) {
                  wx.openSetting({
                    success: function(dataAu) {
                      if (dataAu.authSetting["scope.userLocation"] == true) {
                        wx.showToast({
                          title: "授权成功",
                          icon: "success",
                          duration: 1000
                        });
                        this.getLL();
                      }
                    }
                  });
                } else {
                  wx.showToast({
                    title: "授权失败",
                    icon: "none",
                    duration: 1000
                  });
                }
              }
            });
          } else if (res.authSetting["scope.userLocation"] == undefined) {
            this.getLL();
          } else {
            this.getLL();
          }
        }
      });
    },
    getLL() {
      let that = this;
      wx.getLocation({
        type: "wgs84",
        success(res) {
          const latitude = res.latitude;
          const longitude = res.longitude;
          that.getWt(longitude, latitude);
        }
      });
    },
    getWt(x, y) {
      console.log(x, y);
      let that = this;
      this.$fly
        .get(
          "https://api.caiyunapp.com/v2/dzXnDU3NLcQRqM4M/" +
            x +
            "," +
            y +
            "/realtime.json",
          {}
        )
        .then(res => {
          that.wtApi = res.data;
          that.bgcolor = that.colors[that.wtApi.result.skycon];
          wx.setNavigationBarColor({
              frontColor: '#ffffff',
              backgroundColor:that.bgcolor,
                animation: {
                    duration: 500,
                    timingFunc: 'easeIn'
                }
          })
          console.log(that.bgcolor)
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  created() {
    this.getLocation();
  }
};
</script>

<style scope>
.box {
  display: block;
  width: 100%;
  height: 100%;
  transition: background .5s;
  transition-timing-function: ease-in;
  z-index: -1;
}
</style>
