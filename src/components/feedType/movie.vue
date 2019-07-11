<template>
  <mycard color="#fff" @click="hi">
    <div class="intro">
      <div class="cover">
        <img src="https://raw.githubusercontent.com/parz1/MarkdownPhotos/master/timg.png" alt />
      </div>
      <div class="con">
        <span class="title">{{cardInfo.title}}</span>
        <span class="name">{{"《"+cardInfo.name+"》"}}</span>
      </div>
    </div>
    <div class="divider"></div>
    
    <div class="comment">
      <span class="quote lf">"</span>
      <p>{{cardInfo.content}}</p>
      <span class="quote rt">"</span>
    </div>
    <i-rate size="14" class="irate"
            disabled
            :value="cardInfo.star">{{cardInfo.star}}
    </i-rate>
  </mycard>
</template>

<script>
import mycard from "@/components/minicompo/mycard";
export default {
  data() {
    return {
      cardInfo: {
        name: "春光乍泄",
        title: "不如我们从头来过",
        star: 4.5,
        content:
          "她说她和前男友说这句话的时候，前男友说这是不是前前男友的qq密码。"
      }
    };
  },
  components: {
    mycard
  },
  methods: {
      hi(){
          console.log(1);
      }
  },
};
</script>

<style scoped>
.intro {
  display: flex;
  flex-direction: row-reverse;
  justify-content: left;
}
.cover {
  width: 70px;
  height: 70px;
  text-align: center;
  border-radius: 15px;
}
.cover img {
  width: 70px;
  height: 70px;
}
.con {
  margin-right: 5px;
}
.title {
  font-size: 20px;
  font-weight: 300;
  line-height: 24px;
  word-wrap: break-word;
  display: block;
  color: #000;
}
.name {
  display: inline-block;
  font-size: 14px;
  line-height: 22px;
}
.divider {
  width: 100%;
  height: 1px;
  margin-top: 5px;
  background-color: #eee;
}
.quote {
  display: inline-block;
  font-size: 24px;
  color: #ddd;
  font-weight: 800;
  padding-top: 10px;
  line-height: 14px;
}
.lf {
    float: left;
}
.rt {
    float: right;
    margin-top: -20px;
    margin-right: 10px;
}
.comment p {
    padding-top: 20px;
    padding: 10px;
  text-indent: 26px;
  font-size: 14px;
  white-space: pre-wrap;
}
.irate {
  display: block;
  margin-top: 5px;
  color: #666;
  margin-left: 0px;
}
</style>
