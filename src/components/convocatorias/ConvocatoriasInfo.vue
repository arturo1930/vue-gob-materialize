<template>
  <div>
    <div class="row">
      convocatorias Info
    </div>
    <div class="row"></div>
    <div class="row">
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
                @click="goLogin"
              >
                Entrar
                <i class="material-icons right">
                  send
                </i>
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
  name: "convocatoriasInfo",
  data() {
    return {
      convocatorias: [
        {
          id: 1,
          title: "Convocatoria 1",
          description: "Descripción",
          img: "https://materializecss.com/images/sample-1.jpg",
          path: "convocatoria"
        },
        {
          id: 2,
          title: "Convocatoria 2",
          description: "Descripción",
          img: "https://materializecss.com/images/sample-1.jpg",
          path: "convocatoria"
        },
        {
          id: 3,
          title: "Convocatoria 3",
          description: "Descripción",
          img: "https://materializecss.com/images/sample-1.jpg",
          path: "convocatoria"
        },
        {
          id: 4,
          title: "Convocatoria 4",
          description: "Descripción",
          img: "https://materializecss.com/images/sample-1.jpg",
          path: "convocatoria"
        },
        {
          id: 5,
          title: "Convocatoria 5",
          description: "Descripción",
          img: "https://materializecss.com/images/sample-1.jpg",
          path: "convocatoria"
        },
        {
          id: 6,
          title: "Convocatoria 6",
          description: "Descripción",
          img: "https://materializecss.com/images/sample-1.jpg",
          path: "convocatoria"
        },
        {
          id: 7,
          title: "Convocatoria 7",
          description: "Descripción",
          img: "https://materializecss.com/images/sample-1.jpg",
          path: "convocatoria"
        },
        {
          id: 8,
          title: "Convocatoria 8",
          description: "Descripción",
          img: "https://materializecss.com/images/sample-1.jpg",
          path: "convocatoria"
        }
      ]
    };
  },
  methods: {
    goLogin() {
      console.log("go login");
      this.$router.push("login");
      window.scrollTo(0, 0);
    },
    go() {
      console.log("go test");
      this.$router.push("login");
    }
  }
};
</script>
