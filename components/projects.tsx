"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import Image from "next/image"

const projects = [
  {
    title: "SignSpot",
    description:
      "SignSpot is a streamlined app designed for capturing and uploading images directly to SignManager, enabling clients and contractors to efficiently manage and track branded assets with ease and accuracy.",
    technologies: ["React Native", "Google Maps", "TypeScript", "Firebase"],
    platforms: ["Android", "iOS", "Website"],
    status: "live",
    image: "/mobile-app-for-sign-management-with-map-interface.jpg",
  },
  {
    title: "Maayot - Chinese Learning App",
    description:
      "An engaging Chinese learning app built with React Native, offering interactive lessons, seamless login/signup, personalized content, and secure payment integration for a smooth and immersive user experience.",
    technologies: ["React Native", "Stripe", "TypeScript", "Node.js"],
    platforms: ["Android", "iOS", "Website"],
    status: "live",
    image: "/chinese-language-learning-app-with-interactive-les.jpg",
  },
  {
    title: "Whalesbook",
    description:
      "WhalesBook is your smart stock market companion, sending instant WhatsApp alerts and offering expert news via an in-app e-newspaper. Join live streams to engage with traders and investors.",
    technologies: ["React Native", "Chart.js", "JavaScript", "Socket.io"],
    platforms: ["Android", "iOS", "Website"],
    status: "live",
    image: "/stock-market-trading-app-with-charts-and-analytics.jpg",
  },
  {
    title: "Better Trucks Shift",
    description:
      "The Better Trucks Shift app lets delivery drivers across the country sign up, drive, and get paid the same day for shifts that they work. Sign up today and get paid every day you work with our team!",
    technologies: ["React Native", "JavaScript", "Google Maps", "Firebase"],
    platforms: ["Android", "iOS", "Website"],
    status: "live",
    image: "/delivery-driver-app-with-map-and-shift-scheduling.jpg",
  },
  {
    title: "HomeSafe - Pet Parenting App",
    description:
      "HomeSafe is a smart pet tracker app built with React Native, monitoring your pet's walks, sleep, and daily activities. It features secure login/signup, real-time insights, and personalized pet care.",
    technologies: ["React Native", "TypeScript", "PHP", "PostgreSQL"],
    platforms: ["Android", "iOS", "Website"],
    status: "live",
    image: "/pet-tracking-app-with-activity-monitoring-dashboar.jpg",
  },
  {
    title: "EASRCC",
    description:
      "Welcome to the EASRCC mobile app! Earn UCANS, get important news and alerts, access resources, connect with members, and shop the merchandise store-all from one easy-to-use platform!",
    technologies: ["React Native", "Javascript", "Node.js", "Firebase"],
    platforms: ["Android"],
    status: "development",
    image: "/community-app-with-news-feed-and-member-resources.jpg",
  },
]

export function Projects() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" ref={ref} className="py-20 px-4 bg-card/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.projects.title}</h2>
          <p className="text-lg text-muted-foreground">{t.projects.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                type: "spring",
                stiffness: 60,
                damping: 15,
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="bg-card border border-border rounded-xl overflow-hidden glow-card group"
            >
              <div className="relative h-48 w-full overflow-hidden bg-muted">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={`${project.title} preview`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {project.status === "development" && (
                  <span className="absolute top-4 right-4 px-3 py-1 bg-secondary/90 backdrop-blur-sm text-secondary-foreground text-xs rounded-full font-medium">
                    {t.projects.inDevelopment}
                  </span>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-muted text-foreground text-xs rounded">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {project.platforms.map((platform) => (
                      <span key={platform} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">
                        {platform}
                      </span>
                    ))}
                  </div>
                  <Button size="sm" variant="ghost" className="group-hover:text-primary">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
