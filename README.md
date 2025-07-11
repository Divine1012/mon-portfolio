# Mon Portfolio Vue.js

Bienvenue sur mon portfolio de développeuse web réalisé avec **Vue.js** et **Bootstrap**.

## Fonctionnalités

- **Page d’accueil** :
  - Affichage des projets sous forme de cartes.
  - Chaque carte montre le **titre** et les **technologies principales** utilisées.
  - Bouton de **filtrage par technologie** pour mieux naviguer parmi les projets.

- **Page de détails** :
  - Cliquer sur une carte mène à une page dédiée.
  - Affichage complet : **titre**, **description**, **technologies**, **liens**.

- **Page "Ajouter un projet"** :
  - Formulaire pour **ajouter un nouveau projet** à la liste.
  - **Pas besoin de backend**, les projets sont gérés en local avec le store.

## Technologies utilisées

- Vue 3
- Vue Router
- Pinia (pour le store)
- Bootstrap 5
- Vite

## Lancer le projet en local

1. Clone le repo :
   ```bash
   git clone <url-du-repo>
   cd mon-portfolio

#Installe les dépendances :
bash
Copy code
npm install

#Démarre le serveur de développement :
bash
Copy code
npm run dev

#Accède à l’application :
arduino
Copy code
http://localhost:5173


##Structure du projet
css
Copy code
mon-portfolio/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   └── Navbar.vue
│   ├── views/
│   │   ├── HomeView.vue
│   │   ├── DetailsView.vue
│   │   └── AddProjectView.vue
│   ├── stores/
│   │   └── projectStore.js
│   ├── router/
│   │   └── index.js
│   ├── App.vue
│   └── main.js

### Choix techniques
### Pourquoi Vue.js ?
Facilité d’apprentissage et de prise en main : Vue.js est léger, intuitif, et permet de créer rapidement une interface réactive.

Composants modulaires : Cela facilite la maintenance et la réutilisation du code.

Communauté active : Beaucoup de ressources et de bibliothèques disponibles.

Performance : Vue.js est rapide, avec une empreinte mémoire faible.

### Pourquoi Bootstrap ?
Rapidité de mise en place : Bootstrap offre un système de grille et des composants prêts à l’emploi, ce qui accélère le développement.

Design responsive par défaut : Adaptation facile à tous les types d’écrans (mobile, tablette, desktop).

Personnalisation possible : Facile à customiser avec du CSS ou via les variables SCSS.

Large communauté : Beaucoup de tutoriels et d’extensions disponibles.

