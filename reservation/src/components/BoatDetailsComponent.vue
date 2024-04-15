<template>
  <section>

    <div style="padding-top: 130px;">
      <div id="card" v-if="isToastVisible">
        <div>
          <div class="toast-header" :style="{ backgroundColor: bgcolor, color:changeColor}">
            <strong class="me-auto">Success</strong>
            <small>{{ date }}</small>
          </div>
          <div class="toast-body">
            {{ toastMsg }}
          </div>
        </div>
      </div>
      <div class="card mx-4" style="box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;">
        <div class="card-body">
          <div class="table-responsive" style="max-height: 450px; overflow-y: auto">
            <table class="listOfBoatOwners table table-striped" style="width: 100%">
              <thead>
                <tr>

                  <th>Boat Owner</th>
                  <th>Boat Name</th>
                  <th>Capacity</th>
                  <th>Rent</th>
                  <th>Status</th>
                  <th>View</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in items" :key="item.boat_owner_id">


                  <td>{{ item.boat_owner_fname }} {{ item.boat_owner_lname }}</td>
                  <td>{{ item.boatName }}</td>
                  <td>{{ item.boatCapacity }}</td>
                  <td>{{ item.size }}</td>
                  <td>{{ item.status }}</td>

                  <td>
                    <!-- view btn -->
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                      data-bs-toggle="modal" :data-bs-target="'#viewmodal-' + item.boatDetails_id"
                      class="viewBtn viewImg bi bi-eye text-white bg-success p-1 mx-1 rounded" viewBox="0 0 16 16">
                      <path
                        d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                    </svg>
                    <!-- view modal -->
                    <div class="modal fade" :id="'viewmodal-' + item.boatDetails_id" tabindex="-1"
                      aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog modal-fullscreen modal-dialog-centered">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Boat Details</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body">
                            <div class="card text-center">
                              <div class="card-header">
                                <!-- Bootstrap carousel for images -->
                                <div :id="'carouselExampleControls-' + item.boatDetails_id" class="carousel slide"
                                  data-bs-ride="carousel">
                                  <div class="carousel-inner">
                                    <div
                                      v-for="(image, index) in [item.Bimag1, item.Bimag2, item.Bimag3, item.Bimag4, item.Bimag5]"
                                      :key="index" class="carousel-item" :class="{ 'active': index === 0 }">
                                      <img :src="'/@fs/xampp/htdocs/reservation/src/assets/uploads/' + image"
                                        class="d-block couraselImg" alt="Image">
                                    </div>
                                  </div>
                                  <button class="carousel-control-prev" type="button"
                                    :data-bs-target="'#carouselExampleControls-' + item.boatDetails_id"
                                    data-bs-slide="prev" style="background-color: gray; opacity: 0.1;">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                  </button>
                                  <button class="carousel-control-next" type="button"
                                    :data-bs-target="'#carouselExampleControls-' + item.boatDetails_id"
                                    data-bs-slide="next" style="background-color: gray; opacity: 0.1;">
                                    <span class="carousel-control-next-icon " aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                  </button>
                                </div>
                              </div>
                              <div class="card-body mt-3">
                                <h5 class="card-title">{{ item.boatName }}</h5>
                                <ul class="list-unstyled res">
                                  <p>
                                    <li><strong>Boat ID:</strong> {{ item.boatDetails_id }}</li>
                                    <li><strong>Owner:</strong> {{ item.boat_owner_fname }} {{ item.boat_owner_lname }}
                                    </li>
                                  </p>
                                  <p>
                                    <li><strong>Capacity:</strong> {{ item.boatCapacity }}</li>
                                    <li><strong>Rent:</strong> {{ item.size }}</li>
                                  </p>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div class="modal-footer">
                            <!-- Add footer buttons or other elements as needed -->
                          </div>
                        </div>
                      </div>
                    </div>



                  </td>
                  <td>
                    <!--deatisl  -->
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                      class="editBtn bi bi-pencil-square text-white bg-primary p-1 mx-1 rounded" viewBox="0 0 16 16"
                      data-bs-toggle="modal" :data-bs-target="'#editmodal-' + item.boatDetails_id"
                      @click="setDetails(item)">
                      <path
                        d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                      <path fill-rule="evenodd"
                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                    </svg>

                    <!-- details modal -->
                    <div class="modal fade" :id="'editmodal-' + item.boatDetails_id" tabindex="-1"
                      aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog">
                        <div class="modal-content" style="max-height: 550px; overflow-y: auto">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">
                              Edit Information
                            </h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body">
                            <form @submit.prevent="detailsEditData(item.boatDetails_id)" enctype="multipart/form-data">
                              <div class="mb-3">
                                <label for="profile" class="form-label">Profile Picture</label>
                                <div class="d-flex">
                                  <input type="file" id="boat_owner_img" name="profile" class="form-control"
                                    @change="handleFileUploaddetails1" />

                                  <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor"
                                    class="bi bi-plus-square-fill p-1 mx-1 rounded" viewBox="0 0 16 16"
                                    style="color:#003366; " @click="addImg">
                                    <path
                                      d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z" />
                                  </svg>

                                </div>
                              </div>
                              <div class="mb-3" v-if="isImg2">
                                <label for="profile" class="form-label">Profile Picture</label>
                                <div class="d-flex">
                                  <input type="file" id="boat_owner_img" name="profile" class="form-control"
                                    @change="handleFileUploaddetails2" />

                                  <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor"
                                    class="bi bi-x-square-fill p-1 mx-1 rounded" viewBox="0 0 16 16"
                                    style="color:#003366;" @click="subImg2">
                                    <path
                                      d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z" />
                                  </svg>
                                </div>
                              </div>
                              <div class="mb-3" v-if="isImg3">
                                <label for="profile" class="form-label">Profile Picture</label>
                                <div class="d-flex">
                                  <input type="file" id="boat_owner_img" name="profile" class="form-control"
                                    @change="handleFileUploaddetails3" />

                                  <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor"
                                    class="bi bi-x-square-fill p-1 mx-1 rounded" viewBox="0 0 16 16"
                                    style="color:#003366;" @click="subImg3">
                                    <path
                                      d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z" />
                                  </svg>
                                </div>
                              </div>
                              <div class="mb-3" v-if="isImg4">
                                <label for="profile" class="form-label">Profile Picture</label>
                                <div class="d-flex">
                                  <input type="file" id="boat_owner_img" name="profile" class="form-control"
                                    @change="handleFileUploaddetails4" />

                                  <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor"
                                    class="bi bi-x-square-fill p-1 mx-1 rounded" viewBox="0 0 16 16"
                                    style="color:#003366;" @click="subImg4">
                                    <path
                                      d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z" />
                                  </svg>
                                </div>
                              </div>
                              <div class="mb-3" v-if="isImg5">
                                <label for="profile" class="form-label">Profile Picture</label>
                                <div class="d-flex">
                                  <input type="file" id="boat_owner_img" name="profile" class="form-control"
                                    @change="handleFileUploaddetails5" />

                                  <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor"
                                    class="bi bi-x-square-fill p-1 mx-1 rounded" viewBox="0 0 16 16"
                                    style="color:#003366;" @click="subImg5">
                                    <path
                                      d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z" />
                                  </svg>
                                </div>
                              </div>


                              <div class="mb-3">
                                <label for="boatName" class="form-label">Boat Name</label>
                                <input type="text" class="form-control" id="boatName"
                                  v-model="formDetails.boatName.value" />
                              </div>
                              <div class="mb-3">
                                <label for="Capacity" class="form-label">Boat Capacity</label>
                                <input type="number" class="form-control" id="Capacity"
                                  v-model="formDetails.boatCapacity.value" />
                              </div>
                              <div class="mb-3">
                                <label for="size" class="form-label">Boat size</label>
                                <input type="text" class="form-control" id="size" v-model="formDetails.size.value" />
                              </div>
                              <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                                  Close
                                </button>
                                <button type="submit" class="btn btn-primary">Save changes</button>
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
                      class="bi bi-trash text-white bg-danger p-1 rounded mx-1 delbtn" viewBox="0 0 16 16"
                      data-bs-toggle="modal" :data-bs-target="'#deletemodal-' + item.boatDetails_id">
                      <path
                        d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                      <path
                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                    </svg>
                    <!-- Delete modal -->
                    <div class="modal fade" :id="'deletemodal-' + item.boatDetails_id" tabindex="-1"
                      aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">
                              Confirm Deletion?
                            </h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body">
                            <h5>
                              Are you sure you delete this item {{ item.boatDetails_id }} ?
                            </h5>
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                              Cancel
                            </button>
                            <button type="button" class="btn btn-primary" @click="deleteData(item.boatDetails_id)">
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
import { ref, onMounted, reactive } from "vue";
import axios from 'axios';


const bgcolor = ref('white');
const toastMsg = ref('');
const changeColor = ref('black');



let API_URL = "" || 'http://localhost:3000/';
const items = ref([]);


const serverURL = `${window.location.protocol}//${window.location.host.replace(/:\d+$/, '')}`;
API_URL = `${serverURL}:3000/`;
console.log(API_URL);
const fetchData = async () => {
  try {
    const response = await axios.get(API_URL + 'api/getBoatDetails');
    items.value = response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
// boat details

const isImg2 = ref(false);
const isImg3 = ref(false);
const isImg4 = ref(false);
const isImg5 = ref(false);
let i = 1;

const addImg = () => {
  if (i !== 5) {
    i++;

    switch (i) {
      case 2:
        isImg2.value = true;
        break;
      case 3:
        isImg3.value = true;
        break;
      case 4:
        isImg4.value = true;
        break;
      case 5:
        isImg5.value = true;
        break;
      default:
        break;
    }
  }

  console.log(i);
};



const subImg2 = () => {
  isImg2.value = !isImg2.value;
  i--;
}
const subImg3 = () => {
  isImg3.value = !isImg3.value;
  i--;
}

const subImg4 = () => {
  isImg4.value = !isImg4.value;
  i--;
}

const subImg5 = () => {
  isImg5.value = !isImg5.value;
  i--;
}



const formDetails = {
  boatName: ref(''),
  boatCapacity: ref(''),
  size: ref(''),
  boatDetails_id: ref(''),
};
const setDetails = async (item) => {
  formDetails.boatName.value = item.boatName;
  formDetails.boatCapacity.value = item.boatCapacity;
  formDetails.size.value = item.size;

};
const handleFileUploaddetails1 = (event) => {
  formDetails.Bimag1 = event.target.files[0];
};
const handleFileUploaddetails2 = (event) => {
  formDetails.Bimag2 = event.target.files[0];
};
const handleFileUploaddetails3 = (event) => {
  formDetails.Bimag3 = event.target.files[0];
};
const handleFileUploaddetails4 = (event) => {
  formDetails.Bimag4 = event.target.files[0];
};
const handleFileUploaddetails5 = (event) => {
  formDetails.Bimag5 = event.target.files[0];
};

const detailsEditData = (id) => {
  console.log(id);
  const formDataObject = new FormData();
  formDetails.boatDetails_id = id;
  formDataObject.append("boatName", formDetails.boatName.value);
  formDataObject.append("boatCapacity", formDetails.boatCapacity.value);
  formDataObject.append("Bimag1", formDetails.Bimag1);
  formDataObject.append("Bimag2", formDetails.Bimag2);
  formDataObject.append("Bimag3", formDetails.Bimag3);
  formDataObject.append("Bimag4", formDetails.Bimag4);
  formDataObject.append("Bimag5", formDetails.Bimag5);
  formDataObject.append("size", formDetails.size.value);
  formDataObject.append("boatDetails_id", formDetails.boatDetails_id);

  axios.post(API_URL + 'api/boatEditdetails', formDataObject)
    .then((response) => {
      $(`#editmodal-${id}`).modal('hide');
      toastMsg.value = 'Your data successfully Updated!.';
      bgcolor.value = '#d1ecf1';
      showAndHideToast();
      fetchData();
    })
    .catch((error) => {
      console.log(error);

    });
}



const deleteData = (id) => {
  axios
    .post(API_URL + 'api/deleteboatDetails/' + id)
    .then((response) => {
      $(`#deletemodal-${id}`).modal('hide');
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

const datatable = () => {

  $(".listOfBoatOwners").DataTable();

}


onMounted(async () => {

  console.log('Component mounted');
  await fetchData();
  datatable();
});
</script>

<style scoped>
.res{
   display: flex;
   justify-content: space-between;
}

.couraselImg {
  margin-inline: auto;
  width: 55%;
}

@media screen and (max-width: 767px) {
  .couraselImg {
    margin-inline: auto;
    width: 100%;
  }
  .res{
    display: block;
  }
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
}</style>