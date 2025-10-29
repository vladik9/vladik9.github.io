"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, DownloadIcon, Facebook, Github, Linkedin, Mail, Twitter } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/components/language-provider";
import { AnimatedParticles } from "@/components/animated-particles";
import { vocabulary } from "@/lib/vocabulary";
import { info } from "@/lib/info";
import { downloadCV } from "@/lib/utils";
import { useState, useEffect } from "react";

export function Hero() {
  const { t } = useLanguage();
  const [greetingText, setGreetingText] = useState("");
  const [nameText, setNameText] = useState("");
  const [titleText, setTitleText] = useState("");
  const [descriptionText, setDescriptionText] = useState("");

  // Typing animation effect
  useEffect(() => {
    const greetingFull = t.hero.greeting;
    const nameFull = t.hero.name;
    const titleFull = info.personal.title;
    const descriptionFull = t.hero.description;

    let greetingIndex = 0;
    let nameIndex = 0;
    let titleIndex = 0;
    let descriptionIndex = 0;

    // Type greeting first (faster)
    const greetingInterval = setInterval(() => {
      if (greetingIndex < greetingFull.length) {
        setGreetingText(greetingFull.slice(0, greetingIndex + 1));
        greetingIndex++;
      } else {
        clearInterval(greetingInterval);

        // Start typing name after greeting is done (medium speed)
        const nameInterval = setInterval(() => {
          if (nameIndex < nameFull.length) {
            setNameText(nameFull.slice(0, nameIndex + 1));
            nameIndex++;
          } else {
            clearInterval(nameInterval);

            // Start typing title after name is done (faster)
            const titleInterval = setInterval(() => {
              if (titleIndex < titleFull.length) {
                setTitleText(titleFull.slice(0, titleIndex + 1));
                titleIndex++;
              } else {
                clearInterval(titleInterval);

                // Start typing description after title is done (fast)
                const descriptionInterval = setInterval(() => {
                  if (descriptionIndex < descriptionFull.length) {
                    setDescriptionText(descriptionFull.slice(0, descriptionIndex + 1));
                    descriptionIndex++;
                  } else {
                    clearInterval(descriptionInterval);
                  }
                }, 20);
              }
            }, 40);
          }
        }, 80);
      }
    }, 60);

    return () => {
      clearInterval(greetingInterval);
    };
  }, [t.hero.greeting, t.hero.name, info.personal.title, t.hero.description]);

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
    { icon: Facebook, href: info.personal.social.facebook },

  ];

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
                transition={{ delay: 0.2, duration: 0.3 }}
                className="text-primary text-lg min-h-[1.75rem]"
              >
                {greetingText}
                {greetingText.length < t.hero.greeting.length && (
                  <span className="inline-block w-[3px] h-5 bg-primary ml-1 animate-[blink_0.7s_ease-in-out_infinite]"
                    style={{ boxShadow: '0 0 8px currentColor' }} />
                )}
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="text-5xl md:text-7xl font-bold text-balance min-h-[3.5rem] md:min-h-[5rem]"
              >
                {nameText}
                {nameText.length > 0 && nameText.length < t.hero.name.length && (
                  <span className="inline-block w-[4px] md:w-[5px] h-12 md:h-16 bg-foreground ml-2 animate-[blink_0.7s_ease-in-out_infinite]"
                    style={{ boxShadow: '0 0 10px currentColor' }} />
                )}
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                className="text-2xl md:text-3xl font-semibold text-accent min-h-[2rem] md:min-h-[2.5rem]"
              >
                {titleText}
                {titleText.length > 0 && titleText.length < info.personal.title.length && (
                  <span className="inline-block w-[3px] md:w-[4px] h-7 md:h-8 bg-accent ml-1 animate-[blink_0.7s_ease-in-out_infinite]"
                    style={{ boxShadow: '0 0 8px currentColor' }} />
                )}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.3 }}
                className="text-lg text-muted-foreground leading-relaxed text-pretty min-h-[3rem]"
              >
                {descriptionText}
                {descriptionText.length > 0 && descriptionText.length < t.hero.description.length && (
                  <span className="inline-block w-[2px] h-5 bg-muted-foreground ml-1 animate-[blink_0.7s_ease-in-out_infinite]"
                    style={{ boxShadow: '0 0 6px currentColor' }} />
                )}
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
