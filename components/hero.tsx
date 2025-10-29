"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, DownloadIcon, Github, Linkedin, Mail, Twitter } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/components/language-provider";
import { AnimatedParticles } from "@/components/animated-particles";
import { vocabulary } from "@/lib/vocabulary";
import { info } from "@/lib/info";
import { downloadCV, highLightText } from "@/lib/utils";

export function Hero() {
  const { t } = useLanguage();

  const stats = [
    { label: t.hero.stats.experience, value: info.personal.stats.yearOfExperience },
    { label: t.hero.stats.projects, value: info.personal.stats.projects },
    { label: t.hero.stats.clients, value: info.personal.stats.clients },
    { label: t.hero.stats.successRate, value: info.personal.stats.successRate },
  ];
  const social = [
    { icon: Github, href: info.personal.social.github },
    { icon: Linkedin, href: info.personal.social.linkedin },
    { icon: Twitter, href: info.personal.social.twitter },
    { icon: Mail, href: info.personal.social.email },
  ];
  // TODO: Update hero section to be more dynamic and personalized now is not showing my content is old one
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-primary text-lg"
              >
                {t.hero.greeting}
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-7xl font-bold text-balance"
              >
                {t.hero.name}
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-2xl md:text-3xl font-semibold text-accent"
              >
                {info.personal.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-lg text-muted-foreground leading-relaxed text-pretty"
              >
                {/* {t.hero.description} */}
                {/* NOTE: this is where the highlighted text will be inserted */}
                <div dangerouslySetInnerHTML={{ __html: highLightText(t.hero.description, info.personal.stats.yearOfExperience) }} />

              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" onClick={() => window.location.href = "#projects"} className="bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer" >
                {t.hero.viewWork}
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary bg-transparent cursor-pointer"
                onClick={downloadCV} >
                {t.hero.downloadCV}
                <DownloadIcon className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4"
            >
              {social.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right side - Profile Picture and Stats */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-center lg:justify-around"
            >
              <div className="relative">
                {/* Particles background */}
                <div className="absolute -inset-9 pointer-events-none">
                  <AnimatedParticles />
                </div>

                {/* Profile picture */}
                <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary glow-card z-10">
                  <Image
                    src="https://raw.githubusercontent.com/vladik9/vladik9.github.io/main/public/personal.jpeg"
                    alt={vocabulary.en.hero.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </motion.div>


            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="bg-card border border-border rounded-xl p-6 glow-card"
                >
                  <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
