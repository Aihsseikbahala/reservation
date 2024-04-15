import { createRouter, createWebHistory } from 'vue-router'
import TouristLoginComponent from '../../components/TouristLandingpage/TouristLoginComponent.vue';
import TouristAppComponent from '../../components/TouristLandingpage/TouristAppComponent.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'TouristAppComponent',
      component:  TouristAppComponent
    },
    {
      path: '/TouristLoginComponent',
      name: 'TouristLoginComponent',
      component:  TouristLoginComponent
    },
    {
      path: '/reservationTourist',
      name: 'reservationTourist',
      component: () => import('../../components/TouristLandingPage/ReservationComponent.vue')
    },
    {
      path: '/reservationList',
      name: 'reservationList',
      component: () => import('../../components/TouristLandingPage/ReservationListComponent.vue')
    },
    {
      path: '/Notification',
      name: 'Notification',
      component: () => import('../../components/TouristLandingPage/NotificationComponent.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../../components/TouristLandingPage/registerComponent.vue')
    },
  ]
})

export default router
