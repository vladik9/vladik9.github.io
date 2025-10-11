export type Language = "en" | "ro" | "ru";

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
    };
    expertise: {
      frontend: { title: string; description: string; };
      mobile: { title: string; description: string; };
      backend: { title: string; description: string; };
      fullstack: { title: string; description: string; };
    };
    highlights: {
      excellence: { title: string; description: string; };
      satisfaction: { title: string; description: string; };
    };
  };
  // Skills Section
  skills: {
    title: string;
    subtitle: string;
  };
  // Tech Stack Section
  techStack: {
    title: string;
    subtitle: string;
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
  };
  // Certifications Section
  certifications: {
    title: string;
    subtitle: string;
    details: string;
  };
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
        "Transforming ideas into exceptional digital experiences with 5+ years of expertise in React Native, JavaScript, TypeScript, and modern web technologies. Specialized in creating scalable, user-centric applications.",
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
        "I'm a passionate full-stack developer with over 5 years of experience crafting exceptional digital solutions. My expertise spans across mobile and web development, with a focus on creating scalable, user-friendly applications that drive business growth and deliver outstanding user experiences.",
      journey: {
        title: "My Development Journey",
        description:
          "With over 5 years in the development field, I've evolved from a curious beginner to a seasoned professional who bridges mobile and web technologies. My passion lies in writing clean, maintainable code and creating applications that users love to interact with.",
      },
      expertise: {
        frontend: {
          title: "Frontend Development",
          description: "React.js, Next.js, JavaScript, TypeScript, HTML5, CSS3",
        },
        mobile: {
          title: "Mobile Development",
          description: "React Native, iOS & Android, Cross-platform Solutions",
        },
        backend: {
          title: "Backend Development",
          description: "Node.js, Express.js, RESTful APIs, Database Design",
        },
        fullstack: {
          title: "Full-Stack Solutions",
          description: "End-to-end development, DevOps, Cloud Integration",
        },
      },
      highlights: {
        excellence: {
          title: "Technical Excellence",
          description: "Consistently delivered high-quality, scalable solutions",
        },
        satisfaction: {
          title: "Client Satisfaction",
          description: "100% project success rate with timely delivery",
        },
      },
    },
    skills: {
      title: "Skills & Expertise",
      subtitle: "Technologies I work with",
    },
    techStack: {
      title: "Skills & Technologies",
      subtitle: "Modern tools and frameworks I use to build exceptional applications",
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
    },
    certifications: {
      title: "Certifications & Awards",
      subtitle: "Professional certifications and recognition for excellence in software development and technology.",
      details: "Details",
    },
    projects: {
      title: "Featured Projects",
      subtitle: "Showcasing my best work in mobile and web development",
      viewProject: "View Project",
      inDevelopment: "In Development",
    },
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
        "Passionate full-stack developer with 5+ years of experience in creating exceptional mobile and web applications. Specialized in React Native, JavaScript, and modern web technologies.",
      quickLinks: "Quick Links",
      services: "Services",
      copyright: "All rights reserved.",
      madeWith: "Made with",
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
        "Thank you for your message! This is a placeholder response. I'll get back to you shortly with a detailed answer. For immediate assistance, please use the contact form or email me directly at ghodadravivek.work@gmail.com",
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
      title: "Dezvoltator Senior Mobile & Web",
      description:
        "Transformând idei în experiențe digitale excepționale cu peste 5 ani de experiență în React Native, JavaScript, TypeScript și tehnologii web moderne. Specializat în crearea de aplicații scalabile, centrate pe utilizator.",
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
        "Sunt un dezvoltator full-stack pasionat cu peste 5 ani de experiență în crearea de soluții digitale excepționale. Expertiza mea se întinde pe dezvoltare mobilă și web, cu accent pe crearea de aplicații scalabile, prietenoase cu utilizatorul, care stimulează creșterea afacerii și oferă experiențe de utilizator remarcabile.",
      journey: {
        title: "Călătoria Mea în Dezvoltare",
        description:
          "Cu peste 5 ani în domeniul dezvoltării, am evoluat de la un începător curios la un profesionist experimentat care face legătura între tehnologiile mobile și web. Pasiunea mea constă în scrierea de cod curat, ușor de întreținut și în crearea de aplicații cu care utilizatorii adoră să interacționeze.",
      },
      expertise: {
        frontend: {
          title: "Dezvoltare Frontend",
          description: "React.js, Next.js, JavaScript, TypeScript, HTML5, CSS3",
        },
        mobile: {
          title: "Dezvoltare Mobilă",
          description: "React Native, iOS & Android, Soluții Cross-platform",
        },
        backend: {
          title: "Dezvoltare Backend",
          description: "Node.js, Express.js, API-uri RESTful, Design Baze de Date",
        },
        fullstack: {
          title: "Soluții Full-Stack",
          description: "Dezvoltare end-to-end, DevOps, Integrare Cloud",
        },
      },
      highlights: {
        excellence: {
          title: "Excelență Tehnică",
          description: "Livrare constantă de soluții scalabile de înaltă calitate",
        },
        satisfaction: {
          title: "Satisfacția Clienților",
          description: "Rată de succes 100% cu livrare la timp",
        },
      },
    },
    skills: {
      title: "Competențe & Expertiză",
      subtitle: "Tehnologii cu care lucrez",
    },
    techStack: {
      title: "Competențe & Tehnologii",
      subtitle: "Instrumente și framework-uri moderne pe care le folosesc pentru a construi aplicații excepționale",
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
    },
    certifications: {
      title: "Certificări & Premii",
      subtitle: "Certificări profesionale și recunoaștere pentru excelență în dezvoltarea de software și tehnologie.",
      details: "Detalii",
    },
    projects: {
      title: "Proiecte Prezentate",
      subtitle: "Prezentând cele mai bune lucrări ale mele în dezvoltare mobilă și web",
      viewProject: "Vezi Proiectul",
      inDevelopment: "În Dezvoltare",
    },
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
        "Dezvoltator full-stack pasionat cu peste 5 ani de experiență în crearea de aplicații mobile și web excepționale. Specializat în React Native, JavaScript și tehnologii web moderne.",
      quickLinks: "Link-uri Rapide",
      services: "Servicii",
      copyright: "Toate drepturile rezervate.",
      madeWith: "Realizat cu",
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
        "Mulțumesc pentru mesaj! Acesta este un răspuns temporar. Voi reveni în curând cu un răspuns detaliat. Pentru asistență imediată, te rog folosește formularul de contact sau trimite-mi un email direct la ghodadravivek.work@gmail.com",
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
        "Превращаю идеи в исключительные цифровые решения с более чем 5-летним опытом работы с React Native, JavaScript, TypeScript и современными веб-технологиями. Специализируюсь на создании масштабируемых, ориентированных на пользователя приложений.",
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
        "Я увлеченный full-stack разработчик с более чем 5-летним опытом создания исключительных цифровых решений. Мой опыт охватывает мобильную и веб-разработку с акцентом на создание масштабируемых, удобных приложений, которые способствуют росту бизнеса и обеспечивают выдающийся пользовательский опыт.",
      journey: {
        title: "Мой Путь в Разработке",
        description:
          "За более чем 5 лет в области разработки я прошел путь от любопытного новичка до опытного профессионала, который объединяет мобильные и веб-технологии. Моя страсть заключается в написании чистого, поддерживаемого кода и создании приложений, с которыми пользователи любят взаимодействовать.",
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
      },
      highlights: {
        excellence: {
          title: "Техническое Совершенство",
          description: "Постоянная поставка высококачественных масштабируемых решений",
        },
        satisfaction: {
          title: "Удовлетворенность Клиентов",
          description: "100% успешность проектов с своевременной доставкой",
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
    },
    certifications: {
      title: "Сертификаты и Награды",
      subtitle:
        "Профессиональные сертификаты и признание за отличие в разработке программного обеспечения и технологиях.",
      details: "Детали",
    },
    projects: {
      title: "Избранные Проекты",
      subtitle: "Демонстрация моих лучших работ в мобильной и веб-разработке",
      viewProject: "Посмотреть Проект",
      inDevelopment: "В Разработке",
    },
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
        "Увлеченный full-stack разработчик с более чем 5-летним опытом создания исключительных мобильных и веб-приложений. Специализируюсь на React Native, JavaScript и современных веб-технологиях.",
      quickLinks: "Быстрые Ссылки",
      services: "Услуги",
      copyright: "Все права защищены.",
      madeWith: "Сделано с",
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
        "Спасибо за ваше сообщение! Это временный ответ. Я скоро вернусь с подробным ответом. Для немедленной помощи, пожалуйста, используйте контактную форму или напишите мне напрямую на ghodadravivek.work@gmail.com",
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
