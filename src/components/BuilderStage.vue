<template>
  <div id="builder-stage-container">
    <FreeTransfromTool v-for="element in elements" :key="element.vid" :element="element"></FreeTransfromTool>
    <PageContentElement v-for="element in elements" :key="element.vid" :element="element"></PageContentElement>
  </div>
</template>

<script>
import FreeTransfromTool from './FreeTransfromTool.vue';
import PageContentElement from './PageContentElement.vue';


export default {
    name: "BuilderStage",
    components: { FreeTransfromTool, PageContentElement },
    props: ["elements"]
};
</script>

<style scoped lang="scss">
#builder-stage-container {
  position: relative;
  width: 756px;
  height: 370px;
  margin: auto;
  border: 1px solid #000;
}

.box {
  position: absolute;
  width: 100px;
  height: 50px;
  border: 1px solid #000;
}

.box-1 {
  top: 200px;
  left: 200px;
}

.box-2 {
  top: 300px;
  left: 500px;
}

.content-element {
  position: absolute;
  top: 100px;
  left: 100px;
  width: 100px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
