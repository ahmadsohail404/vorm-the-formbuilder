<template>
  <div id="signin">
    <Header />
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
export default { components: { Footer, Header } };
</script>

<style scoped>
.heading {
  min-width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

@media (max-width: 500px) {
  .heading {
    min-width: 100vw;
    display: flex;
    flex-direction: column;
    padding: 40px;
    align-items: center;
    justify-content: space-evenly;
  }
  h1 {
    border: none !important;
    margin-bottom: 40px;
  }
  h1 > span {
    display: block;
  }
  #hammer {
    display: none;
  }
}

h1 {
  padding: 10px;
  display: inline-block;
  border-bottom: 1px solid white;
  font-weight: 700;
  font-size: 40px;
  font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica",
    "Arial", sans-serif;
  background: linear-gradient(
    121.57deg,
    #ffffff 18.77%,
    rgba(255, 255, 255, 0.66) 60.15%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
button {
  font-size: 18px;
  border: none;
  padding: 10px 15px;
  width: 200px;
  background: linear-gradient(90deg, #3300ff, #e52e71);
}
button:hover {
  background: linear-gradient(
    121.57deg,
    #ffffff 18.77%,
    rgba(255, 255, 255, 0.66) 60.15%
  );
  color: #e52e71;
}
#signin {
  background-color: #0b141d;
  border: 5px solid #e52e71;
  text-align: center;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100vh;
}
</style>
