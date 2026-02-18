export interface TechItem {
  name: string;
  icon?: string;
}

export interface TechCategory {
  key: string;
  items: TechItem[];
}

export const techStack: TechCategory[] = [
  {
    key: "backend",
    items: [
      { name: "Node.js" },
      { name: "TypeScript" },
      { name: "Express" },
      { name: "NestJS" },
      { name: "REST APIs" },
    ],
  },
  {
    key: "frontend",
    items: [
      { name: "React" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "HTML/CSS" },
    ],
  },
  {
    key: "databases",
    items: [
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "MongoDB" },
      { name: "Firestore" },
    ],
  },
  {
    key: "devops",
    items: [
      { name: "Docker" },
      { name: "Docker Compose" },
      { name: "Traefik" },
      { name: "GitHub Actions" },
      { name: "CI/CD" },
      { name: "Linux" },
    ],
  },
  {
    key: "tools",
    items: [{ name: "Git" }, { name: "VS Code" }, { name: "Postman" }],
  },
];

export interface Project {
  titleEn: string;
  titleEs: string;
  descriptionEn: string;
  descriptionEs: string;
  tech: string[];
  github: string;
  live?: string;
}

export const projects: Project[] = [
  {
    titleEn: "Billing System API (Production Deployment)",
    titleEs: "Sistema de Facturación (Backend en Producción)",
    descriptionEn:
      "Production-ready billing system backend built with Express following a layered architecture (routes, controllers, services). Designed structured REST endpoints, implemented secure cookie-based authentication, and integrated Firestore for data persistence. Deployed on a self-managed VPS using Docker and automated with GitHub Actions CI/CD pipeline.",
    descriptionEs:
      "Backend de sistema de facturación en producción construido con Express siguiendo una arquitectura por capas (routes, controllers, services). Se diseñaron endpoints REST coherentes, autenticación segura basada en cookies e integración con Firestore para persistencia de datos. Desplegado en un VPS propio utilizando Docker y automatizado mediante pipeline de CI/CD con GitHub Actions.",
    tech: [
      "Node.js",
      "Express",
      "TypeScript",
      "Firestore",
      "Docker",
      "GitHub Actions",
      "Traefik",
    ],
    github: "https://github.com/AugustoC01/sistema-facturacion",
    live: "https://sistema-facturacion-front-roan.vercel.app/",
  },
  {
    titleEn: "Self-Hosted Docker Infrastructure",
    titleEs: "Infraestructura VPS Autogestionada con Docker",
    descriptionEn:
      "Self-managed VPS environment designed to host containerized backend services. Configured Docker Compose for multi-service orchestration and Traefik as a reverse proxy with automatic HTTPS certificates via Let's Encrypt. Implemented SSH-based deployment automation triggered by GitHub Actions.",
    descriptionEs:
      "Entorno VPS autogestionado diseñado para alojar servicios backend containerizados. Configuración de Docker Compose para orquestación multi-servicio y Traefik como reverse proxy con certificados HTTPS automáticos mediante Let's Encrypt. Implementación de despliegues automatizados vía SSH disparados por GitHub Actions.",
    tech: ["Docker", "Docker Compose", "Traefik", "GitHub Actions", "Linux"],
    github: "",
  },
];

export const socialLinks = {
  email: "augustocdeveloper@gmail.com",
  linkedin: "https://www.linkedin.com/in/augusto-cannata-fernandez/",
  github: "https://github.com/AugustoC01/",
};
