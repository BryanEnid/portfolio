<template>
  <div id="Skills" class="container" :class="{ blur: blur }"></div>
</template>

<script>
import icon from "../components/AppIcons.vue";

export default {
  components: {
    icon
  },
  props: {
    blur: Boolean,
    screenSize: Boolean
  }
};
</script>

<style lang="less" scoped>
</style>
