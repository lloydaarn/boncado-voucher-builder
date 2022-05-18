<template>
  <BuilderStage></BuilderStage>
</template>

<script>
import BuilderStage from "./components/BuilderStage.vue";

export default {
  name: "App",
  components: {
    BuilderStage,
  },
  data() {
    return {
      draggable: true,
    };
  },
  methods: {},
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  max-width: 920px;
  margin: auto;
}
</style>
