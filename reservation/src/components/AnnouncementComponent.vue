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
      <button class="btn create-button m-4" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo"
        style="background:#003366;">
        <span class="button-text">Create new</span>
        <span class="plus-icon"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
            class="bi bi-plus text-white" viewBox="0 0 16 16">
            <path
              d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
          </svg></span>
      </button>

      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">New Announcement</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form  enctype="multipart/form-data">
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">Reciever</label>
                  <input type="text" class="form-control" id="recipient-name"  v-model="formData.companyName.value" disabled>
                </div>
                <div class="mb-3">
                  <label for="message-text" class="col-form-label">Announcement</label>
                  <textarea class="form-control" id="message-text" v-model="formData.announcement.value"></textarea>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary" @click="insertDatas">Send message</button>
                </div>
              </form>
            </div>
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
                  <th>Reciever</th>
                  <th>announcement</th>
                  <th>View</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in items" :key="item.id">
                  <td>{{ item.companyName }}</td>
                  <td>{{ item.announcement }}</td>
                  <td>
                    <!-- view btn -->
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                      data-bs-toggle="modal" :data-bs-target="'#viewmodal-' + item.announcement_id"
                      class="viewBtn viewImg bi bi-eye text-white bg-success p-1 mx-1 rounded" viewBox="0 0 16 16">
                      <path
                        d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                    </svg>
                    <!-- view modal -->
                    <div class="modal fade" :id="'viewmodal-' + item.announcement_id" tabindex="-1" aria-labelledby="exampleModalLabel"
                      aria-hidden="true">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">
                              View announcement
                            </h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body">

                
                  <td>{{ item.announcement }}</td>
          </div>
         
        </div>
      </div>
    </div>
    </td>
    <td>
      <!-- Edit btn-->
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
        class="editBtn bi bi-pencil-square text-white bg-primary p-1 mx-1 rounded" viewBox="0 0 16 16"
        data-bs-toggle="modal" :data-bs-target="'#editmodal-' + item.announcement_id" @click="setAnnounce(item)">
        <path
          d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
        <path fill-rule="evenodd"
          d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
      </svg>
      <!-- Edit modal -->
      <div class="modal fade" :id="'editmodal-' + item.announcement_id" tabindex="-1" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content" style="max-height: 550px; overflow-y: auto">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Edit Information
              </h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form >
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">Recipient:</label>
                  <input type="text" class="form-control" id="recipient-name" v-model="formDataEdit.companyName.value" disabled>
                </div>
                <div class="mb-3">
                  <label for="message-text" class="col-form-label">Message:</label>
                  <textarea class="form-control" id="message-text" v-model="formDataEdit.announcement.value"></textarea>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                    Close
                  </button>
                  <button type="button" class="btn btn-primary" @click="editData(item.announcement_id)">
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

const formData = {
  companyName:ref('@everyone'),
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
  companyName: ref('@everyone'),
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

