<template>
  <div class="voucher-page">
    <div class="voucher-template">
      <div class="voucher-template-content">
        <PageContentElement
          v-for="element in voucher.elements"
          :key="element.vid"
          :element="element"
        ></PageContentElement>
      </div>

      <div>
        <FreeTransfromTool
          v-for="element in voucher.elements"
          :key="element.vid"
          :element="element"
        ></FreeTransfromTool>
      </div>
    </div>
  </div>
</template>

<script>
import FreeTransfromTool from "./FreeTransfromTool.vue";
import PageContentElement from "./PageContentElement.vue";

export default {
  name: "VoucherPage",
  components: { FreeTransfromTool, PageContentElement },
  props: ["voucher"],
  data() {
    return {
      test: "1",
    };
  },
  mounted: function () {
    console.log(document.querySelector(".voucher-page"));
    let $voucherContainer = document.querySelector(".voucher-page");
    let $voucherPage = document.querySelector(".voucher-template");
    let $voucherSizer = getComputedStyle(
      document.getElementById("voucher-page-resizer")
    );

    function adapt() {
      $voucherContainer.style.width = $voucherSizer.width;
      $voucherContainer.style.height = $voucherSizer.height;
      $voucherPage.style.transform = `scale(${
        parseFloat($voucherSizer.width) / 756
      })`;
    }

    $(window).resize(function () {
      adapt();
    });

    adapt();
  },
};
</script>

<style scoped lang="scss">
.voucher-page {
  position: relative;
}

.voucher-template {
  position: relative;
  width: 756px;
  height: 370px;
  transform-origin: 0 0;
  background-color: #eee;

  .voucher-template-content {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
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
}
</style>