
<style scoped>
    #about-short-intro {
        text-align: justify !important;
        font-weight: 200;
        font-size: 15px;
    }

    #about-short-intro .lead 
    { font-size: 15px; }

    #about-skills {
        background: linear-gradient(45deg, rgba(11, 9, 88, 0.95), rgba(97, 4, 97, 0.85)), url('../../assets/code.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        overflow: hidden;
    }

    .text-gold 
    { color: rgb(197, 147, 9); }

    .justify-text 
    { text-align: justify !important; }

</style>

<template>
    <div class="container-fuild">

        <div class="container my-5">

            <div class="row">
                <p id="about-short-intro" class="px-3 p-md-0">
                    Hello there! My name is <strong>Philipp Andrew Roa Redondo</strong>. 24 years old. I am a computer programmer from the Philippines. 
                    Right now, I am self-studying compiler and language design, hoping to be one of the greates computer programmers in the world, I'm done with the 
                    prototype (link: <a class="text-decoration-none" href="http://github.com/andydevs69420/atom" target="_blank">atom-prototype-v1</a>). I can do any kind of software except kernels and operating systems<span class="lead">😉</span>.
                </p>
            </div>

            <div class="row mt-3 mt-md-0">
                <h5 class="fs-5 lead px-3 px-md-0" style="font-weight: 400;">EDUCATION</h5>
                <div class="col-12 px-3 px-md-0">
                    <roadmap/>
                </div>
            </div>

        </div>

        <div ref="aboutLookup" id="about-skills" class="container-fluid position-relative py-5">
            <ferriswheel :willSpin="spinWheel"/>
            
            <div class="container">

                <h6 class="h6 my-4 fw-bold text-light text-center">SERVICES</h6>

                <div class="row gy-3 gy-md-4">

                    <!-- web development -->
                    <div class="col-12 col-md-4">
                        <div class="d-block mx-auto text-center">
                            <font-awesome-icon class="text-light fa-2x" icon="fa-solid fa-laptop-code" />
                            <h6 class="h6 fw-bold text-light font-monospace">WEB APP DEVELOPMENT</h6>
                            <p class="text-light opacity-75 justify-text"><small class="small">
                                Web development using various Javascript frameworks, such as ReactJS and Vue, Laravel
                                is also one of my tech stacks.
                            </small></p>
                        </div>
                    </div>
                    
                    <!-- desktop development -->
                    <div class="col-12 col-md-4">
                        <div class="d-block mx-auto text-center">
                            <font-awesome-icon class="text-light fa-2x" icon="fa-solid fa-desktop" />
                            <h6 class="h6 fw-bold text-light font-monospace">DESKTOP DEVELOPMENT</h6>
                            <p class="text-light opacity-75 justify-text"><small class="small">
                                Desktop application developer since senior high school. Combining multiple 
                                frameworks such as ElectronJS, Flutter, Java Swing, Tkinter, Gtk, and PyQT.
                            </small></p>
                        </div>
                    </div>

                    <!-- mobile development -->
                    <div class="col-12 col-md-4">
                        <div class="d-block mx-auto text-center">
                            <font-awesome-icon class="text-light fa-2x" icon="fa-solid fa-mobile" />
                            <h6 class="h6 fw-bold text-light font-monospace">MOBILE DEVELOPMENT</h6>
                        </div>
                    </div>

                    <div class="col-12 col-sm-10 col-md-5 col-lg-3 offset-0 offset-sm-1 offset-md-0 px-3 px-md-2 px-lg-0">
                        <glasscard>
                            <div class="d-block p-4">
                                <h6 class="fs-5 fw-bold lead small text-center text-light">MOST USED LANGUAGE</h6>
                                <mostusedlang/>
                            </div>
                        </glasscard>
                    </div>
                </div>
            </div>

        </div>
    
    </div>

</template>


<script>
    import roadmap from "../roadmap.vue";
    import ferriswheel from "../ferriswheel.vue";
    import glasscard from "../glasscard.vue";
    import mostusedlang from "../mostusedlang.vue";

    export default {
        name: "about",
        data() {
            return {
                lookup: null,
                spinWheel: false
            };
        },
        components: {roadmap, ferriswheel, glasscard, mostusedlang},
        methods: {
            handleScroll(e) {
                const rect =  this.lookup.getBoundingClientRect();

                if (rect.top >= 0 && rect.top <= window.innerHeight)
                    this.spinWheel = true;
            }
        },
        mounted() {
            this.lookup = this.$refs.aboutLookup;
            window.addEventListener("scroll", this.handleScroll);
        },
        beforeDestroy() {
            window.removeEventListener("scroll", this.handleScroll);
        }
    }
</script>