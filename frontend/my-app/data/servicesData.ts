export interface SubService {
  name: string;
  desc: string;
  slug: string;
}

export interface UseCase {
  title: string;
  desc: string;
  description?: string;
}

export interface ApproachStep {
  number: string;
  title: string;
  description: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface RelatedService {
  slug: string;
  title: string;
  eyebrow: string;
}

export interface ServiceCategory {
  id: string;
  number: string;
  title: string;
  eyebrow: string;
  quote: string;
  description: string;
  iconName: string;
  items: SubService[];
  image: string;
  imageAlt: string;
  
  // Part 2 detailed fields
  intro: {
    overview: string;
    targetAudience: string;
    challengesSolved: string[];
  };
  whyItMatters: {
    summary: string;
    points: { title: string; desc: string }[];
  };
  useCases: UseCase[];
  approach: ApproachStep[];
  whyKhawitPoints: { title: string; desc: string }[];
  relatedServices: RelatedService[];
  ctaText: string;
  faqs: ServiceFAQ[];
}

export const servicesData: ServiceCategory[] = [
  {
    id: "web-development",
    number: "01",
    title: "Web Development",
    eyebrow: "DIGITAL EXPERIENCES",
    quote: "Every journey starts with a clear front door. We shape the web experience around the people arriving and the action they need to take.",
    description: "Every journey starts with a clear front door. We shape the web experience around the people arriving and the action they need to take.",
    iconName: "FiGlobe",
    items: [
      {
        name: "Business Websites",
        desc: "Professional corporate websites designed to build trust and drive conversions.",
        slug: "business-websites"
      },
      {
        name: "Custom Web Applications",
        desc: "Tailored web-based software built to solve specific operational challenges.",
        slug: "custom-web-applications"
      },
      {
        name: "Landing Pages",
        desc: "High-conversion single-page experiences focused on specific campaigns or products.",
        slug: "landing-pages"
      },
      {
        name: "Interactive Websites",
        desc: "Immersive web experiences featuring rich animations and engaging user interactions.",
        slug: "interactive-websites"
      },
      {
        name: "3D & Animated Websites",
        desc: "Cutting-edge sites using WebGL and advanced motion to tell compelling stories.",
        slug: "3d-animated-websites"
      },
      {
        name: "E-commerce Websites",
        desc: "Scalable online stores optimized for user experience and sales performance.",
        slug: "ecommerce-websites"
      }
    ],
    image: "/services/websites-applications.jpg",
    imageAlt: "Responsive digital experience and modern web application interface",
    intro: {
      overview: "Your web platform is often the first authentic interaction a customer, partner, or investor has with your business. We engineer digital experiences that go beyond visual decoration—combining structural speed, responsive craftsmanship, intuitive hierarchy, and clear conversion paths.",
      targetAudience: "Established companies modernizing their digital presence, fast-growing tech brands launching new products, and businesses that need bespoke web applications rather than generic templates.",
      challengesSolved: [
        "Slow, bloated websites that lose visitor attention and harm search visibility.",
        "Disconnected user journeys with unclear conversion routes and vague value propositions.",
        "Generic template constraints that fail to communicate genuine technical capability.",
        "Fragmented cross-device experiences that break on mobile or high-resolution screens."
      ]
    },
    whyItMatters: {
      summary: "In a digital-first economy, credibility is evaluated in seconds. Thoughtfully crafted web architecture turns passive visitors into engaged clients while providing a reliable foundation for business growth.",
      points: [
        {
          title: "Immediate Commercial Credibility",
          desc: "A bespoke, polished digital presence signals established competence, building trust before the first conversation takes place."
        },
        {
          title: "Engineered Performance & SEO",
          desc: "Clean semantic markup, optimized asset delivery, and sub-second loading speeds improve organic rankings and retain high-intent traffic."
        },
        {
          title: "Tailored Operational Flow",
          desc: "Custom interactive elements and web apps map directly to your operational workflows rather than forcing you into rigid platform constraints."
        }
      ]
    },
    useCases: [
      {
        title: "Enterprise Corporate Platform",
        desc: "A multi-layered corporate website with integrated service discovery, dynamic case studies, and automated lead capture for a technology consultancy."
      },
      {
        title: "High-Growth Product Launchpad",
        desc: "An interactive, animated product landing page designed to showcase a modern software platform, complete with interactive UI walkthroughs."
      },
      {
        title: "Specialized Operational Web App",
        desc: "A client-facing portal that allows customers to manage project milestones, track deliverables, and communicate securely with service teams."
      }
    ],
    approach: [
      {
        number: "01",
        title: "Audience & Journey Mapping",
        description: "We analyze incoming visitor personas, key decision-making criteria, and primary conversion actions before designing a single screen."
      },
      {
        number: "02",
        title: "UX Architecture & Wireframing",
        description: "We establish typographic hierarchy, page structure, and interaction patterns to ensure intuitive readability across all screen sizes."
      },
      {
        number: "03",
        title: "Modern Frontend Engineering",
        description: "We develop the platform using Next.js, TypeScript, and modern CSS, ensuring server-rendered speed and accessible HTML5 semantics."
      },
      {
        number: "04",
        title: "Motion & Craft Refinement",
        description: "We introduce tasteful, micro-interactions and transitions with GSAP and Motion, ensuring reduced-motion preferences are strictly respected."
      },
      {
        number: "05",
        title: "Lighthouse & SEO Auditing",
        description: "Comprehensive testing for Core Web Vitals, accessibility, structured schema data, and cross-browser rendering prior to deployment."
      }
    ],
    whyKhawitPoints: [
      {
        title: "Zero Disposable Templates",
        desc: "Every website is engineered from the ground up to reflect your unique value proposition, with bespoke layout architecture and clean source code."
      },
      {
        title: "Performance by Default",
        desc: "We prioritize Core Web Vitals, minimal runtime overhead, and efficient asset delivery so your site loads instantly on every connection."
      },
      {
        title: "Full-Stack Continuity",
        desc: "Because we also engineer backend systems and AI pipelines, our frontend work seamlessly integrates with your existing APIs and databases."
      }
    ],
    relatedServices: [
      { slug: "saas-product", title: "SaaS & Product", eyebrow: "IDEA TO PRODUCT" },
      { slug: "deployment", title: "Deployment", eyebrow: "READY FOR THE REAL WORLD" },
      { slug: "digital-marketing", title: "Digital Marketing", eyebrow: "GROWTH, ENGINEERED" }
    ],
    ctaText: "Discuss Your Website Project",
    faqs: [
      {
        question: "How long does a custom web development project typically take?",
        answer: "Timelines depend on project scope. A focused corporate website or landing page typically takes 3 to 5 weeks from discovery to launch, while comprehensive web applications with custom workflows may take 6 to 10 weeks. We establish clear milestone delivery schedules at the start of every engagement."
      },
      {
        question: "Do you use pre-made themes or build custom code?",
        answer: "We build custom solutions using Next.js, React, TypeScript, and modern CSS. We do not use bloated pre-made WordPress or Webflow templates. This guarantees maximum page speed, complete design control, clean code ownership, and zero monthly template licensing fees."
      },
      {
        question: "How do you ensure accessibility and responsiveness?",
        answer: "Accessibility is integral to our engineering process. We adhere to WCAG 2.1 AA standards, verify keyboard navigation and focus indicators, provide descriptive ARIA attributes, and ensure responsive fluid scaling across mobile, tablet, laptop, and ultra-wide displays."
      },
      {
        question: "Can we update content after launch?",
        answer: "Yes. We can integrate lightweight, headless CMS solutions or structured JSON/Markdown content workflows, allowing your team to update text, blog posts, and service information without touching the core codebase."
      }
    ]
  },
  {
    id: "ai-solutions",
    number: "02",
    title: "Conversational AI & Knowledge Systems (RAG)",
    eyebrow: "KNOWLEDGE & CONVERSATIONAL AI",
    quote: "When a digital experience needs to understand, answer, or assist, we ground LLMs in your proprietary data, knowledge bases, and conversational channels.",
    description: "When a digital experience needs to understand, answer, or assist, we ground LLMs in your proprietary data, knowledge bases, and conversational channels.",
    iconName: "FiCpu",
    items: [
      {
        name: "AI Integration",
        desc: "Connect existing products and workflows with AI capabilities that solve specific business needs.",
        slug: "ai-integration"
      },
      {
        name: "AI Chatbots",
        desc: "Build conversational experiences that can answer questions, guide users, and support customers.",
        slug: "ai-chatbots"
      },
      {
        name: "AI Assistants & Copilots",
        desc: "Intelligent sidekicks designed to help users perform tasks faster and more accurately.",
        slug: "ai-assistants-copilots"
      },
      {
        name: "RAG / Knowledge-based AI",
        desc: "Systems that ground AI responses in proprietary data for accurate, context-aware answers.",
        slug: "rag-knowledge-based-ai"
      },
      {
        name: "AI-powered Web Applications",
        desc: "Next-generation web apps with intelligent features embedded at their core.",
        slug: "ai-powered-web-applications"
      },
      {
        name: "Voice AI",
        desc: "Speech-to-text and text-to-speech solutions for natural voice interactions.",
        slug: "voice-ai"
      }
    ],
    image: "/services/ai-solutions.jpg",
    imageAlt: "Vector database retrieval and conversational AI knowledge architecture visual",
    intro: {
      overview: "Artificial intelligence becomes valuable when it is applied to specific, operational bottlenecks. We help businesses integrate language models, retrieval pipelines, and conversational interfaces directly into their products, turning unstructured data into practical utility.",
      targetAudience: "Organizations with extensive internal documentation, customer support teams dealing with high ticket volumes, and product teams looking to embed intelligent copilots into their software.",
      challengesSolved: [
        "Employees spending hours searching through scattered manuals, PDFs, and knowledge bases.",
        "Generic chatbot solutions that invent incorrect answers or lack business context.",
        "Uncertainty around data privacy, enterprise API contracts, and intellectual property safety.",
        "Disconnect between experimental AI prototypes and stable production software."
      ]
    },
    whyItMatters: {
      summary: "Modern AI models can process natural language and summarize complex information in seconds. When properly grounded in your business data, they empower your team to act faster while providing customers with instant, accurate answers.",
      points: [
        {
          title: "Accurate Knowledge Grounding (RAG)",
          desc: "We supply approved company documents to the model at query time, ensuring answers reflect your authentic policies and product facts."
        },
        {
          title: "Human-in-the-Loop Safeguards",
          desc: "AI assists with synthesis, drafting, and recommendations, while human operators retain final authorization on sensitive decisions."
        },
        {
          title: "Enterprise Privacy Architecture",
          desc: "We configure zero-data-retention API agreements or private model deployments so your proprietary business data is never used to train public models."
        }
      ]
    },
    useCases: [
      {
        title: "Enterprise Knowledge Base Copilot",
        desc: "A secure internal RAG assistant that indexes thousands of technical SOPs, employee handbooks, and client contracts, answering employee queries with cited sources."
      },
      {
        title: "Intelligent Customer Support Assistant",
        desc: "A conversational assistant that resolves common inquiries using approved documentation, smoothly escalating complex edge cases to human support representatives."
      },
      {
        title: "Automated Document Extraction Pipeline",
        desc: "An intelligent ingestion pipeline that extracts structured entities from incoming PDF invoices, contracts, and proposals, populating internal databases."
      }
    ],
    approach: [
      {
        number: "01",
        title: "Feasibility & Data Assessment",
        description: "We review your knowledge sources, data formatting, query types, and accuracy requirements to determine the optimal AI architecture."
      },
      {
        number: "02",
        title: "Ingestion & Vector Indexing",
        description: "Documents are cleaned, chunked into semantic segments, and indexed in high-performance vector databases with strict access-control tags."
      },
      {
        number: "03",
        title: "Model & Prompt Orchestration",
        description: "We design robust prompt pipelines, retrieval re-ranking mechanisms, and temperature parameters tailored to factual precision."
      },
      {
        number: "04",
        title: "Guardrails & Evaluation",
        description: "We benchmark responses against golden evaluation datasets, testing edge cases and implementing toxicity and fallback guardrails."
      },
      {
        number: "05",
        title: "Production Monitoring & Handover",
        description: "Deploying with latency tracking, token usage monitoring, logging, and an administrative review interface for your team."
      }
    ],
    whyKhawitPoints: [
      {
        title: "Honest AI Engineering",
        desc: "We do not claim that AI eliminates all errors. We engineer robust verification mechanisms, confidence thresholds, and graceful fallbacks."
      },
      {
        title: "Model-Agnostic Flexibility",
        desc: "We integrate the right model for the job—whether Gemini, Claude, OpenAI, or open-source weights hosted on your own private cloud."
      },
      {
        title: "Data Sovereignty & Security",
        desc: "Strict compliance with enterprise data security guidelines, ensuring your proprietary information remains confidential and isolated."
      }
    ],
    relatedServices: [
      { slug: "ai-agents-automation", title: "Autonomous AI Agents & Automation", eyebrow: "AGENTIC WORKFLOWS" },
      { slug: "ai-powered-systems", title: "Enterprise AI & Business Operations", eyebrow: "ENTERPRISE OPERATIONS" },
      { slug: "web-development", title: "Web Development", eyebrow: "DIGITAL EXPERIENCES" }
    ],
    ctaText: "Discuss a Conversational AI or RAG Project",
    faqs: [
      {
        question: "What is Retrieval-Augmented Generation (RAG) and why is it important?",
        answer: "RAG connects an AI language model to your specific documents (such as manuals, policies, or product specs). When a question is asked, relevant excerpts are retrieved from your database and fed to the model as context. This grounds the answer in your authentic data, drastically reducing inaccuracies without requiring expensive model retraining."
      },
      {
        question: "Does RAG eliminate hallucinations entirely?",
        answer: "No system can guarantee 100% elimination of hallucinations. However, by strictly constraining the model to cite retrieved source material, applying confidence scoring, and designing fallback responses when information is absent, we minimize inaccuracies to an enterprise-grade standard."
      },
      {
        question: "Is our company data used to train public AI models?",
        answer: "No. We utilize commercial enterprise API endpoints with contractual zero-data-retention terms, or deploy self-hosted open-source models within your private cloud. Your intellectual property and customer queries are never shared with public model training pools."
      },
      {
        question: "How do you handle ongoing model API costs?",
        answer: "We design systems with cost optimization in mind. We implement semantic caching to prevent duplicate API calls, use lightweight embedding models for search, and route queries to smaller, cost-effective models whenever appropriate."
      }
    ]
  },
  {
    id: "ai-agents-automation",
    number: "03",
    title: "Autonomous AI Agents & Automation",
    eyebrow: "AGENTIC WORKFLOWS",
    quote: "Next, intelligence can become action. Agents and automated workflows connect the right tools to repeatable work, with people in control.",
    description: "Next, intelligence can become action. Agents and automated workflows connect the right tools to repeatable work, with people in control.",
    iconName: "FiZap",
    items: [
      {
        name: "AI Agents",
        desc: "Intelligent software entities capable of perceiving their environment and taking goal-directed actions.",
        slug: "ai-agents"
      },
      {
        name: "Autonomous Agents",
        desc: "Systems that can execute complex, multi-step tasks with minimal human intervention.",
        slug: "autonomous-agents"
      },
      {
        name: "Voice Agents",
        desc: "Conversational agents designed to interact naturally over voice channels.",
        slug: "voice-agents"
      },
      {
        name: "Multi-Agent Systems",
        desc: "Networks of specialized AI agents working together to solve complex problems.",
        slug: "multi-agent-systems"
      },
      {
        name: "AI Workflow Automation",
        desc: "Enhancing traditional business processes with intelligent decision-making steps.",
        slug: "ai-workflow-automation"
      },
      {
        name: "Business Process Automation",
        desc: "Streamlining operations by automating repetitive tasks and data flows.",
        slug: "business-process-automation"
      },
      {
        name: "API & Tool-integrated Agents",
        desc: "Agents equipped with custom tools to interact securely with existing software stacks.",
        slug: "api-tool-integrated-agents"
      }
    ],
    image: "/services/workflows-agents.jpg",
    imageAlt: "Autonomous AI agent workflow diagram and tool integration interface",
    intro: {
      overview: "While basic AI answers questions, AI agents take goal-directed actions. We build agentic systems that perceive intent, plan multi-step operations, call authorized tools and APIs, and execute complex workflows—freeing human teams from tedious manual coordination.",
      targetAudience: "Operations leaders, customer service teams, and digital businesses looking to automate repetitive data coordination and cross-platform actions.",
      challengesSolved: [
        "Manual data entry and copy-pasting across CRMs, email, ERPs, and spreadsheets.",
        "Bottlenecks in lead qualification, document validation, and customer triage.",
        "Traditional rigid automation scripts that break the moment a format slightly shifts.",
        "Lack of transparency and human oversight in automated business workflows."
      ]
    },
    whyItMatters: {
      summary: "Traditional automation is brittle because it relies on static rules. Agentic AI adds situational reasoning: it can interpret messy emails, choose the correct API tool, validate the response, and alert a human supervisor only when an exception occurs.",
      points: [
        {
          title: "Bounded Autonomy & Safeguards",
          desc: "Agents operate within strictly defined permission scopes with mandatory human checkpoints for irreversible actions."
        },
        {
          title: "Multi-Agent Specialization",
          desc: "Rather than one giant prompt, we deploy networks of specialized agents (e.g. Researcher, Drafter, Critic) that verify each other's outputs."
        },
        {
          title: "Auditable Tool Execution",
          desc: "Every API call, parameter, reasoning step, and outcome is logged in full detail for accountability and compliance."
        }
      ]
    },
    useCases: [
      {
        title: "Inbound Inquiry & Qualification Agent",
        desc: "An agent that analyzes incoming emails, extracts intent and contact information, verifies company data via external APIs, updates the CRM, and drafts a personalized reply for representative review."
      },
      {
        title: "Multi-Agent Market Intelligence Hub",
        desc: "A coordinated network where an orchestrator agent delegates data collection, summarization, and financial metric verification to specialized worker agents, assembling weekly executive briefs."
      },
      {
        title: "Operational Incident Triager",
        desc: "An automated agent that monitors system alerts, queries error logs, correlates recent deployments, and prepares diagnostic summaries for on-call engineers."
      }
    ],
    approach: [
      {
        number: "01",
        title: "Process & Tool Definition",
        description: "We map out the exact business workflow, required software tools, necessary API credentials, and boundary conditions."
      },
      {
        number: "02",
        title: "Permission & Security Scoping",
        description: "We define read/write access levels, token limits, and explicit human-in-the-loop triggers for high-impact decisions."
      },
      {
        number: "03",
        title: "Agent Architecture & State Management",
        description: "We implement robust agent loops: Request → Interpret → Select Authorized Tool → Execute → Validate → Report Result."
      },
      {
        number: "04",
        title: "Simulated Stress Testing",
        description: "We test the agent against malformed inputs, API timeouts, ambiguous prompts, and adversarial edge cases to ensure graceful degradation."
      },
      {
        number: "05",
        title: "Monitored Production Deployment",
        description: "Phased deployment starting with read-only shadowing, progressing to bounded execution under team supervision."
      }
    ],
    whyKhawitPoints: [
      {
        title: "Rigorous Human Oversight",
        desc: "We believe in human-in-the-loop systems. Critical actions (financial transactions, bulk communications) always require explicit human approval."
      },
      {
        title: "Deterministic Fallbacks",
        desc: "When an agent encounters uncertainty or an API failure, the system falls back to standard deterministic workflows without stalling operations."
      },
      {
        title: "Deep API Integration",
        desc: "We write robust, type-safe API wrappers that allow agents to interact reliably with your internal databases, Slack, HubSpot, Jira, and custom backends."
      }
    ],
    relatedServices: [
      { slug: "ai-solutions", title: "Conversational AI & Knowledge Systems (RAG)", eyebrow: "KNOWLEDGE & CONVERSATIONAL AI" },
      { slug: "ai-powered-systems", title: "Enterprise AI & Business Operations", eyebrow: "ENTERPRISE OPERATIONS" },
      { slug: "deployment", title: "Deployment", eyebrow: "READY FOR THE REAL WORLD" }
    ],
    ctaText: "Explore Autonomous AI Automation",
    faqs: [
      {
        question: "How do you prevent an AI agent from making costly mistakes?",
        answer: "We implement bounded autonomy: agents only have access to pre-approved tools and sandboxed permissions. For sensitive actions (such as sending an email to a client, deleting a record, or making a financial transaction), the agent creates a draft or proposal that pauses for human verification before execution."
      },
      {
        question: "What is the difference between an AI chatbot and an AI agent?",
        answer: "A chatbot typically conducts a conversation and returns text. An AI agent is equipped with tools, APIs, and goal-seeking logic: it can decide which external software to call, retrieve external data, trigger actions, verify the outcome, and iterate until the objective is accomplished."
      },
      {
        question: "Can agents connect to our custom internal databases?",
        answer: "Yes. We create secure, authenticated API tool endpoints that allow agents to query internal databases (PostgreSQL, MySQL, MongoDB, etc.) with strict parameter validation and parameterized query safeguards to prevent security vulnerabilities."
      },
      {
        question: "What happens if an external API fails during an agent workflow?",
        answer: "Our agentic architectures incorporate retry logic, exponential backoff, state persistence, and alternative recovery paths. If an external service is completely unresponsive, the agent pauses the task and notifies your team with an exact diagnostic log."
      }
    ]
  },
  {
    id: "saas-product",
    number: "04",
    title: "SaaS & Product",
    eyebrow: "IDEA TO PRODUCT",
    quote: "When an idea deserves a product of its own, we turn it into a focused MVP, a scalable SaaS, or a platform built around how teams actually work.",
    description: "When an idea deserves a product of its own, we turn it into a focused MVP, a scalable SaaS, or a platform built around how teams actually work.",
    iconName: "FiTrendingUp",
    items: [
      {
        name: "SaaS Applications",
        desc: "End-to-end development of subscription-based software platforms.",
        slug: "saas-applications"
      },
      {
        name: "AI-powered SaaS",
        desc: "Software-as-a-Service products with generative AI features as core differentiators.",
        slug: "ai-powered-saas"
      },
      {
        name: "MVP Development",
        desc: "Rapid prototyping and building of minimum viable products to validate market fit.",
        slug: "mvp-development"
      },
      {
        name: "Custom Software Products",
        desc: "Bespoke software solutions tailored to a unique business model.",
        slug: "custom-software-products"
      },
      {
        name: "Full-Stack Applications",
        desc: "Comprehensive frontend and backend development for robust digital products.",
        slug: "full-stack-applications"
      },
      {
        name: "Internal Business Platforms",
        desc: "Custom portals and tools built to empower teams and streamline internal operations.",
        slug: "internal-business-platforms"
      },
      {
        name: "AI-powered Products",
        desc: "Standalone digital products built around AI capabilities.",
        slug: "ai-powered-products"
      }
    ],
    image: "/services/mvp-saas.jpg",
    imageAlt: "SaaS product engineering dashboard with user management and metric analytics",
    intro: {
      overview: "Building a software product requires disciplined architecture, intuitive user experience, secure multi-tenancy, and reliable backend engineering. We partner with founders and enterprise innovators to turn conceptual requirements into resilient, commercial digital products.",
      targetAudience: "Startups building initial MVPs, established companies spinning out standalone software tools, and businesses modernizing their internal operational systems into scalable platforms.",
      challengesSolved: [
        "Slow development velocity resulting in missed market validation windows.",
        "Accumulation of technical debt that prevents scaling after initial user acquisition.",
        "Poorly designed user interfaces that confuse early adopters and increase churn.",
        "Complicated billing, authentication, and role-based access management setups."
      ]
    },
    whyItMatters: {
      summary: "Successful digital products balance rapid validation with solid engineering fundamentals. By prioritizing core functional value and building modular architecture, we ensure your product can evolve gracefully as your customer base expands.",
      points: [
        {
          title: "Focused Value Engineering",
          desc: "We help you prioritize essential features that validate market demand, avoiding feature bloat and premature complexity."
        },
        {
          title: "Modular, Maintainable Codebase",
          desc: "Built with TypeScript, Next.js, clean API boundaries, and industry-standard database schemas, making future handovers or team expansion painless."
        },
        {
          title: "Enterprise Multi-Tenancy",
          desc: "Secure tenant isolation, role-based access control (RBAC), and automated subscription billing integrations from day one."
        }
      ]
    },
    useCases: [
      {
        title: "B2B Vertical AI SaaS",
        desc: "A subscription software platform tailored for legal professionals to review discovery documents, summarize deposition transcripts, and generate standardized compliance briefs."
      },
      {
        title: "Operational Team Portal",
        desc: "A custom internal web platform for a field services company, replacing paper forms with real-time job dispatching, photo verification, and customer billing."
      },
      {
        title: "Rapid Validation MVP",
        desc: "A focused, high-speed MVP built in six weeks to test user retention and willingness-to-pay for a specialized financial analytics tool."
      }
    ],
    approach: [
      {
        number: "01",
        title: "Product Scoping & Architecture",
        description: "We define core user personas, primary user flows, technical stack selection, and database entity relationships."
      },
      {
        number: "02",
        title: "Design System & Prototyping",
        description: "We design high-fidelity interactive component libraries and interface screens focused on clean information hierarchy."
      },
      {
        number: "03",
        title: "Full-Stack Development Sprints",
        description: "Agile, two-week development cycles delivering functional frontend views, secure API endpoints, and integrated database queries."
      },
      {
        number: "04",
        title: "Security, Billing & Auth Integration",
        description: "Implementation of secure authentication (NextAuth, Supabase, Auth0), multi-tier role permissions, and payment gateways (Stripe)."
      },
      {
        number: "05",
        title: "Production Hardening & Launch",
        description: "End-to-end testing, automated database migrations, cloud hosting setup, and continuous telemetry monitoring."
      }
    ],
    whyKhawitPoints: [
      {
        title: "Complete Code Ownership",
        desc: "You own 100% of the intellectual property, source code, repositories, and documentation. No proprietary lock-in or licensing fees."
      },
      {
        title: "Product-Minded Engineers",
        desc: "We do not just write code to specification; we actively challenge assumptions to help you build software people actually want to use."
      },
      {
        title: "Scalable Foundations",
        desc: "We design database schemas and serverless cloud architectures that handle your first 100 users or your first 100,000 without requiring rewrites."
      }
    ],
    relatedServices: [
      { slug: "web-development", title: "Web Development", eyebrow: "DIGITAL EXPERIENCES" },
      { slug: "ai-solutions", title: "Conversational AI & Knowledge Systems (RAG)", eyebrow: "KNOWLEDGE & CONVERSATIONAL AI" },
      { slug: "deployment", title: "Deployment", eyebrow: "READY FOR THE REAL WORLD" }
    ],
    ctaText: "Discuss Your Product Idea",
    faqs: [
      {
        question: "How do you handle intellectual property (IP) and code ownership?",
        answer: "All intellectual property, proprietary assets, repositories, and code developed during the engagement belong entirely to you upon invoice settlement. We transfer repository ownership directly to your organization."
      },
      {
        question: "What is the typical timeframe for an MVP?",
        answer: "A focused, well-defined MVP typically takes between 6 and 10 weeks from initial scoping to production launch. We prioritize core functionality needed to validate value with real users rather than building non-essential features."
      },
      {
        question: "What technologies do you use for SaaS products?",
        answer: "We primarily utilize modern full-stack TypeScript: Next.js and React on the frontend, Node.js or Python services on the backend, PostgreSQL or MongoDB for databases, and Prisma or Drizzle for type-safe ORM layers."
      },
      {
        question: "Can your team help maintain the software after launch?",
        answer: "Yes. We offer structured post-launch support and ongoing sprint retainer packages for feature development, infrastructure monitoring, security updates, and performance optimization."
      }
    ]
  },
  {
    id: "ai-powered-systems",
    number: "05",
    title: "Enterprise AI & Business Operations",
    eyebrow: "ENTERPRISE OPERATIONS",
    quote: "Then the product connects to everyday operations: helping teams support customers, qualify leads, share knowledge, and move work forward.",
    description: "Then the product connects to everyday operations: helping teams support customers, qualify leads, share knowledge, and move work forward.",
    iconName: "FiLayers",
    items: [
      {
        name: "Customer Support Systems",
        desc: "Intelligent ticketing and automated response setups that improve resolution times.",
        slug: "customer-support-systems"
      },
      {
        name: "Lead Qualification Systems",
        desc: "Automated funnels that use AI to score and categorize inbound prospects.",
        slug: "lead-qualification-systems"
      },
      {
        name: "AI Sales Assistants",
        desc: "Tools that help sales teams prepare, personalize outreach, and follow up effectively.",
        slug: "ai-sales-assistants"
      },
      {
        name: "Knowledge Management Systems",
        desc: "Centralized platforms that make company information searchable and understandable.",
        slug: "knowledge-management-systems"
      },
      {
        name: "Internal AI Tools",
        desc: "Custom-built applications designed to accelerate specific workflows for teams.",
        slug: "internal-ai-tools"
      },
      {
        name: "Custom AI Workflows",
        desc: "Bespoke pipelines that connect AI models and services to perform complex operational tasks.",
        slug: "custom-ai-workflows"
      }
    ],
    image: "/services/business-systems.jpg",
    imageAlt: "Enterprise business operations platform with automated AI pipeline workflows",
    intro: {
      overview: "Operational friction slows growing businesses down. We connect artificial intelligence directly into the business systems your team uses every day: customer support queues, sales CRM pipelines, document archives, and internal communication channels.",
      targetAudience: "Mid-sized and enterprise companies dealing with manual communication bottlenecks, disconnected business tools, and expanding support loads.",
      challengesSolved: [
        "Customer support queues clogged by repetitive, low-complexity inquiries.",
        "Sales teams wasting hours manually researching and qualifying incoming leads.",
        "Critical corporate knowledge siloed in disconnected email threads and drives.",
        "Disconnected software tools requiring manual, error-prone data transfer."
      ]
    },
    whyItMatters: {
      summary: "Rather than asking your team to switch to unfamiliar new software, we build systems that integrate into your existing toolstack, augmenting your staff with automated intelligence that accelerates response times and preserves operational continuity.",
      points: [
        {
          title: "Operational Speed & Consistency",
          desc: "Automate repetitive triage, categorization, and drafting so your team can focus on high-touch client relationships."
        },
        {
          title: "Transparent Qualification Criteria",
          desc: "Inbound leads are scored against objective business criteria with full explanations, preventing subjective guesswork."
        },
        {
          title: "Living Institutional Memory",
          desc: "Centralize project documentation and communication logs into a structured system that remains accessible even as staff changes."
        }
      ]
    },
    useCases: [
      {
        title: "Intelligent Support Triage & Drafting",
        desc: "A support layer that reads incoming tickets, extracts urgency, checks existing resolution records, and drafts responses for agent review."
      },
      {
        title: "Automated B2B Lead Scoring Pipeline",
        desc: "A system that enriches incoming web leads via public company registries, evaluates ICP fit against defined scoring rubrics, and notifies the right account executive."
      },
      {
        title: "Centralized Knowledge Search Portal",
        desc: "A unified internal search interface indexing Google Drive, Notion, and Slack discussions to deliver instant, cited policy answers to remote employees."
      }
    ],
    approach: [
      {
        number: "01",
        title: "Operational Workflow Mapping",
        description: "We audit how information currently enters, moves through, and leaves your business departments."
      },
      {
        number: "02",
        title: "System & API Integration Design",
        description: "We configure authenticated connections with your ticketing software (Zendesk, Intercom), CRM (Salesforce, HubSpot), and document repositories."
      },
      {
        number: "03",
        title: "Model Pipeline & Logic Implementation",
        description: "We construct classification, summarization, and data extraction pipelines with deterministic verification checks."
      },
      {
        number: "04",
        title: "Team Interface & Pilot Rollout",
        description: "We provide clean interfaces or browser extensions for your staff to approve, modify, or reject AI-generated suggestions."
      },
      {
        number: "05",
        title: "Continuous Refinement",
        description: "We analyze staff acceptance rates, refine scoring prompts, and optimize system response latency."
      }
    ],
    whyKhawitPoints: [
      {
        title: "Tool-Agnostic Integration",
        desc: "We integrate with the software your business already uses—HubSpot, Salesforce, Zendesk, Slack, Jira, or custom internal databases."
      },
      {
        title: "Realistic Performance Standards",
        desc: "We do not promise unrealistic resolution metrics. We build practical systems that genuinely save hours of busywork every week."
      },
      {
        title: "Empowered Human Teams",
        desc: "Our systems are designed to support and elevate human decision-makers, keeping them in control of communication and strategy."
      }
    ],
    relatedServices: [
      { slug: "ai-solutions", title: "Conversational AI & Knowledge Systems (RAG)", eyebrow: "KNOWLEDGE & CONVERSATIONAL AI" },
      { slug: "ai-agents-automation", title: "Autonomous AI Agents & Automation", eyebrow: "AGENTIC WORKFLOWS" },
      { slug: "deployment", title: "Deployment", eyebrow: "READY FOR THE REAL WORLD" }
    ],
    ctaText: "Plan an Enterprise AI System",
    faqs: [
      {
        question: "Can an AI sales assistant send emails automatically without my review?",
        answer: "By default, our systems draft personalized emails and queue them for sales representative approval. We strongly recommend human review for outbound outreach to ensure tone, context, and authenticity remain aligned with your brand standards."
      },
      {
        question: "How does the lead qualification system determine lead score?",
        answer: "We configure explicit, transparent criteria based on your Ideal Customer Profile (ICP)—such as company size, industry, technology stack, and project budget. The system provides a clear reasoning summary alongside each score, so sales reps understand exactly why a lead was prioritized."
      },
      {
        question: "Will implementing these systems require our team to adopt new software?",
        answer: "No. Our philosophy is to enhance your existing tools. We integrate directly with your current CRM, ticketing platform, or messaging apps so your staff can continue working in their familiar environments."
      },
      {
        question: "How long does it take to deploy an internal knowledge management system?",
        answer: "A standard deployment integrating with your primary document stores typically takes 3 to 5 weeks, including document parsing, vector indexing, access permission mapping, and staff onboarding."
      }
    ]
  },
  {
    id: "deployment",
    number: "06",
    title: "Deployment",
    eyebrow: "READY FOR THE REAL WORLD",
    quote: "Finally, the pieces come together in production. We connect services, data, models, and cloud infrastructure so the system is ready for real use.",
    description: "Finally, the pieces come together in production. We connect services, data, models, and cloud infrastructure so the system is ready for real use.",
    iconName: "FiCheckCircle",
    items: [
      {
        name: "API Integrations",
        desc: "Connecting applications with essential third-party services and data sources.",
        slug: "api-integrations"
      },
      {
        name: "Third-party Integrations",
        desc: "Integrating external software solutions into the existing ecosystem.",
        slug: "third-party-integrations"
      },
      {
        name: "Database Integration",
        desc: "Secure and scalable database architecture, migration, and management.",
        slug: "database-integration"
      },
      {
        name: "Cloud Deployment",
        desc: "Setting up infrastructure on AWS, Google Cloud, or Azure.",
        slug: "cloud-deployment"
      },
      {
        name: "Production Setup",
        desc: "Configuring CI/CD pipelines, monitoring, and security for live environments.",
        slug: "production-setup"
      },
      {
        name: "AI Model Integration",
        desc: "Deploying and managing language models and machine-learning services in production.",
        slug: "ai-model-integration"
      }
    ],
    image: "/services/deployment-cloud.jpg",
    imageAlt: "Cloud infrastructure architecture and real-time production API integrations",
    intro: {
      overview: "A great application is only as good as its production readiness. We architect resilient cloud infrastructure, configure continuous integration and delivery (CI/CD) pipelines, secure relational and vector databases, and integrate third-party APIs so your systems run smoothly under real-world loads.",
      targetAudience: "Engineering teams needing production hardening, businesses migrating from legacy servers to the cloud, and products launching high-concurrency AI applications.",
      challengesSolved: [
        "Unreliable manual deployment procedures prone to human error and unexpected downtime.",
        "Unoptimized cloud architectures that generate bloated monthly hosting bills.",
        "Security vulnerabilities resulting from exposed credentials and unhardened endpoints.",
        "Slow database queries and bottlenecked API response times as user traffic increases."
      ]
    },
    whyItMatters: {
      summary: "Modern production environments demand automated deployments, zero-downtime releases, automated database backups, and instant error telemetry. We build cloud foundations that protect your data and scale predictably.",
      points: [
        {
          title: "Automated CI/CD Delivery",
          desc: "Every code change is automatically linted, tested, and staged, enabling rapid, risk-free production releases."
        },
        {
          title: "Infrastructure as Code (IaC)",
          desc: "Cloud environments are defined and versioned in code, ensuring reproducible staging, testing, and production instances."
        },
        {
          title: "Comprehensive Observability",
          desc: "Real-time error logging, API latency tracking, and uptime alerts notify engineers before issues impact end users."
        }
      ]
    },
    useCases: [
      {
        title: "Multi-Region Cloud Architecture",
        desc: "Setting up a resilient, auto-scaling Next.js and containerized API environment on AWS with CloudFront CDN, serverless databases, and automated backups."
      },
      {
        title: "Secure Enterprise API Gateway",
        desc: "Designing a centralized API gateway that handles authentication, rate limiting, and request logging across multiple internal microservices."
      },
      {
        title: "High-Throughput Model Serving",
        desc: "Deploying and load-balancing private language model endpoints on GPU cloud instances with automated request batching and cost capping."
      }
    ],
    approach: [
      {
        number: "01",
        title: "Architecture & Security Audit",
        description: "We review existing environments, traffic projections, security requirements, and compliance standards."
      },
      {
        number: "02",
        title: "Infrastructure Provisioning",
        description: "We configure cloud resources (VPCs, container clusters, serverless functions, database instances) following principle of least privilege."
      },
      {
        number: "03",
        title: "CI/CD Pipeline Setup",
        description: "We build automated pipelines using GitHub Actions or GitLab CI for testing, Docker building, and deployment."
      },
      {
        number: "04",
        title: "Observability & Monitoring",
        description: "Integration of structured logging, telemetry tracking, and incident notification alerts via Slack or PagerDuty."
      },
      {
        number: "05",
        title: "Load Testing & Runbook Handover",
        description: "Stress-testing under peak simulated traffic, documenting disaster recovery procedures, and training your team."
      }
    ],
    whyKhawitPoints: [
      {
        title: "Multi-Cloud Competence",
        desc: "Expertise across AWS, Google Cloud, Azure, Vercel, and Cloudflare. We recommend the platform that best fits your technical requirements and budget."
      },
      {
        title: "Cost Governance by Design",
        desc: "We actively optimize resource sizing, auto-scaling rules, and serverless architectures to prevent surprise infrastructure invoices."
      },
      {
        title: "Zero-Downtime Releases",
        desc: "We configure blue-green and rolling deployment strategies so user traffic is never interrupted during software updates."
      }
    ],
    relatedServices: [
      { slug: "saas-product", title: "SaaS & Product", eyebrow: "IDEA TO PRODUCT" },
      { slug: "ai-solutions", title: "Conversational AI & Knowledge Systems (RAG)", eyebrow: "KNOWLEDGE & CONVERSATIONAL AI" },
      { slug: "web-development", title: "Web Development", eyebrow: "DIGITAL EXPERIENCES" }
    ],
    ctaText: "Discuss Deployment Requirements",
    faqs: [
      {
        question: "Which cloud provider do you recommend?",
        answer: "We tailor our recommendation to your application. For modern Next.js and frontend applications, Vercel and AWS offer excellent performance and global edge delivery. For complex containerized microservices and AI workloads, AWS or Google Cloud Platform provide robust compute and database solutions."
      },
      {
        question: "How do you ensure zero downtime during database migrations?",
        answer: "We utilize multi-phase migration patterns: additive schema changes first, dual-writing where necessary, data backfilling in batches, and finally deprecating old fields only after new code has successfully settled in production."
      },
      {
        question: "Do you configure staging and testing environments?",
        answer: "Yes. Every deployment architecture we implement includes isolated staging environments that closely mirror production, allowing your team to test new features and database migrations safely before going live."
      },
      {
        question: "Who holds the credentials to the cloud infrastructure?",
        answer: "You do. All infrastructure is provisioned inside your organization's cloud accounts. We never hold your infrastructure hostage or force proprietary hosting lock-in."
      }
    ]
  },
  {
    id: "digital-marketing",
    number: "07",
    title: "Digital Marketing",
    eyebrow: "GROWTH, ENGINEERED",
    quote: "Digital strategies that turn attention into meaningful engagement, helping brands build visibility, connect with the right audience, and grow.",
    description: "Digital strategies that turn attention into meaningful engagement, helping brands build visibility, connect with the right audience, and grow.",
    iconName: "FiBarChart2",
    items: [
      {
        name: "Social Media Marketing",
        desc: "Strategic social presence through content planning, audience targeting, positioning, engagement, and measurable growth.",
        slug: "social-media-marketing"
      },
      {
        name: "Social Media Management",
        desc: "Day-to-day social presence through content calendars, publishing, community engagement, profile optimization, and performance tracking.",
        slug: "social-media-management"
      },
      {
        name: "Paid Media",
        desc: "Targeted paid campaigns to reach relevant audiences, drive traffic, generate leads, and support measurable business outcomes.",
        slug: "paid-media"
      },
      {
        name: "Meta Ads",
        desc: "Facebook and Instagram campaigns using audience targeting, creative testing, retargeting, and conversion-focused strategies.",
        slug: "meta-ads"
      },
      {
        name: "Google Ads",
        desc: "Google advertising using targeted keywords, compelling ads, conversion tracking, and continuous optimization.",
        slug: "google-ads"
      },
      {
        name: "AI Content Creation",
        desc: "AI-assisted workflows for scalable marketing content while maintaining brand voice, quality, consistency, and human oversight.",
        slug: "ai-content-creation"
      }
    ],
    image: "/services/growth-marketing.jpg",
    imageAlt: "Growth marketing dashboard displaying campaign performance and audience analytics",
    intro: {
      overview: "Digital marketing should be an accountable growth engine, not an ambiguous expense. We engineer data-driven digital marketing campaigns, high-intent search acquisition, targeted paid media, and structured social positioning that translate brand attention into measurable business outcomes.",
      targetAudience: "B2B service firms, modern product companies, and expanding businesses seeking predictable customer acquisition and established digital authority.",
      challengesSolved: [
        "Wasting advertising budget on broad, unqualified audiences with low conversion intent.",
        "Inaccurate attribution tracking that obscures which channels actually drive sales.",
        "Inconsistent content publishing that fails to build recognizable market authority.",
        "Generic AI-generated marketing copy that sounds robotic and damages brand trust."
      ]
    },
    whyItMatters: {
      summary: "Effective marketing combines creative positioning with rigorous technical attribution. By integrating high-converting landing pages, server-side tracking, and continuous creative testing, we ensure every marketing dollar is tied to measurable commercial performance.",
      points: [
        {
          title: "Technical Tracking & Attribution",
          desc: "We configure server-side conversion tracking (Meta Conversions API, Google Tag Manager Server-Side) to circumvent browser tracking loss and deliver clean ROI data."
        },
        {
          title: "High-Intent Acquisition",
          desc: "We focus on high-intent search and targeted account-based marketing rather than vanity impressions, reaching decision-makers ready to act."
        },
        {
          title: "Human-Curated AI Content",
          desc: "We leverage AI to accelerate research and drafting, while experienced strategists edit and verify every word to uphold brand sophistication."
        }
      ]
    },
    useCases: [
      {
        title: "B2B SaaS Paid Media Acquisition",
        desc: "Targeted LinkedIn and Google Search campaigns targeting IT decision-makers, driving qualified trial signups with server-side conversion tracking."
      },
      {
        title: "Meta Retargeting & Lead Generation",
        desc: "Multi-stage Facebook and Instagram ad funnels combining educational video creative, case studies, and focused lead generation forms."
      },
      {
        title: "AI-Augmented Content Strategy",
        desc: "A scalable thought-leadership pipeline producing in-depth technical articles, social carousels, and monthly email briefs aligned with industry search trends."
      }
    ],
    approach: [
      {
        number: "01",
        title: "Audience & Competitor Intelligence",
        description: "We analyze high-performing competitor campaigns, buyer search queries, and demographic profiles to establish clear positioning."
      },
      {
        number: "02",
        title: "Tracking & Conversion Infrastructure",
        description: "We implement robust conversion tracking, event tags, and analytics dashboards before spending a dollar on ad platforms."
      },
      {
        number: "03",
        title: "Creative & Copy Production",
        description: "We draft conversion-oriented ad creative, copy angles, and campaign variants aligned with your visual brand identity."
      },
      {
        number: "04",
        title: "Controlled Launch & A/B Testing",
        description: "Campaigns launch with strict budget caps, testing multiple headlines, visuals, and audience segments to identify winning variants."
      },
      {
        number: "05",
        title: "Scaling & ROI Optimization",
        description: "We allocate budget toward the highest-performing combinations, providing transparent weekly reporting on cost-per-lead and acquisition metrics."
      }
    ],
    whyKhawitPoints: [
      {
        title: "Full Alignment with Tech & Design",
        desc: "Because we build the landing pages and apps ourselves, our marketing team collaborates directly with our developers to optimize page conversion rates."
      },
      {
        title: "Honest Attribution & Reporting",
        desc: "No vanity metrics. We report on qualified inquiries, cost per acquisition (CPA), and pipeline revenue."
      },
      {
        title: "High-Craft Content Standards",
        desc: "We never publish generic, automated filler. Every asset is thoroughly reviewed for authentic tone, accuracy, and visual polish."
      }
    ],
    relatedServices: [
      { slug: "web-development", title: "Web Development", eyebrow: "DIGITAL EXPERIENCES" },
      { slug: "ai-solutions", title: "Conversational AI & Knowledge Systems (RAG)", eyebrow: "KNOWLEDGE & CONVERSATIONAL AI" },
      { slug: "ai-powered-systems", title: "Enterprise AI & Business Operations", eyebrow: "ENTERPRISE OPERATIONS" }
    ],
    ctaText: "Discuss Your Marketing Goals",
    faqs: [
      {
        question: "What advertising budget is required to start?",
        answer: "We tailor campaign strategies to realistic milestones. While minimum test budgets vary by industry and channel, we typically recommend a minimum ad spend of $1,500 to $3,000 per month for paid search or social media to gather statistically significant conversion data."
      },
      {
        question: "How do you prevent ad tracking issues caused by modern browser privacy features?",
        answer: "We implement modern server-side tracking (such as Meta Conversions API and Google Server-Side Tag Manager) running on your own domain. This ensures accurate event reporting and conversion optimization even when client-side cookies are blocked."
      },
      {
        question: "Do you write all the content or use AI?",
        answer: "We combine human strategy with AI research accelerators. AI helps us outline topics, analyze search query data, and explore draft angles; our human editors then write, fact-check, and refine the copy to ensure authentic brand voice and factual accuracy."
      },
      {
        question: "How quickly can we expect to see results?",
        answer: "Paid advertising campaigns typically generate initial traffic and conversion data within the first 1 to 2 weeks. Organic social media and content marketing strategies build momentum over 3 to 6 months as domain authority and brand recognition compound."
      }
    ]
  }
];

export const getServiceBySlug = (slug: string): ServiceCategory | undefined => {
  return servicesData.find((service) => service.id === slug);
};
