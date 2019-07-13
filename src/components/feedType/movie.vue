<template>
  <mycard color="#fff" @click="hi">
    <div class="intro">
      <div class="cover">
        <img src="http://localhost:3000/loadimg?imgurl=35a353bb74870812040036960b25fb74" alt />
      </div>
      <div class="con">
        <span class="title">{{title}}</span>
        <span class="name">{{"《"+name+"》"}}</span>
      </div>
    </div>
    <div class="divider"></div>
    
    <div class="comment">
      <span class="quote lf">"</span>
      <p>{{content}}</p>
      <span class="quote rt">"</span>
    </div>
    <i-rate size="14" class="irate"
            disabled
            :value="star">{{star}}
    </i-rate>
  </mycard>
</template>

<script>
import mycard from "@/components/minicompo/mycard";
export default {
    props:[
        'name',
        'title',
        'star',
        'content'
    ],
  data() {
    return {
      cardInfo: {
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
}
.comment p {
    padding-top: 20px;
    padding: 10px;
  text-indent: 26px;
  font-size: 14px;
  white-space: pre-wrap;
  color: #666;
}
.irate {
  display: block;
  margin-top: 5px;
  color: #666;
  margin-left: 0px;
}
</style>
