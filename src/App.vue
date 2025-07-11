<template>
  <div>
    <Navbar />

    <!-- On affiche uniquement la vue de la route -->
    <router-view />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
</script>

<style scoped>
/* Tu peux ajouter ici des personnalisations si besoin */
</style>

