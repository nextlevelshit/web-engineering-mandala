export const lectures = {
  metadata: {
    course: "Web Engineering - DHBW Stuttgart",
    instructor: "Michael Werner Czechowski",
    sessions: 9,
    progression: "Fundamentals → Tools → Architecture → Production"
  },

  center: {
    name: "package.json",
    description: "Project manifest - npm scripts, dependencies, configuration",
    explanation: "Every modern web project starts here - defines what can run via npx",
    session: 3,
    color: "#2d3748",
    level: 0
  },

  rings: [
    {
      level: 1,
      name: "Core Web Technologies",
      description: "The holy trinity - what browsers actually understand",
      sessions: [2, 3],
      sectors: [
        {
          name: "HTML",
          color: "#4c51bf", // indigo
          description: "Structure and semantics - the accessibility foundation",
          session: 2,
          technologies: [
            {
              name: "HTML5 Semantics",
              description: "header, main, nav, article, section, aside",
              explanation: "Screen readers and SEO depend on proper semantic structure"
            },
            {
              name: "Forms & Inputs",
              description: "autocomplete attributes, proper labeling",
              explanation: "cc-number, family-name - browser autofill magic",
              accessibility: "Labels are mandatory - screen reader navigation"
            },
            {
              name: "Microdata",
              description: "Schema.org structured data for SEO",
              explanation: "itemscope, itemtype, itemprop - help search engines understand content"
            },
            {
              name: "Meta & Open Graph",
              description: "og:title, og:description, og:image",
              explanation: "Controls how your content appears when shared on social media"
            }
          ],
          connections: ["CSS specificity", "DOM manipulation", "WCAG compliance"]
        },

        {
          name: "CSS",
          color: "#319795", // turquoise
          description: "Presentation layer - visual design and layout",
          session: 2,
          technologies: [
            {
              name: "CSS3 Fundamentals",
              description: "Selectors, specificity, cascade",
              explanation: "Inline > IDs > Classes > Elements - understanding the cascade prevents debugging hell"
            },
            {
              name: "Layout Systems",
              description: "Flexbox, Grid, positioning",
              explanation: "Flexbox for 1D layouts, Grid for 2D - modern layout without floats"
            },
            {
              name: "Custom Properties",
              description: "CSS variables for theming",
              explanation: "--primary-color: #319795 - runtime changeable, unlike Sass variables"
            },
            {
              name: "Responsive Design",
              description: "Media queries, mobile-first approach",
              explanation: "Progressive enhancement from mobile baseline"
            }
          ],
          connections: ["JavaScript DOM styling", "Component styling", "Build-time processing"]
        },

        {
          name: "JavaScript",
          color: "#e53e3e", // red
          description: "Behavior layer - interactivity and logic",
          session: 3,
          technologies: [
            {
              name: "ES6+ Features",
              description: "Arrow functions, destructuring, modules, async/await",
              explanation: "Modern syntax - const/let over var, template literals, spread operator"
            },
            {
              name: "DOM API",
              description: "querySelector, addEventListener, manipulation",
              explanation: "Direct browser interaction - foundation for all frontend frameworks"
            },
            {
              name: "Fetch API",
              description: "HTTP requests, Promise-based networking",
              explanation: "Replaces XMLHttpRequest - cleaner async data fetching"
            },
            {
              name: "Modules",
              description: "import/export, ES modules",
              explanation: "Native module system - no more script tag soup"
            }
          ],
          connections: ["Node.js runtime", "Frontend frameworks", "Build tool processing"]
        }
      ]
    },

    {
      level: 2,
      name: "Build Tools & Application Architecture",
      description: "Development workflow and application patterns",
      sessions: [3, 4, 5],
      sectors: [
        {
          name: "HTML Tooling",
          color: "#6366f1",
          description: "Semantic web and accessibility tooling",
          session: 2,
          technologies: [
            {
              name: "WCAG Components",
              description: "Native accessible elements like details/summary",
              explanation: "Built-in browser accessibility - no JavaScript required",
              accessibility: "Skip to main content, keyboard navigation, screen reader support"
            },
            {
              name: "Web Components",
              description: "Custom elements, shadow DOM, templates",
              explanation: "Browser-native component system - framework-agnostic reusability"
            },
            {
              name: "Progressive Enhancement",
              description: "Baseline HTML functionality enhanced with CSS/JS",
              explanation: "Works without JavaScript, better with it"
            }
          ]
        },

        {
          name: "CSS Tooling",
          color: "#0891b2",
          description: "Processing and framework tooling for styles",
          session: 2,
          technologies: [
            {
              name: "PostCSS",
              description: "CSS processing with plugins",
              explanation: "Autoprefixer, future CSS syntax, optimization"
            },
            {
              name: "Tailwind CSS",
              description: "Utility-first CSS framework",
              explanation: "Atomic classes - rapid prototyping, consistent design system"
            },
            {
              name: "Flowbite",
              description: "Tailwind component library",
              explanation: "Pre-built components accelerate development"
            },
            {
              name: "CSS-in-JS",
              description: "Component-scoped styling",
              explanation: "Styled-components, Emotion - dynamic styling with JavaScript"
            }
          ]
        },

        {
          name: "JS Architecture",
          color: "#dc2626",
          description: "Build tools and application architecture patterns",
          sessions: [3, 4, 5],
          clusters: [
            {
              name: "Bundlers",
              description: "Module bundling and asset processing",
              session: 3,
              explanation: "Transform modern code for browser compatibility",
              technologies: [
                {
                  name: "Vite",
                  description: "Fast dev server with Rollup bundling",
                  explanation: "ES modules in dev, optimized bundles for production"
                },
                {
                  name: "Webpack",
                  description: "Mature bundler with extensive plugin ecosystem",
                  explanation: "Complex configurations but maximum flexibility"
                },
                {
                  name: "Parcel",
                  description: "Zero-configuration bundler",
                  explanation: "Convention over configuration - good for rapid prototypes"
                },
                {
                  name: "esbuild",
                  description: "Go-based ultra-fast bundler",
                  explanation: "10-100x faster than traditional bundlers"
                }
              ]
            },

            {
              name: "Frontend Frameworks",
              description: "Component-based UI libraries",
              session: 3,
              explanation: "Declarative UI - describe what you want, not how to get there",
              technologies: [
                {
                  name: "React",
                  description: "Component-based library with virtual DOM",
                  explanation: "useState, useEffect hooks - functional component paradigm",
                  example: "const [count, setCount] = useState(0)"
                },
                {
                  name: "Vue.js",
                  description: "Progressive framework with template syntax",
                  explanation: "Reactive data binding - less boilerplate than React",
                  example: "@click handler, reactive data() properties"
                },
                {
                  name: "Svelte",
                  description: "Compile-time optimized framework",
                  explanation: "No virtual DOM - compiles to vanilla JavaScript",
                  example: "let count = 0 - reactive assignments"
                },
                {
                  name: "Angular",
                  description: "Full framework with TypeScript",
                  explanation: "Opinionated architecture - dependency injection, decorators"
                }
              ]
            },

            {
              name: "Backend Frameworks",
              description: "Server-side JavaScript runtime and frameworks",
              sessions: [4, 5],
              explanation: "Non-blocking I/O - handle thousands of concurrent connections",
              technologies: [
                {
                  name: "Node.js",
                  description: "V8-based JavaScript runtime",
                  explanation: "Brings JavaScript to servers - same language frontend/backend"
                },
                {
                  name: "Express.js",
                  description: "Minimal web application framework",
                  explanation: "Middleware-based - app.use() chains for request processing",
                  example: "app.get('/api', (req, res) => res.json({}))"
                },
                {
                  name: "Fastify",
                  description: "High-performance alternative to Express",
                  explanation: "Built-in validation, serialization - faster than Express"
                },
                {
                  name: "WebSockets",
                  description: "Real-time bidirectional communication",
                  explanation: "ws.on('message') - persistent connections for live updates"
                }
              ]
            },

            {
              name: "SSR/SSG Frameworks",
              description: "Server-side rendering and static site generation",
              session: 3,
              explanation: "Pre-render for SEO and performance - hydrate for interactivity",
              technologies: [
                {
                  name: "Next.js",
                  description: "React-based full-stack framework",
                  explanation: "getServerSideProps, getStaticProps - flexible rendering strategies"
                },
                {
                  name: "Nuxt",
                  description: "Vue-based universal application framework",
                  explanation: "Auto-routing, middleware, modules - convention over configuration"
                },
                {
                  name: "SvelteKit",
                  description: "Svelte-based application framework",
                  explanation: "File-based routing, load functions - modern developer experience"
                },
                {
                  name: "Astro",
                  description: "Multi-framework static site generator",
                  explanation: "Islands architecture - minimal JavaScript by default"
                },
                {
                  name: "Gatsby",
                  description: "GraphQL-powered static site generator",
                  explanation: "Data layer abstraction - pull from any source via GraphQL"
                }
              ]
            }
          ],
          connections: ["Package.json scripts", "Development workflow", "Production deployment"]
        }
      ]
    },

    {
      level: 3,
      name: "Production & Professional Development",
      description: "Testing, deployment, and professional practices",
      sessions: [6, 7, 8],
      sectors: [
        {
          name: "HTML Production",
          color: "#8b5cf6",
          description: "SEO, accessibility, and web standards in production",
          technologies: [
            {
              name: "SEO Optimization",
              description: "Meta tags, structured data, performance",
              explanation: "Core Web Vitals, Lighthouse scores - search ranking factors"
            },
            {
              name: "WCAG Compliance",
              description: "Web Content Accessibility Guidelines",
              explanation: "Legal requirement in many jurisdictions - inclusive design",
              requirements: ["Skip to main content", "Keyboard navigation", "Screen reader support"]
            },
            {
              name: "PWA Features",
              description: "Progressive Web App capabilities",
              explanation: "Service workers, app manifest - native app experience in browser"
            }
          ]
        },

        {
          name: "CSS Production",
          color: "#06b6d4",
          description: "Scalable styling and design systems",
          technologies: [
            {
              name: "Design Systems",
              description: "Component libraries and style guides",
              explanation: "Consistent UI across teams - documented patterns and tokens"
            },
            {
              name: "Performance Optimization",
              description: "Critical CSS, code splitting, tree shaking",
              explanation: "Load only what's needed - faster time to first paint"
            },
            {
              name: "Atomic CSS",
              description: "Single-purpose utility classes",
              explanation: "Tailwind approach - predictable styles, reduced CSS bloat"
            }
          ]
        },

        {
          name: "JS Production",
          color: "#f56565",
          description: "Testing, deployment, and operational concerns",
          sessions: [6, 7, 8],
          technologies: [
            {
              name: "Testing Strategy",
              description: "Unit, integration, end-to-end testing",
              session: 6,
              explanation: "Test pyramid - many unit tests, fewer integration, minimal E2E"
            },
            {
              name: "TypeScript",
              description: "Static typing for JavaScript",
              session: 7,
              explanation: "Catch errors at compile time - better developer experience at scale"
            },
            {
              name: "Docker & Deployment",
              description: "Containerization and production deployment",
              session: 8,
              explanation: "Consistent environments - dev/prod parity"
            },
            {
              name: "Environment Management",
              description: ".env files, configuration separation",
              explanation: "Different configs for dev/staging/prod - secrets management"
            },
            {
              name: "HTTPS & Security",
              description: "SSL/TLS, security headers, CORS",
              explanation: "Encrypt in transit - mandatory for modern web apps"
            },
            {
              name: "Process Management",
              description: "SIGINT handling, graceful shutdown",
              explanation: "process.on('SIGINT') - clean server shutdown in production"
            }
          ]
        }
      ]
    }
  ],

  learningPath: {
    session2: ["HTML semantics", "CSS fundamentals", "Accessibility basics"],
    session3: ["JavaScript ES6+", "npm ecosystem", "Frontend frameworks"],
    session4: ["Node.js runtime", "Build tools", "Development workflow"],
    session5: ["Express servers", "CRUD operations", "WebSockets"],
    session6: ["Testing strategies", "Quality assurance"],
    session7: ["TypeScript", "Type safety"],
    session8: ["Docker", "Production deployment"],
    session9: ["Project presentations", "Professional practices"]
  },

  assessment: {
    criteria: {
      concept: { points: 20, description: "Idea, conception, planning" },
      portability: { points: 5, description: "Platform independence" },
      cleanCode: { points: 25, description: "Code quality and maintainability" },
      bonus: { points: 10, description: "Additional professional practices" }
    },
    bonusOpportunities: [
      "Dev/Prod environment separation",
      ".env configuration",
      "HTTPS implementation",
      "Docker containerization",
      "UML diagrams",
      "Documentation quality",
      "Comprehensive testing",
      "WCAG compliance"
    ]
  }
};
