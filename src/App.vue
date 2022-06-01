<template>
  <BuilderStage :elements="elements"></BuilderStage>
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
      elements: [
        {
          active: false,
          activeFocus: false,
          vid: "1828",
          key: "element_text_v1828_581342",
          classes: "content-text",
          type: "text",
          html: '<div class="content-editable"><p><span style="font-size: 48px;">Add Heading</span></p></div>',
          status: { lock: false, hide: false },
          styles: {
            top: "89px",
            left: "453px",
            width: "286px",
            height: "68.5625px",
            rotate: "0",
            opacity: "1",
            flip: "1,1",
            textEffects: {
              name: "splice",
              x: "2.70",
              y: "2.70",
              blur: "0",
              color: "rgba(255, 200.707, 0, 1)",
              textFillColor: "transparent",
              textStroke: "2.30",
              label: "",
            },
          },
        },
        {
          active: false,
          activeFocus: false,
          vid: "1828",
          key: "element_image_v1828_672576",
          classes: "content-image",
          type: "image",
          html: '<img src="/img/BoncadoLogoBadge-01.png">',
          status: { lock: false, hide: false },
          styles: {
            top: "113px",
            left: "60px",
            width: "200px",
            height: "200px",
            rotate: "0",
            opacity: "1",
            flip: "-1,-1",
            filters: {
              grayscale: "66.00%",
              sepia: "64.00%",
              blur: "0.00px",
              brightness: "100.00%",
              hue_rotate: "0.00deg",
              saturate: "100.00%",
              contrast: "100.00%",
              invert: "0.00%",
            },
          },
        },
        {
          active: false,
          activeFocus: false,
          vid: "1828",
          key: "element_text_v1828_155002",
          classes: "content-text",
          type: "text",
          html: '<div class="content-editable"><p><span style="font-size: 48px;">Add Heading</span></p></div>',
          status: { lock: false, hide: false },
          styles: {
            top: "239px",
            left: "91px",
            width: "286px",
            height: "68.5625px",
            rotate: "0",
            opacity: "1",
            flip: "1,1",
            textEffects: {
              name: "none",
              x: "0",
              y: "0",
              blur: "0",
              color: "rgba(0, 0, 0, 0)",
              textFillColor: "unset",
              textStroke: "0",
              label: "none",
            },
          },
        },
      ],
      draggable: true,
    };
  },
  methods: {},
  mounted: function () {
    $("body").addClass("tae");
  },
};
</script>

<style lang="scss">
.moveable-free-transform-tool {
  --moveable-color: #11cb9c !important;

  .moveable-size-value {
    color: #11cb9c !important;
  }
}

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
