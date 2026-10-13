export const PORTRAIT = "https://image.qwenlm.ai/generated-images/4d3fa3ba-b657-4068-b311-366f776d8c86/_result.png";

export type Project = {
  id: string; index: string; title: string; tagline: string; description: string;
  image: string; stack: string[]; year: string; status: string; repo: string; demo: string; featured?: boolean;
};

export const PROJECTS: Project[] = [
  { id: "devboard", index: "01", title: "DevBoard", tagline: "Panel de métricas para equipos de desarrollo",
    description: "Dashboard en tiempo real que agrega commits, pull requests y despliegues de varios repositorios en una sola vista.",
    image: "https://image.qwenlm.ai/generated-images/8ea6a786-219b-4ee8-aaac-33163bb100d9/_result.png",
    stack: ["React", "TypeScript", "Node.js", "WebSocket", "Chart.js"], year: "2025", status: "En producción",
    repo: "https://github.com/edgardlop", demo: "https://edgardlop.github.io/Edgard-Web/", featured: true },
  { id: "ritmo", index: "02", title: "Ritmo", tagline: "Reproductor y gestor de playlists",
    description: "Web app para organizar música: cola de reproducción, búsqueda instantánea y recomendaciones.",
    image: "https://image.qwenlm.ai/generated-images/d908ac2c-fe02-4265-9f9e-1f9dcfbfe97d/_result.png",
    stack: ["React", "Tailwind", "REST API", "PWA"], year: "2024", status: "Proyecto personal",
    repo: "https://github.com/edgardlop", demo: "https://edgardlop.github.io/Edgard-Web/" },
  { id: "clima", index: "03", title: "Clima Ahora", tagline: "Pronóstico por hora con geolocalización",
    description: "App del tiempo con pronóstico por hora, alertas de lluvia y mapa interactivo.",
    image: "https://image.qwenlm.ai/generated-images/d5e84cca-71e9-4cb1-a9d4-7242252cae37/_result.png",
    stack: ["JavaScript", "OpenWeather API", "Geolocation", "Canvas"], year: "2024", status: "Proyecto personal",
    repo: "https://github.com/edgardlop", demo: "https://edgardlop.github.io/Edgard-Web/" },
  { id: "mercado", index: "04", title: "Mercado Local", tagline: "Tienda en línea para productores locales",
    description: "E-commerce completo: catálogo con filtros, carrito persistente y checkout.",
    image: "https://image.qwenlm.ai/generated-images/d4efccf6-abf7-4233-95f1-208b1956861e/_result.png",
    stack: ["React", "Express", "PostgreSQL", "Stripe (sandbox)"], year: "2023", status: "Caso de estudio",
    repo: "https://github.com/edgardlop", demo: "https://edgardlop.github.io/Edgard-Web/" },
];

export type SkillGroup = { id: string; label: string; blurb: string; skills: { name: string; level: number; note: string }[]; };

export const SKILL_GROUPS: SkillGroup[] = [
  { id: "frontend", label: "Frontend", blurb: "Interfaces rápidas, accesibles y con carácter.",
    skills: [
      { name: "HTML & CSS moderno", level: 95, note: "semántica, grid, animaciones" },
      { name: "JavaScript / TypeScript", level: 88, note: "ES2024, tipos estrictos" },
      { name: "React", level: 90, note: "hooks, suspense, RSC" },
      { name: "Tailwind CSS", level: 88, note: "design systems, v4" },
      { name: "Motion & micro-interacciones", level: 78, note: "Framer Motion, CSS" },
    ] },
  { id: "backend", label: "Backend", blurb: "APIs limpias y bases de datos que aguantan.",
    skills: [
      { name: "Node.js & Express", level: 82, note: "REST, middlewares, JWT" },
      { name: "PostgreSQL / SQL", level: 75, note: "modelado, índices, queries" },
      { name: "Python", level: 68, note: "scripts, automatización" },
      { name: "Autenticación & seguridad", level: 74, note: "OAuth, sesiones, CORS" },
      { name: "APIs de terceros", level: 85, note: "Stripe, mapas, clima, IA" },
    ] },
  { id: "tools", label: "Herramientas", blurb: "El flujo de trabajo que mantiene todo en movimiento.",
    skills: [
      { name: "Git & GitHub", level: 92, note: "branches, PRs, actions" },
      { name: "Vite / bundlers", level: 84, note: "builds, optimización" },
      { name: "Figma", level: 72, note: "del diseño al código" },
      { name: "Docker", level: 62, note: "contenedores, compose" },
      { name: "Testing (Vitest)", level: 66, note: "unitario e integración" },
    ] },
];

export type Job = { period: string; role: string; company: string; description: string; tags: string[]; current?: boolean; };

export const EXPERIENCE: Job[] = [
  { period: "2024 — Hoy", role: "Desarrollador Full Stack", company: "Freelance · Remoto",
    description: "Proyectos web de punta a punta para startups y negocios locales.",
    tags: ["React", "Node.js", "PostgreSQL", "Vercel"], current: true },
  { period: "2022 — 2024", role: "Desarrollador Frontend", company: "PixelAndina · Remoto",
    description: "Construí interfaces de una plataforma de e-learning con más de 40 mil usuarios activos.",
    tags: ["React", "TypeScript", "Tailwind", "REST"] },
  { period: "2021 — 2022", role: "Maquetador Web Jr.", company: "Agencia Kú",
    description: "Landing pages y sitios corporativos responsive.",
    tags: ["HTML", "CSS", "JavaScript", "WordPress"] },
  { period: "2020", role: "Donde todo empezó", company: "Autodidacta + bootcamp",
    description: "Primer Hola mundo, bootcamp de desarrollo web y muchas noches resolviendo bugs.",
    tags: ["Fundamentos", "Algoritmos", "Git"] },
];

export const STATS = [
  { value: 4, suffix: "+", label: "años programando" },
  { value: 20, suffix: "+", label: "proyectos entregados" },
  { value: 15, suffix: "+", label: "tecnologías en el stack" },
  { value: 99, suffix: "%", label: "pasión por el detalle" },
];

export const MARQUEE_ITEMS = ["React", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL", "Python", "Git & GitHub", "Figma", "Vite", "Express", "Accesibilidad", "UI / UX"];

export const SOCIALS = [
  { id: "github", label: "GitHub", handle: "@edgardlop", url: "https://github.com/edgardlop" },
  { id: "linkedin", label: "LinkedIn", handle: "/in/edgardlop", url: "https://www.linkedin.com/in/edgardlop" },
  { id: "site", label: "Sitio original", handle: "edgardlop.github.io", url: "https://edgardlop.github.io/Edgard-Web/" },
];

export const EMAIL = "edgard.lopez.dev@gmail.com";

export const NAV_LINKS = [
  { id: "sobre-mi", label: "Sobre mí" },
  { id: "stack", label: "Stack" },
  { id: "proyectos", label: "Proyectos" },
  { id: "trayectoria", label: "Trayectoria" },
  { id: "contacto", label: "Contacto" },
];
