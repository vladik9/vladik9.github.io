"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code2, Smartphone, Server, Layers } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function About() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: Code2,
      title: t.about.expertise.frontend.title,
      description: t.about.expertise.frontend.description,
    },
    {
      icon: Smartphone,
      title: t.about.expertise.mobile.title,
      description: t.about.expertise.mobile.description,
    },
    {
      icon: Server,
      title: t.about.expertise.backend.title,
      description: t.about.expertise.backend.description,
    },
    {
      icon: Layers,
      title: t.about.expertise.fullstack.title,
      description: t.about.expertise.fullstack.description,
    },
  ]

  return (
    <section id="about" ref={ref} className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.about.title}</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">{t.about.description}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 glow-card hover:scale-105 transition-transform"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold">{t.about.journey.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{t.about.journey.description}</p>
            <p className="text-muted-foreground leading-relaxed">
              I specialize in React Native for cross-platform mobile development, modern JavaScript and TypeScript for
              robust applications, React.js for dynamic web interfaces, and Node.js for scalable backend services. I'm
              committed to staying current with emerging technologies and industry best practices.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-card border border-border rounded-xl p-6 glow-card">
              <h4 className="text-xl font-semibold mb-2 text-primary">{t.about.highlights.excellence.title}</h4>
              <p className="text-sm text-muted-foreground">{t.about.highlights.excellence.description}</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 glow-card">
              <h4 className="text-xl font-semibold mb-2 text-secondary">{t.about.highlights.satisfaction.title}</h4>
              <p className="text-sm text-muted-foreground">{t.about.highlights.satisfaction.description}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
