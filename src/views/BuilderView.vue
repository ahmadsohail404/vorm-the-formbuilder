<template>
  <nav class="navbar navbar-expand-lg navbar-primary bg-primary">
    <div class="name">
      <a class="back" href="">
        <i class="fa-solid fa-circle-chevron-left"></i>
      </a>
      <span>VORM - The Form Builder</span>
      <i id="hammer" class="fa-solid fa-hammer"></i>
    </div>
    <vs-input v-model="value" placeholder="Search" />
    <div class="switch">
      <vs-switch v-model="switchBtn" />
      <span>Theme</span>
      <button type="button" class="btn btn-primary">
        Export<font-awesome-icon icon="fa-solid fa-share" />
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  data: () => ({
    switchBtn: false,
  }),
};
</script>

<style scoped>
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
</style>
