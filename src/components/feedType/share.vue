<template>
  <mycard color="#fff">
      111
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
</style>
