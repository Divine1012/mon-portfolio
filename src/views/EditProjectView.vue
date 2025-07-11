<template>
  <div class="container py-5">
    <h2 class="mb-4">Modifier le projet</h2>
    <form @submit.prevent="updateProject">
      <div class="mb-3">
        <label class="form-label">Titre</label>
        <input v-model="title" class="form-control" required />
      </div>
      <div class="mb-3">
        <label class="form-label">Description</label>
        <textarea v-model="description" class="form-control" required></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Enregistrer</button>
    </form>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { useProjectStore } from '../stores/projectStore'
import { ref } from 'vue'

const route = useRoute()
const router = useRouter()
const store = useProjectStore()
const project = store.getProjectById(route.params.id)

const title = ref(project.title)
const description = ref(project.description)

const updateProject = () => {
  store.updateProject({ id: project.id, title: title.value, description: description.value })
  router.push('/')
}
</script>

