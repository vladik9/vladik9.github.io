"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar } from "lucide-react";
import { useLanguage } from "./language-provider";
import { info } from "@/lib/info";



export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const education = [
    {
      period: t.education.masterDegree.year,
      degree: t.education.masterDegree.title,
      institution: t.education.masterDegree.institution,
      location: t.education.masterDegree.location,
      description: t.education.masterDegree.smallDescription,
      achievements: [
        t.education.masterDegree.achievements[0],
        t.education.masterDegree.achievements[1],
        t.education.masterDegree.achievements[2],
      ],
      subjects: [t.education.masterDegree.subjects[0], t.education.masterDegree.subjects[1], t.education.masterDegree.subjects[2], t.education.masterDegree.subjects[3]],
    },
    {
      period: t.education.licenseDegree.year,
      degree: t.education.licenseDegree.title,
      institution: t.education.licenseDegree.institution,
      location: t.education.licenseDegree.location,
      description: t.education.licenseDegree.smallDescription,
      achievements: [
        t.education.licenseDegree.achievements[0],
        t.education.licenseDegree.achievements[1],
        t.education.licenseDegree.achievements[2],
      ],
      subjects: [t.education.licenseDegree.subjects[0], t.education.licenseDegree.subjects[1], t.education.licenseDegree.subjects[2], t.education.licenseDegree.subjects[3]],
    },
  ];


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
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/80 via-primary/40 to-transparent" />
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
                    <h3 className="text-2xl font-bold mb-1 md:text-left">{edu.degree}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground mb-4">
                      <GraduationCap className="h-4 w-4" />
                      <span>{edu.institution}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 md:text-left">{edu.location}</p>
                    <p className="text-muted-foreground mb-4 md:text-left">{edu.description}</p>

                    <div className="mb-4">
                      <h4 className="font-semibold mb-2 text-primary md:text-left">{t.experience.achievements}</h4>
                      <ul className="space-y-1">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2 md:text-left">
                            <span className="text-primary mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-4 text-primary text-sm md:text-left">{t.education.subjects}</h4>
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
