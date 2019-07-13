<template>
  <mycard color="#fff" padding="0">
    <div class="con">
      <div
        class="cover"
        :style="{'background-image':'url('+'http://localhost:3000/loadimg?imgurl=ea737c1a81c7340a530a845dc0ad252a'+')','height':120+'px'}"
      >11</div>
      <i-row>
        <i-col span="18">
          <div class="date">2018/7/11-2018/7/12</div>
          <div class="title">醒来觉得甚是爱你&#128512</div>
          <div class="pos">
            <i-icon type="coordinates_fill" size="16" color="#6E75A4" />
            <span>香港</span>
          </div>
        </i-col>
        <i-col span="6">
          <div class="point">1231</div>
        </i-col>
      </i-row>

      <!-- <div class="divider"></div> -->

      <div class="comment">
        <span class="quote lf">"</span>
        <p>展示内容，展示自我，呜呜啦啦呜呜啦啦。</p>
        <span class="quote rt">"</span>
      </div>
    </div>
  </mycard>
</template>

<script>
import mycard from "@/components/minicompo/mycard";
export default {
  data() {
    return {};
  },
  components: {
    mycard
  }
};
</script>

<style scoped>
.con {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: left;
  padding-bottom: 20px;
}
.cover {
  width: 100%;
  text-align: center;
  background-size: auto 100%;
  background-position: center;
}
.date {
  font-size: 10px;
  color: #888;
  padding-left: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
}
.point {
  width: 100%;
  text-align: center;
  font-size: 24px;
  font-weight: 300;
  padding-top: 20px;
}
.title {
  font-size: 20px;
  font-weight: 600;
  color: #333;
  padding-left: 10px;
  line-height: 20px;
}
.pos {
  padding-left: 10px;
  line-height: 16px;
  margin-top: 5px;
}
.pos span {
  line-height: 12px;
  font-size: 14px;
}

.divider {
  width: 90%;
  height: 1px;
  margin-top: 5px;
  margin-left: 5%;
  background-color: #eee;
}

.quote {
  display: inline-block;
  font-size: 24px;
  color: #ddd;
  font-weight: 800;
  padding-top: 10px;
  margin: 0 10px;
  line-height: 14px;
}
.lf {
  float: left;
}
.rt {
  float: right;
  margin-top: -20px;
}
.comment p {
  padding: 20px 30px;
  text-indent: 26px;
  font-size: 14px;
  white-space: pre-wrap;
  color: #666;
}
</style>
