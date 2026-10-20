export const site = {
  name: "Raghav Garg",
  role: "Flutter Developer | Mobile Application Engineer",
  headline:
    "Building scalable, high-performance mobile applications and turning product ideas into production-ready experiences.",
  email: "raghavgarg1008@gmail.com",
  linkedin: "https://www.linkedin.com/in/raghav-garg-125b7a1a2/",
  github: "",
  resumeUrl: "/Raghav_Garg_Resume.pdf",
  location: "Bengaluru, India",
}

export const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "more-work", label: "More" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
] as const

export const about = {
  paragraphs: [
    "I’m a Flutter developer with around four years of experience building mobile and cross-platform applications. My work covers Flutter, native Android, API integrations, application architecture, and taking product ideas from prototype to production on Android, iOS, and Windows.",
    "I like working closely with product, design, and business teams to ship meaningful features and reusable foundations—not just screens. That usually means clear architecture, reliable releases, and enough product context to make the right trade-offs.",
  ],
  facts: [
    { label: "Focus", value: "Flutter, Android, product delivery" },
    { label: "Experience", value: "4 years" },
    { label: "Based in", value: "Bengaluru, India" },
    {
      label: "Education",
      value: "B.Tech, Information Technology · Chandigarh Engineering College, 2019–2023",
    },
  ],
}

export type Role = {
  title: string
  dates: string
  bullets: string[]
}

export type ExperienceItem = {
  company: string
  location: string
  dates: string
  website?: string
  roles: Role[]
}

export const experience: ExperienceItem[] = [
  {
    company: "Capslock Marketplaces",
    location: "Bengaluru",
    dates: "Aug 2026 – Present",
    website: "https://capslockmarketplaces.ai/",
    roles: [
      {
        title: "Flutter Developer",
        dates: "Aug 2026 – Present",
        bullets: [
          "Developing and shipping products including Vokey, ShantiClub, and JhallakAI with product, marketing, and business partners.",
          "Built a reusable Flutter application foundation with production-ready authentication and payment integrations to speed up MVP development.",
          "Tracking install-to-trial, trial-to-subscription, and first-recharge funnels to close conversion gaps.",
        ],
      },
    ],
  },
  {
    company: "Vama Apps",
    location: "Noida",
    dates: "Dec 2025 – Aug 2026",
    website: "https://vama.app",
    roles: [
      {
        title: "Flutter Developer",
        dates: "Dec 2025 – Aug 2026",
        bullets: [
          "Served as the sole mobile engineering owner—driving architecture, App Store and Google Play releases, and coordination with backend and product.",
          "Reduced 10+ daily technical queries to 1–2 per week through clearer architecture, documentation, and workflows.",
          "Led a Clean Architecture and networking-layer refactor, improved GetX state management, launch flows, and real-time chat on unstable networks, and resolved critical production crashes.",
        ],
      },
    ],
  },
  {
    company: "Adda Education",
    location: "Gurugram",
    dates: "July 2022 – Dec 2025",
    website: "https://www.adda247.com/",
    roles: [
      {
        title: "Software Development Engineer - 1",
        dates: "Nov 2024 – Dec 2025",
        bullets: [
          "Owned Flutter Android and iOS applications serving 500K+ DAU, using Clean Architecture, MVVM, and BLoC; led Play Store releases and production monitoring with Firebase Crashlytics and Analytics.",
          "Led the launch of Adda Gold in 20 days, delivering core user journeys under a tight timeline.",
        ],
      },
      {
        title: "Software Development Engineer",
        dates: "July 2023 – Nov 2024",
        bullets: [
          "Migrated native Android modules to Flutter with Add-to-App and Method Channels; built Global Search and Question Reporting with full unit test coverage.",
          "Integrated MoEngage, Trackier, Firebase Analytics, and deep links; shipped a Flutter Windows desktop app in two weeks to automate operational workflows.",
        ],
      },
      {
        title: "Software Development Engineer - Trainee",
        dates: "July 2022 – July 2023",
        bullets: [
          "Developed Android features in Java, Kotlin, and XML, including PDP Revamp and Free Live Class.",
        ],
      },
    ],
  },
]

export type ProjectTone =
  | "vecto"
  | "shanti"
  | "jhallak"
  | "studio"
  | "vama"
  | "adda"

export type ProjectLinks = {
  website?: string
  playStore?: string
  appStore?: string
}

export type Project = ProjectLinks & {
  name: string
  role: string
  description: string
  contributions: string[]
  tags: string[]
  logo?: string
  note?: string
  tone: ProjectTone
}

export const projects: Project[] = [
  {
    name: "Vecto",
    role: "Flutter Developer | End-to-End Development",
    description:
      "Fleet tracking and vehicle management for business owners and fleet managers — monitor vehicles, assignments, daily distances, and expenses from one dashboard.",
    contributions: [
      "Built the application from scratch, from product requirements through production release.",
      "Developed core workflows for fleet owners and drivers to manage vehicles, assignments, and operations.",
      "Worked across authentication, application architecture, analytics, and release management.",
    ],
    tags: ["Flutter", "Android", "Authentication", "Analytics", "Release Management"],
    website: "https://getvecto.app/",
    playStore:
      "https://play.google.com/store/apps/details?id=com.capslock.vecto",
    logo: "/logos/vecto.webp",
    tone: "vecto",
  },
  {
    name: "Studio App",
    role: "Flutter Developer | End-to-End Development",
    description:
      "Internal Windows desktop application for live-session operations, reporting workflows, and interactive session tools.",
    contributions: [
      "Developed the Windows application from scratch using Flutter.",
      "Implemented PDF upload workflows for reporting and document handling.",
      "Built bookmarking for live video sessions, plus live polling and voting for interactive sessions.",
    ],
    tags: ["Flutter", "Dart", "Windows Desktop", "File Uploads", "Live Video", "Polling"],
    note: "Internal project · No public website or Play Store listing",
    tone: "studio",
  },
  {
    name: "VAMA",
    role: "Flutter Developer | Lead Developer",
    description:
      "VAMA (Virtual Astrology & Mandir) is an all-in-one spiritual app for online puja bookings, mandir experiences, and astrology consultations.",
    contributions: [
      "Revamped the complete app using Clean Architecture and SOLID principles.",
      "Implemented new features and improved existing app functionality.",
      "Worked across authentication, application architecture, analytics, and release management.",
    ],
    tags: ["Flutter", "Android", "WebSockets", "Analytics", "Release Management"],
    website: "https://vama.app",
    playStore:
      "https://play.google.com/store/apps/details?id=com.rnselectastro",
    appStore:
      "https://apps.apple.com/in/app/vama-puja-chadhava-astro-tv/id1613296409",
    logo: "/logos/vama.webp",
    tone: "vama",
  },
  {
    name: "Adda247",
    role: "Software Development Engineer | Product Development",
    description:
      "Education platform for live classes, search, and exam-prep workflows on Android and iOS.",
    contributions: [
      "Owned Flutter Android and iOS applications using Clean Architecture, MVVM, and BLoC; led Play Store releases and production monitoring.",
      "Built Global Search, Question Reporting, live-class workflows, and deep-link integrations.",
      "Migrated native Android modules to Flutter with Add-to-App and Method Channels.",
    ],
    tags: ["Flutter", "Android", "iOS", "Clean Architecture", "BLoC"],
    website: "https://www.adda247.com/",
    playStore: "https://play.google.com/store/apps/details?id=com.adda247.app",
    appStore: "https://apps.apple.com/in/app/adda247/id1618943840",
    logo: "/logos/adda247.webp",
    tone: "adda",
  },
]

export type OtherProject = ProjectLinks & {
  name: string
  initials: string
  tone: ProjectTone
  logo?: string
}

export const otherProjects: OtherProject[] = [
  {
    name: "JhallakAI",
    initials: "JA",
    logo: "/logos/jhallakai.png",
    website: "https://jhalakai.app/",
    playStore:
      "https://play.google.com/store/apps/details?id=com.capslock.jhalakai",
    tone: "jhallak",
  },
  {
    name: "Vokey",
    initials: "VK",
    logo: "/logos/vokey.png",
    website: "https://vokeyapp.com/",
    playStore:
      "https://play.google.com/store/apps/details?id=com.capslock.vokey",
    tone: "studio",
  },
  {
    name: "ShantiClub",
    initials: "SC",
    logo: "/logos/shanticlub.webp",
    playStore:
      "https://play.google.com/store/apps/details?id=com.capslock.shanticlub",
    tone: "shanti",
  },
  {
    name: "VAMA Partner",
    initials: "VP",
    logo: "/logos/vama-partner.webp",
    playStore:
      "https://play.google.com/store/apps/details?id=com.rnselectastro.ast",
    tone: "vama",
  },
  {
    name: "Learner App",
    initials: "LA",
    logo: "/logos/learner.webp",
    website: "https://www.learnr.co.in/",
    playStore: "https://play.google.com/store/apps/details?id=com.adda247.gold",
    tone: "adda",
  },
]

export const skills = [
  {
    category: "Languages",
    items: ["Dart", "Kotlin", "Java", "XML"],
  },
  {
    category: "Frameworks",
    items: ["Flutter", "Android SDK"],
  },
  {
    category: "Architecture",
    items: ["Clean Architecture", "MVVM", "BLoC", "GetX"],
  },
  {
    category: "Networking",
    items: ["REST APIs", "Add-to-App", "Method Channels"],
  },
  {
    category: "Firebase & Analytics",
    items: [
      "Crashlytics",
      "Analytics",
      "Realtime Database",
      "Cloud Functions",
      "Mixpanel",
      "MoEngage",
    ],
  },
  {
    category: "Tools",
    items: [
      "Git",
      "GitHub Actions",
      "Fastlane",
      "Jenkins",
      "Postman",
      "Figma",
      "Jira",
      "ClickUp",
    ],
  },
  {
    category: "Additional",
    items: [
      "Deep Linking",
      "Payment Integration",
      "CI/CD",
      "Cross-platform Development",
    ],
  },
]

export const contact = {
  heading: "Have an interesting product to build? Let’s connect.",
  note: "Open to full-time roles, product collaborations, and thoughtful freelance work.",
}
