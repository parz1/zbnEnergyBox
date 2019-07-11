<template>
  <mycard color="#fff">
    <div class="container">
      <div class="cover">
        <img src="https://raw.githubusercontent.com/parz1/MarkdownPhotos/master/timg.png" alt />
      </div>
      <div class="title">
          <span></span>
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
.container {
  display: flex;
  flex-direction: row;
  justify-content: left;
}
.cover {
  width: 80px;
  height: 80px;
  text-align: center;
  border-radius: 15px;
}
.cover img {
  width: 80px;
  height: 80px;
  border-radius: 10px;
}
</style>
