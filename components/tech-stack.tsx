"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const technologies = [
  { name: "C", icon: "https://raw.githubusercontent.com/vladik9/vladik9.github.io/main/public/icons/skills/c-colored.svg", color: "#61DAFB" },
  { name: "C++", icon: "https://raw.githubusercontent.com/vladik9/vladik9.github.io/main/public/icons/skills/cplusplus-colored.svg", color: "#61DAFB" },
  { name: "React", icon: "https://raw.githubusercontent.com/vladik9/vladik9.github.io/main/public/icons/skills/react-colored.svg", color: "#61DAFB" },
  { name: "React Native", icon: "https://raw.githubusercontent.com/vladik9/vladik9.github.io/main/public/icons/skills/react-colored.svg", color: "#61DAFB" },
  { name: "JavaScript", icon: "https://raw.githubusercontent.com/vladik9/vladik9.github.io/main/public/icons/skills/javascript-colored.svg", color: "#F7DF1E" },
  { name: "TypeScript", icon: "https://raw.githubusercontent.com/vladik9/vladik9.github.io/main/public/icons/skills/typescript-colored.svg", color: "#3178C6" },
  { name: "Node.js", icon: "https://raw.githubusercontent.com/vladik9/vladik9.github.io/main/public/icons/skills/nodejs-colored.svg", color: "#339933" },
  { name: "Next.js", icon: "https://raw.githubusercontent.com/vladik9/vladik9.github.io/main/public/icons/skills/nextjs-colored-dark.svg", color: "#000000" },
  { name: "HTML5", icon: "https://raw.githubusercontent.com/vladik9/vladik9.github.io/main/public/icons/skills/html5-colored.svg", color: "#E34F26" },
  { name: "CSS3", icon: "https://raw.githubusercontent.com/vladik9/vladik9.github.io/main/public/icons/skills/css3-colored.svg", color: "#1572B6" },
  { name: "Tailwind", icon: "https://raw.githubusercontent.com/vladik9/vladik9.github.io/main/public/icons/skills/tailwindcss-colored.svg", color: "#06B6D4" },
  { name: "Redux", icon: "https://raw.githubusercontent.com/vladik9/vladik9.github.io/main/public/icons/skills/redux-colored.svg", color: "#764ABC" },
  { name: "Firebase", icon: "https://raw.githubusercontent.com/vladik9/vladik9.github.io/main/public/icons/skills/firebase-colored.svg", color: "#FFCA28" },
  { name: "MongoDB", icon: "https://raw.githubusercontent.com/vladik9/vladik9.github.io/main/public/icons/skills/mongodb-colored.svg", color: "#47A248" },
  { name: "PostgreSQL", icon: "https://raw.githubusercontent.com/vladik9/vladik9.github.io/main/public/icons/skills/postgresql-colored.svg", color: "#4169E1" },
  { name: "Git", icon: "https://raw.githubusercontent.com/vladik9/vladik9.github.io/main/public/icons/skills/git-colored.svg", color: "#F05032" },
  { name: "GraphQL", icon: "https://raw.githubusercontent.com/vladik9/vladik9.github.io/main/public/icons/skills/graphql-colored.svg", color: "#E10098" },
  { name: "Socket.io", icon: "https://raw.githubusercontent.com/vladik9/vladik9.github.io/main/public/icons/skills/socket-dark.svg", color: "#010101" },
  { name: "Express", icon: "https://raw.githubusercontent.com/vladik9/vladik9.github.io/main/public/icons/skills/express-colored-dark.svg", color: "#000000" },
  { name: "Vue.js", icon: "https://raw.githubusercontent.com/vladik9/vladik9.github.io/main/public/icons/skills/vuejs-colored.svg", color: "#4FC08D" },
  { name: "Java", icon: "https://raw.githubusercontent.com/vladik9/vladik9.github.io/main/public/icons/skills/java-colored.svg", color: "#DD0031" },
  { name: "MySQL", icon: "https://raw.githubusercontent.com/vladik9/vladik9.github.io/main/public/icons/skills/mysql-colored.svg", color: "#02569B" },
  { name: "Python", icon: "https://raw.githubusercontent.com/vladik9/vladik9.github.io/main/public/icons/skills/python-colored.svg", color: "#3776AB" },
  { name: "Docker", icon: "https://raw.githubusercontent.com/vladik9/vladik9.github.io/main/public/icons/skills/docker-colored.svg", color: "#2496ED" },
  { name: "AWS", icon: "https://raw.githubusercontent.com/vladik9/vladik9.github.io/main/public/icons/skills/aws-colored-dark.svg", color: "#2496ED" },
];

export function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Technologies and frameworks I use to build exceptional applications
          </p>
        </motion.div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
          {technologies.map((tech, index) => (
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
      </div>
    </section>
  );
}
