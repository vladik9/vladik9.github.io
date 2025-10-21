"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "./language-provider";
import { ChevronDown, ChevronUp } from "lucide-react";

const technologies = [
  { name: "C", icon: "https://raw.githubusercontent.com/vladik9/vladik9.github.io/main/public/icons/skills/c-colored.svg", color: "#61DAFB" },
  { name: "C++", icon: "https://raw.githubusercontent.com/vladik9/vladik9.github.io/main/public/icons/skills/cplusplus-colored.svg", color: "#61DAFB" },
  { name: "Arduino", icon: "https://raw.githubusercontent.com/vladik9/vladik9.github.io/main/public/icons/skills/arduino-colored.svg", color: "#2496ED" },
  { name: "React", icon: "https://raw.githubusercontent.com/vladik9/vladik9.github.io/main/public/icons/skills/react-colored.svg", color: "#61DAFB" },
  { name: "React Native", icon: "https://raw.githubusercontent.com/vladik9/vladik9.github.io/main/public/icons/skills/react.svg", color: "#61DAFB" },
  { name: "JavaScript", icon: "https://raw.githubusercontent.com/vladik9/vladik9.github.io/main/public/icons/skills/javascript-colored.svg", color: "#F7DF1E" },
  { name: "Nest", icon: "https://raw.githubusercontent.com/vladik9/vladik9.github.io/main/public/icons/skills/nestjs-colored.svg", color: "#F7DF1E" },
  { name: "TypeScript", icon: "https://raw.githubusercontent.com/vladik9/vladik9.github.io/main/public/icons/skills/typescript-colored.svg", color: "#3178C6" },
  { name: "JQuery", icon: "https://raw.githubusercontent.com/vladik9/vladik9.github.io/main/public/icons/skills/jquery-colored.svg", color: "#3178C6" },
  { name: "Node.js", icon: "https://raw.githubusercontent.com/vladik9/vladik9.github.io/main/public/icons/skills/nodejs-colored.svg", color: "#339933" },
  { name: "Next.js", icon: "https://raw.githubusercontent.com/vladik9/vladik9.github.io/main/public/icons/skills/nextjs.svg", color: "#000000" },
  { name: "HTML5", icon: "https://raw.githubusercontent.com/vladik9/vladik9.github.io/main/public/icons/skills/html5-colored.svg", color: "#E34F26" },
  { name: "CSS3", icon: "https://raw.githubusercontent.com/vladik9/vladik9.github.io/main/public/icons/skills/css3-colored.svg", color: "#1572B6" },
  { name: "Tailwind", icon: "https://raw.githubusercontent.com/vladik9/vladik9.github.io/main/public/icons/skills/tailwindcss-colored.svg", color: "#06B6D4" },
  { name: "Redux", icon: "https://raw.githubusercontent.com/vladik9/vladik9.github.io/main/public/icons/skills/redux-colored.svg", color: "#764ABC" },
  { name: "FastAPI", icon: "https://raw.githubusercontent.com/vladik9/vladik9.github.io/main/public/icons/skills/fastapi-colored.svg", color: "#FFCA28" },
  { name: "MongoDB", icon: "https://raw.githubusercontent.com/vladik9/vladik9.github.io/main/public/icons/skills/mongodb-colored.svg", color: "#47A248" },
  { name: "PostgreSQL", icon: "https://raw.githubusercontent.com/vladik9/vladik9.github.io/main/public/icons/skills/postgresql-colored.svg", color: "#4169E1" },
  { name: "Git", icon: "https://raw.githubusercontent.com/vladik9/vladik9.github.io/main/public/icons/skills/git-colored.svg", color: "#F05032" },
  { name: "GraphQL", icon: "https://raw.githubusercontent.com/vladik9/vladik9.github.io/main/public/icons/skills/graphql-colored.svg", color: "#E10098" },
  { name: "Socket.io", icon: "https://raw.githubusercontent.com/vladik9/vladik9.github.io/main/public/icons/skills/socket-io.svg", color: "#010101" },
  { name: "Express", icon: "https://raw.githubusercontent.com/vladik9/vladik9.github.io/main/public/icons/skills/express.svg", color: "#000000" },
  { name: "Vue.js", icon: "https://raw.githubusercontent.com/vladik9/vladik9.github.io/main/public/icons/skills/vuejs-colored.svg", color: "#4FC08D" },
  { name: "Java", icon: "https://raw.githubusercontent.com/vladik9/vladik9.github.io/main/public/icons/skills/java-colored.svg", color: "#DD0031" },
  { name: "JUnit", icon: "https://raw.githubusercontent.com/vladik9/vladik9.github.io/main/public/icons/skills/junit5.svg", color: "#DD0031" },
  { name: "Spring Boot", icon: "https://raw.githubusercontent.com/vladik9/vladik9.github.io/main/public/icons/skills/springboot-colored.svg", color: "#DD0031" },
  { name: "MySQL", icon: "https://raw.githubusercontent.com/vladik9/vladik9.github.io/main/public/icons/skills/mysql-colored.svg", color: "#02569B" },
  { name: "Python", icon: "https://raw.githubusercontent.com/vladik9/vladik9.github.io/main/public/icons/skills/python-colored.svg", color: "#3776AB" },
  { name: "Docker", icon: "https://raw.githubusercontent.com/vladik9/vladik9.github.io/main/public/icons/skills/docker-colored.svg", color: "#2496ED" },
  { name: "AWS", icon: "https://raw.githubusercontent.com/vladik9/vladik9.github.io/main/public/icons/skills/aws.svg", color: "#2496ED" },
  { name: "Google Cloud", icon: "https://raw.githubusercontent.com/vladik9/vladik9.github.io/main/public/icons/skills/googlecloud-colored.svg", color: "#2496ED" },
  { name: "Cypress", icon: "https://raw.githubusercontent.com/vladik9/vladik9.github.io/main/public/icons/skills/cypress.svg", color: "#2496ED" },
  { name: "Unqork", icon: "https://raw.githubusercontent.com/vladik9/vladik9.github.io/main/public/icons/skills/unqork.svg", color: "#2496ED" },
  { name: "Linux", icon: "https://raw.githubusercontent.com/vladik9/vladik9.github.io/main/public/icons/skills/linux-colored.svg", color: "#2496ED" },
  { name: "Linux Servers", icon: "https://raw.githubusercontent.com/vladik9/vladik9.github.io/main/public/icons/skills/ubuntu-colored.svg", color: "#2496ED" },
  { name: "Kali", icon: "https://raw.githubusercontent.com/vladik9/vladik9.github.io/main/public/icons/skills/kali-linux.svg", color: "#2496ED" },
  { name: "Bash", icon: "https://raw.githubusercontent.com/vladik9/vladik9.github.io/main/public/icons/skills/gnubash-colored.svg", color: "#2496ED" },
  { name: "Windows", icon: "https://raw.githubusercontent.com/vladik9/vladik9.github.io/main/public/icons/skills/windows.svg", color: "#2496ED" },
  { name: "MacOS", icon: "https://raw.githubusercontent.com/vladik9/vladik9.github.io/main/public/icons/skills/macos.svg", color: "#2496ED" },
  { name: "Wordpress", icon: "https://raw.githubusercontent.com/vladik9/vladik9.github.io/main/public/icons/skills/wordpress-colored.svg", color: "#2496ED" },
  { name: "Wix", icon: "https://raw.githubusercontent.com/vladik9/vladik9.github.io/main/public/icons/skills/wix-colored.svg", color: "#2496ED" },
  { name: "Jira", icon: "https://raw.githubusercontent.com/vladik9/vladik9.github.io/main/public/icons/skills/jira.svg", color: "#2496ED" },
  { name: "Prezi", icon: "https://raw.githubusercontent.com/vladik9/vladik9.github.io/main/public/icons/skills/prezi.svg", color: "#2496ED" },
  { name: "Canva", icon: "https://raw.githubusercontent.com/vladik9/vladik9.github.io/main/public/icons/skills/canva.svg", color: "#2496ED" },
  { name: "Apache", icon: "https://raw.githubusercontent.com/vladik9/vladik9.github.io/main/public/icons/skills/apache.svg", color: "#2496ED" },
  { name: "NGinx", icon: "https://raw.githubusercontent.com/vladik9/vladik9.github.io/main/public/icons/skills/nginx.svg", color: "#2496ED" },
  { name: "Material UI", icon: "https://raw.githubusercontent.com/vladik9/vladik9.github.io/main/public/icons/skills/mui.svg", color: "#2496ED" },
  { name: "Shadcn UI", icon: "https://raw.githubusercontent.com/vladik9/vladik9.github.io/main/public/icons/skills/shadcnui.svg", color: "#2496ED" },
  { name: "Digital Ocean", icon: "https://raw.githubusercontent.com/vladik9/vladik9.github.io/main/public/icons/skills/digitalocean-colored.svg", color: "#2496ED" },
  { name: "Oracle", icon: "https://raw.githubusercontent.com/vladik9/vladik9.github.io/main/public/icons/skills/oracle-colored.svg", color: "#2496ED" },
  { name: "Photoshop", icon: "https://raw.githubusercontent.com/vladik9/vladik9.github.io/main/public/icons/skills/photoshop-colored.svg", color: "#2496ED" },
  { name: "Illustrator", icon: "https://raw.githubusercontent.com/vladik9/vladik9.github.io/main/public/icons/skills/illustrator-colored.svg", color: "#2496ED" },
  { name: "After Effects", icon: "https://raw.githubusercontent.com/vladik9/vladik9.github.io/main/public/icons/skills/aftereffects.svg", color: "#2496ED" },
  { name: "Figma", icon: "https://raw.githubusercontent.com/vladik9/vladik9.github.io/main/public/icons/skills/figma-colored.svg", color: "#2496ED" },
  { name: "Laravel", icon: "https://raw.githubusercontent.com/vladik9/vladik9.github.io/main/public/icons/skills/laravel-colored.svg", color: "#2496ED" },
  { name: "VsCode", icon: "https://raw.githubusercontent.com/vladik9/vladik9.github.io/main/public/icons/skills/visualstudiocode-colored.svg", color: "#2496ED" },
  { name: "n8n", icon: "https://raw.githubusercontent.com/vladik9/vladik9.github.io/main/public/icons/skills/n8n.svg", color: "#2496ED" },


];

export function TechStack() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // On mobile (3 cols): show 3 rows = 9 items
  // On desktop (8 cols): show 2 rows = 16 items
  const initialVisibleCount = isMobile ? 9 : 16;
  const visibleCount = showAll ? technologies.length : initialVisibleCount;
  const displayedTechnologies = technologies.slice(0, visibleCount);

  return (
    <section id="tech-stack" ref={ref} className="py-30 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t.techStack.mainTitle} & <span className="gradient-text"> {t.techStack.technologiesTitle}</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            {t.techStack.experienceDescription}
          </p>
        </motion.div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
          {displayedTechnologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="group"
            >
              <div className="bg-white dark:bg-card border border-border rounded-xl p-4 flex flex-col items-center justify-center gap-2 h-24 glow-card shadow-lg hover:shadow-xl transition-all duration-300">
                <div
                  className="text-3xl font-bold transition-transform duration-300 group-hover:scale-90"
                  style={{ color: tech.color }}
                >
                  <Image
                    src={tech.icon}
                    width={80}
                    height={80}
                    className="scale-60 transition-all duration-300 hover:scale-80 ease-in-out"
                    alt={tech.name}
                  />
                  <span className="text-xs font-medium text-center text-muted-foreground group-hover:text-foreground transition-colors align-text-top flex items-center justify-center pb-4">
                    {tech.name}
                  </span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Show More/Less Button */}
        {technologies.length > initialVisibleCount && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center mt-12"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-xl hover:bg-accent transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span className="font-medium">
                {showAll ? t.techStack.showLess || "Show Less" : t.techStack.showMore || "Show More"}
              </span>
              {showAll ? (
                <ChevronUp className="h-5 w-5" />
              ) : (
                <ChevronDown className="h-5 w-5" />
              )}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
