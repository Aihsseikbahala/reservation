<template>
  <div>
    <!-- Navbar -->
    <nav class="bg-primary p-2 navbar navbar-expand-lg">
      <div class="container">
        <router-link class="navbar-brand text-white ml-2" style="font-size: 24px; font-weight: bold;" to="/">
          SPOT PARADISE
        </router-link>

        <!-- Navigation Links -->
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link text-white" to="/">Home</router-link>
            </li>
          </ul>
        </div>

        <!-- Login Button -->
        <router-link class="btn btn-light text-primary ml-auto" to="/TouristLoginComponent">
          <i class="bi bi-box-arrow-right"></i> Log In
        </router-link>
        <router-link class="btn btn-light mx-2 text-primary ml-auto" to="/register">
          <i class="bi bi-box-arrow-right"></i> register
        </router-link>
      </div>
    </nav>

    <!-- Router View for Content -->
    <router-view></router-view>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
/* Custom styles for the navbar text */
.navbar-brand {
  letter-spacing: 1px;
}

.nav-link {
  font-size: 16px;
  font-weight: bold;
}

.btn-light {
  font-size: 16px;
  font-weight: bold;
}
</style>
