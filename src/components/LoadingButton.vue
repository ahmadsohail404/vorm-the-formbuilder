<template>
  <vs-button gradient @click="openLoading"> Build a form </vs-button>
</template>

<script>
export default {
  name: "loading-button",
  methods: {
    openLoading() {
      const loading = this.$vs.loading({
        target: this.$refs.button,
        scale: "2",
        background: "#0b141d",
        opacity: 0.9,
        color: "#3300ff",
        type: "scale",
      });
      setTimeout(() => {
        loading.close();
        this.$router.push("/builder");
      }, 2000);
    },
  },
};
</script>

<style scoped>
button {
  font-size: 18px;
  border: none;
  font-weight: 700;
  padding: 5px 35px;
  background: linear-gradient(90deg, #3300ff, #e52e71);
}
</style>
