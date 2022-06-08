<template>
  <div class="container">
    <div class="nested first">
      No Transform
      <div class="nested scale">
        scale(1.2, 1.2)
        <div class="nested rotate">
          rotate(30deg)
          <div class="target">Target</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Moveable from "moveable";

export default {
  name: "MoveableDemo",
  mounted: function () {
    setTimeout(() => {
      const moveable = new Moveable(document.getElementById("builder-stage"), {
        // If you want to use a group, set multiple targets(type: Array<HTMLElement | SVGElement>).
        target: document.querySelector(".target"),
        resizable: true,
        keepRatio: false,
        throttleResize: 1,
        renderDirections: ["nw", "n", "ne", "w", "e", "sw", "s", "se"],
        edge: false,
        zoom: 1,
        origin: true,
        padding: { left: 0, top: 0, right: 0, bottom: 0 },
      });
      let frame = {
        translate: [0, 0],
      };
      moveable
        .on("resizeStart", (e) => {
          e.setOrigin(["%", "%"]);
          e.dragStart && e.dragStart.set(frame.translate);
        })
        .on("resize", (e) => {
          const beforeTranslate = e.drag.beforeTranslate;

          frame.translate = beforeTranslate;
          e.target.style.width = `${e.width}px`;
          e.target.style.height = `${e.height}px`;
          e.target.style.transform = `translate(${beforeTranslate[0]}px, ${beforeTranslate[1]}px)`;
        });
    }, 2000);
  },
};
</script>

<style scoped>
.nested {
  position: absolute;
  border: 4px solid #ccc;
  width: 100px;
  height: 100px;
  top: 50px;
  left: 70px;
  /* box-sizing: border-box; */
}

.nested.first {
  top: 50px;
}

.nested.rotate {
  transform-origin: 0 0;
  transform: rotate(-30deg);
}

.nested.scale {
  transform: scale(1.5, 1.5);
}

.nested .target {
  top: 50px;
  left: 50px;
}
html,
body {
  position: relative;
  height: 100%;
  margin: 0;
  padding: 0;
}
.description {
  padding: 10px;
}
.target {
  position: absolute;
  width: 100px;
  height: 100px;
  top: 150px;
  left: 100px;
  line-height: 100px;
  text-align: center;
  background: #ee8;
  color: #333;
  font-weight: bold;
  border: 1px solid #333;
  box-sizing: border-box;
}
</style>