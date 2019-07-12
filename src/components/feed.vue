<template>
  <div class="container">
    <ul>
      <li class="feedItem" v-for="(item, index) in feedList" :key="index">
        <div class="feedLf">
          <img src="/static/images/user.png" alt />
        </div>
        <div class="feedRt">
          <span class="date">{{item.date}}</span>
          <br />
          <span class="user">{{item.userName}}</span>
          <span class="intro">刚发布了</span>
          <div class="content">
            <kimochi :content="item.content" v-if="item.type=='kimochi'"></kimochi>
            <share v-else-if="item.type=='share'"></share>
            <movie
              :name="item.name"
              :title="item.title"
              :star="item.star"
              :content="item.content"
              v-else-if="item.type=='movie'"
            ></movie>
            <trip v-else></trip>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import movie from "@/components/feedType/movie";
import trip from "@/components/feedType/trip";
import share from "@/components/feedType/share";
import kimochi from "@/components/feedType/kimochi";
export default {
  data() {
    return {
      feedList: [
        {
          userName: "Parzi",
          date: new Date("HH:mm:ss"),
          type: "kimochi",
          content: "是你帮一个平凡男人、梦想实现的故事",
          tags: ["歌曲", "感情"]
        },
        {
          userName: "Parzi",
          date: Date(),
          type: "movie",

          name: "春光乍泄",
          title: "不如我们从头来过",
          star: 4.5,
          content:
            "她说她和前男友说这句话的时候，前男友说这是不是分手时候的qq密码。",
          tags: ["电影", "感情"]
        },
        {
          userName: "Parzi",
          date: new Date("HH:mm:ss"),
          type: "kimochi",
          content: "如果要拍电影的话,我就找你当女主角。",
          tags: ["歌曲", "感情"]
        },
        {
          userName: "Parzi",
          date: new Date(),
          type: "trip",
          title: "我的无能",
          tags: ["电影", "感情"]
        },
        {
          userName: "Parzi",
          date: new Date(),
          type: "movie",
          title: "不如我们从头来过",
          tags: ["电影", "感情"]
        },
        {
          userName: "Parzi",
          date: new Date(),
          type: "movie",
          title: "不如我们从头来过",
          tags: ["电影", "感情"]
        },
        {
          userName: "Parzi",
          date: new Date(),
          type: "movie",
          title: "不如我们从头来过",
          tags: ["电影", "感情"]
        },
        {
          userName: "Parzi",
          date: new Date(),
          type: "movie",
          title: "不如我们从头来过",
          tags: ["电影", "感情"]
        },
        {
          userName: "Parzi",
          date: new Date(),
          type: "movie",
          title: "不如我们从头来过",
          tags: ["电影", "感情"]
        },
        {
          userName: "Parzi",
          date: new Date(),
          type: "movie",
          title: "不如我们从头来过",
          tags: ["电影", "感情"]
        }
      ]
    };
  },
  components: {
    movie,
    kimochi,
    share,
    trip
  },
  methods: {
    dateFtt(fmt, date) {
      var o = {
        "M+": date.getMonth() + 1, //月份
        "d+": date.getDate(), //日
        "h+": date.getHours(), //小时
        "m+": date.getMinutes(), //分
        "s+": date.getSeconds(), //秒
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度
        S: date.getMilliseconds() //毫秒
      };
      if (/(y+)/.test(fmt))
        fmt = fmt.replace(
          RegExp.$1,
          (date.getFullYear() + "").substr(4 - RegExp.$1.length)
        );
      for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
          fmt = fmt.replace(
            RegExp.$1,
            RegExp.$1.length == 1
              ? o[k]
              : ("00" + o[k]).substr(("" + o[k]).length)
          );
      return fmt;
    }
  },
  created() {},
  mounted() {
    let that = this;
    this.feedList.forEach(element => {
      element.date = that.dateFtt("yyyy/MM/dd hh:mm:ss", new Date());
    });
  }
};
</script>

<style scope>
li {
  list-style: none;
}
.container {
  width: 100%;
  height: 100%;
  padding-top: 40px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: rgb(231, 231, 231);
  text-align: left;
  position: relative;
}
.container ul {
  width: 100%;
}
.feedItem {
  padding: 10px;
  position: relative;
  display: flex;
  flex-direction: row;
}
.feedItem::after {
  display: block;
  content: "";
  position: absolute;
  bottom: 0;
  right: 10%;
  width: 70%;
  height: 2px;
  background-color: rgb(218, 218, 218);
  overflow: visible;
}
.feedRt::before {
  display: block;
  content: "";
  position: absolute;
  top: 60px;
  left: -31.5px;
  width: 3px;
  height: 100%;
  background-color: rgb(201, 201, 201);
}
.feedLf {
  display: inline-block;
  position: sticky;
  top: -10px;
  text-align: right;
  width: 16%;
  height: 100%;
  padding-right: 5px;
  padding-top: 15px;
  z-index: 9;
}
.feedLf img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.feedRt {
  display: inline-block;
  width: 85%;
  position: relative;
}
.date {
  font-size: 12px;
  color: rgb(158, 158, 158);
}
.user {
  font-size: 16px;
  color: rgb(67, 67, 67);
}
.intro {
  font-size: 16px;
  color: rgb(150, 150, 150);
  margin-left: 5px;
}
.content {
  padding: 5px 0px;
  width: 95%;
}
</style>
