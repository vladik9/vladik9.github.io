"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import SkillsIcons from "./skills-icons";

const technologies = [
  { name: "React", icon: "⚛️", color: "#61DAFB" },
  { name: "React Native", icon: "📱", color: "#61DAFB" },
  { name: "JavaScript", icon: "JS", color: "#F7DF1E" },
  { name: "TypeScript", icon: "TS", color: "#3178C6" },
  { name: "Node.js", icon: "🟢", color: "#339933" },
  { name: "Next.js", icon: "▲", color: "#000000" },
  { name: "HTML5", icon: "HTML", color: "#E34F26" },
  { name: "CSS3", icon: "CSS", color: "#1572B6" },
  { name: "Tailwind", icon: "🎨", color: "#06B6D4" },
  { name: "Redux", icon: "🔄", color: "#764ABC" },
  { name: "Firebase", icon: "🔥", color: "#FFCA28" },
  { name: "MongoDB", icon: "🍃", color: "#47A248" },
  { name: "PostgreSQL", icon: "🐘", color: "#4169E1" },
  { name: "Git", icon: "📦", color: "#F05032" },
  { name: "REST API", icon: "🔌", color: "#009688" },
  { name: "GraphQL", icon: "◈", color: "#E10098" },
  { name: "Socket.io", icon: "🔌", color: "#010101" },
  { name: "Express", icon: "⚡", color: "#000000" },
  { name: "Vue.js", icon: "V", color: "#4FC08D" },
  { name: "Angular", icon: "A", color: "#DD0031" },
  { name: "Flutter", icon: "🦋", color: "#02569B" },
  { name: "Swift", icon: "🍎", color: "#FA7343" },
  { name: "Python", icon: "🐍", color: "#3776AB" },
  { name: "Docker", icon: "🐳", color: "#2496ED" },
];

export function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tech-stack" ref={ref} className="py-20 px-4">
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
                  className="text-3xl font-bold transition-transform duration-300 group-hover:scale-110"
                  style={{ color: tech.color }}
                >
                  {tech.icon}
                </div>
                <span className="text-xs font-medium text-center text-muted-foreground group-hover:text-foreground transition-colors">
                  {tech.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <SkillsIcons />
    </section>
  );
}
