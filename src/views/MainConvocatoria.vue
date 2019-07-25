<template>
  <div class="main">
    <Sidebar :convocatoria="this.convocatoria" />
    <!-- Page Layout here -->
    <div class="row">
      <div class="col s2" id="sidebarMenu">
        <div class="collection">
          <a
            v-for="item in menu"
            :key="item.id"
            class="collection-item"
            @click="loadComponent(item.component)"
          >
            {{ item.name }}
          </a>
        </div>
      </div>

      <div id="pageContent" class="col s10">
        <!-- Teal page content  -->
        MAIN
        <a href="#" data-target="slide-out" class="sidenav-trigger">
          <button class="waves-effect waves-light btn" @click="logout()">
            <i class="material-icons">arrow_back</i>
          </button>
          &nbsp;
          <button class="waves-effect waves-light btn">
            <i class="material-icons">menu</i>
          </button>
        </a>
        <h3>{{ this.convocatoria.title }}</h3>
        <keep-alive>
          <component :is="mainComponent" />
        </keep-alive>
        <!-- page content -->
      </div>
    </div>
  </div>
</template>
<script>
import Sidebar from "@/components/convocatorias/Sidebar.vue";
import M from "materialize-css";
export default {
  name: "mainConvocatorias",
  components: {
    Sidebar
  },
  data() {
    return {
      mainComponent: "defaultComponent",
      convocatoria:
        this.$route.params.convocatoria != undefined ||
        this.$route.params.convocatoria === ""
          ? this.$route.params.convocatoria
          : null,
      menu: [
        {
          name: "Seleccionar modalidad",
          component: "formSeleccionarModalodad"
        },
        {
          name: "Registrar datos de la propuesta",
          component: "formRegistroDatosPropuesta"
        },
        {
          name: "Registrar sujeto de apoyo",
          component: "formRegistroSujetoApoyo"
        },
        {
          name: "Registar co responsables",
          component: "formRegistroCoResponsables"
        },
        {
          name: "Registrar participantes",
          component: "formRegistrarParticipantes"
        },
        {
          name: "Registrar Etapas",
          component: "formRegistrarEtapas"
        },
        {
          name: "Crear desglose financiero por institución",
          component: "formDesgloseFinancieroInstitucion"
        },
        {
          name: "Enviar solicitud",
          component: "formEnviarSolicitud"
        }
      ]
    };
  },
  created() {
    if (this.convocatoria === null) {
      this.$router.push("/");
    }
  },
  mounted() {
    console.log("mounted M autoinit");
    M.AutoInit();
    console.log(this.convocatoria);
  },
  methods: {
    logout() {
      this.$router.push("/login");
    },
    loadComponent(mainComponent) {
      this.mainComponent = mainComponent;
    }
  }
};
</script>
<style>
#sidebarMenu {
  /* border: solid red 1px; */
  border-right: solid gray 2px;
  height: 100%;
  min-height: 100vh;
}
#pageContent {
  /* border: solid green 1px; */
  min-height: 100vh;
}
</style>
