<template>
  <div class="navigation">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/page1">page1</router-link>
      <router-link to="/page2">page2</router-link>
      <router-link to="/page3">page3</router-link>
      <router-link to="/page4">page4</router-link>
      <router-link to="/page5">page5</router-link>
    </div>
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
.navigation {
  background: green;
}
</style>
