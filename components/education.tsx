"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar } from "lucide-react";
import { useLanguage } from "./language-provider";

const education = [
  {
    period: "2017 - 2021",
    degree: "Bachelor of Engineering in Computer Science",
    institution: "Gujarat Technological University",
    location: "Gujarat, India",
    description:
      "Focused on software engineering, data structures, algorithms, and mobile application development. Graduated with distinction.",
    achievements: [
      "Graduated with First Class with Distinction",
      "Led final year project on cross-platform mobile development",
      "Active member of coding club and tech community",
    ],
    subjects: ["Data Structures", "Algorithms", "Mobile Development", "Web Technologies"],
  },
  {
    period: "2015 - 2017",
    degree: "Higher Secondary Education (Science)",
    institution: "Gujarat Secondary Education Board",
    location: "Gujarat, India",
    description: "Completed higher secondary education with focus on Mathematics, Physics, and Computer Science.",
    achievements: [
      "Scored 85% in board examinations",
      "Participated in state-level coding competitions",
      "Developed interest in software development",
    ],
    subjects: ["Mathematics", "Physics", "Chemistry", "Computer Science"],
  },
];

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  return (
    <section id="education" ref={ref} className="py-20 px-4 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.education.title}</h2>
          <p className="text-lg text-muted-foreground">{t.education.subtitle}</p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative grid md:grid-cols-2 gap-8 items-start ${index % 2 === 0 ? "" : "md:flex-row-reverse"
                  }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 top-8 w-4 h-4 bg-primary rounded-full -ml-2 ring-4 ring-background" />

                {/* Content */}
                <div
                  className={`pl-12 md:pl-0 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:col-start-2 md:pl-12"}`}
                >
                  <div className="bg-card border border-border rounded-xl p-6 glow-card shadow-lg">
                    <div className="flex items-center gap-2 text-primary mb-2">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm font-mono">{edu.period}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-1">{edu.degree}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground mb-4">
                      <GraduationCap className="h-4 w-4" />
                      <span>{edu.institution}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{edu.location}</p>
                    <p className="text-muted-foreground mb-4">{edu.description}</p>

                    <div className="mb-4">
                      <h4 className="font-semibold mb-2 text-primary">{t.experience.achievements}</h4>
                      <ul className="space-y-1">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 text-primary text-sm">{t.education.subjects}</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.subjects.map((subject) => (
                          <span key={subject} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
