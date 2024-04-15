<template>
     <div class="pt-5">
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


    


      <div >
        <div class="modal-dialog">
          <div class="modal-content" style="max-height: 550px; overflow-y: auto">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Create Account</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form enctype="multipart/form-data">

                <div class="mb-3">
                  <label for="profile" class="form-label">Profile Picture</label>
                  <input type="file" id="profilePicture" name="profile" class="form-control" @change="handleFileUpload" />
                </div>
                <div class="mb-3">
                  <label for="firstName" class="form-label">First Name</label>
                  <input type="text" class="form-control" id="firstName" v-model="formData.firstName.value" />
                </div>
                <div class="mb-3">
                  <label for="lastName" class="form-label">Last Name</label>
                  <input type="text" class="form-control" id="lastName" v-model="formData.lastName.value" />
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <input type="email" class="form-control email" v-model="formData.email.value" />
                  <small class="text-danger d-none showmsg">Email already been used.</small>
                </div>
                <div class="mb-3">
                  <label for="Date" class="form-label">Date of Birth</label>
                  <input type="date" class="form-control" id="Date" v-model="formData.dateOfBirth.value" />
                </div>
                <div class="mb-3">
                  <label for="gender" class="form-label">Gender</label>
                  <select class="form-select" id="gender" v-model="formData.gender.value">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div class="mb-3">
                  <label for="phone" class="form-label">Phone</label>
                  <input type="text" class="form-control" id="phone" v-model="formData.phone.value" />
                </div>
                <div class="mb-3">
                  <label for="Address" class="form-label">Address</label>
                  <input type="text" class="form-control" id="Address" v-model="formData.address.value" />
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                    Close
                  </button>
                  <button type="button" class="btn btn-primary" @click="saveChanges">Register</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import axios from 'axios';

const bgcolor = ref('white');
const changeColor = ref('black');
const toastMsg = ref('');

const items = ref([]);
let API_URL = '' || 'http://localhost:3000/';
const serverURL = `${window.location.protocol}//${window.location.host.replace(/:\d+$/, '')}`;
API_URL = `${serverURL}:3000/`;
console.log(API_URL);
const fetchData = async () => {
  try {
    const response = await axios.get(API_URL + 'api/get');
    items.value = response.data;
    // console.log(items.value);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};


const formData = {
  firstName: ref(''),
  lastName: ref(''),
  email: ref(''),
  dateOfBirth: ref(''),
  gender: ref(''),
  phone: ref(''),
  address: ref(''),
  profilePicture: null,
  tourist_del: ref(''),
};

const handleFileUpload = (event) => {
  formData.profilePicture = event.target.files[0];
};

const email_auth=ref(true);
const saveChanges = async () => {

  const formDataObject = new FormData();
  formData.tourist_del.value = 1;
  formDataObject.append("firstName", formData.firstName.value);
  formDataObject.append("lastName", formData.lastName.value);
  formDataObject.append("email", formData.email.value);
  formDataObject.append("dateOfBirth", formData.dateOfBirth.value);
  formDataObject.append("gender", formData.gender.value);
  formDataObject.append("phone", formData.phone.value);
  formDataObject.append("address", formData.address.value);
  formDataObject.append("profilePicture", formData.profilePicture);
  formDataObject.append("tourist_del", formData.tourist_del.value);
 
  
  for (let i = 0; i < items.value.length; i++) {
  let item = items.value[i];

  if (item.email== formData.email.value) {
    email_auth.value = false;
    console.log("Email already exists: " +  email_auth.value);
    break;
  }
}

  if(email_auth.value){
  try {
    const response = await axios.post(API_URL + 'api/insert', formDataObject);

    formData.firstName.value = '';
    formData.lastName.value = '';
    formData.email.value = '';
    formData.dateOfBirth.value = '';
    formData.gender.value = '';
    formData.phone.value = '';
    formData.address.value = '';
    formData.profilePicture = null;
    formData.tourist_del.value = '';
    document.getElementById('profilePicture').value = '';

    $('#exampleModal').modal('hide');

    toastMsg.value = 'Your data successfully Inserted!.';
    bgcolor.value = '#d4edda';
    showAndHideToast();

    fetchData();
  } catch (error) {
    console.error('Error inserting data:', error);
  }
}
else{
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
const datatable = async () => {
  $(".list").DataTable();
};
onMounted(async () => {
  // await fetchClientIP();
  console.log('Component mounted');
  await fetchData()
});

</script>
<style scoped>

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