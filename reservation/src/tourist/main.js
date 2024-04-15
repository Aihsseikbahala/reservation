import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/jquery/dist/jquery.js";
import "../../node_modules/datatables.net/js/jquery.dataTables.min.js";
import "../../node_modules/datatables.net/js/jquery.dataTables.js";
import "../../node_modules/datatables.net-bs5/css/dataTables.bootstrap5.min.css";
import "../../node_modules/datatables.net-bs5/css/dataTables.bootstrap5.css";
import "../../node_modules/datatables.net/js/jquery.dataTables.js";
import "../../node_modules/datatables.net-bs5/js/dataTables.bootstrap5.js";

import landingPage from "./LandingPage.vue";
import { createApp, ref } from "vue";
import App from "./App.vue";
import router from "./router";

const localS = ref("");
const users = ref("");


users.value = localStorage.getItem("isTourist");
console.log(users.value);
  if( users.value=='tourist'){
    const landingPageApp = createApp(landingPage);
    landingPageApp.use(router);
    router.push('/');
    landingPageApp.mount("#app");
  }else {
  const app = createApp(App);
  app.use(router);
  app.mount("#app");
}
