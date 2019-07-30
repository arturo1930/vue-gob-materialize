<template>
  <div>
    <h4>Registrar etapas</h4>
    <div class="row">
      <div class="col s12">
        <ul class="collapsible">
          <li>
            <div class="collapsible-header">
              <i class="material-icons">filter_drama</i>Meta
            </div>
            <div class="collapsible-body">
              <div class="row">
                <div class="input-field col s4">
                  <input value id="meta" type="text" />
                  <label class="active" for="meta">Meta</label>
                </div>
                <div class="input-field col s1">
                  <button class="waves-effect waves-light btn">Guardar</button>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="collapsible-header">
              <i class="material-icons">place</i>Actividad
            </div>
            <div class="collapsible-body">
              <div class="row">
                <div class="input-field col s6">
                  <select>
                    <option value disabled selected>Meta</option>
                    <option value="1">Op 1</option>
                    <option value="2">Op 2</option>
                    <option value="3">Op 3</option>
                  </select>
                  <label>Materialize Select</label>
                </div>
                <div class="input-field col s6">
                  <input id="actividad" type="text" class="validate" />
                  <label for="actividad">Actividad</label>
                </div>
              </div>
              <div class="row">
                <div class="input-field col s6">
                  <input id="producto" type="text" class="validate" />
                  <label for="producto">Producto</label>
                </div>
                <div class="input-field col s6">
                  <input id="responsable" type="text" class="validate" />
                  <label for="responsable">Responsable</label>
                </div>
              </div>
              <div class="row" align="center">
                <button class="waves-effect waves-light btn">Guardar</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="row">
      <div class="col s12">
        <DataTable />
      </div>
    </div>
  </div>
</template>
<script>
import M from "materialize-css";
import DataTable from "@/components/commons/DataTable.vue";

export default {
  name: "formRegistrarEtapas",
  components: {
    DataTable
  },
  mounted() {
    M.AutoInit();
  }
};
</script>
