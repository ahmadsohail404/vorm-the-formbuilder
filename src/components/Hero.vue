<template>
  <div class="heading">
    <h1 id="logo-title">
      <span>VORM </span><span>&rarr;</span> THE FORM BUILDER
      <i id="hammer" class="fa-solid fa-hammer"></i>
    </h1>
    <LoadingButton />
  </div>
</template>

<script>
import LoadingButton from "./LoadingButton.vue";
export default { components: { LoadingButton } };
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
</style>
