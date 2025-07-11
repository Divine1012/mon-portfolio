<script setup>
import { ref, computed } from 'vue'
import { useProjectStore } from '../stores/projectStore.js'

const { projects } = useProjectStore()
const filterTech = ref('')

// Liste des technologies pour les boutons
const technologies = computed(() => {
  const techSet = new Set(projects.value.map(p => p.technology))
  return Array.from(techSet)
})

// Projets filtrés selon la techno sélectionnée
const filteredProjects = computed(() => {
  if (!filterTech.value) return projects.value
  return projects.value.filter(p => p.technology === filterTech.value)
})

function setFilter(tech) {
  filterTech.value = tech === filterTech.value ? '' : tech
}
</script>

<template>
  <div class="container mt-4">
    <h1 class="mb-4">Mes projets</h1>

    <!-- Boutons de filtre -->
    <div class="mb-3">
      <button 
        class="btn btn-outline-primary me-2"
        :class="{ active: !filterTech }"
        @click="filterTech = ''"
      >
        Tous
      </button>
      <button 
        v-for="tech in technologies" 
        :key="tech" 
        class="btn btn-outline-primary me-2"
        :class="{ active: filterTech === tech }"
        @click="setFilter(tech)"
      >
        {{ tech }}
      </button>
    </div>

    <!-- Liste des projets -->
    <div class="row">
      <div 
        v-for="project in filteredProjects" 
        :key="project.id" 
        class="col-md-4 mb-4"
      >
        <div class="card h-100">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text flex-grow-1">{{ project.description }}</p>
            <p><strong>Technologie :</strong> {{ project.technology }}</p>
            <router-link 
              :to="`/details/${project.id}`" 
              class="btn btn-primary mt-auto"
            >
              Voir détails
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

