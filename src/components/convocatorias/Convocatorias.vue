<template>
  <div>
    <div class="row">Convocatorias</div>
    <div class="row"></div>
    <div class="row">
      <h4>Mis convocatorias</h4>
      <div
        class="col s12 m4"
        v-for="convocatoria in convocatoriasActuales"
        :key="convocatoria.id"
      >
        <div class="card">
          <div class="card-image">
            <!--<img :src="convocatoria.img" />-->
          </div>
          <div class="card-content">
            <span class="card-title" v-text="convocatoria.title"></span>
            <p v-text="convocatoria.description"></p>
            <hr />
            <p>
              <button
                class="btn waves-effect waves-light"
                type="button"
                name="action"
                @click="goPath(convocatoria)"
              >
                Entrar
                <i class="material-icons right">send</i>
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div class="row">
      <h4>Convocatorias Abiertas</h4>
      <div
        class="col s12 m4"
        v-for="convocatoria in convocatorias"
        :key="convocatoria.id"
      >
        <div class="card">
          <div class="card-image">
            <!--<img :src="convocatoria.img" />-->
          </div>
          <div class="card-content">
            <span class="card-title" v-text="convocatoria.title"></span>
            <p v-text="convocatoria.description"></p>
            <hr />
            <p>
              <button
                class="btn waves-effect waves-light"
                type="button"
                name="action"
                @click="goPath(convocatoria)"
              >
                Entrar
                <i class="material-icons right">send</i>
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Convocatorias",
  data() {
    return {
      convocatoriasActuales: [
        {
          id: 1,
          title: "Convocatoria 1",
          description: "Descripción",
          img: "https://materializecss.com/images/sample-1.jpg",
          path: "main"
        },
        {
          id: 2,
          title: "Convocatoria 2",
          description: "Descripción",
          img: "https://materializecss.com/images/sample-1.jpg",
          path: "main"
        }
      ],
      convocatorias: [
        {
          id: 3,
          title: "Convocatoria 3",
          description: "Descripción",
          img: "https://materializecss.com/images/sample-1.jpg",
          path: "main"
        },
        {
          id: 4,
          title: "Convocatoria 4",
          description: "Descripción",
          img: "https://materializecss.com/images/sample-1.jpg",
          path: "main"
        },
        {
          id: 5,
          title: "Convocatoria 5",
          description: "Descripción",
          img: "https://materializecss.com/images/sample-1.jpg",
          path: "main"
        },
        {
          id: 6,
          title: "Convocatoria 6",
          description: "Descripción",
          img: "https://materializecss.com/images/sample-1.jpg",
          path: "main"
        },
        {
          id: 7,
          title: "Convocatoria 7",
          description: "Descripción",
          img: "https://materializecss.com/images/sample-1.jpg",
          path: "main"
        },
        {
          id: 8,
          title: "Convocatoria 8",
          description: "Descripción",
          img: "https://materializecss.com/images/sample-1.jpg",
          path: "main"
        }
      ]
    };
  },
  methods: {
    goPath(convocatoria) {
      console.log(convocatoria);
      this.$router.push({ name: convocatoria.path, params: { convocatoria } });
      window.scrollTo(0, 0);
    }
  }
};
</script>
