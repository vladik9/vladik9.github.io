"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Calendar, BookCheck } from "lucide-react";
import { useLanguage } from "./language-provider";
import { info } from "@/lib/info";

const awards = info.awards;
export function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const certifications = [
    {
      year: t.certifications.certificationsArray[0].year,
      title: t.certifications.certificationsArray[0].title,
      issuer: t.certifications.certificationsArray[0].issuer,
      description: t.certifications.certificationsArray[0].description,
      credential: t.certifications.certificationsArray[0].credential,
    },
    {
      year: t.certifications.certificationsArray[1].year,
      title: t.certifications.certificationsArray[1].title,
      issuer: t.certifications.certificationsArray[1].issuer,
      description: t.certifications.certificationsArray[1].description,
      credential: t.certifications.certificationsArray[1].credential,
    },
    {
      year: t.certifications.certificationsArray[2].year,
      title: t.certifications.certificationsArray[2].title,
      issuer: t.certifications.certificationsArray[2].issuer,
      description: t.certifications.certificationsArray[2].description,
      credential: t.certifications.certificationsArray[2].credential,
    },
    {
      year: t.certifications.certificationsArray[3].year,
      title: t.certifications.certificationsArray[3].title,
      issuer: t.certifications.certificationsArray[3].issuer,
      description: t.certifications.certificationsArray[3].description,
      credential: t.certifications.certificationsArray[3].credential,
    },
  ];
  const awards = [
    {
      year: t.awards[0].year,
      title: t.awards[0].title,
      issuer: t.awards[0].issuer,
      description: t.awards[0].description,
    },
  ];

  return (
    <section id="certifications" ref={ref} className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.certifications.title}</h2>
          <p className="text-lg text-muted-foreground">{t.certifications.subtitle}</p>
        </motion.div>

        {/* Certifications */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl font-bold mb-8 flex items-center gap-2"
          >
            <BookCheck className="h-6 w-6 text-primary" />
            {t.certifications.professionalCertifications}
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 glow-card shadow-lg"
              >
                <div className="flex items-center gap-2 text-primary mb-3">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm font-mono">{cert.year}</span>
                </div>
                <h4 className="text-xl font-bold mb-2">{cert.title}</h4>
                <p className="text-sm text-primary font-medium mb-3">{cert.issuer}</p>
                <p className="text-muted-foreground mb-3">{cert.description}</p>
                <div className="pt-3 border-t border-border">
                  <span className="text-xs text-muted-foreground font-mono">Credential ID: {cert.credential}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Awards */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-2xl font-bold mb-8 flex items-center gap-2"
          >
            <Award className="h-6 w-6 text-primary" />
            {t.certifications.awardsRecognition}
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 glow-card shadow-lg"
              >
                <div className="flex items-center gap-2 text-primary mb-3">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm font-mono">{award.year}</span>
                </div>
                <h4 className="text-lg font-bold mb-2">{award.title}</h4>
                <p className="text-sm text-primary font-medium mb-3">{award.issuer}</p>
                <p className="text-sm text-muted-foreground">{award.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
