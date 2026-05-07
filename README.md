<div align="center">
  <img src="https://cdn-icons-png.flaticon.com/512/10041/10041758.png" width="100" height="100" alt="HappyBudget Logo" />
  
  # 💸 HappyBudget
  ### Le copilote financier qui ne vous lâche pas.
  
  [![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?style=for-the-badge&logo=vercel)](https://happybudget-theta.vercel.app/)
  [![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

  **Zéro tableur, zéro stress.** Une interface "Océan & Menthe" pour piloter votre vie financière sans avoir besoin d'un diplôme de comptabilité.
</div>

---

## 💎 Pourquoi HappyBudget ?

La plupart des apps de budget sont soit trop complexes, soit trop roses. **HappyBudget** a été conçu pour ceux qui veulent la puissance d'un outil pro avec la simplicité d'une app de messagerie.

### 🏠 Le Cockpit de Charges Fixes
Plus besoin d'oublier vos abonnements. Tout est listé et catégorisé :
*   **Divertissement** : Netflix, Disney+, Amazon Prime, Crunchyroll, Apple Music.
*   **Technologie** : iCloud, Box Orange, Forfait mobile.
*   **Vie Quotidienne** : Loyer, EDF, Darty Max.
*   **Mobilité & Santé** : Assurance voiture/moto, Prêt étudiant, Salle de sport.

### 🤝 L'Intelligence "Partagée"
L'app calcule votre part (50%) des dépenses communes et l'intègre **directement** dans votre reste à vivre personnel. C'est l'union parfaite entre un gestionnaire de budget et un Tricount.

---

## 📊 Visualisation des Flux

| Pilier | Fonction | Couleur |
| :--- | :--- | :--- |
| **Revenus** | Entrée d'argent brute (Salaire) | `Emerald` |
| **Fixe** | Incompressibles (Abonnements/Loyer) | `Indigo` |
| **Variable** | Achats au jour le jour & Sorties | `Cyan` |
| **Épargne** | Ce qu'il vous reste à la fin | `Slate` |

---

## 🛠️ Stack Technique

*   **Framework** : [Next.js 15](https://nextjs.org/) (App Router ready)
*   **Styling** : [Tailwind CSS v4](https://tailwindcss.com/) (Modern CSS engines)
*   **Icons** : [Lucide React](https://lucide.dev/) pour une interface intuitive.
*   **Storage** : `localStorage` API pour une confidentialité totale (vos données ne quittent jamais votre téléphone).

---

## 📱 Installation sur Mobile

Pas besoin d'App Store. Comme c'est une **PWA (Progressive Web App)** :
1. Ouvrez l'URL sur votre navigateur mobile.
2. Appuyez sur **Partager** (iOS) ou sur les **trois points** (Android).
3. Sélectionnez **"Sur l'écran d'accueil"**.
4. L'icône HappyBudget apparaît sur votre téléphone comme une vraie application.

---

## 🧩 Structure du Projet
```text
├── components/          # Composants réutilisables (Dashboard, Forms, List)
├── pages/               # Pages de l'application (Perso, Commun)
├── styles/              # Configuration Tailwind & CSS Global
└── public/              # Assets statiques
