// src/stores/projectStore.js
import { ref, watch } from 'vue'

const defaultProjects = [
  {
    id: 1,
    title: 'Portfolio Personnel',
    description: 'Un site pour présenter mes compétences, mes projets et mon parcours.',
    technology: 'Vue.js'
  },
  {
    id: 2,
    title: 'Ciné-Recherche',
    description: 'Application permettant de rechercher des films via une API et afficher leurs détails.',
    technology: 'Angular'
  },
  {
    id: 3,
    title: 'TP Linux',
    description: 'Travail pratique complet sur la configuration système, la sécurité et les services sous Debian.',
    technology: 'Linux'
  },
  {
    id: 4,
    title: 'Gestionnaire de tâches',
    description: 'Application web pour ajouter, modifier, trier et supprimer des tâches.',
    technology: 'React'
  },
  {
    id: 5,
    title: 'Calculatrice simple',
    description: 'Une calculatrice faite avec HTML, CSS et JavaScript pour effectuer des opérations de base.',
    technology: 'JavaScript'
  },
  {
    id: 6,
    title: 'Application météo',
    description: 'Affiche la météo actuelle selon la localisation de l\'utilisateur.',
    technology: 'Vue.js'
  },
  {
    id: 7,
    title: 'Clone de YouTube',
    description: 'Interface de type YouTube avec vidéos simulées, barre de recherche et filtres.',
    technology: 'Angular'
  },
  {
    id: 8,
    title: 'Blog personnel',
    description: 'Une plateforme de publication d’articles avec commentaires.',
    technology: 'Vue.js'
  },
  {
    id: 9,
    title: 'Application de recettes',
    description: 'Permet d’ajouter, modifier et afficher des recettes de cuisine.',
    technology: 'React'
  },
  {
    id: 10,
    title: 'Système de quiz',
    description: 'Pose des questions aléatoires avec notation automatique.',
    technology: 'JavaScript'
  },
  {
    id: 11,
    title: 'Gestion des dépenses',
    description: 'Application pour suivre ses revenus et dépenses mensuels.',
    technology: 'Vue.js'
  },
  {
    id: 12,
    title: 'Convertisseur de devises',
    description: 'Convertit entre différentes monnaies en utilisant une API.',
    technology: 'Vue.js'
  },
  {
    id: 13,
    title: 'Galerie d’images',
    description: 'Affiche des images en grille avec filtrage par catégorie.',
    technology: 'JavaScript'
  },
  {
    id: 14,
    title: 'Formulaire de contact dynamique',
    description: 'Formulaire avec validation en temps réel.',
    technology: 'Vue.js'
  },
  {
    id: 15,
    title: 'Application d’apprentissage des langues',
    description: 'Propose des mini-leçons, des quiz et des scores pour apprendre une langue.',
    technology: 'Angular'
  }
]

const storedProjects = localStorage.getItem('projects')
const projects = ref(storedProjects ? JSON.parse(storedProjects) : defaultProjects)

watch(projects, () => {
  localStorage.setItem('projects', JSON.stringify(projects.value))
}, { deep: true })

function addProject(project) {
  project.id = Date.now()
  projects.value.push(project)
}

function deleteProject(id) {
  const index = projects.value.findIndex(p => p.id === id)
  if (index !== -1) projects.value.splice(index, 1)
}

function editProject(updated) {
  const index = projects.value.findIndex(p => p.id === updated.id)
  if (index !== -1) projects.value[index] = updated
}

function getProjectById(id) {
  return projects.value.find(p => p.id === Number(id))
}

export function useProjectStore() {
  return {
    projects,
    addProject,
    deleteProject,
    editProject,
    getProjectById
  }
}

