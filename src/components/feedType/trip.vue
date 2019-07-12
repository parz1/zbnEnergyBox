<template>
  <mycard color="#fff" padding="0">
    <div class="con">
      <div class="cover">11</div>
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
  flex-direction: row;
  justify-content: left;
}
.cover {
  width: 100%;
  height: 150px;
  text-align: center;
  background: #000;
  border-radius: 15px;
}
.cover img {
  width: 80px;
  height: 80px;
  border-radius: 10px;
}
</style>
