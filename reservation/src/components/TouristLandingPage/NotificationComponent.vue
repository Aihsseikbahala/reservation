<template>
    <section>
      <div class="pt-5">
        <div id="card" v-if="isToastVisible">
          <div>
            <div class="toast-header" :style="{ backgroundColor: bgcolor,color: changeColor  }">
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
              <table class="list table table-striped" style="width: 100vw">
                <thead>
                  <tr>
                    <th>announcement</th>
                  
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in items" :key="item.id">
                    <td class="col-8">{{ item.announcement }}</td>
                   
      <td class="col-4">
        <!-- delete btn -->
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
          class="bi bi-trash text-white bg-danger p-1 rounded mx-1 delbtn" viewBox="0 0 16 16" data-bs-toggle="modal"
          :data-bs-target="'#deletemodal-' + item.announcement_id">
          <path
            d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
          <path
            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
        </svg>
        <!-- Delete modal -->
        <div class="modal fade" :id="'deletemodal-' + item.announcement_id" tabindex="-1" aria-labelledby="exampleModalLabel"
          aria-hidden="true">
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
                  Are you sure you delete this item {{ item.announcement_id }} ?
                </h5>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                  Cancel
                </button>
                <button type="submit" class="btn btn-primary" @click="deleteData(item.announcement_id)">
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
  
  