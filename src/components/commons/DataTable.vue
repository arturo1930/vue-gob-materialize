<template>
  <div class="z-depth-3 dataTableContainer">
    <!--<button id="addRow">Add</button>-->
    <div class="dataTableContentMargin">
      <table class="dataTable">
        <thead>
          <tr>
            <th>Etapas</th>
            <th>Objetivos</th>
            <th>Metas</th>
            <th>Actividades</th>
            <th>Productos</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Etapas</td>
            <td>Objetivos</td>
            <td>Metas</td>
            <td>Actividades</td>
            <td>Productos</td>
          </tr>
          <tr>
            <td>Etapas</td>
            <td>Objetivos</td>
            <td>Metas</td>
            <td>Actividades</td>
            <td>Productos</td>
          </tr>
          <tr>
            <td>Etapas</td>
            <td>Objetivos</td>
            <td>Metas</td>
            <td>Actividades</td>
            <td>Productos</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
import "datatables.net";
import "datatables.net-buttons";

import "datatables.net-buttons/js/buttons.colVis.js";
import "datatables.net-buttons/js/buttons.html5.js";
import "datatables.net-buttons/js/buttons.flash.js";
import "datatables.net-buttons/js/buttons.print.js";

export default {
  mounted() {
    /** ADD ROW 
     * var t = $(".dataTable").DataTable();
    var counter = 1;

    $("#addRow").on("click", function() {
      t.row
        .add([
          counter + ".1",
          counter + ".2",
          counter + ".3",
          counter + ".4",
          counter + ".5"
        ])
        .draw(false);

      counter++;
    });

    // Automatically add a first row of data
    $("#addRow").click();
    */
    $(".dataTable").DataTable({
      dom: "Bfrtip",
      buttons: ["copyHtml5", "excelHtml5", "csvHtml5", "pdfHtml5"]
    });
  }
};
</script>
<style scoped>
@import "https://cdn.datatables.net/1.10.19/css/jquery.dataTables.min.css";
@import "https://cdn.datatables.net/buttons/1.5.6/css/buttons.dataTables.min.css";
.dataTableContainer {
  overflow: auto;
}
.dataTableContentMargin {
  margin: 10px;
}
</style>
