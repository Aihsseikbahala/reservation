<template>
  <div class="d-block  ">
    <!-- Navbar -->
    <nav style="display:flex; position: fixed; z-index: 3; background-color: white; width: 100vw; height: 60px;" >
      <div style="display:flex;">
        <section style="padding: 2px 8px; display: flex;">
          <img src="/@fs/xampp/htdocs/reservation/src/assets/island.png" class="logo-icon" style="width: 35px; height: 35px;">

         


          <router-link class="navbar-brand text-dark"  to="/">
            Spot Paradise
          </router-link>
                <router-link class="nav-link " to="/">Home</router-link>
             
                <router-link class="nav-link " to="/reservationTourist">Book</router-link>
             
                <router-link class="nav-link " to="/reservationList">Reservation</router-link>
             
                <router-link class="nav-link " to="/Notification">Notication</router-link>
             
              <div class="text-primary mt-2" @click="logout">
                <i class="bi bi-box-arrow-right"></i> Logout
              </div>
        </section>
      </div>
    </nav>

    <!-- Router View for Content -->
    <router-view style="padding-top: 60px;"></router-view>
  </div>
</template>
  
<script setup>
import { RouterLink } from 'vue-router'
const serverURL = `${window.location.protocol}//${window.location.host.replace(/:\d+$/, '')}`;

const logout = () => {
  localStorage.setItem('isTouristLog', 'false'); // Save to localStorage
  localStorage.setItem('isTourist', ''); // Save to localStorage

  window.location.href = `${serverURL}:2222/`;
};

</script>
  
<style scoped>
/* Custom styles for the navbar text */
.navbar-brand {
  letter-spacing: 1px;
}

.resSec {
  height: 100vh;
  width: 20%;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
}

.smhide {
  display: none;
}

@media screen and (max-width: 767px) {
  .resSec {
    display: flex;
    height: 8vh;
  }

  .size {
    display: flex;
  }

  .smhide {
    display: block;
  }
}

.nav-link {
  font-size: 16px;
}

.btn-light {
  font-size: 16px;
  font-weight: bold;
}</style>
  