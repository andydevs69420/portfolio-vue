import { createApp } from 'vue';
import App from './App.vue';


import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";


import "./assets/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle";

library.add(fas);

console.log(FontAwesomeIcon);

const app = createApp(App);
	app.component("font-awesome-icon", FontAwesomeIcon);
	app.use(bootstrap);
	app.mount('#app');
