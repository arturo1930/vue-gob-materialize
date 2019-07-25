import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import ConvocatoriasAdmin from "./views/ConvocatoriasAdmin.vue";

//components
import defaultComponent from "./components/solicitudCienciaFronteras/defaultComponent.vue";
import formDesgloseFinancieroInstitucion from "./components/solicitudCienciaFronteras/formDesgloseFinancieroInstitucion.vue";
import formEnviarSolicitud from "./components/solicitudCienciaFronteras/formEnviarSolicitud.vue";
import formRegistrarEtapas from "./components/solicitudCienciaFronteras/formRegistrarEtapas.vue";
import formRegistrarParticipantes from "./components/solicitudCienciaFronteras/formRegistrarParticipantes.vue";
import formRegistroCoResponsables from "./components/solicitudCienciaFronteras/formRegistroCoResponsables.vue";
import formRegistroDatosPropuesta from "./components/solicitudCienciaFronteras/formRegistroDatosPropuesta.vue";
import formRegistroSujetoApoyo from "./components/solicitudCienciaFronteras/formRegistroSujetoApoyo.vue";
import formSeleccionarModalodad from "./components/solicitudCienciaFronteras/formSeleccionarModalodad.vue";

Vue.component("defaultComponent", defaultComponent);
Vue.component(
  "formDesgloseFinancieroInstitucion",
  formDesgloseFinancieroInstitucion
);
Vue.component("formEnviarSolicitud", formEnviarSolicitud);
Vue.component("formRegistrarEtapas", formRegistrarEtapas);
Vue.component("formRegistrarParticipantes", formRegistrarParticipantes);
Vue.component("formRegistroCoResponsables", formRegistroCoResponsables);
Vue.component("formRegistroDatosPropuesta", formRegistroDatosPropuesta);
Vue.component("formRegistroSujetoApoyo", formRegistroSujetoApoyo);
Vue.component("formSeleccionarModalodad", formSeleccionarModalodad);

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/convocatorias",
      name: "convocatorias",
      component: ConvocatoriasAdmin
    },
    {
      path: "/main",
      name: "main",
      component: () => import("./views/MainConvocatoria.vue")
    }
  ]
});
