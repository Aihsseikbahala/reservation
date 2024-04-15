<template>
  <section>
    <!-- Button trigger modal -->
    <div class="pt-5">
      <div id="card" v-if="isToastVisible">
        <div>
          <div class="toast-header" :style="{ backgroundColor: bgcolor }">
            <strong class="me-auto">Success</strong>
            <small>{{ date }}</small>
          </div>
          <div class="toast-body">
            {{ toastMsg }}
          </div>
        </div>
      </div>

      <button class="btn create-button m-4" data-bs-toggle="modal" data-bs-target="#exampleModal"
        style="background:#003366;">
        <span class="button-text">Create new</span>
        <span class="plus-icon"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
            class="bi bi-plus text-white" viewBox="0 0 16 16">
            <path
              d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
          </svg></span>
      </button>

      <!-- Modal -->
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content" style="max-height: 550px; overflow-y: auto">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Create Account</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div class="modal-body">
              <form enctype="multipart/form-data">
                <div class="mb-3">
                  <label for="profile" class="form-label">Profile</label>
                  <input type="file" id="tg_img" name="profile" class="form-control" @change="handleFileUpload" />
                </div>
                <div class="mb-3">
                  <label for="firstName" class="form-label">First Name</label>
                  <input type="text" class="form-control" id="firstName" v-model="formData.tg_fname.value" />
                </div>
                <div class="mb-3">
                  <label for="lastName" class="form-label">Last Name</label>
                  <input type="text" class="form-control" id="lastName" v-model="formData.tg_lname.value" />
                </div>
                <div class="mb-3">
                  <label for="middlename" class="form-label">Middle Name</label>
                  <input type="text" class="form-control" id="middlename" v-model="formData.tg_mname.value" />
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <input type="email" class="form-control email" v-model="formData.tg_email.value" />
                </div>
                <div class="mb-3">
                  <label for="address" class="form-label">Address</label>
                  <input type="text" class="form-control" id="address" v-model="formData.tg_address.value" />
                </div>
                <div class="mb-3">
                  <label for="gender" class="form-label">Gender</label>
                  <select class="form-select" id="gender" v-model="formData.tg_gender.value">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div class="mb-3">
                  <label for="birthday" class="form-label">Birthdate</label>
                  <input type="date" class="form-control" id="birthday" v-model="formData.tg_dob.value" />
                </div>
                <div class="mb-3">
                  <label for="status" class="form-label">Status</label>
                  <input type="text" class="form-control" id="status" v-model="formData.tg_status.value" />
                </div>
                <div class="mb-3">
                  <label for="nationality" class="form-label">Nationality</label>
                  <input type="nationality" class="form-control" id="nationality"
                    v-model="formData.tg_nationality.value" />
                </div>
                <div class="mb-3">
                  <label for="phone" class="form-label">Phone</label>
                  <input type="text" class="form-control" id="phone" v-model="formData.tg_cpnum.value" />
                </div>
                <div class="alert alert-danger d-none showmsg" role="alert">
  Email already been used!
</div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                    Close
                  </button>
                  <button type="button" class="btn btn-primary" @click="saveChanges">
                    Save changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="card mx-4"
        style="box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;">
        <div class="card-body">
          <div class="table-responsive" style="max-height: 450px; overflow-y: auto">
            <table class="list table table-striped" style="width: 100%">
              <thead>
                <tr>
                
                  <th>First name</th>
                  <th>Last name</th>
                  <th>Email</th>
                  <th>Gender</th>
                  <th>Phone</th>
                  <th>View</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in items" :key="item.tg_id">
                 
                  <td>{{ item.tg_fname }}</td>
                  <td>{{ item.tg_lname }}</td>
                  <td>{{ item.tg_email }}</td>
                  <td>{{ item.tg_gender }}</td>
                  <td>{{ item.tg_cpnum }}</td>
                  <td>
                    <!-- view btn -->
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                      data-bs-toggle="modal" :data-bs-target="'#viewmodal-' + item.tg_id"
                      class="viewBtn viewImg bi bi-eye text-white bg-success p-1 mx-1 rounded" viewBox="0 0 16 16">
                      <path
                        d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                    </svg>
                    <!-- view modal -->
                    <div class="modal fade" :id="'viewmodal-' + item.tg_id" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">View Information</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="card text-center">
                  <div class="card-header" style="background: url('/@fs/xampp/htdocs/reservation/src/assets/Gilutongan.png');  height: 250px;padding-top:100px;  background-repeat: no-repeat; background-size:100%; ">
                                <img :src="'/@fs/xampp/htdocs/reservation/src/assets/uploads/' + item.tg_img"
                                  alt="Profile Picture" class="card-img-top img-fluid rounded-circle hoverImg" style="width:160px;height:160px; border:5px solid white;box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;" @click="image">
                              </div>
                              <div v-if="isImage" style="position: fixed; background-color:rgba(0, 0, 0, 0.5);  top: 50%; left: 50%; transform: translate(-50%, -50%); width: 100%; height:100vh;" @click="image2">
    <img  v-if="isImage2" :src="'/@fs/xampp/htdocs/reservation/src/assets/uploads/' + item.tg_img" class="wide">
                              </div>
                    <div class="card-body">
                        <h5 class="card-title">{{ item.tg_fname }} {{ item.tg_lname }}</h5>
                        <p class="card-text text-muted">{{ item.tg_email }}</p>
                        <div class="row">
                            <div class="col-md-6">
                                <strong>ID:</strong>
                                <span class="m-2">{{ item.tg_id }}</span>
                            </div>
                            <div class="col-md-6">
                                <strong>Gender:</strong>
                                <span class="m-2">{{ item.tg_gender }}</span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <strong>Phone:</strong>
                                <span class="m-2">{{ item.tg_phone }}</span>
                            </div>
                            <!-- Add more fields as needed -->
                        </div>
                    </div>
                    <div class="card-footer">
                        <!-- You can add additional buttons or information here -->
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>

                  </td>
                  <td>
                    <!-- Edit btn-->
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                      class="editBtn bi bi-pencil-square text-white bg-primary p-1 mx-1 rounded" viewBox="0 0 16 16"
                      data-bs-toggle="modal" :data-bs-target="'#editmodal-' + item.tg_id" @click="setTourguide(item)">
                      <path
                        d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                      <path fill-rule="evenodd"
                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                    </svg>
                    <!-- Edit modal -->
                    <div class="modal fade" :id="'editmodal-' + item.tg_id" tabindex="-1"
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
                            <form enctype="multipart/form-data">
                              <div class="mb-3">
                                <label for="profile" class="form-label">Profile</label>
                                <input type="file" id="tg_img" name="profile" class="form-control"
                                  @change="handleFileEditUpload" />
                              </div>
                              <div class="mb-3">
                                <label for="firstName" class="form-label">First Name</label>
                                <input type="text" class="form-control" id="firstName"
                                  v-model="formDataEdit.tg_fname.value" />
                              </div>
                              <div class="mb-3">
                                <label for="lastName" class="form-label">Last Name</label>
                                <input type="text" class="form-control" id="lastName"
                                  v-model="formDataEdit.tg_lname.value" />
                              </div>
                              <div class="mb-3">
                                <label for="middlename" class="form-label">Middle Name</label>
                                <input type="text" class="form-control" id="middlename"
                                  v-model="formDataEdit.tg_mname.value" />
                              </div>
                              <div class="mb-3">
                                <label for="email" class="form-label">Email</label>
                                <input type="email" class="form-control" id="email"
                                  v-model="formDataEdit.tg_email.value" />
                              </div>
                              <div class="mb-3">
                                <label for="address" class="form-label">Address</label>
                                <input type="text" class="form-control" id="address"
                                  v-model="formDataEdit.tg_address.value" />
                              </div>
                              <div class="mb-3">
                                <label for="gender" class="form-label">Gender</label>
                                <select class="form-select" id="gender" v-model="formDataEdit.tg_gender.value">
                                  <option value="Male">Male</option>
                                  <option value="Female">Female</option>
                                </select>
                              </div>
                              <div class="mb-3">
                                <label for="birthday" class="form-label">Birthdate</label>
                                <input type="date" class="form-control" id="birthday"
                                  v-model="formDataEdit.tg_dob.value" />
                              </div>
                              <div class="mb-3">
                                <label for="status" class="form-label">Status</label>
                                <input type="text" class="form-control" id="status"
                                  v-model="formDataEdit.tg_status.value" />
                              </div>
                              <div class="mb-3">
                                <label for="nationality" class="form-label">Nationality</label>
                                <input type="nationality" class="form-control" id="nationality"
                                  v-model="formDataEdit.tg_nationality.value" />
                              </div>
                              <div class="mb-3">
                                <label for="phone" class="form-label">Phone</label>
                                <input type="text" class="form-control" id="phone"
                                  v-model="formDataEdit.tg_cpnum.value" />
                              </div>
                              <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                                  Close
                                </button>
                                <button type="button" class="btn btn-primary" @click="saveChangesUpdate(item.tg_id)">
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
                      class="bi bi-trash text-white bg-danger p-1 rounded mx-1 delbtn" viewBox="0 0 16 16"
                      data-bs-toggle="modal" :data-bs-target="'#deletemodal-' + item.tg_id">
                      <path
                        d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                      <path
                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                    </svg>
                    <!-- Delete modal -->
                    <div class="modal fade" :id="'deletemodal-' + item.tg_id" tabindex="-1"
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
                              Are you sure you delete this item {{ item.tg_id }} ?
                            </h5>
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                              Cancel
                            </button>
                            <button type="button" class="btn btn-primary" @click="deleteData(item.tg_id)">
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
import { ref, onMounted } from "vue";
import axios from 'axios';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const bgcolor = ref('white');
const toastMsg = ref('');
const changeColor = ref('black');


const isImage=ref(false);
const isImage2=ref(false);

const image=()=>{
  isImage.value=!isImage.value;
  isImage2.value=!isImage2.value;

};

const image2=()=>{
  isImage2.value=!isImage2.value;
  isImage.value=!isImage.value;

};

let API_URL = ''|| 'http://localhost:3000/';
const serverURL = `${window.location.protocol}//${window.location.host.replace(/:\d+$/, '')}`;
API_URL = `${serverURL}:3000/`;
console.log(API_URL);

const fetchData = async () => {
  try {
    const response = await axios.get(API_URL + 'api/gettourguide');
    items.value = response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const formData = {
  tg_fname: ref(''),
  tg_lname: ref(''),
  tg_mname: ref(''),
  tg_email: ref(''),
  tg_address: ref(''),
  tg_gender: ref(''),
  tg_dob: ref(''),
  tg_status: ref(''),
  tg_nationality: ref(''),
  tg_cpnum: ref(''),
  tg_img: null,
};

const handleFileUpload = (event) => {
  formData.tg_img = event.target.files[0];
};
const email_auth=ref(true);
const saveChanges = async () => {
  const formDataObject = new FormData();

  formDataObject.append("tg_fname", formData.tg_fname.value);
  formDataObject.append("tg_lname", formData.tg_lname.value);
  formDataObject.append("tg_mname", formData.tg_mname.value);
  formDataObject.append("tg_email", formData.tg_email.value);
  formDataObject.append("tg_address", formData.tg_address.value);
  formDataObject.append("tg_gender", formData.tg_gender.value);
  formDataObject.append("tg_dob", formData.tg_dob.value);
  formDataObject.append("tg_status", formData.tg_status.value);
  formDataObject.append("tg_nationality", formData.tg_nationality.value);
  formDataObject.append("tg_cpnum", formData.tg_cpnum.value);
  formDataObject.append("tg_img", formData.tg_img);

  for (let i = 0; i < items.value.length; i++) {
  let item = items.value[i];

  if (item.tg_email== formData.tg_email.value) {
    email_auth.value = false;
    console.log("Email already exists: " +  email_auth.value);
    break;
  }
}

  if(email_auth.value){

  axios.post(API_URL + 'api/insert/tourguide', formDataObject)
    .then((response) => {
      formData.tg_fname.value = '',
        formData.tg_lname.value = '',
        formData.tg_mname.value = '',
        formData.tg_email.value = '',
        formData.tg_address.value = '',
        formData.tg_gender.value = '',
        formData.tg_dob.value = '',
        formData.tg_status.value = '',
        formData.tg_nationality.value = '',
        formData.tg_cpnum.value = '',
        document.getElementById('tg_img').value = '';

      $('#exampleModal').modal('hide');
      toastMsg.value = 'Your data successfully Inserted!.';
      bgcolor.value = '#d4edda';
      showAndHideToast();

      fetchData();
    })
    .catch((error) => {
      console.log(error);
    });
  }else{
$('.email').addClass('btn-outline-danger');
$('.showmsg').removeClass('d-none');

$('.email').addClass('shake');
setTimeout(() => {
  $('.email').removeClass('shake');
}, 500);

setTimeout(() => {
  $('.email').removeClass('btn-outline-danger');
  $('.showmsg').addClass('d-none');
  $('.email').removeClass('shake');
}, 5000);

}
email_auth.value=true;
};
const formDataEdit = {
  tg_fname: ref(''),
  tg_lname: ref(''),
  tg_mname: ref(''),
  tg_email: ref(''),
  tg_address: ref(''),
  tg_gender: ref(''),
  tg_dob: ref(''),
  tg_status: ref(''),
  tg_nationality: ref(''),
  tg_cpnum: ref(''),
  tg_img: null,
  tg_id: ref(''),
};
const handleFileEditUpload = (event) => {
  formDataEdit.tg_img = event.target.files[0];
};
const setTourguide = async (item) => {
  formDataEdit.tg_fname.value = item.tg_fname;
  formDataEdit.tg_lname.value = item.tg_lname;
  formDataEdit.tg_mname.value = item.tg_mname;
  formDataEdit.tg_email.value = item.tg_email;
  formDataEdit.tg_address.value = item.tg_address;
  formDataEdit.tg_gender.value = item.tg_gender;
  formDataEdit.tg_status.value = item.tg_status;
  formDataEdit.tg_nationality.value = item.tg_nationality;
  formDataEdit.tg_cpnum.value = item.tg_cpnum;
};

const saveChangesUpdate = async (id) => {
  const formDataObject = new FormData();
  formDataEdit.tg_id = id;
  formDataObject.append("tg_fname", formDataEdit.tg_fname.value);
  formDataObject.append("tg_lname", formDataEdit.tg_lname.value);
  formDataObject.append("tg_mname", formDataEdit.tg_mname.value);
  formDataObject.append("tg_email", formDataEdit.tg_email.value);
  formDataObject.append("tg_address", formDataEdit.tg_address.value);
  formDataObject.append("tg_gender", formDataEdit.tg_gender.value);
  formDataObject.append("tg_nationality", formDataEdit.tg_nationality.value);
  formDataObject.append("tg_dob", formDataEdit.tg_dob.value);
  formDataObject.append("tg_status", formDataEdit.tg_status.value);
  formDataObject.append("tg_cpnum", formDataEdit.tg_cpnum.value);
  formDataObject.append("tg_img", formDataEdit.tg_img);
  formDataObject.append("tg_id", formDataEdit.tg_id);

  try {
    const response = await axios.put(API_URL + 'api/edittourguide', formDataObject);


    $(`#editmodal-${id}`).modal('hide');
    toastMsg.value = 'Your data successfully Updated!.';
    bgcolor.value = '#d1ecf1';
    showAndHideToast();
    fetchData();

  } catch (error) {
    console.error('Error updating data:', error);
  }
};

const deleteData = (id) => {
  axios
    .post(API_URL + 'api/deletetourguide/' + id)
    .then((response) => {
      $(`#deletemodal-${id}`).modal('hide');
      toastMsg.value = 'Your data successfully Deleted!.';
    bgcolor.value = '#dc3545';
    changeColor.value='white';
      fetchData();
    })
    .catch((error) => {
      console.log(error);
    });
};
const items = ref([]);

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

  $(".list").DataTable();

}


onMounted(async () => {

  console.log('Component mounted');
  await fetchData();
  datatable();
});
</script>
<style scoped>
.hoverImg:hover{
opacity:0.9;
}
.wide{
  width: 70%; 
  height: auto;
   margin: 100px auto; 
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

.shake {
  animation: shake 0.5s ease-in-out infinite;
}

@keyframes shake {
  0%, 100% {
    transform: translateX(0);
  }
  25%, 75% {
    transform: translateX(-5px);
  }
  50% {
    transform: translateX(5px);
  }
}
</style>

  