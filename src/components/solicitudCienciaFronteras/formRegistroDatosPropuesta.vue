<template>
  <div>
    <h3>Datos propuesta</h3>
    <div class="row">
      <div class="col s12">
        <draggable
          v-model="myArray"
          group="people"
          @start="drag = true"
          @end="drag = false"
        >
          <div class="dragContent" v-for="element in myArray" :key="element.id">
            {{ element.name }}
          </div>
        </draggable>
      </div>
    </div>
    <div class="row">
      <div class="col s11">
        <draggable
          v-model="myArray"
          group="people"
          @start="drag = true"
          @end="drag = false"
          tag="ul"
          class="collection with-header"
        >
          <li
            class="collection-item list-group-item"
            v-for="element in myArray"
            :key="element.id"
          >
            <div>
              {{ element.name }}
              <div class="secondary-content">
                <i class="material-icons">edit</i>
              </div>
            </div>
          </li>
        </draggable>
      </div>
    </div>
  </div>
</template>
<script>
import draggable from "vuedraggable";
export default {
  name: "formRegistroDatosPropuestas",
  components: {
    draggable
  },
  data() {
    return {
      myArray: [
        {
          name:
            "A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          order: 2,
          fixed: false
        },
        {
          name:
            "B Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          order: 3,
          fixed: false
        },
        {
          name:
            "C Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          order: 4,
          fixed: false
        }
      ]
    };
  }
};
</script>
<style scoped>
.list-group-item {
  cursor: move;
}
.list-group-item :hover {
  background-color: #ddd;
}
.list-group-item div div i {
  cursor: pointer;
}
.dragContent {
  border: solid 1px red;
}
</style>
