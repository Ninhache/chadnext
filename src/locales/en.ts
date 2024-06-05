export default {
  header: {
    changelog: "Changelog",
    about: "About",
    login: "Login",
    dashboard: "Dashboard",
  },
  about: {
    title: "About",
    abstract: "Learn about the tech stack and inspiration behind {name}.",
  },
  changelog: {
    title: "Changelog",
    abstract: "All the latest updates, improvements, and fixes.",
  },
  login: {
    welcomeBack: "Welcome Back 👋",
    logout: "Logout",
  },
  goBack: {
    back: "Back",
  },
  settings: {
    upload: {
      success: "Updated successfully!",
      error: "Something went wrong.",
      loading: "Updating...",
      save: "Update",
    },
    uploadAvatar: "Click on the avatar to upload new one.",
    form: {
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "Your email address",
    },
  },
  navBar: {
    projects: "Projects",
    billing: "Billing",
    settings: "Settings",
  },
  imageUpload: {
    success: "Uploaded successfully!",
    error: {
      spaceInNameCode: "Spaces in file name",
      spaceInNameDesc: "Spaces in file names are not acceptable!",
      unknown: "Error occurred while uploading!",
      spaceInFileDesc: "File name with spaces is not acceptable",
      sizeExceed: "Only Images are supported. Max file size is {size}.",
    },
    label: "Image Upload",
    cancel: "Cancel",
    loading: "Uploading...",
    dropHere: "Drop Here",
    or: "OR",
    clickHere: "Click here",
    upload: "Upload",
  },
  confirmModal: {
    cancel: "Cancel",
    ignore: "Are you sure to discard the changes?",
    yes: "Yes",
    no: "No",
  },
  authForm: {
    error: "Failed to send Magic link!",
    tryAgain: "Please try again later.",
    success: "Magic Link sent!",
    successAdditionalInfos: "Please check your mail inbox",
    form: {
      email: "Email",
      emailPlaceholder: "name@example.com",
      submit: "Send magic link",
    },
    continueWithGit: "Continue with {github}",
  },
  projects: {
    details: "View project details",
    create: {
      label: "Create a project",
      save: "Create",
      success: "Project created successfully",
      error: {
        limitReached: "Free plan limit reached. Please upgrade your plan.",
        unknown: "Error creating project. Please try again",
      },
      form: {
        name: "Name",
        namePlaceholder: "XYZ",
        domain: "Domain",
        domainPlaceholder: "xyz.com",
      },
    },

    update: {
      success: "Project Updated successfully.",
      error: {
        unknown: "Error updating your project.",
      },
      tryAgain: "Please try again.",
      save: "Save",
      form: {
        id: "ID",
        name: "Name",
        namePlaceholder: "XYZ",
        domain: "Domain",
        domainPlaceholder: "xyz.com",
      },
    },
    delete: {
      label: "Delete Project",
      confirmationQuestion: "Are you absolutely sure?",
      confirmationDescription:
        "The project will be permanently deleted. This action is irreversible and can not be undone.",
      success: "Project deleted successfully",
      error: {
        unknown: "Error deleting project.",
      },
      tryAgain: "Please try again.",
      cancel: "Cancel",
      delete: "Delete",
    },
    tabs: {
      details: "Details",
      settings: "Settings",
    },
  },
  billing: {
    alertDescription:
      "{name} just demonstrates how to use Stripe in Next.js App router. Please use test cards from {link}",
    title: "Subscription",
    abstract: "Currently on the {name} plan.",
    manageSubscription: "Manage Subscription",
    upgradeToPro: "Upgrade to PRO",
    endPlan: "Your plan will be canceled on ",
    renewPlan: "Your plan renews on ",
    error: "Something went wrong.",
    tryAgain: "Please refresh the page and try again.",
  },
  hero: {
    top: "Introducing",
    main: "Quick Starter Template for your Next project",
    sub: "Packed with all necessary features to get started.",
    firstButton: "Get started",
    tools: "Built using Great Tools",
    on: "on",
  },
  features: {
    title: "Features",
    abstract:
      "This template comes with features like Authentication, API routes, File uploading and more in Next.js App dir.",
    next: "App dir, Routing, Layouts, API routes, Server Components, Server actions.",
    shadcn: "UI components built using Radix UI and styled with Tailwind CSS.",
    prisma: "Using Postgres with Prisma ORM, hosted on Vercel Postgres.",
    lucia: "Authentication and Authorization using LuciaAuth v3.",
    uploadThings: "Upload and preview files effortlessly with UploadThing.",
    reactEmail: "Create emails using React Email and Send with Resend.",
    i18n: "Internationalization support with type-safe Next-International.",
    stripe: "Receive and process payments with Stripe.",
    vercel: "Production and Preview deployments with Vercel.",
    additionalInfo:
      "{name} also includes Changelog & About page built using {component} and Markdown.",
  },
  pricing: {
    title: "Pricing",
    abstract: "Choose the plan that’s right for you and start enjoying it all.",
    free: "Free",
    freeDescription: "Up to 3 projects",
    pro: "Pro",
    proDescription: "Unlimited projects",
    month: "month",
    getStarted: "Get Started",
    managePlan: "Manage Plan",
    upgradePlan: "Upgrade Plan",
    current: "Current",
  },
  openSource: {
    title: "Proudly Open Source",
    abstract:
      "{name} is open source and powered by open source software. The code is available on GitHub.",
    starMe: "Start me",
  },
  error: {
    source: "Oops, Something Went Wrong!",
    retry: "Try Again",
  },

  footer: {
    developedBy: "Developed by {name}",
  },
  toggle: {
    light: "Light",
    dark: "Dark",
    system: "System",
    labelTheme: "Toggle theme",
    labelLang: "Changer de langue",
  },
  copy: {
    error: "Error copying!",
    success: "Project ID copied!",
    tryAgain: "Please try again.",
    label: "Copy",
  },
} as const;
