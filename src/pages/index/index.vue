<template>
  <div>
    <div class="bgtop" @click="addOneEnergy">
      <div class="energyinfo">
        <span>Energy</span>
        <div id="energy">{{energy}}</div>
      </div>
      <div class="nav">
        <ul>
          <li>
            <img src="/static/images/data-active.png" alt="">
          </li>
          <li>
            <img src="/static/images/album.png" alt="">
          </li>
          <li>
            <img src="/static/images/minus.png" alt="">
          </li>
          <li>
            <img src="/static/images/add.png" alt="">
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import card from "@/components/card";
import store from "@/store/store";
export default {
  data() {
    return {
      motto: "Hello miniprograme",
      userInfo: {
        nickName: "mpvue",
        avatarUrl: "http://mpvue.com/assets/logo.png"
      }
    };
  },

  components: {
    card
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
    }
  },

  computed: {
    energy() {
      return store.state.energy;
    }
  },

  created() {}
};
</script>

<style scoped>
.bgtop {
  background-color: #fe5a59;
  height: 45vh;
  position: relative;
  z-index: 0;
}
.energyinfo {
  position: absolute;
  left: 20vw;
  top: 10vh;
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
  bottom: -20px;
  left: 10vw;
  width: 70vw;
  padding: 0 5vw;
  padding-top: 10px;
  background-color: #fff;
  border-radius: 25px;
  height: 40px;
  box-shadow: 0 10px 10px #eee;

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
