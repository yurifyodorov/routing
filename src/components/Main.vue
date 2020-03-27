<template>
  <div class="content">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Navigation",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  background: red;
  height: 200px;
  padding: 20px;
}
</style>