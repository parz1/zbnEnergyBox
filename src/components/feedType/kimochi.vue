<template>
  <div class="box">
      {{content}}
  </div>
</template>

<script>
import mycard from "@/components/minicompo/mycard";
export default {
    props:[
        'content'
    ],
  data() {
    return { };
  },
  components: {
    mycard
  }
};
</script>

<style scoped>
.box {
  font-weight: 300;
  font-size: 18px;
}
</style>
