
<template>
    <section style="padding-top: 50px;">
      <!-- Toast Notification -->
      <div class="pt-5" id="card" v-if="isToastVisible">
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
  
      <!-- Create New Button -->
      <button class="btn create-button m-4" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo"
        style="background:#003366;">
        <span class="button-text">Create new</span>
        <span class="plus-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
            class="bi bi-plus text-white" viewBox="0 0 16 16">
            <path
              d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
          </svg>
        </span>
      </button>
  
      <!-- Create New Announcement Modal -->
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <!-- ... (unchanged) ... -->
      </div>
  
      <!-- Announcements -->
      <div class="card mx-4" style="box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px">
        <div class="card-body">
          <div v-for="item in items" :key="item.announcement_id" class="mb-4">
            <div class="card">
              <div class="card-header">
                <h5 class="card-title">{{ item.announcement_id }}</h5>
                <small>{{ item.companyName }}</small>
              </div>
              <div class="card-body">
                <p class="card-text">{{ item.announcement }}</p>
              </div>
              <div class="card-footer">
                <!-- View Button -->
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                  data-bs-toggle="modal" :data-bs-target="'#viewmodal-' + item.announcement_id"
                  class="viewBtn viewImg bi bi-eye text-white bg-success p-1 mx-1 rounded" viewBox="0 0 16 16">
                  <!-- ... (unchanged) ... -->
                </svg>
  
                <!-- Edit Button -->
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                  class="editBtn bi bi-pencil-square text-white bg-primary p-1 mx-1 rounded"
                  viewBox="0 0 16 16" data-bs-toggle="modal"
                  :data-bs-target="'#editmodal-' + item.announcement_id" @click="setAnnounce(item)">
                  <!-- ... (unchanged) ... -->
                </svg>
  
                <!-- Delete Button -->
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                  class="bi bi-trash text-white bg-danger p-1 rounded mx-1 delbtn" viewBox="0 0 16 16"
                  data-bs-toggle="modal" :data-bs-target="'#deletemodal-' + item.announcement_id">
                  <!-- ... (unchanged) ... -->
                </svg>
              </div>
            </div>
  
            <!-- View Modal -->
            <!-- ... (unchanged) ... -->
  
            <!-- Edit Modal -->
            <!-- ... (unchanged) ... -->
  
            <!-- Delete Modal -->
            <!-- ... (unchanged) ... -->
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <!-- Script setup and styles remain unchanged -->
  
      
  <script setup>
  import { ref, onMounted} from "vue";
  import axios from 'axios';
  
  
  const bgcolor = ref('white');
  const toastMsg = ref('');
  const changeColor = ref('black');
  
  const items = ref([]);
  
  let API_URL = '' || 'http://localhost:3000/';
  const serverURL = `${window.location.protocol}//${window.location.host.replace(/:\d+$/, '')}`;
  API_URL = `${serverURL}:3000/`;
  console.log(API_URL);
  
  const formData = {
    companyName:ref(''),
    announcement: ref(''),
    show_me: ref('1')
  };
  
  const insertDatas = async () => {
    try {
      const dataToInsert = {
        companyName: formData.companyName.value,
        announcement: formData.announcement.value,
        show_me: formData.show_me.value,
      };
  
      await axios.post(API_URL + 'api/insert/announcement', dataToInsert);
      formData.companyName.value='';
      formData.announcement.value='';
      $('#exampleModal').modal('hide');
      toastMsg.value = 'Your data successfully Inserted!.';
      bgcolor.value = '#d4edda';
      showAndHideToast();
      fetchData();
  
    } catch (error) {
      console.error(error);
    }
  };
  
  
  
  
  const fetchData = async () => {
    try {
      const response = await axios.get(API_URL + 'api/get/announcement');
      items.value = response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const deleteData = async (id) => {
    try {
      const response = await axios.post(API_URL + 'api/delete/announcement/' + id)
      $(`#deletemodal-${id}`).modal('hide');
        toastMsg.value = 'Your data successfully Deleted!.';
        bgcolor.value = '#dc3545';
        changeColor.value = 'white';
        showAndHideToast();
  
      fetchData();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const formDataEdit = {
    companyName: ref(''),
    announcement: ref(''),
    announcement_id:ref('')
  };
  const setAnnounce = async (item) => {
    formDataEdit.companyName.value = item.companyName;
    formDataEdit.announcement.value = item.announcement;
  };
  const editData = async (id) => {
    const requestData = {
      companyName: formDataEdit.companyName.value,
      announcement: formDataEdit.announcement.value,
      announcement_id: id
    };
  
    try {
      await axios.post(API_URL + 'api/edit/announcement', requestData);
      $(`#editmodal-${id}`).modal('hide');
      toastMsg.value = 'Your data successfully Updated!.';
      bgcolor.value = '#d1ecf1';
      showAndHideToast();
  
      fetchData();
    } catch (error) {
      console.error('Error:', error.message);
    }
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
  
  const datatable =async () => {
    $(".list").DataTable();
  }
  onMounted(async () => {
    await fetchData();
    await datatable();
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
  </style>