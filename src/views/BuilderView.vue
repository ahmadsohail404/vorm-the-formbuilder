<template>
  <div class="builder">
    <nav class="navbar navbar-expand-lg navbar-primary bg-primary">
      <div class="name">
        <a class="back" href="">
          <i class="fa-solid fa-circle-chevron-left"></i>
        </a>
        <span>VORM - The Form Builder</span>
        <i id="hammer" class="fa-solid fa-hammer"></i>
      </div>
      <!-- TODO: v-model="value" -->
      <vs-input placeholder="Search" />
      <div class="switch">
        <!-- TODO:  v-model="switchBtn" put it as attr of vs-switch -->
        <vs-switch />
        <span>Theme</span>
        <button type="button" @click="downloadFile()" class="btn btn-primary">
          Export JSON<font-awesome-icon icon="fa-solid fa-share" />
        </button>
      </div>
    </nav>
    <div class="center examplex">
      <div class="center grid">
        <vs-row>
          <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="2">
            <div class="elements">
              <draggable
                class="dragArea coulmns"
                :list="elements"
                :group="{ name: 'element', pull: 'clone', put: false }"
              >
                <div
                  class="element column is-half"
                  v-for="ele in elements"
                  :key="ele.label"
                >
                  <span class="ion" v-html="ele.icon"></span>
                  <span style="color: grey">{{ ele.type }}</span>
                </div>
              </draggable>
            </div>
          </vs-col>
          <vs-col w="8">
            <div class="row">
              <div>
                <div class="buttons">
                  <vs-button primary @click="form.push([])">
                    <ion-icon class="icon" name="add-outline"></ion-icon>&nbsp;
                    Add Row
                  </vs-button>
                  <h4
                    style="color: whitesmoke"
                    @click="Switch(0)"
                    class="active"
                    id="Form"
                  >
                    Form
                  </h4>
                  <vs-button primary @click="resetForm">
                    <ion-icon
                      style="padding: 0 10px"
                      name="trash-outline"
                    ></ion-icon>
                    Reset form
                  </vs-button>
                </div>
              </div>
            </div>
            <div class="dash">
              <div v-if="activeTab === 0">
                <v-row
                  style="padding: 5px"
                  v-for="(row, index) in form"
                  :key="index"
                >
                  <div
                    style="
                      width: 100%;
                      border-bottom: 1px solid #e52e71;
                      border-top: 1px solid #e52e71;
                    "
                  >
                    <draggable
                      class="activeArea roww"
                      style="width: 100%"
                      :list="row"
                      :group="'element'"
                    >
                      <vs-col
                        :size="element.size"
                        class="element"
                        v-for="(element, ind) in row"
                        :key="element.row"
                      >
                        <div class="top">
                          <span>{{ element.type }}</span>
                          <span>
                            <ion-icon
                              style="color: red; cursor: pointer"
                              @click="form[index].splice(ind, 1)"
                              name="close-outline"
                            >
                            </ion-icon>
                          </span>
                        </div>
                        <div class="label">
                          {{ element.label }}
                        </div>
                      </vs-col>
                    </draggable>
                  </div>
                </v-row>
              </div>
            </div>
          </vs-col>
          <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="2">
            <h4 style="color: white">
              Form JSON
              <i class="fa-brands fa-node-js"></i>
            </h4>
            <json-viewer
              style="text-align: left"
              :value="form"
              :expand-depth="3"
              theme="jv-light"
            ></json-viewer>
          </vs-col>
        </vs-row>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import Footer from "@/components/Footer.vue";
import exportFromJSON from "export-from-json";

export default {
  name: "BuilderView",
  data() {
    return {
      active: false,
      activeTab: 0,
      elements: [
        {
          type: "Text",
          size: 0,
          icon: '<ion-icon name="mail-outline"></ion-icon>',
        },
        {
          type: "Email",
          size: 0,
          icon: '<ion-icon name="at-outline"></ion-icon>',
        },
        {
          type: "File",
          size: 0,
          icon: '<ion-icon name="document-outline"></ion-icon>',
        },
        {
          type: "Password",
          size: 0,
          icon: '<ion-icon name="lock-closed-outline"></ion-icon>',
        },
        {
          type: "Number",
          size: 0,
          icon: '<ion-icon name="bar-chart-outline"></ion-icon>',
        },
        {
          type: "Url",
          size: 0,
          icon: '<ion-icon name="globe-outline"></ion-icon>',
        },
        {
          type: "File",
          size: 0,
          icon: '<ion-icon name="newspaper-outline"></ion-icon>',
        },
        {
          type: "Date Picker",
          size: 0,
          icon: '<ion-icon name="calendar-outline"></ion-icon>',
        },
        {
          type: "Time Picker",
          size: 0,
          icon: '<ion-icon name="time-outline"></ion-icon>',
        },
        {
          type: "Switch",
          size: 0,
          icon: '<ion-icon name="toggle-outline"></ion-icon>',
        },
        {
          type: "Checkbox",
          size: 0,
          icon: '<ion-icon name="checkbox-outline"></ion-icon>',
        },
        {
          type: "Options",
          size: 0,
          icon: '<ion-icon name="options-outline"></ion-icon>',
        },
        {
          type: "Radio",
          size: 0,
          icon: '<ion-icon name="ellipse-outline"></ion-icon>',
        },
      ],
      form: [],
    };
  },
  components: {
    draggable,
    Footer,
  },
  mounted() {
    this.$vToastify.success("Form reset successful");
  },
  methods: {
    downloadFile() {
      const data = this.form;
      if (data.length == 0) {
        this.$vToastify.error("Cannot export an empty form");
        return;
      }
      const fileName = "form-data";
      const exportType = exportFromJSON.types.json;

      if (data) exportFromJSON({ data, fileName, exportType });
    },
    resetForm() {
      location.reload();
      this.$vToastify.success("Form reset successful");
    },
    Switch(ind) {
      if (ind === 1) {
        this.activeTab = 1;
        this.$el.querySelector("#Form").classList.remove("active");
      } else if (ind === 0) {
        this.activeTab = 0;
        this.$el.querySelector("#Form").classList.add("active");
      } else {
        this.activeTab = 2;
        this.$el.querySelector("#Form").classList.remove("active");
      }
    },
  },
};
</script>

<style scoped>
.buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.builder {
  background: #1e2023;
}

#Form:hover {
  color: #e52e71 !important;
  cursor: pointer;
}

aside {
  left: 0;
  position: fixed;
  padding: 20px;
  height: 500px;
  background: red;
}
section {
  height: 500px;
  background: blue;
}

nav {
  padding: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: linear-gradient(90deg, #3300ff, #e52e71);
}

@media (max-width: 500px) {
  vs-input {
    display: none !important;
  }
  .switch {
    display: none !important;
  }
  nav {
    display: flex;
    justify-content: center;
  }
}

.name {
  font-size: 18px;
  left: 0;
  position: fixed;
  color: aliceblue;
  padding: 15px;
  font-weight: 700;
}
vs-switch {
  background: #000;
  padding: 10px;
}

.switch {
  right: 20px;
  position: fixed;
  display: flex;
  align-items: center;
}
.switch > span {
  font-weight: 700;
  color: aliceblue;
  padding: 5px;
}

i {
  padding: 10px;
  color: aliceblue;
}
.fa-share {
  right: 0;
  position: fixed;
  padding-right: 20px;
}
button {
  padding: 5px 35px;
  margin: 30px;
}
.fa-circle-chevron-left {
  padding-right: 20px;
  font-size: 18px;
}
.fa-circle-chevron-left:hover {
  color: #e52e71;
}

.row {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: 0;
}

.active {
  border-bottom: 2px solid #e52e71;
}

.dash {
  border: 2px grey dashed;
  height: 60vh;
  margin: 5px;
}

.grid {
  margin-top: 50px;
}

.element {
  background-color: rgb(48, 48, 48);
  margin: 7px;
  height: 7vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.element .ion {
  font-size: 32px;
  color: #ffffff;
}

.icon {
  font-size: 18px;
  margin-right: 5px;
  color: inherit;
}

.elements {
  height: 90vh;
  overflow: scroll;
  padding-left: 5px;
  position: fixed;
  top: 70px;
  width: 200px;
}

.top {
  display: flex;
  justify-content: space-between;
  color: white;
  padding: 5px;
}

.top ion-icon {
  font-size: 1.3em;
}

.roww {
  display: flex;
}
</style>
