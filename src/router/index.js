// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddProjectView from '../views/AddProjectView.vue'
import DetailsView from '../views/DetailsView.vue'
// ajoute les autres vues si nécessaire

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/add',
    name: 'AddProject',
    component: AddProjectView
  },
  {
   path: '/details/:id',
    name: 'Details',
    component: DetailsView
}

  // autres routes...
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
