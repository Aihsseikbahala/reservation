<template>
    <section>
        <!-- Button trigger modal -->
      
        <div style="padding-top: 60px;">
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
                                </tr>
                            </thead>
                            <tbody>
                                <template   v-for="item in items" :key="item.id">
                                <tr v-if="id==item.boat_owner_id">
                                   
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
                                </tr>
                                </template>
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

const id=ref('');


const fetchData = async () => {
    try {
        const response = await axios.get(API_URL + 'api/getReservation');
        items.value = response.data;
        console.log(items.value);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
    id.value=localStorage.getItem('Id');
};
const datatable = async () => {
    $(".list").DataTable();
};

onMounted(async () => {
    console.log('Component mounted');
    await fetchData()
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
  
  
  
    