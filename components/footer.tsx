"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Twitter, Mail, Facebook, Dribbble, Heart } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { currentYear } from "@/lib/utils";
import { info } from "@/lib/info";
const socialLinks = [
  { icon: Linkedin, href: info.personal.social.linkedin, label: "LinkedIn" },
  { icon: Facebook, href: info.personal.social.facebook, label: "Facebook" },
  { icon: Twitter, href: info.personal.social.twitter, label: "Twitter" },
  { icon: Mail, href: info.personal.social.email, label: "Email" },
  { icon: Github, href: info.personal.social.github, label: "Github" },
];

export function Footer() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const quickLinks = [
    { name: t.nav.home, href: "#home" },
    { name: t.nav.about, href: "#about" },
    { name: t.nav.skills, href: "#skills" },
    { name: t.nav.experience, href: "#experience" },
    { name: t.nav.education, href: "#education" },
    { name: t.nav.certifications, href: "#certifications" },
    { name: t.nav.projects, href: "#projects" },

  ];

  const services = ["Mobile Development", "Web Development", "Full-Stack Solutions", "UI/UX Design"];

  return (
    <footer id="contact" ref={ref} className="py-20 px-4 border-t border-border">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <h3 className="text-2xl font-bold mb-4 gradient-text">Vlad Cornici</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">{t.footer.description}</p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.1 * index }}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={`${link.href}`} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-4">{t.footer.services}</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground">{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm text-muted-foreground">© {currentYear()} {info.personal.name}. {t.footer.copyright}</p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            {t.footer.madeWith} {t.footer.forPersonalUse.toLowerCase()}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
