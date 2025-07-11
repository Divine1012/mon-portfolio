<template>
  <div class="container mt-5">
    <h2 class="mb-4">Ajouter un nouveau projet</h2>

    <form @submit.prevent="submitForm" class="bg-light p-4 rounded shadow">
      <div class="mb-3">
        <label for="title" class="form-label">Titre du projet</label>
        <input
          v-model="form.title"
          type="text"
          id="title"
          class="form-control"
          required
        />
      </div>

      <div class="mb-3">
        <label for="description" class="form-label">Description</label>
        <textarea
          v-model="form.description"
          id="description"
          class="form-control"
          rows="3"
          required
        ></textarea>
      </div>

      <div class="mb-3">
        <label for="technology" class="form-label">Technologie</label>
        <input
          v-model="form.technology"
          type="text"
          id="technology"
          class="form-control"
          placeholder="Ex: Vue.js, Angular..."
          required
        />
      </div>

      <div class="mb-3">
        <label for="link" class="form-label">Lien du projet (facultatif)</label>
        <input
          v-model="form.link"
          type="url"
          id="link"
          class="form-control"
          placeholder="https://mon-projet.com"
        />
      </div>

      <button type="submit" class="btn btn-success">Ajouter</button>
      <router-link to="/" class="btn btn-secondary ms-2">Annuler</router-link>
    </form>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useProjectStore } from '../stores/projectStore.js'

const router = useRouter()
const { addProject } = useProjectStore()

const form = reactive({
  title: '',
  description: '',
  technology: '',
  link: ''
})

function submitForm() {
  addProject({ ...form })
  router.push('/')
}
</script>
