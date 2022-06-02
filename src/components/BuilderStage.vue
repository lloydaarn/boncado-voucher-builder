<template>
  <div class="container">
    <div id="builder-stage" class="builder-stage">
      <div id="voucher-page-resizer" class="voucher-page-resizer">
        <img src="/img/voucher-back.png" class="img-fluid" alt="">
      </div>
      <div class="voucher-page">
        <div class="voucher-template">
          <div class="voucher-template-content">
            <FreeTransfromTool v-for="element in elements" :key="element.vid" :element="element"></FreeTransfromTool>
            <PageContentElement v-for="element in elements" :key="element.vid" :element="element"></PageContentElement>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FreeTransfromTool from './FreeTransfromTool.vue';
import PageContentElement from './PageContentElement.vue';


export default {
  name: "BuilderStage",
  components: { FreeTransfromTool, PageContentElement },
  props: ["elements"],
  mounted: function () {
    let $voucherContainer = document.querySelector(".voucher-page")
    let $voucherPage = document.querySelector(".voucher-template");
    let $voucherSizer = getComputedStyle(document.getElementById("voucher-page-resizer"));

    function adapt() {
      $voucherContainer.style.width = $voucherSizer.width;
      $voucherContainer.style.height = $voucherSizer.height;
      $voucherPage.style.transform = `scale(${parseFloat($voucherSizer.width) / 756})`;
    }

    $(window).resize(function () {
      adapt();
    })

    adapt();

  }
};
</script>

<style scoped lang="scss">
.builder-stage {
  position: relative;
  max-width: 756px;
  margin: auto;
}

.voucher-page-resizer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

.voucher-page {
  position: relative;
}


.voucher-template {
  position: relative;
  width: 756px;
  height: 370px;
  transform-origin: 0 0;
  background-color: #eee;

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
}
</style>
