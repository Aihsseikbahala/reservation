<script setup>
import { RouterLink } from 'vue-router'
import { ref, onMounted } from "vue";
import axios from 'axios';

const items = ref([]);

let API_URL = '';
const serverURL = `${window.location.protocol}//${window.location.host.replace(/:\d+$/, '')}`;
API_URL = `${serverURL}:3000/`;

console.log(serverURL);
const id = ref('');

const isImage = ref(false);
const isImage2 = ref(false);

const image = () => {
    isImage.value = !isImage.value;
    isImage2.value = !isImage2.value;

};

const image2 = () => {
    isImage2.value = !isImage2.value;
    isImage.value = !isImage.value;

};
const profile = ref(false);
const isSet = () => {
    profile.value = true;
}
const closeProfile=()=>{
    profile.value = false;

};

const fetchData = async () => {

    try {
        const response = await axios.get(`${API_URL}api/getpersonel`);
        items.value = response.data;
        console.log(items.value)
    } catch (error) {
        console.error('Error fetching data:', error);
    }

    id.value=localStorage.getItem('Id')
    console.log("Personel: "+ id.value);

};
const logout = () => {
  localStorage.setItem('isLog', 'false'); // Save to localStorage
  window.location.href=`${serverURL}:1111/`;
};

onMounted(async () => {

    await fetchData();
});
</script>
<template>
    <section class="d-flex">
        <nav class="navbar navbar-expand-lg navbar-light bg-light" id="headme">
            <div class="container-fluid">
                <div>
                    <img rel="icon" src="/@fs/xampp/htdocs/reservation/src/assets/island.png"
                        style="width: 35px;height: 35px; margin-inline: 10px;">

                    <a class="navbar-brand" href="#">Spot Paradise</a>
                </div>


                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">

                        <li class="nav-item">
                            <RouterLink to="/PersonelPage" class="nav-link">Tourist Reservation</RouterLink>
                        </li>
                        <li class="nav-item d-lg-none">
                            <a @click="logout" class="nav-link">Log out</a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
        <div v-for="item in items" :key="item.personel_id" class="d-none d-lg-block"
            style="box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;">
            <div v-if="id == item.personel_id" class="d-flex my-2">
                <img :src="'/@fs/xampp/htdocs/reservation/src/assets/uploads/' + item.personel_img" @click="isSet"
                    style="width: 35px;height: 35px;border-radius: 50%;"
                    :data-bs-target="'#bookmodal-' + item.personel_id">
                <div href="" class="d-none d-md-block my-1 text-decoration-none text-dark "
                    style="width: 180px; margin-inline: 20px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                    {{ item.personel_fname }} {{ item.personel_lname }}</div>



                <div v-if="profile" style="position: fixed; top: 0; left: 0; z-index: 99; height: 100%;">
                    <div class="modal-dialog modal-fullscreen modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Profile</h5>
                                <button type="button" class="btn-close" @click="closeProfile" data-bs-dismiss="modal"
                                    aria-label="Close" style="z-index:5;"></button>
                            </div>
                            <div class="modal-body">
                                <div class="card text-center">
                                    <div class="card-header"
                                        style="background: url('/@fs/xampp/htdocs/reservation/src/assets/Gilutongan.png');  height: 250px;padding-top:105px;  background-repeat: no-repeat; background-size:100%; ">

                                        <img :src="'/@fs/xampp/htdocs/reservation/src/assets/uploads/' + item.personel_img"
                                            alt="Profile Picture" class="card-img-top img-fluid rounded-circle hoverImg"
                                            style="width: 160px; height: 160px; border-radius: 50%; object-fit: cover; border:5px solid white;box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;"
                                            @click="image">
                                    </div>
                                    <div v-if="isImage"
                                        style="position: fixed; background-color:rgba(0, 0, 0, 0.5);  top: 30%; left: 50%; transform: translate(-50%, -50%); width: 100%; height:80vh;"
                                        @click="image2">
                                        <img v-if="isImage2"
                                            :src="'/@fs/xampp/htdocs/reservation/src/assets/uploads/' + item.personel_img"
                                            class="wide">
                                    </div>



                                    <div class="card-body">


                                        <div class="row">
                                            <div class="col-md-6">
                                                <strong>Phone:</strong>
                                                <span class="m-2">{{ item.personel_cpnum }}</span>
                                            </div>
                                            <div class="col-md-6">
                                                <strong>Address:</strong>
                                                <span class="m-2">{{ item.personel_address }}</span>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12 d-block">
                                                <strong>{{ item.personel_fname }} {{ item.personel_lname }}</strong>
                                                <div class="m-2 text-muted">{{ item.personel_email }}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-footer">
                                        <span class="nav-item">
                                            <a @click="logout" class="nav-link">Log out</a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
    <main class="main-res">
        <router-view></router-view>
    </main>
</template>

<style scoped>
#headme {
    width: 100vw;
    z-index: 99;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
}

@media screen and (max-width: 767px) {
    #headme {
        position: fixed;
        left: 0;
        top: 0;
    }

    .main-res {
        margin-top: 50px;
    }
}
</style>