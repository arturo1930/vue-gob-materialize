<template>
  <div>
    <h4>Seleccionar modalidad</h4>
    <div class="row">
      <form class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <select v-model="convocatoria.modalidad.modalidad">
              <option value disabled selected>Seleccionar modalidad</option>
              <option value="1">Modalidad 1</option>
              <option value="2">Modalidad 2</option>
              <option value="3">Modalidad 3</option>
            </select>
            <label>Modalidad</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s6">
            <label>
              <input type="checkbox" class="filled-in" checked="checked" />
              <span>Investigación Multidiciplinaria</span>
            </label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s6">
            <select v-model="convocatoria.modalidad.areaConocomiento">
              <option value disabled selected>Seleccionar modalidad</option>
              <option value="1">Modalidad 1</option>
              <option value="2">Modalidad 2</option>
              <option value="3">Modalidad 3</option>
            </select>
            <label>Área de conocimiento</label>
          </div>
          <div class="input-field col s6">
            <select v-model="convocatoria.modalidad.subDiciplina">
              <option value disabled selected>Seleccionar modalidad</option>
              <option value="1">Modalidad 1</option>
              <option value="2">Modalidad 2</option>
              <option value="3">Modalidad 3</option>
            </select>
            <label>Sub diciplina</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s6">
            <input
              id="palabraClave1"
              type="text"
              v-model="convocatoria.modalidad.palabraClave1"
            />
            <label for="palabraClave1">Palabra clave 1</label>
          </div>
          <div class="input-field col s6">
            <input
              id="palabraClave2"
              type="text"
              v-model="convocatoria.modalidad.palabraClave2"
            />
            <label for="palabraClave2">Palabra clave 2</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s6">
            <input
              id="palabraClave3"
              type="text"
              v-model="convocatoria.modalidad.palabraClave3"
            />
            <label for="palabraClave3">Palabra clave 3</label>
          </div>
          <div class="input-field col s6">
            <input
              id="palabraClave4"
              type="text"
              v-model="convocatoria.modalidad.palabraClave4"
            />
            <label for="palabraClave4">Palabra clave 4</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s6">
            <input
              id="palabraClave5"
              type="text"
              v-model="convocatoria.modalidad.palabraClave5"
            />
            <label for="palabraClave5">Palabra clave 5</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s6">
            <input
              id="tituloPropuesta"
              type="text"
              v-model="convocatoria.modalidad.tituloPropuesta"
            />
            <label for="tipoPropuesta">Titulo de la popuesta</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <textarea
              id="resumenEjecutivo"
              class="materialize-textarea"
              v-model="convocatoria.modalidad.resumenEjecutivo"
            ></textarea>
            <label for="resumenEjecutivo">Resumen ejecutivo</label>
            <vue-editor
              id="editor"
              v-model="convocatoria.modalidad.resumenEjecutivo"
              :editorToolbar="customToolbar"
            ></vue-editor>
          </div>
        </div>
        <div class="input-field col s12">
          <div align="center">
            <button class="btn waves-effect waves-light" type="button">
              Guardar
              <i class="material-icons right">send</i>
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import M from "materialize-css";
import { VueEditor } from "vue2-editor";
export default {
  name: "formSeleccionarModalidad",
  components: {
    VueEditor
  },
  data() {
    return {
      convocatoria:
        localStorage.getItem("convocatoria") !== null
          ? JSON.parse(localStorage.getItem("convocatoria"))
          : null,
      customToolbar: [
        ["bold", "italic", "underline"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["image", "code-block"]
      ]
    };
  },
  mounted() {
    M.AutoInit();
    M.updateTextFields();
    console.log("mounted");
    console.log(localStorage.getItem("convocatoria"));
    console.log(this.modalidad);
  },
  updated() {
    console.log("updated");
    localStorage.setItem("convocatoria", JSON.stringify(this.convocatoria));
  }
};
</script>
<style>
#editor {
  height: 350px;
  width: 100%;
}
</style>
