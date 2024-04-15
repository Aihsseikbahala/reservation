<template>
    <div>
      <template v-for="item in items" :key="item.Tourist_id">
        <section v-if="id==item.Tourist_id">
        <!-- <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                        class="bi bi-calendar-check-fill" viewBox="0 0 16 16" data-bs-toggle="modal"
                        :data-bs-target="'#bookmodal-' + item.Tourist_id" style="color:#003366;" @click="setRes(item)">
                        <path
                          d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2m-5.146-5.146-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                      </svg> -->
                      <div style="position:fixed; top:0; left:0;">
                        <div class="modal-dialog modal-fullscreen modal-dialog-centered">
                          <div class="modal-content" style="max-height:650px; overflow-y: auto;">
                            <div class="modal-header">
                              <h5 class="modal-title" id="exampleModalLabel">Boat Reservation</h5>
                              <router-link class="nav-link " to="/">
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </router-link>
                            </div>
                            <div class="modal-body">
                              <form >
                                <main class="d-flex justify-content-between">
                                <section style="width:48%;">
                               
                                <div class="mb-3 " style="width:100%">
                                  <label for="firstName" class="form-label">First Name</label>
                                  <input type="text" class="form-control " id="firstName"
                                    v-model="reserve.fname.value" />
                                </div>
                                <div class="mb-3 " style="width:100%">
                                  <label for="lastName" class="form-label">Last Name</label>
                                  <input type="text" class="form-control " id="lastName"
                                    v-model="reserve.lname.value" />
                                </div>
                                <div class="mb-3 " style="width:100%">
                                  <label for="Date" class="form-label">Date</label>
                                  <input type="date" class="form-control " id="Date"
                                    v-model="reserve.reservationDate.value" @change="findDate" />
                                </div>
                               

                                <div class="mb-3 " style="width:100%">
                                  <label for="gender" class="form-label">Destination</label>
                                  <select class="form-select border " id="gender"
                                    v-model="reserve.destination.value" @change="findBoat">
                                    <option disabled>Route:</option>
                                    <option :value="JSON.stringify({ name: 'Gilutongan', price: 500 })">Gilutongan
                                    </option>

                                    <option :value="JSON.stringify({ name: 'Nalusoan', price: 500 })">Nalusoan</option>

                                    <option :value="JSON.stringify({ name: 'Olango', price: 500 })">Olango</option>
                                    <option disabled>Package:</option>
                                    <option :value="JSON.stringify({ name: 'Spackage1', price: 1000 })">Can select 2
                                      island
                                      destination.</option>
                                    <option :value="JSON.stringify({ name: 'Spackage2', price: 2000 })">Gilutonga,
                                      nalusoan, and Olanggo.</option>
                                  </select>
                                </div>
                                <div class="mb-3" style="width:100%">
                                  <label for="gender" class="form-label">Time</label>
                                  <select class="form-select " id="duration"
                                    v-model="reserve.duration.value" @change="findBoat">
                                    <option value="6hrs">6 hours</option>
                                    <option value="8hrs">8 hours</option>
                                    <option value="wholeday">Whole day</option>
                                  </select>
                                </div>

                                <div class="mb-3 ">
                                  <label for="boatType" class="form-label">Tour guide</label>
                                  <select class="form-select" id="tourguide" v-model="reserve.tourguide.value"
                                    @change="findBoat">

                                    <option v-for="guide in guides" :key="guide.tg_id"
                                      :value="[guide.tg_id, guide.tg_fname, 500]">{{
                                        guide.tg_fname }}</option>
                                  </select>
                                </div>
                                <!-- </section> -->
                                <!-- <section class="d-block d-md-flex"> -->
                                </section>
                                <section style="width:48%;">
                                  <div class="mb-3 " style="width:100%" v-if="samedate">
                                  <div class="alert alert-warning" role="alert">
                                    Unfortunately, the chosen date is not available as it has already been reserved.
                                    Please select alternative dates or explore other available boats for your reservation
                                  </div>
                                </div>
                                <div class="mb-3 " style="width:100%">
                                  <label for="boatType" class="form-label">Boat Type</label>
                                  <select class="form-select" id="boatType" v-model="reserve.boatName.value"
                                    @change="findBoat">

                                    <option v-for="boat in boats" :key="boat.boatDetails_id"
                                      :value="[boat.boat_owner_id, boat.boatName, boat.size]"
                                      style="display:flex; justify-content: space-between;">
                                      <div>{{ boat.boatName }}</div>
                                    </option>
                                  </select>
                                </div>
                                <div class='desc'>
                                  <div v-if="reserve.boatName.value">
                                    <template v-for="boat in boats" :key="boat.boatDetails_id">
                                      <div v-if="reserve.boatName.value[1] === boat.boatName" class="card "
                                        style="margin-top:10px;">
                                        <section>
                                          <img :src="'/@fs/xampp/htdocs/reservation/src/assets/uploads/' + boat.Bimag1" style="height:350px; width:500px;"
                                            >
                                            <!-- <img :src="'/@fs/reservation/src/assets/uploads/' + boat.Bimag2" style="height:350px; width:500px;"
                                            ><img :src="'/@fs/reservation/src/assets/uploads/' + boat.Bimag3" style="height:350px; width:500px;"
                                            ><img :src="'/@fs/reservation/src/assets/uploads/' + boat.Bimag4" style="height:350px; width:500px;"
                                            ><img :src="'/@fs/reservation/src/assets/uploads/' + boat.Bimag5" style="height:350px; width:500px;"
                                            > -->
                                        </section>
                                        <section>
                                          <div>{{ boat.boatName }}</div>
                                          <div>{{ boat.boatCapacity }}</div>
                                          <div>{{ boat.size }}</div>
                                        </section>
                                      </div>
                                    </template>
                                  </div>
                                </div>
                                </section>
                              </main>
                                Total amount: {{ reserve.totalPrice.value }}
                                <div class="modal-footer">
                                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                                    Close
                                  </button>
                                  
                                  <button class="btn btn-primary" type="button" data-bs-toggle="modal"
                                    :data-bs-target="'#paymentModal' + item.Tourist_id"
                                    @click="shouldDisplayRedirect(item.email)">
                                    Proceed
                                  </button>

                                  <!-- Payment Method Modal -->
                                  <div v-if="Selectpayment" style="position: fixed; top: 0; left: 0;">
                                    <div class="modal-dialog  modal-fullscreen modal-dialog-centered" style="z-index: 55; height:100vh;">
                                      <div class="modal-content">
                                        <div class="modal-header">
                                          <h5 class="modal-title" id="paymentModalLabel">Select Payment Method</h5>
                                          <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close" @click="backPay"></button>
                                        </div>
                                        <div class="modal-body">
                                          Total Amount: {{ reserve.totalPrice.value }}
                                          <div>
                                            <button v-if="display == true" type="button"
                                              class="btn btn-outline-primary w-100 mb-3" @click="pay">
                                              Pay with GCash
                                            </button>
                                            <a v-if="display == false"
                                              href="https://m.gcash.com/gcash-login-web/index.html#/" type="button"
                                              class="btn btn-outline-primary w-100 mb-3" @click="redirect">
                                              Pay with Gcash
                                            </a>
                                          </div>
                                          <div style="z-index:99;position:fixed;top:0;left:0; height: 100%; "
                                            v-if="gcash">
                                            <div class="modal-dialog  modal-fullscreen modal-dialog-centered">
                                              <div class="modal-content">
                                                <div class="modal-header">

                                                  <h5 class="modal-title text-primary" id="paymentModalLabel">Gcash
                                                  </h5>
                                                  <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close" @click="backGcash"></button>
                                                </div>
                                                <div style="height:300px; ">
                                                  <div class="modal-body"
                                                    style="width:300px;margin-inline: auto; margin-top:50px;box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;">

                                                    <div class="d-flex pt-3 pl-3">
                                                      <div><img
                                                          src="https://www.brodneil.com/wp-content/uploads/2022/05/gcash-logo-1.png"
                                                          width="120" height="60" style="margin-top:8px;" /></div>
                                                      <div class="mt-3 pl-2"><span class="name">{{ item.firstName
                                                      }}***</span>
                                                        <div><span class="cross"></span><span class="pin ml-2">{{
                                                          item.phone }}</span>
                                                        </div>
                                                      </div>
                                                    </div>


                                                    <div class="py-2  px-3">
                                                      <div class="first pl-2 d-flex py-2">
                                                        <div class="form-check">

                                                        </div>
                                                        <div class="border-left pl-2"><span class="head">Balance </span>
                                                          <div><span class="dollar">₱ </span>
                                                            <template v-for="gcash in Gcash" :key="gcash.id">
                                                              <span class="amount"
                                                                v-if="gcash.accountHolderName == item.email">
                                                                {{ gcash.balance
                                                                }} </span>

                                                            </template>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div class="py-2  px-3 text-center">
                                                      <div class="second pl-2 d-flex py-2">
                                                        <div class="form-check">
                                                        </div>
                                                        <div class="border-left pl-2  ">
                                                          <p class="head" style="text-align: left;">
                                                            amount</p>
                                                          <div class="d-flex"><span class="dollar">₱</span><input
                                                              type="text" name="text" class="form-control ml-1"
                                                              placeholder="0" v-model="reserve.totalPrice.value" disabled></div>
                                                        </div>

                                                      </div>
                                                      <template v-for="gcash in Gcash" :key="gcash.id">
                                                        <span v-if="gcash.accountHolderName == item.email">
                                                          <button type="button" class="btn btn-primary"
                                                            @click="reservation(item.Tourist_id,item.email)"
                                                            :disabled="gcash.balance < reserve.totalPrice.value || reserve.totalPrice.value==0 ">
                                                            Pay Now
                                                          </button>
                                                        </span>
                                                      </template>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>



                                          <!-- PayMaya Payment Button -->
                                          <button class="btn btn-outline-success w-100" @click="handlePayment('PayMaya')">
                                            Pay with PayMaya
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    </template>
    </div>

</template>
<script setup>
import { ref, onMounted } from "vue";
import axios from 'axios';
const gcash = ref(false);

const id=ref('');
id.value=localStorage.getItem('IdTourist');

const items=ref([]);
// const bgcolor = ref('white');
// const changeColor = ref('black');
// const toastMsg = ref('');
const boats = ref([]);
let API_URL = '' || 'http://localhost:3000/';
const serverURL = `${window.location.protocol}//${window.location.host.replace(/:\d+$/, '')}`;
API_URL = `${serverURL}:3000/`;
console.log(API_URL);

const guides = ref([]);
const fetchTourguide = async () => {
  try {
    const response = await axios.get(API_URL + 'api/gettourguide');
    guides.value = response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};


const fetchData = async () => {
  try {
    const response = await axios.get(API_URL + 'api/get');
    items.value = response.data;
    // console.log(items.value);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const Gcash = ref([]);
const fetchGcash = async () => {
  try {
    const response = await axios.get(API_URL + 'api/Gcash');
    Gcash.value = response.data;
    console.log(Gcash.value);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
const getReserve = ref([]);
const fetchReservation = async () => {
  try {
    const response = await axios.get(API_URL + 'api/getReservation');
    getReserve.value = response.data;
    // console.log("reserve: " + getReserve.value);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const display = ref(false);
const Selectpayment=ref(false);
const backPay=()=>{
  Selectpayment.value=false;
};
const backGcash=()=>{
  gcash.value = !gcash.value;

}
const shouldDisplayRedirect = (item) => {
  Selectpayment.value=true;

  Gcash.value.forEach((gcash) => {
    if (gcash.accountHolderName === item) {

      display.value = true;

      return;
    }
  });
};



const reserve = {
  Tourist_id: ref(''),
  email: ref(''),
  fname: ref(''),
  lname: ref(''),
  destination: ref(''),
  boatName: ref(''),
  tourguide: ref(''),
  reservationDate: ref(''),
  duration: ref(''),
  status: ref(''),
  tg_id: ref(''),
  boat_owner_id: ref(''),
  totalPrice: ref(''),
  show_me: ref(''),
}
const selectedBoat = ref('');
let samedate = ref(false);

const findDate = () => {
  const inputDate = new Date(reserve.reservationDate.value);
  const formattedDate = inputDate.toLocaleDateString();

  let i = 0;
  getReserve.value.forEach((getReserve,index) => {
    const dateTimeString = getReserve.reservationDate;
    const dateOnlyString = new Date(dateTimeString).toLocaleDateString();
    i++;
    
    console.log(i + ' reserve: ' + dateOnlyString + ' format: ' + formattedDate);
    console.log(i + ' boat reserve: ' + getReserve.boatName + ' boat: ' +reserve.boatName.value[1]);
    console.log(i + ' tourguide reserve: ' + getReserve.tourguide + ' tourguide: ' + reserve.tourguide.value[1]);



    if (dateOnlyString === formattedDate && getReserve.boatName==reserve.boatName.value[1]) {
      samedate.value = true;

      setTimeout(() => {
        samedate.value = false;

      }, 10000);
    }
    return { samedate };
  });
};

const findBoat = () => {
  findDate();
  selectedBoat.value = reserve.boatName.value[2];
  const additionalPrices = {
    '6hrs': 1000,
    '8hrs': 2000,
    'wholeday': 4000
  };
  const boatRent = {
    'small': 1000,
    'medium': 2000,
    'large': 3000
  };
  const destinationObject = JSON.parse(reserve.destination.value);

  const destinationPrice = destinationObject.price; // 1000

  reserve.totalPrice.value = (
    (boatRent[reserve.boatName.value[2]] ?? 0) +
    (reserve.tourguide.value[2] ?? 0) +
    (destinationPrice ?? 0) +
    (additionalPrices[reserve.duration.value] ?? 0)
  );
  fetchData();
};
const t_id = ref('');
t_id.value = localStorage.getItem('IdTourist');
console.log(t_id.value);
for (let i = 0; i < items.value.length; i++) {
  const item = items.value[i];
  console.log("id ni: "+item.Tourist_id);
  if (item.Tourist_id== t_id.value) {
    reserve.fname.value = item.firstName.value;
    reserve.lname.value = item.lastName.value;
 
  }
}


const pay = () => {
  gcash.value = !gcash.value;
  console.log(reserve.totalPrice.value);
}
const reservation = async (id,email) => {
  reserve.Tourist_id.value = id;
  reserve.email.value=email;
  reserve.boat_owner_id.value = reserve.boatName.value[0];
  reserve.tg_id.value = reserve.tourguide.value[0];
  reserve.show_me.value = "1";
  reserve.status.value = "reserve";
  const destinationObject = JSON.parse(reserve.destination.value);
  const destinationName = destinationObject.name;
  const dataToSend = {
    Tourist_id: reserve.Tourist_id.value,
    email:reserve.email.value,
    fname: reserve.fname.value,
    lname: reserve.lname.value,
    destination: destinationName,
    boatName: reserve.boatName.value[1],
    tourguide: reserve.tourguide.value[1],
    reservationDate: reserve.reservationDate.value,
    duration: reserve.duration.value,
    status: reserve.status.value,
    tg_id: reserve.tg_id.value,
    boat_owner_id: reserve.boat_owner_id.value,
    totalPrice: reserve.totalPrice.value,
    show_me: reserve.show_me.value,
  };
  console.log("Gana mann:"+reserve.email.value);
  const response = await axios.post(API_URL + 'api/insert/reservation', dataToSend);
  gcash.value = !gcash.value;
  $(`#bookmodal-${id}`).modal('hide');
  $(`#paymentModal${id}`).modal('hide');



  for (const key in reserve) {
    if (Object.prototype.hasOwnProperty.call(reserve, key) && reserve[key]?.value !== undefined) {
      if (Array.isArray(reserve[key].value)) {
        reserve[key].value = [];
      } else {
        reserve[key].value = '';
      }
    }
  }

  // toastMsg.value = 'Your data successfully inserted!';
  // bgcolor.value = '#d4edda';
  // showAndHideToast();

  fetchData();

};
const fetchBoat = async () => {
  try {
    const response = await axios.get(API_URL + 'api/getBoatDetails');
    boats.value = response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

onMounted(async () => {
  // await fetchClientIP();
  await fetchReservation();
  await fetchBoat();
  await fetchTourguide();
  console.log('Component mounted');
  await fetchData()
  await fetchGcash();
});
</script>