import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/tourguide',
      name: 'tourguide',
    
      component: () => import('../views/TourguideView.vue')
    },
    {
      path: '/tourist',
      name: 'tourist',
    
      component: () => import('../views/TouristView.vue')
    },
    {
      path: '/boat',
      name: 'boat',
    
      component: () => import('../views/BoatOwner.vue')
    },
    {
      path: '/Personel',
      name: 'Personel',
    
      component: () => import('../views/PersonelView.vue')
    },
    {
      path: '/AdminReservationView',
      name: 'AdminReservationView',
    
      component: () => import('../views/AdminReservationView.vue')
    },
    {
      path: '/MaintenanceView',
      name: 'MaintenanceView',
    
      component: () => import('../views/MaintenanceView.vue')
    },{
      path: '/BoatDetailsView',
      name: 'BoatDetailsView',
    
      component: () => import('../views/BoatDetailsView.vue')
    },
    ,{
      path: '/AnnouncementView',
      name: 'AnnouncementView',
    
      component: () => import('../views/AnnouncementView.vue')
    },
    {
      path: '/NotificationView',
      name: 'NotificationView',
    
      component: () => import('../views/NotificationView.vue')
    },
    {
      path: '/TouristdestinationView',
      name: 'TouristdestinationView',
    
      component: () => import('../views/TouristdestinationView.vue')
    },
    {
      path: '/PackageView',
      name: 'PackageView',
    
      component: () => import('../views/PackageView.vue')
    },
    {
      path: '/Boatlist',
      name: 'Boatlist',
      component: () => import('../../components/BoatOwnerLandingpage/BoatListComponent.vue')
    },
    {
      path: '/BoatOwner',
      name: 'BoatOwner',
    
      component: () => import('../../components/BoatOwnerLandingpage/BoatOwnerDataComponent.vue')
    },
    {
      path: '/PersonelPage',
      name: 'PersonelPage',
    
      component: () => import('../../components/PersonelLandingPage/PersonelListComponent.vue')
    },
    {
      path: '/TourguideReservation',
      name: 'TourguideReservation',
    
      component: () => import('../../components/TourguideLandingPage/ReservationListComponent.vue')
    },
    {
      path: '/Gcash',
      name: 'proceed',
    
      component: () => import('../../components/GcashPaymentComponent.vue')
    },
  ]
})

export default router
