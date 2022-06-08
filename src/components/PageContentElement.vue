<template>
  <div
    class="voucher-content-element"
    :id="element.key"
    v-html="element.html"
    v-bind:style="[element.styles]"
  ></div>
</template>

<script>
export default {
  name: "PageContentElement",
  props: ["element"],
  data() {
    return {};
  },
  methods: {},
  mounted: function () {
    if (this.element.type == "text") {
      console.log(this.$el.querySelector(".content-editable"));
      tinymce.init({
        target: this.$el.querySelector(".content-editable"),
        inline: true,
        skin: false
      });
    }
  },
};
</script>

<style lang="scss">
.voucher-content-element {
  position: absolute;

  .content-editable {
    line-height: 1.42857143;
  }

  p {
    margin: 0;
    line-height: 1.42857143;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }
}
</style>