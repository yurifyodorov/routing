<template>
  <div>
    <Header title="Page2"/>
    <Main />
  </div>
</template>

<script>
import Header from "../components/Header"
import Main from "../components/Main"

export default {
  name: "Home",
  components: {
    Header,
    Main
  }
};
</script>