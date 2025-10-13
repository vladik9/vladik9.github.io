export const info = {

  personal: {
    name: "Cornici Vlad",
    title: "a Software Engineer",
    description: "",
    phone: "+400771563568",
    email: "v.cornici@gamil.com",
    location: "Suceava, Romania, (remote)",
    social: {
      linkedin: "https://www.linkedin.com/in/cornici-vlad",
      github: "https://github.com/vladik9",
      twitter: "https://x.com/CorniciI",
      email: "v.cornici@gamil.com",
      facebook: "https://www.facebook.com/cornici.vlad",
      calendly: "https://callendly.com/v-cornici",
      discord: "https://discordapp.com/users/dexy_96"
    },
    services: {

    },
    stats: {
      yearOfExperience: "5+",
      projects: "20",
      clients: "10+",
      successRate: "100%"
    },
    skills: [
      { name: "JavaScript/TypeScript", level: 90 },
      { name: "React.js/Next.js", level: 85 },
      { name: "Node.js/Backend", level: 80 },
      { name: "UI/UX Design", level: 75 },
      { name: "React Native", level: 50 },
      { name: "Java/Spring", level: 70 },
      { name: "C/C++", level: 60 },
      { name: "Python", level: 50 },
    ]
  },
  // TODO: Make this to be translated
  // Experience
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
  // Education
  // TODO: review this and in some case make it translated
  education: [
    {
      period: "2018 - 2020",
      degree: "Master's degree",
      institution: "Universitatea „Ștefan cel Mare” Suceava",
      location: "Suceava, Romania",
      description:
        "Studying telecommunications network technologies and working on a VLC project for a master's degree. Researching network penetration testing and network vulnerabilities.",
      achievements: [
        "Pursuing a master's degree in Telecommunications Network Technologies.",
        "Developing a VLC-based project focused on network communication systems.",
        "Researching network penetration testing and analyzing security vulnerabilities."
      ],
      subjects: ["Data Structures", "Algorithms", "Mobile Development", "Web Technologies"],
    },
    {
      period: "2015 - 2017",
      degree: "Telecommunications Engineering",
      institution: "Universitatea Tehnică a Moldovei",
      location: "Chișinău, Moldova",
      description: "Completed higher secondary education with focus on Mathematics, Physics, and Computer Science.",
      achievements: [
        "Studying communication technologies using radio and optical transmission methods.",
        "Developing simulation-based projects involving radio and optical systems.",
        "Designing and implementing telecommunication projects focused on practical applications."
      ],
      subjects: ["Mathematics", "Physics", "Chemistry", "Computer Science"],
    },
  ],
  // TODO: Working here
  certifications: [
    {
      year: "2024",
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      description: "Professional certification demonstrating expertise in designing distributed systems on AWS platform.",
      credential: "AWS-SA-2024-12345",
    },
    {
      year: "2023",
      title: "Meta React Native Specialist",
      issuer: "Meta (Facebook)",
      description:
        "Advanced certification in React Native development, covering performance optimization and best practices.",
      credential: "META-RN-2023-67890",
    },
    {
      year: "2023",
      title: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      description: "Certification validating skills in building scalable applications using Google Cloud technologies.",
      credential: "GCP-DEV-2023-54321",
    },
    {
      year: "2022",
      title: "MongoDB Certified Developer",
      issuer: "MongoDB University",
      description: "Professional certification in MongoDB database design, development, and optimization.",
      credential: "MONGO-DEV-2022-98765",
    },
  ],

  awards: [
    {
      year: "2024",
      title: "Best Mobile App Innovation",
      issuer: "Tech Excellence Awards",
      description: "Recognized for developing an innovative mobile solution that improved user engagement by 300%.",
    },
    {
      year: "2023",
      title: "Developer of the Year",
      issuer: "Vision Infotech",
      description:
        "Awarded for outstanding contributions to multiple successful projects and mentoring junior developers.",
    },
    {
      year: "2022",
      title: "Hackathon Winner - FinTech Category",
      issuer: "National Coding Championship",
      description: "First place in developing a revolutionary payment solution during 48-hour hackathon.",
    },
  ]

};
