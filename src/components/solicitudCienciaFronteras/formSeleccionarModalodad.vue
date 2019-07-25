<template>
  <div>
    <h3>Seleccionar modalidad</h3>
    <div>
      <div class="input-field col s12">
        <select>
          <option value disabled selected>Choose your option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>
        <label>Modalidad</label>
      </div>
    </div>
    <div class="row"></div>
    <div class="card-panel teal lighten-2">Notas</div>
    <div class="card-panel teal lighten-2">Notas 2</div>
  </div>
</template>
<script>
import M from "materialize-css";
export default {
  name: "formSeleccionarModalidad",
  mounted() {
    M.AutoInit();
  }
};
</script>
