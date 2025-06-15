export const technologies = {
  rings: [
    {
      level: 0,
      name: "Project Foundation",
      sectors: [
        {
          name: "Configuration",
          color: "#2d3748",
          technologies: [
            "package.json",
            "package-lock.json",
            ".gitignore",
            ".env / .env.local",
            "tsconfig.json",
            "vite.config.js",
            "tailwind.config.js"
          ],
          scripts: ["npm start", "npm run dev", "npm run build", "npm run preview"]
        }
      ]
    },

    {
      level: 1,
      name: "Core Web Technologies",
      sectors: [
        {
          name: "HTML",
          color: "#4c51bf",
          extensions: [".html", ".htm"],
          technologies: [
            "HTML5 Semantic Elements",
            "Forms with Autocomplete",
            "Canvas & Web APIs",
            "Meta Tags & Open Graph",
            "Microdata (Schema.org)",
            "WCAG Compliance"
          ]
        },
        {
          name: "CSS",
          color: "#319795",
          extensions: [".css", ".scss", ".sass", ".less"],
          technologies: [
            "CSS3 Selectors & Specificity",
            "Flexbox & Grid",
            "Custom Properties",
            "Animations & Transitions",
            "Media Queries"
          ]
        },
        {
          name: "JavaScript",
          color: "#e53e3e",
          extensions: [".js", ".mjs", ".cjs"],
          technologies: [
            "ECMAScript 2023 (ES14)",
            "ES6+ Features",
            "DOM Manipulation",
            "Browser APIs",
            "Fetch API",
            "Modules (ESM/CommonJS)",
            "Async/Await",
            "V8 Runtime Engine"
          ]
        }
      ]
    },

    {
      level: 2,
      name: "Build Tools & Application Architecture",
      sectors: [
        {
          name: "HTML Tooling",
          color: "#6366f1",
          extensions: [".html", ".ejs", ".hbs", ".pug"],
          technologies: [
            "Template Engines",
            "Component Libraries",
            "Accessibility Testing Tools",
            "HTML Validators",
            "Semantic Markup Generators"
          ]
        },
        {
          name: "CSS Tooling",
          color: "#0891b2",
          extensions: [".css", ".scss", ".sass", ".less", ".styl"],
          technologies: [
            "TailwindCSS (Utility-First)",
            "Flowbite Components",
            "PostCSS Plugins",
            "Sass/SCSS",
            "CSS Modules",
            "Styled Components"
          ]
        },
        {
          name: "JavaScript Tooling",
          color: "#dc2626",
          extensions: [".js", ".mjs", ".ts", ".jsx", ".tsx", ".vue", ".svelte"],
          clusters: [
            {
              name: "Bundlers & Build Tools",
              technologies: [
                "Parcel (Zero-Config)",
                "Vite (ESM + Rollup)",
                "Webpack",
                "esbuild",
                "Rollup"
              ]
            },
            {
              name: "Frontend Frameworks",
              technologies: [
                "React (.jsx/.tsx)",
                "Vue.js (.vue)",
                "Svelte (.svelte)",
                "Angular (.ts)"
              ]
            },
            {
              name: "Backend Runtime",
              technologies: [
                "Node.js Server",
                "Express.js Framework",
                "Non-blocking I/O",
                "File System APIs",
                "CRUD Operations",
                "WebSockets (ws)"
              ]
            }
          ]
        }
      ]
    },

    {
      level: 3,
      name: "Production & Deployment",
      sectors: [
        {
          name: "Static Site Generation",
          color: "#8b5cf6",
          extensions: [".html", ".xml", ".json", ".md", ".mdx"],
          technologies: [
            "Next.js (React SSR/SSG)",
            "Nuxt (Vue SSR/SSG)",
            "SvelteKit",
            "Gatsby (GraphQL)",
            "Astro (Multi-Framework)"
          ]
        },
        {
          name: "Production Optimization",
          color: "#06b6d4",
          extensions: [".min.css", ".min.js", ".gz", ".br"],
          technologies: [
            "Asset Optimization",
            "Code Splitting",
            "Tree Shaking",
            "Compression (gzip/brotli)",
            "CDN Integration",
            "Performance Budgets"
          ]
        },
        {
          name: "DevOps & Deployment",
          color: "#f56565",
          extensions: [".dockerfile", ".yml", ".yaml", ".json", ".toml"],
          technologies: [
            "Docker Containers",
            "Environment Variables (.env)",
            "HTTPS & SSL/TLS",
            "Process Management",
            "CI/CD Pipelines",
            "Monitoring & Logging"
          ]
        }
      ]
    },

    {
      level: 4,
      name: "Quality & Standards",
      sectors: [
        {
          name: "Testing & Validation",
          color: "#7c3aed",
          extensions: [".test.js", ".spec.js", ".test.ts", ".spec.ts"],
          technologies: [
            "Unit Testing (Jest/Vitest)",
            "Integration Testing",
            "End-to-End Testing",
            "HTML Validators",
            "Accessibility Testing",
            "Performance Testing"
          ]
        },
        {
          name: "Code Quality",
          color: "#0284c7",
          extensions: [".eslintrc.js", ".prettierrc", ".editorconfig"],
          technologies: [
            "ESLint (Linting)",
            "Prettier (Formatting)",
            "TypeScript (.ts/.tsx)",
            "Husky (Git Hooks)",
            "Clean Code Principles",
            "Code Reviews"
          ]
        },
        {
          name: "Documentation & Standards",
          color: "#dc2626",
          extensions: [".md", ".mdx", ".json", ".yml"],
          technologies: [
            "README.md",
            "API Documentation",
            "UML Diagrams",
            "W3C Standards",
            "WCAG Guidelines",
            "Schema.org Markup"
          ]
        }
      ]
    }
  ],

  // Historical context
  timeline: {
    1966: "ARPANET",
    1969: "RFCs → 1986 IETF → 1992 Internet Society",
    1974: "TCP/IP & HTTP(S)",
    1987: "Domain Names & DNS",
    1993: "Mosaic Browser",
    1994: "W3C (HTML, XML, CSS, SVG, WCAG)",
    1995: "ECMAScript (JS)",
    2006: "V8 JS Runtime Engine"
  },

  // Development environment requirements
  devEnvironment: {
    required: ["git", "node.js", "npm", "curl/wget"],
    recommended: ["VS Code", "WebStorm", "Docker"],
    gitCommands: ["init", "add", "commit", "push", "pull", "clone"]
  },

  // Assessment criteria
  evaluation: {
    total: 60,
    criteria: {
      "Concept & Planning": 20,
      "Platform Independence": 5,
      "Clean Code": 25,
      "Bonus Points": 10
    },
    bonusOpportunities: [
      "Dev/Prod Environment Separation",
      "Environment Configuration",
      "HTTPS Implementation",
      "Docker Container",
      "UML Diagrams",
      "Clean Documentation",
      "Sustainable Testing",
      "WCAG Compliance"
    ]
  }
};
