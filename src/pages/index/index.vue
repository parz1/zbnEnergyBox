<template>
  <div id="app">
    <div class="nav">
      <ul>
        <li>
          <img src="/static/images/data-active.png" alt />
        </li>
        <li>
          <img src="/static/images/album.png" alt />
        </li>
        <li>
          <img src="/static/images/minus.png" alt />
        </li>
        <li>
          <img src="/static/images/add.png" alt />
        </li>
      </ul>
    </div>
    <div class="bgtop" @click="addOneEnergy">
      <weather></weather>
      <div class="energyinfo">
        <span>Energy</span>
        <div id="energy">{{energy}}</div>
      </div>
    </div>
    <div class="bgbottom">
      <feed></feed>
    </div>
    <i-spin class="spin" size="large" fix v-if="spinShow"></i-spin>
  </div>
</template>

<script>
import card from "@/components/card";
import weather from "@/components/weather";
import feed from "@/components/feed";
import store from "@/store/store";
export default {
  data() {
    return {
      motto: "Hello miniprograme",
      userInfo: {
        nickName: "mpvue",
        avatarUrl: "http://mpvue.com/assets/logo.png"
      },
      spinShow: true,
      switch: false
    };
  },

  components: {
    card,
    weather,
    feed
  },

  methods: {
    addOneEnergy() {
      store.commit("increment", 1);
      console.log("increment - 1");
    },
    bindViewTap() {
      const url = "../logs/main";
      if (mpvuePlatform === "wx") {
        mpvue.switchTab({ url });
      } else {
        mpvue.navigateTo({ url });
      }
    },
    clickHandle(ev) {
      console.log("clickHandle:", ev);
      // throw {message: 'custom test'}
    },
    getWt() {
      let that = this;
      this.$fly
        .get(
          "https://api.caiyunapp.com/v2/dzXnDU3NLcQRqM4M/121.6544,25.1552/realtime.json",
          {}
        )
        .then(res => {
          that.switch = true;
          that.spinShow = false;
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },

  computed: {
    energy() {
      return store.state.energy;
    }
  },

  created() {
    this.getWt();
  },
  mounted() {}
};
</script>

<style scoped>
#app {
  overflow: visible;
}
.spin {
  height: 100100%;
  width: 100vw;
  z-index: 9;
}
.bgtop {
  /* background-color: #fe5a59; */
  height: 35vh;
  position: relative;
  z-index: -1;
}
.bgbottom {
  min-height: 65vh;
  margin-top: -20px;
  z-index: 1;
}
.energyinfo {
  position: fixed;
  left: 20vw;
  top: 5vh;
  color: #fff;
  width: 60vw;
  text-align: center;
}
.energyinfo span {
  font-size: 0.3rem;
}

#energy {
  font-size: 1rem;
}

.nav {
  position: absolute;
  top: 35vh;
  left: 10vw;
  margin-top: -40px;
  width: 70vw;
  padding: 0 5vw;
  padding-top: 10px;
  background-color: #fff;
  border-radius: 25px;
  height: 40px;
  box-shadow: 0 10px 10px #eee;
  z-index: 2;
}
.nav ul {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.nav img {
  width: 30px;
  height: 30px;
}
</style>
