export default {
  header: {
    changelog: "Changelog",
    about: "À propos",
    login: "Se connecter",
    dashboard: "Tableau de bord",
  },
  about: {
    title: "À propos",
    abstract: "Découvrez les inspirations derrière {name} !",
  },
  changelog: {
    title: "Changelog",
    abstract:
      "Toutes les dernières mises à jour, améliorations et corrections.",
  },
  login: {
    welcomeBack: "Bon retour 👋",
    logout: "Se déconnecter",
  },
  goBack: {
    back: "Retour",
  },
  settings: {
    upload: {
      success: "Mis à jour avec succès !",
      error: "Une erreur est survenue.",
      loading: "Mise à jour...",
      save: "Sauvegarder",
    },
    uploadAvatar: "Cliquez sur l'avatar pour en télécharger un nouveau.",
    form: {
      name: "Nom",
      namePlaceholder: "Votre nom",
      email: "Email",
      emailPlaceholder: "Votre adresse email",
    },
  },
  navBar: {
    projects: "Projets",
    billing: "Tarifs",
    settings: "Paramètres",
  },
  imageUpload: {
    success: "Téléchargé avec succès !",
    error: {
      spaceInNameCode: "Espaces dans le nom de fichier",
      spaceInNameDesc:
        "Les espaces dans les noms de fichiers ne sont pas acceptés !",
      unknown: "Erreur lors du téléchargement !",
      spaceInFileDesc:
        "Le nom de fichier avec des espaces n'est pas acceptable",
      sizeExceed:
        "Seules les images sont prises en charge. La taille maximale du fichier est de {size}.",
    },
    label: "Téléchargement d'image",
    cancel: "Annuler",
    loading: "Téléchargement...",
    dropHere: "Déposez ici",
    or: "OU",
    clickHere: "Cliquez ici",
    upload: "Télécharger",
  },
  confirmModal: {
    cancel: "Cancel",
    ignore: "Êtes-vous sûr d'ignorer les modifications ?",
    yes: "Oui",
    no: "Non",
  },
  authForm: {
    error: "Échec de l'envoi du lien magique !",
    tryAgain: "Veuillez réessayer plus tard.",
    success: "Lien magique envoyé !",
    successAdditionalInfos: "Veuillez vérifier votre boîte mail",
    form: {
      email: "Email",
      emailPlaceholder: "nom@exemple.com",
      submit: "Envoyer le lien magique",
    },
    continueWithGit: "Continuer avec {github}",
  },
  projects: {
    details: "Voir les détails du projet",
    create: {
      label: "Créer un projet",
      save: "Créer",
      success: "Projet crée avec succès",
      error: {
        limitReached:
          "Votre abonnement atteint ses limites ! Passez à l'abonnement pro !",
        unknown: "Une erreur est survenue, veuillez réessayer",
      },
      form: {
        name: "Nom",
        namePlaceholder: "XYZ",
        domain: "Domaine",
        domainPlaceholder: "xyz.com",
      },
    },
    update: {
      success: "Projet modifié avec succès.",
      error: {
        unknown: "Une erreur est survenue en voulant sauvegarder votre projet.",
      },
      tryAgain: "Veuillez réessayer.",
      save: "Sauvegarder",
      form: {
        id: "ID",
        name: "Nom",
        namePlaceholder: "XYZ",
        domain: "Domaine",
        domainPlaceholder: "xyz.com",
      },
    },
    delete: {
      label: "Supprimer le projet",
      confirmationQuestion: "Êtes-vous absolument sûr ?",
      confirmationDescription:
        "Le projet sera supprimé définitivement. Cette action est irréversible et ne peut pas être annulée.",
      success: "Projet supprimé avec succès",
      error: {
        unknown: "Erreur lors de la suppression du projet.",
      },
      tryAgain: "Veuillez réessayer.",
      cancel: "Annuler",
      delete: "Supprimer",
    },
    tabs: {
      details: "Détails",
      settings: "Paramètres",
    },
  },
  billing: {
    alertDescription:
      "{name} montre juste comment utiliser Stripe avec Next.js et son App router. Veuillez utiliser les cartes de test de {link}",
    title: "Abonnement",
    abstract: "Actuellement sur le plan {name}.",
    manageSubscription: "Gérer l'abonnement",
    upgradeToPro: "Passer à PRO",
    endPlan: "Votre abonnement sera annulé le ",
    renewPlan: "Votre abonnement sera renouvelé le ",
    error: "Quelque chose n'a pas fonctionné.",
    tryAgain: "Veuillez rafraichir la page et réessayer.",
  },
  hero: {
    top: "Présentation de",
    main: "Kit de démarrage rapide pour votre prochain projet",
    sub: "Doté de toutes les fonctionnalités nécessaires pour commencer.",
    firstButton: "Commencer",
    tools: "Construit à l'aide d'excellents outils",
    on: "sur",
  },
  features: {
    title: "Fonctionnalités",
    abstract:
      "Ce kit arrive avec des fonctionnalités telles que la gestion d'utilisateur, le routage simple d'API, le téléchargement de fichiers et plus encore.",
    next: "Boostez votre SEO avec les optimisations de NextJS.",
    shadcn:
      "Facilitez la création de pages avec des composants façonnés avec Radix UI et stylisez-les avec Tailwind CSS.",
    prisma:
      "Gérez vos données avec une base Postgres et Prisma, le tout hébergé sur Vercel Postgres.",
    lucia:
      "Gérez les rôles et l'authentification de vos utilisateurs avec LuciaAuth v3.",
    uploadThings:
      "Téléchargez et prévisualisez des fichiers sans effort avec UploadThing.",
    reactEmail: "Créez des emails avec React Email et envoyez-les avec Resend.",
    i18n: "Supportez l'internationalisation avec la robustesse de Next-International.",
    stripe: "Recevez et traitez les paiements avec Stripe.",
    vercel: "Déployez en production et en prévisualisation avec Vercel.",
    additionalInfo:
      "{name} inclut également des pages de changelog et d'À propos construites avec {component} et du Markdown.",
  },
  pricing: {
    title: "Tarifs",
    abstract:
      "Choisissez le plan qui vous convient et commencez à en profiter.",
    free: "Free",
    freeDescription: "Jusque 3 projets",
    pro: "Business",
    proDescription: "Projets illimités ",
    month: "mois",
    getStarted: "Commencer",
    managePlan: "Gérer votre abonnement",
    upgradePlan: "Passer à la version supérieure",
    current: "Actuellement",
  },
  openSource: {
    title: "Fièrement Open Source",
    abstract:
      "{name} est un logiciel open source, alimenté par des outils open source. Le code est disponible sur GitHub.",
    starMe: "Mettez moi une étoile",
  },
  error: {
    source: "Oops, quelque chose s'est mal passé!",
    retry: "On réessaye ?",
  },
  footer: {
    developedBy: "Développé par {name}",
  },
  toggle: {
    light: "Clair",
    dark: "Sombre",
    system: "Système",
    labelTheme: "Changer de thème",
    labelLang: "Changer de langue",
  },
  copy: {
    error: "Erreur de copie!",
    success: "L'Id du projet a été copié!",
    tryAgain: "Veuillez réessayer.",
    label: "Copier",
  },
} as const;
