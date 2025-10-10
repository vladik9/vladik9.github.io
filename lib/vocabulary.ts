export type Language = "en" | "ro" | "ru"

export interface Vocabulary {
  // Navigation
  nav: {
    home: string
    about: string
    skills: string
    experience: string
    education: string
    certifications: string
    projects: string
    contact: string
    quote: string
    downloadCV: string
  }
  // Hero Section
  hero: {
    greeting: string
    name: string
    title: string
    description: string
    viewWork: string
    downloadCV: string
    stats: {
      experience: string
      projects: string
      clients: string
      successRate: string
    }
  }
  // About Section
  about: {
    title: string
    subtitle: string
    description: string
    journey: {
      title: string
      description: string
    }
    expertise: {
      frontend: { title: string; description: string }
      mobile: { title: string; description: string }
      backend: { title: string; description: string }
      fullstack: { title: string; description: string }
    }
    highlights: {
      excellence: { title: string; description: string }
      satisfaction: { title: string; description: string }
    }
  }
  // Skills Section
  skills: {
    title: string
    subtitle: string
  }
  // Tech Stack Section
  techStack: {
    title: string
    subtitle: string
  }
  // Experience Section
  experience: {
    title: string
    subtitle: string
    achievements: string
    technologies: string
  }
  // Education Section
  education: {
    title: string
    subtitle: string
    subjects: string
  }
  // Certifications Section
  certifications: {
    title: string
    subtitle: string
    details: string
  }
  // Projects Section
  projects: {
    title: string
    subtitle: string
    viewProject: string
    inDevelopment: string
  }
  // Contact Section
  contact: {
    title: string
    subtitle: string
    startConversation: string
    description: string
    email: string
    phone: string
    location: string
    form: {
      firstName: string
      lastName: string
      email: string
      subject: string
      message: string
      send: string
    }
  }
  // Quote Request Section
  quote: {
    title: string
    subtitle: string
    projectDetails: string
    contactDetails: string
    form: {
      name: string
      email: string
      company: string
      phone: string
      projectType: string
      budget: string
      timeline: string
      services: string
      description: string
      submit: string
    }
    services: {
      mobileNative: string
      mobileWeb: string
      desktopSoftware: string
      consulting: string
      webDevelopment: string
      automation: string
      testing: string
    }
    response: {
      title: string
      email: string
      detailed: string
    }
  }
  // Footer
  footer: {
    description: string
    quickLinks: string
    services: string
    copyright: string
    madeWith: string
  }
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
  },
}
