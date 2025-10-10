"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/components/language-provider"
import type { Language as LangType } from "@/lib/vocabulary"

const languages = [
  { code: "en" as LangType, flag: "🇬🇧", name: "English" },
  { code: "ro" as LangType, flag: "🇷🇴", name: "Română" },
  { code: "ru" as LangType, flag: "🇷🇺", name: "Русский" },
]

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex gap-2">
      {languages.map((lang) => (
        <motion.button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className={`w-10 h-10 rounded-full flex items-center justify-center text-2xl transition-all ${
            language === lang.code
              ? "bg-primary/20 ring-2 ring-primary shadow-lg"
              : "bg-card border border-border hover:border-primary"
          }`}
          title={lang.name}
        >
          {lang.flag}
        </motion.button>
      ))}
    </div>
  )
}
