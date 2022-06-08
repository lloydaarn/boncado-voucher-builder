<template>
  <div class="container">
    <div id="builder-stage" class="builder-stage">
      <div id="voucher-page-resizer" class="voucher-page-resizer">
        <img src="/img/voucher-back.png" class="img-fluid" alt="">
      </div>

      <VoucherPage v-for="voucher in vouchers" :voucher="voucher" :key="voucher.vid"></VoucherPage>

    </div>
  </div>
</template>

<script>
import VoucherPage from './VoucherPage.vue';

export default {
  name: "BuilderStage",
  components: { VoucherPage },
  props: ["vouchers"],
  mounted: function () {

  }
};
</script>

<style scoped lang="scss">
.builder-stage {
  position: relative;
  max-width: 756px;
  min-height: 400px;
  margin: auto;
}

.voucher-page-resizer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
</style>
