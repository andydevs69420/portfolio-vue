
<style>
    :root {
        --roadmap-bg: rgb(45, 46, 39);
    }

    .roadmap-avatar-wrapper {
        padding: 5px;
        background-color: rgb(217, 233, 247);
    }

   

    .roadmap_ul {
        list-style-type: none;
        height: calc(100% ) !important;
    }
    .roadmap_ul .roadmap_bullet {
        width: 10px;
        height: 10px;
        background-color: var(--roadmap-bg);
    }
    
    .roadmap_line_stuff {
        top: 50%;
        left: 4.25px;
        height: calc(100% - 55px);
        border-left: 1px solid var(--roadmap-bg);
        transform: translateY(-52%);
    }

    .roadmap_ul > li
    { overflow-x: hidden; }

    .roadmap_ul > li:nth-of-type(even):not(:first-child):not(:last-child) 
    { margin: 2em 0; }

    .roadmap_ul > li:last-child:not(:first-child)
    { margin-top: 2em; }
</style>

<template>

    <div class="container px-0 px-md-3">
        <div class="row gy-4 gy-md-0 m-0">
            <div class="col-12 col-md-6 p-0 text-center">
                <!-- image -->
                <div class="roadmap-avatar-wrapper d-inline-block rounded-circle shadow-sm">
                    <img id="roadmap-avatar" class="rounded-circle" :src="avatar" alt="roadmap-avatar" width="220">
                </div>
            </div>

            <div class="col-12 col-md-6 p-0">
                <ul class="roadmap_ul d-flex flex-column m-0 p-0 justify-content-between position-relative">
                    <div class="roadmap_line_stuff position-absolute"></div>
                    <li class="d-inline-flex flex-row flex-nowrap justify-content-start align-items-center text-nowrap">
                        <!-- bullet -->
                        <div class="d-inline-block roadmap_bullet rounded-circle shadow-sm"
                            style="flex-shrink: 0;"></div>
                        
                        <!-- label -->
                        <div class="ms-3 text-truncate">
                            <h6 class="fw-bold m-0">Primary School</h6>
                            <small class="roadmap_subtitle small text-muted">Iponan Elementary School</small>
                        </div>
                    </li>

                    <li class="d-inline-flex flex-row flex-nowrap justify-content-start align-items-center">
                        <!-- bullet -->
                        <div class="d-inline-block roadmap_bullet rounded-circle shadow-sm"
                            style="flex-shrink: 0;"></div>
                        
                        <!-- label -->
                        <div class="ms-3 text-truncate">
                            <h6 class="fw-bold m-0">Secondary School</h6>
                            <small class="roadmap_subtitle small text-muted">Iponan National High School</small>
                        </div>
                    </li>

                    <li class="d-inline-flex flex-row flex-nowrap justify-content-start align-items-center">
                        <!-- bullet -->
                        <div class="d-inline-block roadmap_bullet rounded-circle shadow-sm"
                            style="flex-shrink: 0;"></div>
                        
                        <!-- label -->
                        <div class="ms-3 text-truncate">
                            <h6 class="fw-bold m-0">Senior High School</h6>
                            <small class="roadmap_subtitle small text-muted">Phinma Cagayan De Oro College - GAS-IT</small>
                        </div>
                    </li>

                    <li class="d-inline-flex flex-row flex-nowrap justify-content-start align-items-center">
                        <!-- bullet -->
                        <div class="d-inline-block roadmap_bullet rounded-circle shadow-sm"
                            style="flex-shrink: 0;"></div>
                        
                        <!-- label -->
                        <div class="ms-3 text-truncate">
                            <h6 class="fw-bold m-0">Higher Education</h6>
                            <small class="roadmap_subtitle small text-muted">
                                University of Science and <br/>
                                Technology of Southern Philippines - BSIT
                            </small>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>

</template>

<script>
    import avatar from "../assets/avatar.png";

    export default {
        name: "roadmap",
        data() {
            return {avatar: avatar};
        }
    }
</script>
