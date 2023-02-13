import {defineCustomElement} from "vue";
import HelloWorld from "./components/HelloWorld.vue";

const custom_component = defineCustomElement(HelloWorld);

customElements.define("hello-world", custom_component);
