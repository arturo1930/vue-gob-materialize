<template>
  <div id="app">
    <Navbar />
    <Sidebar />
    <div id="wrapper">
      <router-view />
    </div>
    <Footer />
  </div>
</template>
<script>
import Navbar from "@/components/main-components/Navbar.vue";
import Sidebar from "@/components/main-components/Sidebar.vue";
import Footer from "@/components/main-components/Footer.vue";
import M from "materialize-css";
export default {
  name: "App",
  components: {
    Navbar,
    Sidebar,
    Footer
  },
  mounted() {
    console.log("AUTO INIT");
    M.AutoInit();
  }
};
</script>
<style>
#wrapper {
  min-height: 70vh;
}
</style>
