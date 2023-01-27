

<style>

    .glasscard {
        border: 1px solid rgba(255, 255, 255, 0.411);
    }

    .glasscard-overlay-bg, .glasscard-overlay-fg {
        top:0;
        left:0;
        width: 100%;
        height: 100%;
        border-radius: inherit !important;
    }

    .glasscard-overlay-bg {
        background-color: rgba(255, 255, 255, 0.06);
        backdrop-filter: blur(4px);
        z-index: 1;
    }

    .glasscard-overlay-fg {
        filter: blur(16px);
        z-index: 2;
    }

    .glasscard-wrapper {
        width: 100%;
        height: 100%;
        z-index: 3;
    }

</style>

<template>

    <div :id="id" class="glasscard d-block position-relative mx-auto text-light rounded-4">

        <div class="glasscard-overlay-bg position-absolute"></div>
        <div class="glasscard-overlay-fg position-absolute"></div>

        <div class="glasscard-wrapper position-relative">
            <slot/>
        </div>

    </div>

</template>

<script>
    export default {
        name: "glasscard",
        props: {
            id: String
        }
    }
</script>

