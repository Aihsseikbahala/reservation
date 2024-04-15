<template>
  <div>
    <SidebarComponent></SidebarComponent>
    <main style="padding-top:110px; padding-bottom:20px; max-height: 580px; overflow-y: auto">

      <div class="container text-dark">
        <div class="row d-block d-md-flex" style=" justify-content:space-evenly; margin-top: 10px;">

          <div class="box col-8 col-md-3  d-block d-md-flex " style="padding: 0; margin-inline: auto;">

            <div class="col-12 col-md-6 text-white  d-flex align-items-center justify-content-center"
              style="padding-top:20px; background: cadetblue;">
              <div class="row d-block text-center">
                <div class="col-12 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                    class="bi bi-person-circle" viewBox="0 0 16 16" style="margin-inline: 10px;">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                    <path fill-rule="evenodd"
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                  </svg>
                </div>

                <div class="col-12">
                  <p>Tourist</p>
                </div>
              </div>
            </div>

            <div class=" col-12 col-md-6  p-5 text-center " style="font-size: 25px; color:gray;">
              {{ countItem }}
            </div>
          </div>

          <div class="box col-8 col-md-3  d-block d-md-flex " style="padding: 0; margin-inline: auto;  margin-top: 10px;">

            <div class="col-12 col-md-6 text-white  d-flex align-items-center justify-content-center"
              style="padding-top:20px; background: #026081;">
              <div class="row d-block text-center">
                <div class="col-12 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                    class="bi bi-person-circle" viewBox="0 0 16 16" style="margin-inline: 10px;">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                    <path fill-rule="evenodd"
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                  </svg>
                </div>

                <div class="col-12">
                  <p>Tourguide</p>
                </div>
              </div>
            </div>

            <div class=" col-12 col-md-6  p-5 text-center " style="font-size: 25px; color:gray;">
              {{ torItem }}
            </div>
          </div>
          <div class="box col-8 col-md-3  d-block d-md-flex " style="padding: 0; margin-inline: auto;  margin-top: 10px;">

            <div class="col-12 col-md-6 text-white  d-flex align-items-center justify-content-center"
              style="padding-top:20px; background:lightsalmon;">
              <div class="row d-block text-center">
                <div class="col-12 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                    class="bi bi-person-circle" viewBox="0 0 16 16" style="margin-inline: 10px;">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                    <path fill-rule="evenodd"
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                  </svg>
                </div>

                <div class="col-12">
                  <p >Boat Owner</p>
                </div>
              </div>
            </div>

            <div class=" col-12 col-md-6  p-5 text-center " style="font-size: 25px; color:gray;">
              {{ boatOwnerItem }}
            </div>
          </div>
        </div>
        <!-- second line -->
        <div class="row d-block d-md-flex" style=" justify-content:space-evenly; margin-top: 10px;">

          <div class="box col-8 col-md-3  d-block d-md-flex " style="padding: 0; margin-inline: auto;">

            <div class="col-12 col-md-6 text-white  d-flex align-items-center justify-content-center"
              style="padding-top:20px; background-color:#003366;">
              <div class="row d-block text-center">
                <div class="col-12 text-center">
                  <img src="/@fs/reservation/src/assets/boat.png">
                </div>

                <div class="col-12">
                  <p>Boat</p>
                </div>
              </div>
            </div>

            <div class=" col-12 col-md-6  p-5 text-center" style="font-size: 25px; color:gray;">
              {{ boatItem }}
            </div>
          </div>

          <div class="box col-8 col-md-3  d-block d-md-flex " style="padding: 0; margin-inline: auto;  margin-top: 10px;">

            <div class="col-12 col-md-6 text-white bg-success d-flex align-items-center justify-content-center"
              style="padding-top:20px;">
              <div class="row d-block text-center">
                <div class="col-12 text-center">

                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                    class="bi bi-person-lines-fill" viewBox="0 0 16 16" style="margin-inline: 10px;">
                    <path
                      d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z" />
                  </svg>
                </div>

                <div class="col-12">
                  <p>Reservation</p>
                </div>
              </div>
            </div>

            <div class=" col-12 col-md-6  p-5 text-center " style="font-size: 25px; color:gray;">
              {{ resItem }}
            </div>
          </div>
          <div class="box col-8 col-md-3  d-block d-md-flex " style="padding: 0; margin-inline: auto;  margin-top: 10px;">

            <div class="col-12 col-md-6 text-white bg-warning d-flex align-items-center justify-content-center"
              style="padding-top:20px;">
              <div class="row d-block text-center">
                <div class="col-12 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                    class="bi bi-gear-wide-connected" viewBox="0 0 16 16" style="margin-inline: 10px;">
                    <path
                      d="M7.068.727c.243-.97 1.62-.97 1.864 0l.071.286a.96.96 0 0 0 1.622.434l.205-.211c.695-.719 1.888-.03 1.613.931l-.08.284a.96.96 0 0 0 1.187 1.187l.283-.081c.96-.275 1.65.918.931 1.613l-.211.205a.96.96 0 0 0 .434 1.622l.286.071c.97.243.97 1.62 0 1.864l-.286.071a.96.96 0 0 0-.434 1.622l.211.205c.719.695.03 1.888-.931 1.613l-.284-.08a.96.96 0 0 0-1.187 1.187l.081.283c.275.96-.918 1.65-1.613.931l-.205-.211a.96.96 0 0 0-1.622.434l-.071.286c-.243.97-1.62.97-1.864 0l-.071-.286a.96.96 0 0 0-1.622-.434l-.205.211c-.695.719-1.888.03-1.613-.931l.08-.284a.96.96 0 0 0-1.186-1.187l-.284.081c-.96.275-1.65-.918-.931-1.613l.211-.205a.96.96 0 0 0-.434-1.622l-.286-.071c-.97-.243-.97-1.62 0-1.864l.286-.071a.96.96 0 0 0 .434-1.622l-.211-.205c-.719-.695-.03-1.888.931-1.613l.284.08a.96.96 0 0 0 1.187-1.186l-.081-.284c-.275-.96.918-1.65 1.613-.931l.205.211a.96.96 0 0 0 1.622-.434l.071-.286zM12.973 8.5H8.25l-2.834 3.779A4.998 4.998 0 0 0 12.973 8.5m0-1a4.998 4.998 0 0 0-7.557-3.779l2.834 3.78h4.723zM5.048 3.967c-.03.021-.058.043-.087.065zm-.431.355A4.984 4.984 0 0 0 3.002 8c0 1.455.622 2.765 1.615 3.678L7.375 8zm.344 7.646.087.065z" />
                  </svg>
                </div>

                <div class="col-12">
                  <p>Maintenance</p>
                </div>
              </div>
            </div>

            <div class=" col-12 col-md-6  p-5 text-center " style="font-size: 25px; color:gray;">
              1
            </div>
          </div>
        </div>


      </div>
    </main>

  </div>
</template>
<script setup>
import SidebarComponent from "../../components/SidebarComponent.vue";
import { ref, onMounted } from "vue";
import axios from 'axios';

let API_URL = '' || 'http://localhost:3000/';
const serverURL = `${window.location.protocol}//${window.location.host.replace(/:\d+$/, '')}`;
API_URL = `${serverURL}:3000/`;
console.log(API_URL);

const items = ref([]);
let countItem = ref(0);

const fetchData = async () => {
  try {
    const response = await axios.get(API_URL + 'api/get');
    items.value = response.data;
    items.value.forEach(item => {
      countItem.value+=1;
      console.log(countItem.value);
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
let boatItem=ref(0);
const boats=ref([]);
const fetchBoat = async () => {
  try {
    const response = await axios.get(API_URL + 'api/getBoatDetails');
    boats.value = response.data;
    boats.value.forEach(boat => {
      boatItem.value+=1;
      console.log(boatItem.value);
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
const resItem=ref(0);
const getReserve = ref([]);
const fetchReservation = async () => {
  try {
    const response = await axios.get(API_URL + 'api/getReservation');
    getReserve.value = response.data;
    getReserve.value.forEach(reserve => {
      resItem.value+=1;
      console.log(resItem.value);
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
const torItem=ref(0);
const guides = ref([]);
const fetchTourguide = async () => {
  try {
    const response = await axios.get(API_URL + 'api/gettourguide');
    guides.value = response.data;
    guides.value.forEach(guides => {
      torItem.value+=1;
      console.log(torItem.value);
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
const boatOwnerItem=ref(0);
const boatOwner=ref([]);
const fetchBoatOwner = async () => {
  try {
    const response = await axios.get(API_URL + 'api/getboatowner');
    boatOwner.value = response.data;
    boatOwner.value.forEach(boatOwner => {
      boatOwnerItem.value+=1;
      console.log(boatOwnerItem.value);
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
onMounted(async () => {
  await fetchBoatOwner();
  await fetchReservation();
  await fetchBoat();
  await fetchTourguide();
  await fetchData()
});
</script>

<style scoped>
.box {
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
}
</style>