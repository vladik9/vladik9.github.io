export type Language = "en" | "ro" | "ru";
import { info } from "./info";
export interface Vocabulary {
  // Navigation
  nav: {
    home: string;
    about: string;
    skills: string;
    experience: string;
    education: string;
    certifications: string;
    projects: string;
    contact: string;
    quote: string;
    downloadCV: string;
  };
  // Hero Section
  hero: {
    greeting: string;
    name: string;
    title: string;
    description: string;
    viewWork: string;
    downloadCV: string;
    stats: {
      experience: string;
      projects: string;
      clients: string;
      successRate: string;
    };
  };
  // About Section
  about: {
    title: string;
    subtitle: string;
    description: string;
    journey: {
      title: string;
      description: string;
      additionalDescription: string;
    };
    expertise: {
      frontend: { title: string; description: string; };
      mobile: { title: string; description: string; };
      backend: { title: string; description: string; };
      fullstack: { title: string; description: string; };
      cloud: { title: string; description: string; };
    };
    highlights: {
      excellence: { title: string; description: string; };
      tools: { title: string; description: string; };
      satisfaction: { title: string; description: string; };
      improvement: { title: string; description: string; };
    };
  };
  // Skills Section
  skills: {
    title: string;
    subtitle: string;
  };
  // Tech Stack Section
  techStack: {
    mainTitle: string;
    technologiesTitle: string;
    experienceDescription: string;
    title: string;
    subtitle: string;
    showLess: string;
    showMore: string;
  };
  // Experience Section
  experience: {
    title: string;
    subtitle: string;
    achievements: string;
    technologies: string;
  };
  // Education Section
  education: {
    title: string;
    subtitle: string;
    subjects: string;
    licenseDegree: {
      year: string;
      title: string;
      institution: string;
      location: string;
      smallDescription: string;
      achievementsTitle: string;
      achievements: string[];
      subjectsTitle: string;
      subjects: string[];
    };
    masterDegree: {
      year: string;
      title: string;
      institution: string;
      location: string;
      smallDescription: string;
      achievementsTitle: string;
      achievements: string[];
      subjectsTitle: string;
      subjects: string[];
    };
  };
  // Certifications Section
  certifications: {
    title: string;
    subtitle: string;
    details: string;
    professionalCertifications: string;
    awardsRecognition: string;
    certificationsArray: [
      {
        year: string;
        title: string;
        issuer: string;
        description: string;
        credential: string;
      },
      {
        year: string;
        title: string;
        issuer: string;
        description: string;
        credential: string;
      },
      {
        year: string;
        title: string;
        issuer: string;
        description: string;
        credential: string;
      },
      {
        year: string;
        title: string;
        issuer: string;
        description: string;
        credential: string;
      }
    ];
  };
  awards: [
    {
      year: string;
      title: string;
      issuer: string;
      description: string;
    }];
  experiences: [
    {
      period: string;
      title: string;
      company: string;
      location: string;
      description: string;
      achievements: string[];
      technologies: string[];
    },
    {
      period: string;
      title: string;
      company: string;
      location: string;
      description: string;
      achievements: string[];
      technologies: string[];
    },
    {
      period: string;
      title: string;
      company: string;
      location: string;
      description: string;
      achievements: string[];
      technologies: string[];
    }
  ];
  // Projects Section
  projects: {
    title: string;
    subtitle: string;
    viewProject: string;
    inDevelopment: string;
  };
  // Contact Section
  contact: {
    title: string;
    subtitle: string;
    startConversation: string;
    description: string;
    email: string;
    phone: string;
    location: string;
    form: {
      firstName: string;
      lastName: string;
      email: string;
      subject: string;
      message: string;
      send: string,
    };
  };
  calendly: {
    scheduleMeeting: string;
    requestQuote: string;
    requestQuoteDescription: string;
  };
  // Quote Request Section
  quote: {
    title: string;
    subtitle: string;
    projectDetails: string;
    contactDetails: string;
    form: {
      name: string;
      email: string;
      company: string;
      phone: string;
      projectType: string;
      budget: string;
      timeline: string;
      services: string;
      description: string;
      submit: string,
      specialRequests: string,
      terms: string,
      marketing: string;
      selectType: string;
      selectBudget: string;
      whenToStart: string;
      emailPlaceholder: string;
      descriptionPlaceholder: string;
      specialRequestsPlaceholder: string;
    };
    projectTypes: {
      mobile: string;
      web: string;
      fullstack: string;
      consulting: string;
    };
    budgetRanges: {
      under5k: string;
      range5to10k: string;
      range10to25k: string;
      range25to50k: string;
      over50k: string;
      notSure: string;
    };
    timelines: {
      asap: string;
      withinMonth: string;
      oneToThree: string;
      threeToSix: string;
      sixPlus: string;
      flexible: string;
    };
    services: {
      mobileNative: string;
      mobileWeb: string;
      desktopSoftware: string;
      consulting: string;
      webDevelopment: string;
      automation: string;
      testing: string;
    };
    response: {
      title: string;
      email: string;
      detailed: string;
    };
  };
  // Footer
  footer: {
    description: string;
    quickLinks: string;
    services: string;
    copyright: string;
    madeWith: string;
    forPersonalUse: string;
  };
  // Chat Modal Section
  chat: {
    title: string;
    subtitle: string;
    welcome: {
      title: string;
      subtitle: string;
    };
    options: {
      talkWithAI: {
        title: string;
        description: string;
      };
      exploreQA: {
        title: string;
        description: string;
      };
      contact: {
        title: string;
        description: string;
      };
    };
    placeholders: {
      typeMessage: string;
      startConversation: string;
    };
    qa: {
      q1: { question: string; answer: string; };
      q2: { question: string; answer: string; };
      q3: { question: string; answer: string; };
      q4: { question: string; answer: string; };
      q5: { question: string; answer: string; };
    };
    aiResponse: string;
  };
  // Confirmation Modal Section
  confirmation: {
    success: string;
    error: string;
    info: string;
    close: string;
    formSubmitted: {
      title: string;
      message: string;
    };
    formError: {
      title: string;
      message: string;
    };
  };
}

export const vocabulary: Record<Language, Vocabulary> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      experience: "Experience",
      education: "Education",
      certifications: "Certifications",
      projects: "Projects",
      contact: "Contact",
      quote: "Quote",
      downloadCV: "Download CV",
    },
    hero: {
      greeting: "Hello, I'm",
      name: "Vlad Cornici",
      title: "Senior Mobile & Web Developer",
      description:
        `Delivering high-performance digital solutions with over ${info.personal.stats.yearOfExperience} years of experience in JavaScript, TypeScript, React Native, Java and modern web technologies. Focused on building scalable, user-driven applications that drive business growth.`,
      viewWork: "View My Work",
      downloadCV: "Download CV",
      stats: {
        experience: "Years Experience",
        projects: "Projects Delivered",
        clients: "Happy Clients",
        successRate: "Success Rate",
      },
    },
    about: {
      title: "About Me",
      subtitle: "Get to know me better",
      description:
        `I'm a passionate full-stack developer with over ${info.personal.stats.yearOfExperience} years of experience crafting exceptional digital solutions. My expertise spans across mobile and web development, with a focus on creating scalable, user-friendly applications that drive business growth and deliver outstanding user experiences.`,
      journey: {
        title: "My journey in Software Engineering",
        description: `With over ${info.personal.stats.yearOfExperience} of experience in software development, I began my journey by mastering the fundamentals of programming and software engineering. Driven by curiosity about how things work and why they work the way they do, I explored various programming languages and frameworks. Over time, I’ve grown from a curious beginner into a seasoned professional, developing applications that address real-world needs and deliver meaningful value to users. My passion lies in writing clean, maintainable code and building intuitive, engaging applications that people love to use.`,
        additionalDescription: "I strive to remain versatile and not limit myself to one or two programming languages. Programming languages are tools, and as a good software engineer, I believe in choosing the right tools for each task. While many things can be built using any language, the choices we make today should serve as an advantage in the future, not a limitation. The tools I most enjoy and have extensive experience with are JavaScript, Java, and Python. JavaScript powers the web (and even mobile), Java runs on billions of devices worldwide, and Python is simply fun and powerful for rapid development and experimentation.I’m committed to staying up to date with emerging technologies and industry best practices, continuously learning and improving every day.",
      },
      expertise: {
        frontend: {
          title: "Frontend Development",
          description: "React.js, Next.js, JavaScript, TypeScript, HTML5, CSS3, WordPress",
        },
        mobile: {
          title: "Mobile Development",
          description: "React Native, iOS & Android, Cross-platform Solutions",
        },
        backend: {
          title: "Backend Development",
          description: "Node.js, Express.js, Spring Boot, RESTful APIs, Database Design",
        },
        fullstack: {
          title: "Full-Stack Solutions",
          description: "End-to-end development, DevOps, Cloud Integration",
        },
        cloud: {
          title: "Cloud Solutions",
          description: "AWS, Azure, Google Cloud",
        }
      },
      highlights: {
        excellence: {
          title: "Technical Excellence",
          description: "Consistently delivered high-quality, scalable solutions",
        },
        tools: {
          title: "Innovative Tools",
          description: "Utilized cutting-edge tools and frameworks",
        },
        satisfaction: {
          title: "Client Satisfaction",
          description: "100% project success rate with timely delivery",
        },
        improvement: {
          title: "Continuous Improvement",
          description: "Always striving for excellence and innovation",
        },
      },
    },
    skills: {
      title: "Skills & Expertise",
      subtitle: "Technologies I work with or used it in the past",
    },
    techStack: {
      title: "Skills & Technologies",
      subtitle: "Modern tools and frameworks I use to build exceptional applications",
      mainTitle: "Skills",
      technologiesTitle: "Technologies",
      experienceDescription: "Technologies and frameworks I use to build exceptional applications",
      showLess: "Show Less",
      showMore: "Show More",
    },
    experience: {
      title: "Experience",
      subtitle:
        "My professional journey in software development, building innovative solutions and leading teams to deliver exceptional results.",
      achievements: "Achievements",
      technologies: "Technologies Used",
    },
    education: {
      title: "Education",
      subtitle: "My academic background and qualifications in computer science and software engineering.",
      subjects: "Key Subjects",
      licenseDegree: {
        year: "2014 - 2018",
        title: "License's degree",
        institution: "Universitatea Tehnică a Moldovei",
        location: "Chișinău, Moldova",
        smallDescription: "Completed higher secondary education with focus on Mathematics, Physics, and Computer Science.",
        achievementsTitle: "Achievements",
        achievements: [
          "Studying communication technologies using radio and optical transmission methods.",
          "Developing simulation-based projects involving radio and optical systems.",
          "Designing and implementing telecommunication projects focused on practical applications."
        ],
        subjectsTitle: "Subjects",
        subjects: [
          "Mathematics",
          "Physics",
          "Electronics",
          "Computer Science"
        ],
      },
      masterDegree: {
        year: "2018 - 2020",
        title: "Master's degree",
        institution: "Universitatea „Ștefan cel Mare” Suceava",
        location: "Suceava, Romania",
        smallDescription: "Studying telecommunications network technologies and working on a VLC project for a master's degree. Researching network penetration testing and network vulnerabilities.",
        achievementsTitle: "Achievements",
        achievements: [
          "Pursuing a master's degree in Telecommunications Network Technologies.",
          "Developing a VLC-based project focused on network communication systems.",
          "Researching network penetration testing and analyzing security vulnerabilities."
        ],
        subjectsTitle: "Subjects",
        subjects: [
          "Data Structures",
          "Algorithms",
          "Mobile Development",
          "Web Technologies"
        ],
      },
    },
    certifications: {
      title: "Certifications & Awards",
      subtitle: "Professional certifications and recognition for excellence in software development and technology.",
      details: "Details",
      professionalCertifications: "Professional Certifications",
      awardsRecognition: "Awards & Recognition",
      certificationsArray: [
        {
          year: "2024",
          title: "AWS Certified Cloud Practitioner",
          issuer: "Amazon Web Services",
          description: "Professional certification demonstrating expertise in designing distributed systems on AWS platform.",
          credential: "AWS-SA-2024-5dbf9046",
        },
        {
          year: "2022",
          title: "Certified Associate Configurator",
          issuer: "Unqork",
          description:
            "Unqork certification in Unqork platform development, covering performance optimization and best practices using this platform.",
          credential: "UNQORK-RN-2022-ef6f4d8e",
        },
        {
          year: "2020",
          title: "C",
          issuer: "SoloLearn",
          description:
            "SoloLearn certification in C programming, covering language fundamentals and best practices.",
          credential: "SOLO-RN-2020-ef6f4d8e",
        },
        {
          year: "2022",
          title: "C++",
          issuer: "SoloLearn",
          description:
            "SoloLearn certification in C++ programming, covering language fundamentals and best practices.",
          credential: "SOLO-RN-2020-ef6f4d8e",
        },

      ],
    },
    experiences: [
      {
        period: "Jan 2022 - Present",
        title: "Software Engineer",
        company: "Custom Code Factory",
        location: "Suceava, Romania",
        description:
          "In Custom Code Factory we develop cutting-edge solutions for client needs.",
        achievements: [
          "Developed AI-powered tools to extract data from documents and implement Retrieval-Augmented Generation (RAG) chat systems, enabling automated knowledge base improvement and optimized marketing insights with Python and FastAPI.",
          "Build customers' WooCommerce website, manage easy product loading, stock management, build plugins using PHP, and tools for handling heavy operations that clients have.",
          "Developed CRM solutions in React and Nest for targeting specific branches of clients, helping clients find new clients, and approaching or retaining them.",
          "ERP solutions for enterprise resource planning and process automation in Next.",
          "Enhance the security of sensitive data by applying multiple algorithms and encryption at rest on devices and hard disks with proper backups of clients' data on remote servers with a quick restore solution in case of fault tolerance.",
          "Lead migration to distributed services and containerization of applications using Docker and pipelines.",
          "Build cross-platform applications using React Native that could be deployed easily on mobile stores.",
          "Configured and deployed application in production using Apache2, Nginx, and GitHub Actions.",
          "Developed 2-factor authentication mechanisms that can enhance security with security code generation and 2-step verification using PHP and React Native.",
          "Created automated scripts in Bash for backup creation, transfer, and encryption, scheduled actions, and cleanup solutions of old backups."
        ],
        technologies: ["Python", "FastAPI", "PHP", "React", "Next", "Nest", "Docker", "TypeScript", "Node.js", "AWS"],
      },
      {
        period: "Feb 2022 - May 2024",
        title: "Senior Application Developer",
        company: "Marsh McLennan/Expleo Group",
        location: "Dublin, Ireland/Iaşi, Romania (remote-contract)",
        description:
          "In Marsh McLennan/Expleo Group we build client solutions for their business.",
        achievements:
          [
            "Developed and implemented highly optimized cloud services, significantly enhancing performance and maintainability to meet the demanding application needs of API processing effectively.",
            "Optimized the codebase by reducing its complexity and separating concepts, thereby improving code execution efficiency. This involved breaking down complex code into smaller, more manageable pieces, making the logic easier to follow and debug.",
            "Increased application flexibility and scalability by adhering to open-closed principles in JavaScript, ensuring the system is closed to changes but open to adding new features without causing disruptions.",
            "Improved code readability by consolidating core logic and developing testing modules, enabling developers to debug and enhance service and API testing more smoothly and efficiently.",
            "Implemented and maintained an error handling mechanism that tracks problematic code and incorporates recovery processes to address major issues effectively.",
            "Build cloud tools and solutions for internal use and testing, using Unqork and JavaScript to automate business processes and platform APIs."
          ],
        technologies: ["Unqork", "JavaScript", "CSS3", "HTML5", "API", "Cloud Services"],
      },
      {
        period: "Aug 2021 - Sep 2021",
        title: "QA Developer",
        company: "ASSIST Software.",
        location: "Suceava, Romania",
        description:
          "QA development and testing for cross-platform mobile applications. Collaborated with cross-functional teams to deliver high-quality user experiences.",
        achievements: [
          "Created detailed test plans and cases for web and mobile apps.",
          "Covered all key areas: functionality, usability, performance, and security.",
          "Applied structured testing for complete coverage.",
          "Documentation:",
          "Wrote clear test cases with steps, expected results, and pass/fail criteria.",
          "Quality Review:",
          "Reviewed quality specs and design docs for clarity and feasibility.",
          "Provided feedback to improve alignment with project goals and standards.",
          "Manual & Automated Testing:",
          "Built manual and automated tests using Cypress.",
          "Tested all features across releases to ensure stability.",
          "Used Cypress to streamline testing and enhance reliability."
        ],
        technologies: ["JavaScript", "Cypress", "REST APIs", "Testing documentation"],
      },
    ],
    projects: {
      title: "Featured Projects",
      subtitle: "Showcasing my best work in mobile and web development",
      viewProject: "View Project",
      inDevelopment: "In Development",
    },
    awards: [
      {
        year: "2022",
        title: "Expleo CUE Award",
        issuer: "Associated with Expleo Group",
        description: "CUE Unique Award 2022 @ Expleo Group",
      },
    ],
    contact: {
      title: "Get In Touch",
      subtitle:
        "I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and design.",
      startConversation: "Let's Start a Conversation",
      description:
        "Whether you have a project in mind, want to collaborate, or just want to say hello, I'd love to hear from you. I typically respond within 24 hours.",
      email: "Email",
      phone: "Phone",
      location: "Location",
      form: {
        firstName: "First Name",
        lastName: "Last Name",
        email: "Email",
        subject: "Subject",
        message: "Message",
        send: "Send Message",

      },
    },
    calendly: {
      scheduleMeeting: "Schedule a Meeting",
      requestQuote: "Request a Quote",
      requestQuoteDescription: "Need a detailed project quote? Fill out the form and I'll get back to you within 24 hours.",
    },
    quote: {
      title: "Request a Personalized Quote",
      subtitle:
        "Fill out the form and I'll send you a detailed offer within 24 hours. Consultation is free and without obligation.",
      projectDetails: "Project Details",
      contactDetails: "Contact Details",
      form: {
        name: "Name",
        email: "Email",
        company: "Company",
        phone: "Phone",
        projectType: "Project Type",
        budget: "Budget",
        timeline: "Timeline",
        services: "Services of Interest",
        description: "Project Description",
        submit: "Request Quote",
        specialRequests: "Special Requests",
        terms: "I agree to the terms and conditions",
        marketing: "I want to receive marketing emails",
        selectType: "Select type",
        selectBudget: "Select budget",
        whenToStart: "When to start?",
        emailPlaceholder: "email@example.com",
        descriptionPlaceholder: "Describe your project, goals, and any specific requirements...",
        specialRequestsPlaceholder: "Any specific technologies, integrations, or preferences...",
      },
      projectTypes: {
        mobile: "Mobile App",
        web: "Web Application",
        fullstack: "Full-Stack Project",
        consulting: "Consulting",
      },
      budgetRanges: {
        under5k: "Under $5,000",
        range5to10k: "$5,000 - $10,000",
        range10to25k: "$10,000 - $25,000",
        range25to50k: "$25,000 - $50,000",
        over50k: "$50,000+",
        notSure: "Not sure yet",
      },
      timelines: {
        asap: "ASAP",
        withinMonth: "Within 1 month",
        oneToThree: "1-3 months",
        threeToSix: "3-6 months",
        sixPlus: "6+ months",
        flexible: "Flexible",
      },
      services: {
        mobileNative: "Native Mobile App (iOS/Android, React Native, Flutter)",
        mobileWeb: "Mobile Web App (PWA, Angular, React, Python)",
        desktopSoftware: "Desktop Software",
        consulting: "IT Consulting",
        webDevelopment: "Web Development",
        automation: "Automation (RPA)",
        testing: "Security Testing, QA/QA, GDPR Compliance",
      },
      response: {
        title: "Guaranteed Quick Response",
        email: "Email Response",
        detailed: "Detailed Offer",
      },
    },
    footer: {
      description:
        `Passionate full-stack developer with ${info.personal.stats.yearOfExperience} years of experience in creating exceptional mobile and web applications. Specialized in React Native, JavaScript, and modern web technologies.`,
      quickLinks: "Quick Links",
      services: "Services",
      copyright: "All rights reserved.",
      madeWith: "Made for",
      forPersonalUse: "for personal use",
    }, chat: {
      title: "AI Assistant",
      subtitle: "Always here to help",
      welcome: {
        title: "Welcome!",
        subtitle: "How can I help you today?",
      },
      options: {
        talkWithAI: {
          title: "Talk with AI",
          description: "Ask me anything about my work",
        },
        exploreQA: {
          title: "Explore Q&A",
          description: "Quick answers to common questions",
        },
        contact: {
          title: "Contact Me",
          description: "Send me a direct message",
        },
      },
      placeholders: {
        typeMessage: "Type your message...",
        startConversation: "Start a conversation by typing your question below",
      },
      qa: {
        q1: {
          question: "What technologies do you specialize in?",
          answer:
            "I specialize in React Native for mobile development, React.js/Next.js for web applications, Node.js for backend, and TypeScript for type-safe code. I also work with Firebase, Redux, and various modern web technologies.",
        },
        q2: {
          question: "How long does a typical project take?",
          answer:
            "Project timelines vary based on complexity. A simple mobile app typically takes 4-8 weeks, while complex applications with backend integration can take 3-6 months. I provide detailed timelines during the consultation phase.",
        },
        q3: {
          question: "Do you work with international clients?",
          answer:
            "Yes! I work with clients globally and am experienced in remote collaboration. I'm flexible with time zones and use modern communication tools to ensure smooth project delivery.",
        },
        q4: {
          question: "What is your development process?",
          answer:
            "I follow an agile methodology with regular updates and iterations. The process includes: requirements gathering, design mockups, development sprints, testing, deployment, and post-launch support.",
        },
        q5: {
          question: "Do you provide maintenance after project completion?",
          answer:
            "Yes, I offer ongoing maintenance and support packages. This includes bug fixes, updates, performance optimization, and feature enhancements based on your needs.",
        },
      },
      aiResponse:
        `Thank you for your message! This is a placeholder response. I'll get back to you shortly with a detailed answer. For immediate assistance, please use the contact form or email me directly at ${info.personal.email}`,
    },
    confirmation: {
      success: "Success",
      error: "Error",
      info: "Information",
      close: "Close",
      formSubmitted: {
        title: "Message Sent Successfully!",
        message: "Thank you for reaching out! I'll get back to you within 24 hours.",
      },
      formError: {
        title: "Submission Failed",
        message: "There was an error submitting your form. Please try again or contact me directly.",
      },
    },
  },
  ro: {
    nav: {
      home: "Acasă",
      about: "Despre",
      skills: "Competențe",
      experience: "Experiență",
      education: "Educație",
      certifications: "Certificări",
      projects: "Proiecte",
      contact: "Contact",
      quote: "Ofertă",
      downloadCV: "Descarcă CV",
    },
    hero: {
      greeting: "Bună, sunt",
      name: "Vlad Cornici",
      title: "Software Engineer | AWS Cloud Certified",
      description:
        `Transformând idei în experiențe digitale excepționale cu peste ${info.personal.stats.yearOfExperience} ani de experiență în JavaScript, TypeScript, React Native, Java și tehnologii web moderne. Specializat în crearea de aplicații scalabile, centrate pe utilizator.`,
      viewWork: "Vezi Lucrările Mele",
      downloadCV: "Descarcă CV",
      stats: {
        experience: "Ani Experiență",
        projects: "Proiecte Livrate",
        clients: "Clienți Mulțumiți",
        successRate: "Rată de Succes",
      },
    },
    about: {
      title: "Despre Mine",
      subtitle: "Cunoaște-mă mai bine",
      description:
        `Sunt un dezvoltator full-stack pasionat cu peste ${info.personal.stats.yearOfExperience} ani de experiență în crearea de soluții digitale excepționale. Expertiza mea se întinde pe dezvoltare mobilă și web, cu accent pe crearea de aplicații scalabile, prietenoase cu utilizatorul, care stimulează creșterea afacerii și oferă experiențe de utilizator remarcabile.`,
      journey: {
        title: "Călătoria mea în Software Engineering",
        description: `Cu peste ${info.personal.stats.yearOfExperience} ani de experiență, mi-am început călătoria prin stăpânirea fundamentelor programării și ingineriei software. Motivat de curiozitatea despre cum funcționează lucrurile și de ce funcționează așa cum funcționează, am explorat diverse limbaje de programare și framework-uri. De-a lungul timpului, am crescut de la un începător curios la un profesionist experimentat, dezvoltând aplicații care răspund nevoilor lumii reale și oferă o valoare semnificativă utilizatorilor. Pasiunea mea constă în scrierea de cod curat, ușor de întreținut și construirea de aplicații intuitive și captivante pe care oamenii adoră să le folosească.`,
        additionalDescription: "Încerc să rămân versatil și să nu mă limitez la unul sau două limbaje de programare. Limbajele de programare sunt instrumente și, ca bun inginer software, cred în alegerea instrumentelor potrivite pentru fiecare sarcină. Deși multe lucruri pot fi construite folosind orice limbaj, alegerile pe care le facem astăzi ar trebui să servească drept un avantaj în viitor, nu ca o limitare. Instrumentele de care mă bucur cel mai mult și cu care am o vastă experiență sunt JavaScript, Java și Python. JavaScript domină webul (și chiar pe mobil), Java rulează pe miliarde de dispozitive din întreaga lume, iar Python este pur și simplu distractiv și puternic pentru dezvoltare și experimentare rapidă. Mă angajez să rămân la curent cu tehnologiile emergente și cele mai bune practici din industrie, învățând și îmbunătățindu-mă continuu în fiecare zi.",
      },
      expertise: {
        frontend: {
          title: "Dezvoltare Frontend",
          description: "React.js, Next.js, JavaScript, TypeScript, HTML5, CSS3, WordPress",
        },
        mobile: {
          title: "Dezvoltare Mobilă",
          description: "React Native, iOS & Android, Cross-platform Solutions",
        },
        backend: {
          title: "Dezvoltare Backend",
          description: "Node.js, Express.js, Spring Boot, RESTful APIs, Database Design",
        },
        fullstack: {
          title: "Soluții Full-Stack",
          description: "End-to-end development, DevOps, Cloud Integration",
        },
        cloud: {
          title: "Soluții Cloud",
          description: "AWS, Azure, Google Cloud",
        },
      },
      highlights: {
        excellence: {
          title: "Excelență Tehnică",
          description: "Livrare constantă de soluții scalabile de înaltă calitate",
        },
        tools: {
          title: "Instrumente & Framework-uri",
          description: "React.js, Next.js, Node.js, Express.js, React Native, Spring Boot, AWS, Docker, GitHub Actions, MongoDB",
        },
        satisfaction: {
          title: "Satisfacția Clienților",
          description: "Rată de succes 100% cu livrare la timp",
        },
        improvement: {
          title: "Îmbunătățire Continuă",
          description: "Întotdeauna în căutarea excelenței și inovației",
        },
      },
    },
    skills: {
      title: "Competențe & Expertiză",
      subtitle: "Tehnologii cu care lucrez sau am lucrat recent",
    },
    techStack: {
      title: "Competențe & Tehnologii",
      subtitle: "Instrumente și framework-uri moderne pe care le folosesc pentru a construi aplicații excepționale",
      mainTitle: "Competențe",
      technologiesTitle: "Tehnologii",
      experienceDescription: "Tehnologii și framework-uri pe care le folosesc pentru a construi aplicații excepționale",
      showLess: "Arată mai puțin",
      showMore: "Arată mai mult",
    },
    experience: {
      title: "Experiență",
      subtitle:
        "Călătoria mea profesională în dezvoltarea de software, construind soluții inovatoare și conducând echipe pentru a livra rezultate excepționale.",
      achievements: "Realizări",
      technologies: "Tehnologii Utilizate",
    },
    education: {
      title: "Educație",
      subtitle: "Pregătirea mea academică și calificările în informatică și inginerie software.",
      subjects: "Materii Cheie",
      licenseDegree: {
        year: "2014 - 2018",
        title: "Diplomă de Licență",
        institution: "Universitatea Tehnică a Moldovei",
        location: "Chișinău, Moldova",
        smallDescription: "Finalizarea studiilor superioare secundare cu accent pe Matematică, Fizică și Informatică.",
        achievementsTitle: "Realizări",
        achievements: [
          "Studierea tehnologiilor de comunicații utilizând metode de transmisie radio și optică.",
          "Dezvoltarea de proiecte bazate pe simulare care implică sisteme radio și optice.",
          "Proiectarea și implementarea de proiecte de telecomunicații axate pe aplicații practice."
        ],
        subjectsTitle: "Materii",
        subjects: [
          "Matematică",
          "Fizică",
          "Electronică",
          "Informatică"
        ],
      },
      masterDegree: {
        year: "2018 - 2020",
        title: "Diplomă de Master",
        institution: "Universitatea „Ștefan cel Mare” Suceava",
        location: "Suceava, România",
        smallDescription: "Studierea tehnologiilor rețelelor de telecomunicații și lucrul la un proiect VLC pentru diploma de master. Cercetarea testării de penetrare a rețelelor și a vulnerabilităților rețelelor.",
        achievementsTitle: "Realizări",
        achievements: [
          "Urmarea unui program de master în Tehnologii ale Rețelelor de Telecomunicații.",
          "Dezvoltarea unui proiect bazat pe VLC axat pe sistemele de comunicații în rețea.",
          "Cercetarea testării de penetrare a rețelelor și analizarea vulnerabilităților de securitate."
        ],
        subjectsTitle: "Materii",
        subjects: [
          "Structuri de Date",
          "Algoritmi",
          "Dezvoltare Mobilă",
          "Tehnologii Web"
        ],
      },
    },
    certifications: {
      title: "Certificări & Premii",
      subtitle: "Certificări profesionale și recunoaștere pentru excelență în dezvoltarea de software și tehnologie.",
      details: "Detalii",
      professionalCertifications: "Certificări Profesionale",
      awardsRecognition: "Premii & Recunoșteri",
      certificationsArray: [
        {
          year: "2024",
          title: "AWS Certified Cloud Practitioner",
          issuer: "Amazon Web Services",
          description: "Certificare profesională care demonstrează expertiza în proiectarea sistemelor distribuite pe platforma AWS.",
          credential: "AWS-SA-2024-5dbf9046",
        },
        {
          year: "2022",
          title: "Certified Associate Configurator",
          issuer: "Unqork",
          description:
            "Certificare Unqork în dezvoltarea pe platforma Unqork, acoperind optimizarea performanței și cele mai bune practici folosind această platformă.",
          credential: "UNQORK-RN-2022-ef6f4d8e",
        },
        {
          year: "2020",
          title: "C",
          issuer: "SoloLearn",
          description:
            "Certificare SoloLearn în programarea în C, acoperind fundamentele limbajului și cele mai bune practici.",
          credential: "SOLO-RN-2020-ef6f4d8e",
        },
        {
          year: "2022",
          title: "C++",
          issuer: "SoloLearn",
          description:
            "Certificare SoloLearn în programarea în C++, acoperind fundamentele limbajului și cele mai bune practici.",
          credential: "SOLO-RN-2020-ef6f4d8e",
        },
      ],
    },
    experiences: [
      {
        period: "Ian 2022 - Prezent",
        title: "Software Engineer",
        company: "Custom Code Factory",
        location: "Suceava, România",
        description:
          "La Custom Code Factory dezvoltăm soluții de ultimă generație pentru nevoile clienților.",
        achievements: [
          "Dezvoltat instrumente alimentate de AI pentru extragerea datelor din documente și implementarea sistemelor de chat Retrieval-Augmented Generation (RAG), permițând îmbunătățirea automatizată a bazei de cunoștințe și optimizarea perspectivelor de marketing cu Python și FastAPI.",
          "Construirea site-ului web WooCommerce al clienților, gestionarea încărcării ușoare a produselor, gestionarea stocurilor, construirea de plugin-uri folosind PHP și instrumente pentru gestionarea operațiunilor grele pe care le au clientii.",
          "Dezvoltarea soluțiilor CRM in React si Nest pentru a ajuta clientii la identificarea clientilor noi, la apropierea sau la retinerea acestora.",
          "Solutii de ERP pentru planificarea proceselor de lucru in Next.",
          "Implementarea de solutii de securitate pentru date sensibile aplicand algoritmi si criptare pe dispozitive si discuri hard si solutii de recuperare rapida a datelor in caz de faliment.",
          "Construirea de solutii de migrare la servicii distribuiti si containerizarea aplicatiilor folosind Docker si pipelines.",
          "Construirea de aplicatii cross-platform folosind React Native care pot fi depusate cu uscere pe magazinuri mobile.",
          "Configurarea si depusarea aplicatiilor in productie folosind Apache2, Nginx si GitHub Actions.",
          "Dezvoltarea de mecanisme de autentificare si autentificare de doua factori care pot fi utilizate pentru a imbunatati securitatea aplicatiilor.",],
        technologies: ["Python", "FastAPI", "PHP", "React", "Next", "Nest", "Docker", "TypeScript", "Node.js", "AWS"],
      },
      {
        period: "Feb 2022 - Mai 2024",
        title: "Senior Application Developer",
        company: "Marsh McLennan/Expleo Group",
        location: "Dublin, Irlanda/Iaşi, România (remote-contract)",
        description:
          "La Marsh McLennan/Expleo Group construim soluții pentru afacerile clienților.",
        achievements:
          [
            "Dezvoltat și implementat servicii cloud extrem de optimizate, îmbunătățind semnificativ performanța și ușurința de întreținere pentru a satisface nevoile exigente ale aplicațiilor de procesare API în mod eficient.",
            "Optimizat baza de cod prin reducerea complexității acesteia și separarea conceptelor, îmbunătățind astfel eficiența execuției codului. Aceasta a implicat împărțirea codului complex în bucăți mai mici și mai ușor de gestionat, făcând logica mai ușor de urmărit și depanat.",
            "Crescut flexibilitatea și scalabilitatea aplicațiilor prin aderarea la principiile open-closed în JavaScript, asigurând că sistemul este închis pentru modificări, dar deschis pentru adăugarea de noi funcționalități fără a provoca întreruperi.",
            "Îmbunătățit lizibilitatea codului prin consolidarea logicii de bază și dezvoltarea modulelor de testare, permițând dezvoltatorilor să depaneze și să îmbunătățească testarea serviciilor și API-urilor mai lin și mai eficient.",
            "Implementat și întreținut un mecanism de gestionare a erorilor care urmărește codul problematic și încorporează procese de recuperare pentru a aborda eficient problemele majore.",
            "Construirea de instrumente și soluții cloud pentru uz intern și testare, folosind Unqork și JavaScript pentru a automatiza procesele de afaceri și API-urile platformei."
          ],
        technologies: ["Unqork", "JavaScript", "CSS3", "HTML5", "API", "Cloud Services"],
      },
      {
        period: "Aug 2021 - Sep 2021",
        title: "QA Developer",
        company: "ASSIST Software.",
        location: "Suceava, România",
        description:
          "Dezvoltare și testare QA pentru aplicații mobile cross-platform. Colaborat cu echipe multifuncționale pentru a livra experiențe de utilizator de înaltă calitate.",
        achievements: [
          "Creat planuri și cazuri de testare detaliate pentru aplicații web și mobile.",
          "Acoperit toate domeniile cheie: funcționalitate, utilizabilitate, performanță și securitate.",
          "Aplicat testare structurată pentru acoperire completă.",
          "Documentație:",
          "Scris cazuri de testare clare cu pași, rezultate așteptate și criterii de trecere/eșec.",
          "Revizuire Calitate:",
          "Revizuit specificațiile de calitate și documentele de design pentru claritate și fezabilitate.",
          "Furnizat feedback pentru a îmbunătăți alinierea cu obiectivele și standardele proiectului.",
          "Testare Manuală & Automatizată:",
          "Construirea de teste manuale și automate folosind Cypress.",
          "Testat toate funcționalitățile pe parcursul lansărilor pentru a asigura stabilitatea.",
          "Folosirea Cypress pentru a eficientiza testarea și a îmbunătăți fiabilitatea."
        ],
        technologies: ["JavaScript", "Cypress", "REST APIs", "Testing documentation"],
      },
    ],

    projects: {
      title: "Proiecte Prezentate",
      subtitle: "Prezentând cele mai bune lucrări ale mele în dezvoltare mobilă și web",
      viewProject: "Vezi Proiectul",
      inDevelopment: "În Dezvoltare",
    },
    awards: [
      {
        year: "2022",
        title: "Expleo CUE Award",
        issuer: "Associated with Expleo Group",
        description: "Premiul Unic CUE 2022 @ Expleo Group",
      },
    ],
    contact: {
      title: "Intră în Legătură",
      subtitle:
        "Sunt mereu deschis să discut despre noi oportunități, proiecte interesante sau pur și simplu să vorbesc despre tehnologie și design.",
      startConversation: "Să Începem o Conversație",
      description:
        "Fie că ai un proiect în minte, vrei să colaborezi sau doar vrei să spui bună, aș fi încântat să aud de la tine. De obicei răspund în 24 de ore.",
      email: "Email",
      phone: "Telefon",
      location: "Locație",
      form: {
        firstName: "Prenume",
        lastName: "Nume",
        email: "Email",
        subject: "Subiect",
        message: "Mesaj",
        send: "Trimite Mesaj",

      },
    },
    calendly: {
      scheduleMeeting: "Programează o Întâlnire",
      requestQuote: "Solicită o Ofertă",
      requestQuoteDescription: "Ai nevoie de o ofertă detaliată pentru proiect? Completează formularul și îți voi răspunde în maximum 24 de ore.",
    },
    quote: {
      title: "Solicită o Ofertă Personalizată",
      subtitle:
        "Completează formularul și îți voi trimite o ofertă detaliată în maximum 24 de ore. Consultația este gratuită și fără obligații.",
      projectDetails: "Detalii Proiect",
      contactDetails: "Date de Contact",
      form: {
        name: "Nume",
        email: "Email",
        company: "Companie",
        phone: "Telefon",
        projectType: "Tip Proiect",
        budget: "Buget",
        timeline: "Termen",
        services: "Servicii de Interes",
        description: "Descrierea Proiectului",
        submit: "Solicită Oferta",
        specialRequests: "Solicitații Speciale",
        terms: "Acceptez Termenii de Utilizare",
        marketing: "Acceptez Politica de Marketing",
        selectType: "Selectează tipul",
        selectBudget: "Selectează bugetul",
        whenToStart: "Când să începem?",
        emailPlaceholder: "email@exemplu.com",
        descriptionPlaceholder: "Descrie proiectul, obiectivele și orice cerințe specifice...",
        specialRequestsPlaceholder: "Orice tehnologii, integrări sau preferințe specifice...",
      },
      projectTypes: {
        mobile: "Aplicație Mobilă",
        web: "Aplicație Web",
        fullstack: "Proiect Full-Stack",
        consulting: "Consultanță",
      },
      budgetRanges: {
        under5k: "Sub $5,000",
        range5to10k: "$5,000 - $10,000",
        range10to25k: "$10,000 - $25,000",
        range25to50k: "$25,000 - $50,000",
        over50k: "Peste $50,000",
        notSure: "Nu sunt sigur încă",
      },
      timelines: {
        asap: "Cât mai curând",
        withinMonth: "În maxim 1 lună",
        oneToThree: "1-3 luni",
        threeToSix: "3-6 luni",
        sixPlus: "Peste 6 luni",
        flexible: "Flexibil",
      },
      services: {
        mobileNative: "Aplicație Mobilă Nativă (iOS/Android, React Native, Flutter)",
        mobileWeb: "Aplicație Web Mobilă (PWA, Angular, React, Python)",
        desktopSoftware: "Software Desktop",
        consulting: "Consultanță IT",
        webDevelopment: "Dezvoltare Web",
        automation: "Automatizare (RPA)",
        testing: "Testare Securitate, QA/QA, Conformitate GDPR",
      },
      response: {
        title: "Răspuns Rapid Garantat",
        email: "Răspuns Email",
        detailed: "Ofertă Detaliată",
      },
    },
    footer: {
      description:
        `Dezvoltator full-stack pasionat cu peste ${info.personal.stats.yearOfExperience} ani de experiență în crearea de aplicații mobile și web excepționale. Specializat în React Native, JavaScript și tehnologii web moderne.`,
      quickLinks: "Link-uri Rapide",
      services: "Servicii",
      copyright: "Toate drepturile rezervate.",
      madeWith: "Realizat pentru",
      forPersonalUse: "Pentru utilizare personala",
    },
    chat: {
      title: "Asistent AI",
      subtitle: "Mereu aici să ajut",
      welcome: {
        title: "Bun venit!",
        subtitle: "Cum te pot ajuta astăzi?",
      },
      options: {
        talkWithAI: {
          title: "Vorbește cu AI",
          description: "Întreabă-mă orice despre munca mea",
        },
        exploreQA: {
          title: "Explorează Întrebări",
          description: "Răspunsuri rapide la întrebări frecvente",
        },
        contact: {
          title: "Contactează-mă",
          description: "Trimite-mi un mesaj direct",
        },
      },
      placeholders: {
        typeMessage: "Scrie mesajul tău...",
        startConversation: "Începe o conversație scriind întrebarea ta mai jos",
      },
      qa: {
        q1: {
          question: "În ce tehnologii te specializezi?",
          answer:
            "Mă specializez în React Native pentru dezvoltare mobilă, React.js/Next.js pentru aplicații web, Node.js pentru backend și TypeScript pentru cod type-safe. Lucrez și cu Firebase, Redux și diverse tehnologii web moderne.",
        },
        q2: {
          question: "Cât durează un proiect tipic?",
          answer:
            "Durata proiectelor variază în funcție de complexitate. O aplicație mobilă simplă durează de obicei 4-8 săptămâni, în timp ce aplicațiile complexe cu integrare backend pot dura 3-6 luni. Ofer termene detaliate în faza de consultare.",
        },
        q3: {
          question: "Lucrezi cu clienți internaționali?",
          answer:
            "Da! Lucrez cu clienți din întreaga lume și am experiență în colaborare la distanță. Sunt flexibil cu fusurile orare și folosesc instrumente moderne de comunicare pentru a asigura livrarea fără probleme a proiectelor.",
        },
        q4: {
          question: "Care este procesul tău de dezvoltare?",
          answer:
            "Urmez o metodologie agile cu actualizări și iterații regulate. Procesul include: colectarea cerințelor, machete de design, sprint-uri de dezvoltare, testare, implementare și suport post-lansare.",
        },
        q5: {
          question: "Oferi mentenanță după finalizarea proiectului?",
          answer:
            "Da, ofer pachete de mentenanță și suport continuu. Acestea includ remedieri de erori, actualizări, optimizare a performanței și îmbunătățiri de funcționalități în funcție de nevoile tale.",
        },
      },
      aiResponse:
        `Mulțumesc pentru mesaj! Acesta este un răspuns temporar. Voi reveni în curând cu un răspuns detaliat. Pentru asistență imediată, te rog folosește formularul de contact sau trimite-mi un email direct la ${info.personal.email}`,
    },
    confirmation: {
      success: "Succes",
      error: "Eroare",
      info: "Informație",
      close: "Închide",
      formSubmitted: {
        title: "Mesaj Trimis cu Succes!",
        message: "Mulțumesc că m-ai contactat! Voi răspunde în 24 de ore.",
      },
      formError: {
        title: "Trimitere Eșuată",
        message: "A apărut o eroare la trimiterea formularului. Te rog încearcă din nou sau contactează-mă direct.",
      },
    },
  },
  ru: {
    nav: {
      home: "Главная",
      about: "О себе",
      skills: "Навыки",
      experience: "Опыт",
      education: "Образование",
      certifications: "Сертификаты",
      projects: "Проекты",
      contact: "Контакты",
      quote: "Запрос",
      downloadCV: "Скачать CV",
    },
    hero: {
      greeting: "Привет, я",
      name: "Влад Корнич",
      title: "Старший Mobile & Web Разработчик",
      description:
        `Превращаю идеи в исключительные цифровые решения с более чем ${info.personal.stats.yearOfExperience} летним опытом работы с JavaScript, TypeScript, React Native, Java и современными веб-технологиями. Специализируюсь на создании масштабируемых, ориентированных на пользователя приложений.`,
      viewWork: "Посмотреть Работы",
      downloadCV: "Скачать CV",
      stats: {
        experience: "Лет Опыта",
        projects: "Проектов Завершено",
        clients: "Довольных Клиентов",
        successRate: "Успешность",
      },
    },
    about: {
      title: "Обо Мне",
      subtitle: "Узнайте меня лучше",
      description:
        `Я увлеченный full-stack разработчик с более чем ${info.personal.stats.yearOfExperience} летним опытом создания исключительных цифровых решений. Мой опыт охватывает мобильную и веб-разработку с акцентом на создание масштабируемых, удобных приложений, которые способствуют росту бизнеса и обеспечивают выдающийся пользовательский опыт.`,
      journey: {
        title: "Мой Путь в Разработке",
        description: `Имея более чем ${info.personal.stats.yearOfExperience}-летний опыт, я начал свой путь с освоения основ программирования и разработки программного обеспечения. Движимый любопытством к тому, как всё работает и почему это работает именно так, я изучал различные языки программирования и фреймворки. Со временем я вырос из любопытного новичка в опытного профессионала, разрабатывающего приложения, отвечающие реальным потребностям и представляющие значительную ценность для пользователей. Моя страсть — писать чистый, легко поддерживаемый код и создавать интуитивно понятные и увлекательные приложения, которые нравятся людям.`,
        additionalDescription: "Я стараюсь быть универсальным и не ограничиваться одним-двумя языками программирования. Языки программирования — это инструменты, и как хороший инженер-программист, я верю в необходимость выбора правильных инструментов для каждой задачи. Хотя многое можно создать на любом языке, наш сегодняшний выбор должен стать преимуществом в будущем, а не ограничением. Больше всего мне нравятся JavaScript, Java и Python, с которыми я имею богатый опыт. JavaScript доминирует в вебе (и даже на мобильных устройствах), Java работает на миллиардах устройств по всему миру, а Python — это просто увлекательный и мощный инструмент для быстрой разработки и экспериментов. Я стремлюсь быть в курсе новейших технологий и передовых отраслевых практик, постоянно обучаясь и совершенствуясь каждый день.",
      },
      expertise: {
        frontend: {
          title: "Frontend Разработка",
          description: "React.js, Next.js, JavaScript, TypeScript, HTML5, CSS3",
        },
        mobile: {
          title: "Мобильная Разработка",
          description: "React Native, iOS & Android, Кроссплатформенные Решения",
        },
        backend: {
          title: "Backend Разработка",
          description: "Node.js, Express.js, RESTful API, Проектирование БД",
        },
        fullstack: {
          title: "Full-Stack Решения",
          description: "Комплексная разработка, DevOps, Облачная Интеграция",
        },
        cloud: {
          title: "Облачные Решения",
          description: "AWS, Azure, Google Cloud, Облачная Разработка",
        }
      },
      highlights: {
        excellence: {
          title: "Техническое Совершенство",
          description: "Постоянная поставка высококачественных масштабируемых решений",
        },
        tools: {
          title: "Инструменты",
          description: "React.js, Next.js, Node.js, Express.js, React Native, Spring Boot, AWS, Docker, GitHub Actions, MongoDB",
        },
        satisfaction: {
          title: "Удовлетворенность Клиентов",
          description: "100% успешность проектов с своевременной доставкой",
        },
        improvement: {
          title: "Постоянное Совершенствование",
          description: "Всегда стремлюсь к совершенству и инновациям",
        },
      },
    },
    skills: {
      title: "Навыки и Экспертиза",
      subtitle: "Технологии, с которыми я работаю",
    },
    techStack: {
      title: "Навыки и Технологии",
      subtitle: "Современные инструменты и фреймворки, которые я использую для создания исключительных приложений",
      mainTitle: "Навыки",
      technologiesTitle: "Технологии",
      experienceDescription: "Технологии и фреймворки, которые я использую для создания исключительных приложений",
      showLess: "Показать меньше",
      showMore: "Показать больше",
    },
    experience: {
      title: "Опыт",
      subtitle:
        "Мой профессиональный путь в разработке программного обеспечения, создание инновационных решений и руководство командами для достижения исключительных результатов.",
      achievements: "Достижения",
      technologies: "Используемые Технологии",
    },
    education: {
      title: "Образование",
      subtitle: "Моя академическая подготовка и квалификация в области информатики и программной инженерии.",
      subjects: "Ключевые Предметы",
      licenseDegree: {
        year: "2014 - 2018",
        title: "Степень Лицензии",
        institution: "Технический Университет Молдовы",
        location: "Кишинёв, Молдова",
        smallDescription: "Завершил высшее среднее образование с акцентом на математику, физику и информатику.",
        achievementsTitle: "Достижения",
        achievements: [
          "Изучение технологий связи с использованием радиоволн и оптических методов передачи.",
          "Разработка проектов на основе моделирования, включающих радиосистемы и оптические системы.",
          "Проектирование и реализация телекоммуникационных проектов, ориентированных на практические приложения."
        ],
        subjectsTitle: "Предметы",
        subjects: [
          "Математика",
          "Физика",
          "Электроника",
          "Информатика"
        ],
      },
      masterDegree: {
        year: "2018 - 2020",
        title: "Степень Магистра",
        institution: "Университет „Штефан чел Маре” Сучава",
        location: "Сучава, Румыния",
        smallDescription: "Изучение технологий телекоммуникационных сетей и работа над проектом VLC для получения степени магистра. Исследование тестирования на проникновение в сети и уязвимостей сетей.",
        achievementsTitle: "Достижения",
        achievements: [
          "Получение степени магистра в области технологий телекоммуникационных сетей.",
          "Разработка проекта на основе VLC, ориентированного на системы сетевой связи.",
          "Исследование тестирования на проникновение в сети и анализ уязвимостей безопасности."
        ],
        subjectsTitle: "Предметы",
        subjects: [
          "Структуры Данных",
          "Алгоритмы",
          "Мобильная Разработка",
          "Веб-Технологии"
        ],
      },
    },
    certifications: {
      title: "Сертификаты и Награды",
      subtitle:
        "Профессиональные сертификаты и признание за отличие в разработке программного обеспечения и технологиях.",
      details: "Детали",
      professionalCertifications: "Профессиональные Сертификаты",
      awardsRecognition: "Награды и Распознавание",
      certificationsArray: [
        {
          year: "2024",
          title: "AWS Certified Cloud Practitioner",
          issuer: "Amazon Web Services",
          description: "Профессиональный сертификат, подтверждающий экспертизу в проектировании распределенных систем на платформе AWS.",
          credential: "AWS-SA-2024-5dbf9046",
        },
        {
          year: "2022",
          title: "Certified Associate Configurator",
          issuer: "Unqork",
          description:
            "Сертификат Unqork по разработке на платформе Unqork, охватывающий оптимизацию производительности и лучшие практики использования этой платформы.",
          credential: "UNQORK-RN-2022-ef6f4d8e",
        },
        {
          year: "2020",
          title: "C",
          issuer: "SoloLearn",
          description:
            "Сертификат SoloLearn по программированию на C, охватывающий основы языка и лучшие практики.",
          credential: "SOLO-RN-2020-ef6f4d8e",
        },
        {
          year: "2022",
          title: "C++",
          issuer: "SoloLearn",
          description:
            "Сертификат SoloLearn по программированию на C++, охватывающий основы языка и лучшие практики.",
          credential: "SOLO-RN-2020-ef6f4d8e",
        },
      ],
    },
    experiences: [
      {
        period: "Янв 2022 - Настоящее Время",
        title: "Software Engineer",
        company: "Custom Code Factory",
        location: "Сучава, Румыния",
        description:
          "В Custom Code Factory мы разрабатываем передовые решения для нужд клиентов.",
        achievements: [
          "Разработал инструменты на базе ИИ для извлечения данных из документов и внедрения систем чата Retrieval-Augmented Generation (RAG), что позволило автоматизировать улучшение базы знаний и оптимизировать маркетинговые перспективы с помощью Python и FastAPI.",
          "Создание веб-сайта WooCommerce для клиентов, управление легкой загрузкой продуктов, управление запасами, создание плагинов с использованием PHP и инструментов для управления тяжелыми операциями, которые есть у клиентов.",
          "Разработка CRM-решений на React и Nest для помощи клиентам в выявлении новых клиентов, привлечении или удержании их.",
          "ERP-решения для планирования рабочих процессов в Next.",
          "Внедрение решений по безопасности для конфиденциальных данных с применением алгоритмов и шифрования на устройствах и жестких дисках, а также быстрых решений по восстановлению данных в случае сбоя.",
          "Создание решений по миграции на распределенные сервисы и контейнеризация приложений с использованием Docker и конвейеров.",
          "Создание кроссплатформенных приложений с использованием React Native, которые можно легко размещать в мобильных магазинах.",
          "Настройка и развертывание приложений в производственной среде с использованием Apache2, Nginx и GitHub Actions.",
          "Разработка механизмов аутентификации и двухфакторной аутентификации для повышения безопасности приложений.",
        ],
        technologies: ["Python", "FastAPI", "PHP", "React", "Next", "Nest", "Docker", "TypeScript", "Node.js", "AWS"],
      },
      {
        period: "Фев 2022 - Май 2024",
        title: "Senior Application Developer",
        company: "Marsh McLennan/Expleo Group",
        location: "Дублин, Ирландия/Яссы, Румыния (удаленно-контракт)",
        description:
          "В Marsh McLennan/Expleo Group мы создаем решения для бизнеса клиентов.",
        achievements: [
          "Разработал и внедрил высоко оптимизированные облачные сервисы, значительно улучшив производительность и удобство обслуживания для удовлетворения строгих требований API-приложений.",
          "Оптимизировал кодовую базу, уменьшив ее сложность и разделив концепции, что повысило эффективность выполнения кода. Это включало разделение сложного кода на более мелкие и управляемые части, что облегчило отслеживание и отладку логики.",
          "Повысил гибкость и масштабируемость приложений, придерживаясь принципов открытости-закрытости в JavaScript, обеспечивая, что система закрыта для изменений, но открыта для добавления новых функций без сбоев.",
          "Улучшил читаемость кода путем консолидации основной логики и разработки модулей тестирования, что позволило разработчикам легче и эффективнее отлаживать и улучшать тестирование сервисов и API.",
          "Внедрил и поддерживал механизм управления ошибками, который отслеживает проблемный код и включает процессы восстановления для эффективного решения серьезных проблем.",
        ],
        technologies: ["Unqork", "JavaScript", "CSS3", "HTML5", "API", "Cloud Services"],
      },
      {
        period: "Авг 2021 - Сен 2021",
        title: "QA Developer",
        company: "ASSIST Software.",
        location: "Сучава, Румыния",
        description:
          "Разработка и тестирование QA для кроссплатформенных мобильных приложений. Сотрудничество с многофункциональными командами для предоставления высококачественного пользовательского опыта.",
        achievements: [
          "Создание подробных планов и случаев тестирования для веб- и мобильных приложений.",
          "Охват всех ключевых областей: функциональность, удобство использования, производительность и безопасность.",
          "Применение структурированного тестирования для полного охвата.",
          "Документация:",
          "Написание четких случаев тестирования с шагами, ожидаемыми результатами и критериями прохождения/неудачи.",
          "Обзор качества:",
          "Просмотр спецификаий качества и проектной документации для ясности и осуществимости.",
          "Предоставление отзывов для улучшения соответствия целям и стандартам проекта.",
          "Ручное и автоматизированное тестирование:",
          "Создание ручных и автоматизированных тестов с использованием Cypress.",
          "Тестирование всех функций в течение выпусков для обеспечения стабильности.",
          "Использование Cypress для оптимизации тестирования и повышения надежности."
        ],
        technologies: ["JavaScript", "Cypress", "REST APIs", "Testing documentation"],
      },
    ],
    projects: {
      title: "Избранные Проекты",
      subtitle: "Демонстрация моих лучших работ в мобильной и веб-разработке",
      viewProject: "Посмотреть Проект",
      inDevelopment: "В Разработке",
    },
    awards: [
      {
        year: "2022",
        title: "Expleo CUE Award",
        issuer: "Партнер с Expleo Group",
        description: "Уникальная награда CUE 2022 @ Expleo Group",
      },
    ],
    contact: {
      title: "Свяжитесь со Мной",
      subtitle:
        "Я всегда открыт для обсуждения новых возможностей, интересных проектов или просто беседы о технологиях и дизайне.",
      startConversation: "Давайте Начнем Разговор",
      description:
        "Если у вас есть проект, вы хотите сотрудничать или просто поздороваться, я буду рад услышать от вас. Обычно я отвечаю в течение 24 часов.",
      email: "Email",
      phone: "Телефон",
      location: "Местоположение",
      form: {
        firstName: "Имя",
        lastName: "Фамилия",
        email: "Email",
        subject: "Тема",
        message: "Сообщение",
        send: "Отправить Сообщение",

      },
    },
    calendly: {
      scheduleMeeting: "Запланировать Встречу",
      requestQuote: "Запросить Предложение",
      requestQuoteDescription: "Нужна подробная смета для проекта? Заполните форму, и я отвечу вам в течение 24 часов.",
    },
    quote: {
      title: "Запросить Персонализированное Предложение",
      subtitle:
        "Заполните форму, и я отправлю вам подробное предложение в течение 24 часов. Консультация бесплатна и ни к чему не обязывает.",
      projectDetails: "Детали Проекта",
      contactDetails: "Контактные Данные",
      form: {
        name: "Имя",
        email: "Email",
        company: "Компания",
        phone: "Телефон",
        projectType: "Тип Проекта",
        budget: "Бюджет",
        timeline: "Сроки",
        services: "Интересующие Услуги",
        description: "Описание Проекта",
        submit: "Запросить Предложение",
        specialRequests: "Специальные Запросы",
        terms: "Я принимаю условия политики конфиденциальности",
        marketing: "Согласие на рассылку",
        selectType: "Выберите тип",
        selectBudget: "Выберите бюджет",
        whenToStart: "Когда начать?",
        emailPlaceholder: "email@primer.com",
        descriptionPlaceholder: "Опишите ваш проект, цели и любые особые требования...",
        specialRequestsPlaceholder: "Любые специфические технологии, интеграции или предпочтения...",
      },
      projectTypes: {
        mobile: "Мобильное Приложение",
        web: "Веб-Приложение",
        fullstack: "Full-Stack Проект",
        consulting: "Консалтинг",
      },
      budgetRanges: {
        under5k: "Менее $5,000",
        range5to10k: "$5,000 - $10,000",
        range10to25k: "$10,000 - $25,000",
        range25to50k: "$25,000 - $50,000",
        over50k: "Более $50,000",
        notSure: "Пока не уверен",
      },
      timelines: {
        asap: "Как можно скорее",
        withinMonth: "В течение 1 месяца",
        oneToThree: "1-3 месяца",
        threeToSix: "3-6 месяцев",
        sixPlus: "Более 6 месяцев",
        flexible: "Гибко",
      },
      services: {
        mobileNative: "Нативное Мобильное Приложение (iOS/Android, React Native, Flutter)",
        mobileWeb: "Мобильное Веб-Приложение (PWA, Angular, React, Python)",
        desktopSoftware: "Десктопное ПО",
        consulting: "IT Консалтинг",
        webDevelopment: "Веб-Разработка",
        automation: "Автоматизация (RPA)",
        testing: "Тестирование Безопасности, QA/QA, Соответствие GDPR",
      },
      response: {
        title: "Гарантированный Быстрый Ответ",
        email: "Ответ по Email",
        detailed: "Подробное Предложение",
      },
    },
    footer: {
      description:
        `Увлеченный full-stack разработчик с более чем ${info.personal.stats.yearOfExperience} летним опытом создания исключительных мобильных и веб-приложений. Специализируюсь на React Native, JavaScript и современных веб-технологиях.`,
      quickLinks: "Быстрые Ссылки",
      services: "Услуги",
      copyright: "Все права защищены.",
      madeWith: "Сделано для",
      forPersonalUse: "Для личного использования",
    },
    chat: {
      title: "AI Ассистент",
      subtitle: "Всегда готов помочь",
      welcome: {
        title: "Добро пожаловать!",
        subtitle: "Чем я могу вам помочь сегодня?",
      },
      options: {
        talkWithAI: {
          title: "Поговорить с AI",
          description: "Спросите меня о моей работе",
        },
        exploreQA: {
          title: "Изучить Вопросы",
          description: "Быстрые ответы на частые вопросы",
        },
        contact: {
          title: "Связаться со Мной",
          description: "Отправьте мне прямое сообщение",
        },
      },
      placeholders: {
        typeMessage: "Введите ваше сообщение...",
        startConversation: "Начните разговор, введя свой вопрос ниже",
      },
      qa: {
        q1: {
          question: "В каких технологиях вы специализируетесь?",
          answer:
            "Я специализируюсь на React Native для мобильной разработки, React.js/Next.js для веб-приложений, Node.js для backend и TypeScript для типобезопасного кода. Также работаю с Firebase, Redux и различными современными веб-технологиями.",
        },
        q2: {
          question: "Сколько времени занимает типичный проект?",
          answer:
            "Сроки проектов варьируются в зависимости от сложности. Простое мобильное приложение обычно занимает 4-8 недель, в то время как сложные приложения с интеграцией backend могут занять 3-6 месяцев. Я предоставляю подробные сроки на этапе консультации.",
        },
        q3: {
          question: "Вы работаете с международными клиентами?",
          answer:
            "Да! Я работаю с клиентами по всему миру и имею опыт удаленного сотрудничества. Я гибок в отношении часовых поясов и использую современные инструменты коммуникации для обеспечения бесперебойной доставки проектов.",
        },
        q4: {
          question: "Каков ваш процесс разработки?",
          answer:
            "Я следую agile-методологии с регулярными обновлениями и итерациями. Процесс включает: сбор требований, дизайн-макеты, спринты разработки, тестирование, развертывание и поддержку после запуска.",
        },
        q5: {
          question: "Вы предоставляете обслуживание после завершения проекта?",
          answer:
            "Да, я предлагаю пакеты постоянного обслуживания и поддержки. Это включает исправление ошибок, обновления, оптимизацию производительности и улучшение функций в соответствии с вашими потребностями.",
        },
      },
      aiResponse:
        `Спасибо за ваше сообщение! Это временный ответ. Я скоро вернусь с подробным ответом. Для немедленной помощи, пожалуйста, используйте контактную форму или напишите мне напрямую на ${info.personal.email}`,
    },
    confirmation: {
      success: "Успех",
      error: "Ошибка",
      info: "Информация",
      close: "Закрыть",
      formSubmitted: {
        title: "Сообщение Успешно Отправлено!",
        message: "Спасибо, что связались со мной! Я отвечу в течение 24 часов.",
      },
      formError: {
        title: "Ошибка Отправки",
        message: "Произошла ошибка при отправке формы. Пожалуйста, попробуйте снова или свяжитесь со мной напрямую.",
      },
    },
  },
};
