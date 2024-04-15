<template>
    <section>
        <!-- Button trigger modal -->
        <div style="padding-top: 130px;">
            <div id="card" v-if="isToastVisible">
        <div>
          <div class="toast-header" :style="{ backgroundColor: bgcolor, color: changeColor }">
            <strong class="me-auto">Success</strong>
            <small>{{ date }}</small>
          </div>
          <div class="toast-body">
            {{ toastMsg }}
          </div>
        </div>
      </div>
          
        </div>
        <div>
            <div class="card mx-4" style="box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px">
                <div class="card-body">
                    <div class="table-responsive" style="max-height: 450px; overflow-y: auto">
                        <table class="list table table-striped" style="width: 100%">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>First name</th>
                                    <th>Last name</th>
                                    <th>Date</th>
                                    <th>Hours</th>
                                    <th>Status</th>
                                    <th>View</th>
                                    <th>ReBook</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in items" :key="item.id">
                                    <td>{{ item.id }}</td>
                                    <td>{{ item.fname }}</td>
                                    <td>{{ item.lname }}</td>
                                    <td>{{  new Date(item.reservationDate).toLocaleDateString()}}</td>
                                    <td>{{ item.duration }}</td>
                                    <td>
                                        <button class="status-button bg-completed" v-if="item.status === 'completed'">{{
                                            item.status }}</button>
                                        <button class="status-button bg-reserve" v-else-if="item.status === 'reserve'">{{
                                            item.status }}</button>
                                        <button class="status-button bg-canceled" v-else-if="item.status === 'canceled'">{{
                                            item.status }}</button>
                                    </td>
                                    <td>
                                        <!-- view btn -->
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                            data-bs-toggle="modal" :data-bs-target="'#viewmodal-' + item.id"
                                            class="viewBtn viewImg bi bi-eye text-white bg-success p-1 mx-1 rounded"
                                            viewBox="0 0 16 16">
                                            <path
                                                d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                            <path
                                                d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                        </svg>
                                        <!-- view modal -->
                                        <div class="modal fade" :id="'viewmodal-' + item.id" tabindex="-1"
                                            aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div class="modal-dialog">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h5 class="modal-title" id="exampleModalLabel">
                                                            View Information
                                                        </h5>
                                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                            aria-label="Close"></button>
                                                    </div>
                                                    <div class="modal-body">
                                                        <div>
                                                            <img :src="item.profile" alt="" srcset="" />
                                                        </div>
                                                        <div>{{ item.id }}</div>
                                                        <div>{{ item.fname }}</div>
                                                        <div>{{ item.lname }}</div>
                                                        <div>{{ item.reservationDate}}</div>
                                                        <div>{{ item.status }}</div>
                                                        <div>{{ item.phone }}</div>
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-secondary"
                                                            data-bs-dismiss="modal">
                                                            Close
                                                        </button>
                                                        <button type="button" class="btn btn-primary">
                                                            Save changes
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <!-- Edit btn-->
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                            class="editBtn bi bi-pencil-square text-white bg-primary p-1 mx-1 rounded"
                                            viewBox="0 0 16 16" data-bs-toggle="modal"
                                            :data-bs-target="'#editmodal-' + item.id">
                                            <path
                                                d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                            <path fill-rule="evenodd"
                                                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                        </svg>
                                        <!-- Edit modal -->
                                        <div class="modal fade" :id="'editmodal-' + item.id" tabindex="-1"
                                            aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div class="modal-dialog">
                                                <div class="modal-content" style="max-height: 550px; overflow-y: auto">
                                                    <div class="modal-header">
                                                        <h5 class="modal-title" id="exampleModalLabel">
                                                            Edit Information
                                                        </h5>
                                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                            aria-label="Close"></button>
                                                    </div>
                                                    <div class="modal-body">
                                                        <form>
                                                            <div class="mb-3">
                                                                <label for="Date" class="form-label">Date</label>
                                                                <div class="d-flex justify-content-between">
                                                                    <input type="date" class="form-control" id="Date"
                                                                        v-model="reserve.reserveDate.value" />
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
                                          <img :src="'/@fs/reservation/src/assets/uploads/' + boat.Bimag1" style="height:350px; width:500px;"
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
                                <div class="modal-footer">
                                                        <button type="button" class="btn btn-secondary"
                                                            data-bs-dismiss="modal">
                                                            Close
                                                        </button>
                                                        <button type="button" class="btn btn-primary" @click="updateReserve(item.Tourist_id,item.id)">
                                                            Save changes
                                                        </button>
                                                    </div>  
                                                        </form>
                                                    </div>
                                                
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <!-- delete btn -->
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                            class="bi bi-trash text-white bg-danger p-1 rounded mx-1 delbtn"
                                            viewBox="0 0 16 16" data-bs-toggle="modal"
                                            :data-bs-target="'#deletemodal-' + item.id">
                                            <path
                                                d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                                            <path
                                                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                                        </svg>
                                        <!-- Delete modal -->
                                        <div class="modal fade" :id="'deletemodal-' + item.id" tabindex="-1"
                                            aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div class="modal-dialog">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h5 class="modal-title" id="exampleModalLabel">
                                                            Confirm Deletion?
                                                        </h5>
                                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                            aria-label="Close"></button>
                                                    </div>
                                                    <div class="modal-body">
                                                        <h5>
                                                            Are you sure you delete this item {{ item.id }} ?
                                                        </h5>
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-secondary"
                                                            data-bs-dismiss="modal">
                                                            Cancel
                                                        </button>
                                                        <button type="button" class="btn btn-primary" @click="resDelete(item.id)">
                                                            Yes
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
    
<script setup>
import { ref, watch, onMounted } from "vue";
import axios from 'axios'

const items = ref([]);
let API_URL = '';
const serverURL = `${window.location.protocol}//${window.location.host.replace(/:\d+$/, '')}`;
API_URL = `${serverURL}:3000/`;
console.log(API_URL);

const fetchData = async () => {
    try {
        const response = await axios.get(API_URL + 'api/getReservation');
        items.value = response.data;
        console.log(items.value);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};
const bgcolor = ref('white');
const changeColor = ref('black');
const toastMsg = ref('');

const date = ref('');
date.value = new Date();
date.value = date.value.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });

const isToastVisible = ref(false);

const showAndHideToast = () => {
  isToastVisible.value = true;
  setTimeout(() => {
    hideToast();
  }, 5000);
};

const hideToast = () => {
  isToastVisible.value = false;
};

const resDelete = (res_id) => {
  axios
    .post(API_URL + 'api/reservationDelete/' + res_id)
    .then((response) => {
      $(`#deletemodal-${res_id}`).modal('hide');
      toastMsg.value = 'Your data successfully Deleted!.';
      bgcolor.value = '#dc3545';
      changeColor.value = 'white';
      showAndHideToast();
      fetchData();
    })
    .catch((error) => {
      console.log(error);
    });
};


const reserve={
  Tourist_id:ref(null),
  reserveDate:ref(''),
  boatName:ref('')
};
const updateReserve=async(id,item)=>{
    const dataToSendUpt= {
    Tourist_id: id,
    reserveDate: reserve. reserveDate.value,
    boatName: reserve. boatName.value[1],
    }
    console.log("Update: "+dataToSendUpt.Tourist_id+' '+dataToSendUpt.reserveDate+' '+dataToSendUpt.boatName);

    try {
    const response = await axios.put(API_URL + 'api/editReservation',  dataToSendUpt);

    $(`#editmodal-${item}`).modal('hide');

    toastMsg.value = 'Your data successfully Updated!.';
    bgcolor.value = '#d1ecf1';
    showAndHideToast();
    fetchData();

  } catch (error) {
    console.error('Error updating data:', error);
  }
};
const boats=ref([]);
const fetchBoat = async () => {
  try {
    const response = await axios.get(API_URL + 'api/getBoatDetails');
    boats.value = response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};


const datatable = async () => {
    $(".list").DataTable();
};

onMounted(async () => {
    console.log('Component mounted');
    await fetchData()
    await fetchBoat();
    datatable();

});

</script>
<style scoped>
.status-button {
    display: inline-block;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    color: white;
}

.bg-completed {
    background-color: #198754;
}

.bg-reserve {
    background-color: #0d6efd;
}

#card {
  position: fixed;
  right: 40px;
  z-index: 99;
  opacity: 0;
  animation: slideIn 0.5s forwards;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  background-color: white;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(100%);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.toast-header {
  color: black;
  padding: 8px;
  padding-inline: 12px;
}

.toast-body {
  padding: 8px;
  padding-inline: 12px;
  background-color: white;
}
.bg-canceled {
    background-color: #dc3545;
}
</style>
  
  
  
    