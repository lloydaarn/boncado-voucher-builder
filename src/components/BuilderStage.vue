<template>
    <div id="builder-stage-container">
        <div class="target">
            <div class="content-editable" contenteditable="true">
                target
            </div>
        </div>
    </div>
</template>

<script>
import Moveable from "moveable";

export default {
    name: "BuilderStage",
    mounted: function () {
        const moveable = new Moveable(document.body, {
            target: document.querySelectorAll(".target"),
            // If the container is null, the position is fixed. (default: parentElement(document.body))
            container: document.body,
            draggable: true,
            resizable: true,
            rotatable: true,
            warpable: true,
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
            renderDirections: ["nw","n","ne","w","e","sw","s","se"],
        });

        /* draggable */
        moveable
            .on("dragStart", ({ target, clientX, clientY }) => {
                console.log("onDragStart", target);
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
                    console.log("onDrag left, top", left, top);
                    target.style.left = `${left}px`;
                    target.style.top = `${top}px`;
                    // console.log("onDrag translate", dist);
                    // target.style.transform = transform;
                }
            )
            .on("dragEnd", ({ target, isDrag, clientX, clientY }) => {
                console.log("onDragEnd", target, isDrag);
            });

        /* resizable */
        let frame = {
    translate: [0,0],
};
       moveable.on("resizeStart", e => {
            e.setOrigin(["%", "%"]);
            e.dragStart && e.dragStart.set(frame.translate);
        }).on("resize", e => {
            const beforeTranslate = e.drag.beforeTranslate;

            frame.translate = beforeTranslate;
            e.target.style.width = `${e.width}px`;
            e.target.style.height = `${e.height}px`;
            e.target.style.transform = `translate(${beforeTranslate[0]}px, ${beforeTranslate[1]}px)`;
        });


        /* rotatable */
        moveable.on("rotateStart", ({ target, clientX, clientY }) => {
            console.log("onRotateStart", target);
        }).on("rotate", ({ target, beforeDelta, delta, dist, transform, clientX, clientY }) => {
            console.log("onRotate", dist);
            target.style.transform = transform;
        }).on("rotateEnd", ({ target, isDrag, clientX, clientY }) => {
            console.log("onRotateEnd", target, isDrag);
        });

        /* warpable */
        this.matrix = [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1,
        ];
        moveable.on("warpStart", ({ target, clientX, clientY }) => {
            console.log("onWarpStart", target);
        }).on("warp", ({
            target,
            clientX,
            clientY,
            delta,
            dist,
            multiply,
            transform,
        }) => {
            console.log("onWarp", target);
            // target.style.transform = transform;
            this.matrix = multiply(this.matrix, delta);
            target.style.transform = `matrix3d(${this.matrix.join(",")})`;
        }).on("warpEnd", ({ target, isDrag, clientX, clientY }) => {
            console.log("onWarpEnd", target, isDrag);
        });

        /* pinchable */
        // Enabling pinchable lets you use events that
        // can be used in draggable, resizable, scalable, and rotateable.
        moveable.on("pinchStart", ({ target, clientX, clientY }) => {
            // pinchStart event occur before dragStart, rotateStart, scaleStart, resizeStart
            console.log("onPinchStart");
        }).on("pinch", ({ target, clientX, clientY, datas }) => {
            // pinch event occur before drag, rotate, scale, resize
            console.log("onPinch");
        }).on("pinchEnd", ({ isDrag, target, clientX, clientY, datas }) => {
            // pinchEnd event occur before dragEnd, rotateEnd, scaleEnd, resizeEnd
            console.log("onPinchEnd");
        });
    },

};
</script>

<style scoped lang="scss">
#builder-stage-container {
    position: relative;
    width: 700px;
    height: 500px;
    margin: auto;
    border: 1px solid #ddd;
}

.target {
    position: absolute;
    width: 150px;
}
</style>
