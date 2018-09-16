<template>
  <div>
      <app-header/>
      <router-view/>
      <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "./components/includes/Header.vue";
import Footer from "./components/includes/Footer.vue";
export default {
  components: {
    appHeader: Header,
    appFooter: Footer
  }
};
</script>

<style>
  @import "../node_modules/bootstrap/dist/css/bootstrap.css";
  @import "../src/assets/css/style.css";
</style>
