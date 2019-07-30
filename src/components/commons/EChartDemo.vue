<template>
  <div class="col s12">
    <div class="z-depth-3">
      <v-chart class="echartContent" :options="options" />
    </div>
  </div>
</template>
<script>
export default {
  name: "EchartDemo",
  data() {
    var data = {
      name: "Plan de Trabajo",
      children: [
        {
          name: "Etapa 1",
          children: [
            {
              name: "Objetivo",
              value: 4116,
              children: [
                {
                  name: "Meta 1",
                  value: 1515,
                  children: [
                    {
                      name: "Actividad 1",
                      value: 1,
                      children: [
                        {
                          name: "producto 1",
                          value: 1,
                          children: [
                            {
                              name: "Responsable",
                              value: 1
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  name: "Meta 2",
                  value: 1515
                }
              ]
            }
          ]
        },
        {
          name: "Etapa 2",
          children: [
            {
              name: "Objetivo",
              value: 4116,
              children: [
                {
                  name: "Meta 1",
                  value: 1515,
                  children: [
                    {
                      name: "Actividad 1",
                      value: 1,
                      children: [
                        {
                          name: "producto 1",
                          value: 1,
                          children: [
                            {
                              name: "Responsable",
                              value: 1
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  name: "Meta 2",
                  value: 1515
                }
              ]
            }
          ]
        },
        {
          name: "Etapa 3",
          children: [
            {
              name: "Objetivo",
              value: 4116,
              children: [
                {
                  name: "Meta 1",
                  value: 1515,
                  children: [
                    {
                      name: "Actividad 1",
                      value: 1,
                      children: [
                        {
                          name: "producto 1",
                          value: 1,
                          children: [
                            {
                              name: "Responsable",
                              value: 1
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  name: "Meta 2",
                  value: 1515
                }
              ]
            }
          ]
        }
      ]
    };
    return {
      options: {
        tooltip: {
          trigger: "item",
          triggerOn: "mousemove"
        },
        series: [
          {
            type: "tree",

            data: [data],

            top: "1%",
            left: "7%",
            bottom: "1%",
            right: "20%",

            symbolSize: 7,

            label: {
              normal: {
                position: "left",
                verticalAlign: "middle",
                align: "right",
                fontSize: 9
              }
            },

            leaves: {
              label: {
                normal: {
                  position: "right",
                  verticalAlign: "middle",
                  align: "left"
                }
              }
            },

            expandAndCollapse: true,
            animationDuration: 550,
            animationDurationUpdate: 750
          }
        ]
      }
    };
  }
};
</script>
<style>
.echartContent {
  width: 100% !important;
  height: 500px !important;
}
</style>
