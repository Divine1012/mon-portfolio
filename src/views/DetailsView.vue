<template>
  <div class="container mt-4" v-if="project">
    <h1>{{ project.title }}</h1>
    <p><strong>Description :</strong> {{ project.description }}</p>
    <p><strong>Technologie :</strong> {{ project.technology }}</p>
    <p v-if="project.link">
      <strong>Lien :</strong>
      <a :href="project.link" target="_blank" rel="noopener">
        {{ project.link }}
      </a>
    </p>

    <router-link to="/" class="btn btn-primary mt-3">
      Retour à l'accueil
    </router-link>
  </div>

  <div v-else class="container mt-4">
    <p class="text-danger">Projet introuvable.</p>
    <router-link to="/" class="btn btn-secondary mt-3">
      Retour à l'accueil
    </router-link>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { useProjectStore } from '../stores/projectStore.js'

const route = useRoute()
const { projects, getProjectById } = useProjectStore()

// Utilise computed pour que le projet se mette à jour si les projets sont chargés après
const project = computed(() => getProjectById(route.params.id))
</script>
