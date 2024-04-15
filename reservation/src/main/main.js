import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/jquery/dist/jquery.js';
import '../../node_modules/datatables.net/js/jquery.dataTables.min.js';
import '../../node_modules/datatables.net/js/jquery.dataTables.js';
import '../../node_modules/datatables.net-bs5/css/dataTables.bootstrap5.min.css';
import '../../node_modules/datatables.net-bs5/css/dataTables.bootstrap5.css';
import "../../node_modules/datatables.net/js/jquery.dataTables.js";
import "../../node_modules/datatables.net-bs5/js/dataTables.bootstrap5.js";

// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Login from "./views/Login.vue";
import { createApp, ref } from "vue";
import BoatOwnerApp from "./BoatOwnerPage.vue";
import TourGuideApp from "./tourGuidePage.vue"
import PersonelApp from './PersonelPage.vue';
import App from "./App.vue";
import router from "./router";

const localS = ref("");
const users = ref("");
const app = createApp(App);
localS.value = JSON.parse(localStorage.getItem("isLog"));
users.value = localStorage.getItem("isUser");

console.log(localS.value);
if (localS.value) {
  if( users.value=='admin'){
    app.use(router);
    router.push('/');
    app.mount("#app");
  }
  else if(users.value=='boatOwner'){
    const BoatOwner = createApp(BoatOwnerApp);
    BoatOwner.use(router);
    router.push('/Boatlist');
    BoatOwner.mount("#app");
  }
  else if(users.value=='TourGuidePage'){
    const TourGuidePage = createApp(TourGuideApp);
    TourGuidePage.use(router);
    router.push('/TourguideReservation');
    TourGuidePage.mount("#app");
  }
  else if(users.value === 'PersonelPage'){
    const personelPage = createApp(PersonelApp);
    personelPage.use(router);
    router.push('/PersonelPage');
    personelPage.mount('#app');
  }

} else {
  const loginApp = createApp(Login);
  loginApp.use(router);
  loginApp.mount("#app");
}
