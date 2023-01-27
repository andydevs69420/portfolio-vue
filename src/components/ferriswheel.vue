

<style>

    :root {
        --wheel-spacing: -10%;
    }

    #ferrishweel-wheel {
        padding-top: 330px;
        width: 330px;
        border: 2px dashed #fff;
        left: -175px;
        top: -175px;
    }

    .ferriswheel-slot {
        padding-top: 40%;
        width: 40%;
    }

    .ferriswheel-slot-1 {
        top: calc(-40% + var(--wheel-spacing));
        left: 50%;
        transform: translateX(-50%);
    }

    .ferriswheel-slot-2 {
        bottom: calc(-40% + var(--wheel-spacing));
        left: 50%;
        transform: translateX(-50%);
    }

    .ferriswheel-slot-3 {
        top: 50%;
        left: calc(-40% + var(--wheel-spacing));
        transform: translateY(-50%);
    }

    .ferriswheel-slot-4 {
        top: 50%;
        right: calc(-40% + var(--wheel-spacing));
        transform: translateY(-50%);
    }

    @media screen and (max-width: 768px) {
        #ferrishweel-wheel {
            padding-top: 230px;
            width: 230px;
            border: 2px dashed #fff;
            left: -115px;
            top: -115px;
        }
    }

</style>

<template>
    <div id="ferrishweel-wheel" class="position-absolute rounded-circle" @mousedown="onMouseDown" @mouseup="onMouseUp" @mousemove="onMouseMove">

        <div class="ferriswheel-slot ferriswheel-slot-1 position-absolute rounded-circle shadow-sm bg-white"></div>
        <div class="ferriswheel-slot ferriswheel-slot-2 position-absolute rounded-circle shadow-sm bg-white"></div>
        <div class="ferriswheel-slot ferriswheel-slot-3 position-absolute rounded-circle shadow-sm bg-white"></div>
        <div class="ferriswheel-slot ferriswheel-slot-4 position-absolute rounded-circle shadow-sm bg-white"></div>

    </div>
</template>


<script>
    export default {
        name: "ferriswheel",
        props: {
            willSpin: {
                type: Boolean,
                required: true
            }
        },
        mounted() {
            const wheel = document.getElementById("ferrishweel-wheel");
            const trigg = (e) => this.willSpin;
            window.onscroll = ((e) => {
                if (!trigg()) return;
                wheel.style.transform = `rotate(${window.pageYOffset/2}deg)`;
            });
        }
    }
</script>
