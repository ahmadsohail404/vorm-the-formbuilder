<template>
  <div id="signin">
    <Hero />
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import LoadingButton from "@/components/LoadingButton.vue";
import Hero from "@/components/Hero.vue";
export default { components: { Footer, LoadingButton, Hero } };
</script>

<style scoped>
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
