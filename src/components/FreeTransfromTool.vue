<template>
  <div 
    class="free-transform-tool"
    v-bind:style="[element.styles]"
  >

  </div>
</template>

<script>
import Moveable from "moveable";

export default {
  name: "FreeTransfromTool",
  props: ["element"],
  mounted: function () {
    const moveable = new Moveable(document.getElementById("builder-stage"), {
      target: this.$el,
      // If the container is null, the position is fixed. (default: parentElement(document.body))
      container: document.getElementById("builder-stage"),
      draggable: true,
      resizable: true,
      rotatable: true,
      warpable: true,
      snappable: true,
      snapContainer: document.getElementById("builder-stage"),
      className: "moveable-free-transform-tool",
      verticalGuidelines: [0, 200, 400],
      horizontalGuidelines: [0, 200, 400],
      snapThreshold: 5,
      isDisplaySnapDigit: true,
      elementGuidelines: this.getElements,
      snapGap: true,
      snapDirections: { top: true, right: true, bottom: true, left: true },
      elementSnapDirections: {
        top: true,
        right: true,
        bottom: true,
        left: true,
      },
      snapDigit: 0,
      // Enabling pinchable lets you use events that
      // can be used in draggable, resizable, scalable, and rotateable.
      pinchable: true, // ["resizable", "scalable", "rotatable"]
      origin: false,
      keepRatio: false,
      // Resize, Scale Events at edges.
      edge: false,
      throttleDrag: 0,
      throttleResize: 0,
      throttleScale: 0,
      throttleRotate: 0,
      renderDirections: ["nw", "n", "ne", "w", "e", "sw", "s", "se"],
    });

    /* draggable */
    moveable
      .on("dragStart", ({ target, clientX, clientY }) => {
        // console.log("onDragStart", target);
      })
      .on(
        "drag",
        ({
          target,
          transform,
          left,
          top,
          right,
          bottom,
          beforeDelta,
          beforeDist,
          delta,
          dist,
          clientX,
          clientY,
        }) => {
          let $element = document.getElementById(this.element.key);

          target.style.left = `${left}px`;
          target.style.top = `${top}px`;

          // $(`#${this.element.key}`).css({
          //   top: `${top}px`,
          //   left: `${left}px`,
          // });

          // console.log(document.getElementById(element.key).style);

          // document.getElementById(element.key).style = {
          //   ...document.getElementById(element.key).style,
          //   left: `${left}px`,
          //   top: `${top}px`
          // }

          $element.style.left = `${left}px`;
          $element.style.top = `${top}px`;
          // console.log("onDrag translate", dist);
        }
      )
      .on("dragEnd", ({ target, isDrag, clientX, clientY }) => {
        // console.log("onDragEnd", target, isDrag);
      });

    /* resizable */
    let frame = {
      translate: [0, 0],
    };
    moveable
      .on("resizeStart", (e) => {
        e.setOrigin(["%", "%"]);
        e.dragStart && e.dragStart.set(frame.translate);
        // console.log(e);
      })
      .on("resize", (e) => {
        // console.log(e);
        const beforeTranslate = e.drag.beforeTranslate;

        // console.log(beforeTranslate);
        // console.log(e.target.style.transform);
        frame.translate = beforeTranslate;
        e.target.style.width = `${e.width}px`;
        e.target.style.height = `${e.height}px`;
        e.target.style.transform = e.drag.transform;

        // document.getElementById("content-element").style.width = `${e.width}px`;
        // document.getElementById(
        //   "content-element"
        // ).style.height = `${e.height}px`;
        // document.getElementById("content-element").style.transform =
        //   e.drag.transform;
      })
      .on("resizeEnd", (e) => {
        //   console.log(e);
      });

    /* rotatable */
    moveable
      .on("rotateStart", ({ target, clientX, clientY }) => {
        // console.log("onRotateStart", target);
        // console.log(target);
      })
      .on(
        "rotate",
        ({ target, beforeDelta, delta, dist, transform, clientX, clientY }) => {
          //   console.log("onRotate", dist);
          target.style.transform = transform;
          // document.getElementById("content-element").style.transform =
          //   transform;
        }
      )
      .on("rotateEnd", ({ target, isDrag, clientX, clientY }) => {
        // console.log("onRotateEnd", target, isDrag);
      });
  },
  computed: {
    getElements() {
     return this.$parent.elements.map((element) => {
       return document.querySelector(`#${element.key}`)
     })
    }
  }
};
</script>

<style lang="scss" scoped>


.free-transform-tool {
  position: absolute;
  z-index: 1;
}
</style>