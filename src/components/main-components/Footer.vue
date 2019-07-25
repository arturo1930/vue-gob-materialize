<template>
  <div id="footer">
    <footer class="page-footer">
      <div class="container">
        <div class="row"></div>
        <div class="row"></div>
        <div class="row"></div>
        <div class="row"></div>
        <div class="row"></div>
        <div class="row">
          <div class="col l3 s7">
            <p class="grey-text text-lighten-4">
              <img src="./footerlogo.png" />
            </p>
          </div>
          <div v-for="gob in gobMx" :key="gob.id" class="col s3">
            <h5 class="white-text footerFont" v-html="gob.title"></h5>
            <ul v-if="gob.items.length > 0">
              <li v-for="item in gob.items" :key="item.id">
                <div v-html="item"></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container">
          © 2019 Copyright
          <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
import gobInfo from "@/constants/gobInfo.js";
export default {
  data() {
    return {
      gobMx: gobInfo
    };
  },
  mounted() {
    console.log(this.gobMx);
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat&display=swap");
.page-footer {
  border: solid 2px purple;
  background-color: white !important;
  background-image: url("https://framework-gb.cdn.gob.mx/landing/img/fondofooter.svg") !important;
  background-size: cover;
  font-family: Montserrat;
  font-size: 15px;
}
.footerFont {
  font-size: 16px !important;
}
.container {
  width: 95% !important;
}
@media only screen and (min-width: 993px) {
  .row .col.offset-l2 {
    margin-left: 10% !important;
  }
}
</style>
