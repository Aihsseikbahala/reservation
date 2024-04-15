
<template>
  <section class="text-center">
    <div class="p-5 bg-image" style="
        background-image: url('/@fs/reservation/src/assets/background.jpg');
        height: 350px;
        margin-top:50px;
      ">

      <div class="card mx-auto  shadow-5-strong" style="
        background: hsla(0, 0%, 100%, 0.8);
        backdrop-filter: blur(30px);
        width: 90%;
        max-width: 350px;
      ">
        <div class="card-body text-center"> 
          <div class="row ">
            <div>
              <h2 class="fw-bold mb-5">Spot <span style="color:orange;">Paradise</span></h2>
              <form>
                <div class="form-outline mb-3">
                  <input type="email" id="form3Example3" class="form-control" placeholder="Email" v-model="username" />

                </div>

                <div class="form-outline mb-3">
                  <input type="password" id="form3Example4" class="form-control" placeholder="Password" v-model="password" />
                </div>


                <a  class="btn btn-primary btn-block mb-4" @click="login">
                  Log in
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Section: Design Block -->
</template>
<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const username = ref('');
const password = ref('');
let API_URL = '';
const serverURL = `${window.location.protocol}//${window.location.host.replace(/:\d+$/, '')}`;
API_URL = `${serverURL}:3000/`;
console.log(API_URL);

const login = () => {
  axios.post(API_URL + 'api/authTourist', { username: username.value, password: password.value })
    .then(response => {
      const { authenticated, user,message,id } = response.data;
      if (authenticated) {
        localStorage.setItem('isTouristLog', 'true');
        localStorage.setItem('isTourist', user);
        localStorage.setItem('IdTourist', id );
        location.reload();

      } else {
        alert(`Login failed: ${message}`);
      }
      username.value = "";
      password.value = "";
    })
    .catch(error => {
      console.error('Error during login:', error);
      alert('Login failed. Please try again.');
    });
};



onMounted(async () => {
  console.log('Component mounted');
});
</script>
<style scoped>
 .card-body{
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
 }
</style>