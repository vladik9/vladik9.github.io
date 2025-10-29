"use client";

import type React from "react";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, MessageCircle, HelpCircle, ChevronLeft, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "./language-provider";
import { ConfirmationModal } from "./confirmation-modal";

interface Message {
  id: string;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
}

interface QAItem {
  question: string;
  answer: string;
}
// TODO: WORK ON completing chat logic
export function ChatModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState<"welcome" | "chat" | "qa" | "contact">("welcome");
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const { t } = useLanguage();

  const [showConfirmation, setShowConfirmation] = useState(false);

  const qaItems: QAItem[] = [
    {
      question: t.chat.qa.q1.question,
      answer: t.chat.qa.q1.answer,
    },
    {
      question: t.chat.qa.q2.question,
      answer: t.chat.qa.q2.answer,
    },
    {
      question: t.chat.qa.q3.question,
      answer: t.chat.qa.q3.answer,
    },
    {
      question: t.chat.qa.q4.question,
      answer: t.chat.qa.q4.answer,
    },
    {
      question: t.chat.qa.q5.question,
      answer: t.chat.qa.q5.answer,
    },
  ];

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: t.chat.aiResponse,
        sender: "ai",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
    }, 1000);
  };

  const handleQAClick = (qa: QAItem) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text: qa.question,
      sender: "user",
      timestamp: new Date(),
    };

    const aiMessage: Message = {
      id: (Date.now() + 1).toString(),
      text: qa.answer,
      sender: "ai",
      timestamp: new Date(),
    };

    setMessages([userMessage, aiMessage]);
    setView("chat");
  };

  const resetChat = () => {
    setView("welcome");
    setMessages([]);
    setInputValue("");
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowConfirmation(true);
    setTimeout(() => {
      resetChat();
    }, 2000);
  };

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-6 z-40 bg-primary text-primary-foreground rounded-full p-4 shadow-lg hover:shadow-xl transition-all hover:scale-110"
      >
        <MessageCircle className="h-6 w-6" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />

            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 100, scale: 0.9 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed bottom-0 right-0 md:bottom-6 md:right-6 w-full md:w-[400px] h-[90vh] md:h-[600px] bg-card border-t md:border border-border md:rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden"
            >
              <div className="bg-primary text-primary-foreground p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {view !== "welcome" && (
                    <button onClick={resetChat} className="hover:bg-primary-foreground/10 p-1 rounded">
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                  )}
                  <div>
                    <h3 className="font-semibold">{t.chat.title}</h3>
                    <p className="text-xs opacity-90">{t.chat.subtitle}</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-primary-foreground/10 p-2 rounded-full transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-4 md:p-6">
                {view === "welcome" && (
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                    <div className="text-center space-y-2">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                        <MessageCircle className="h-8 w-8 text-primary" />
                      </div>
                      <h4 className="text-xl font-bold">{t.chat.welcome.title}</h4>
                      <p className="text-sm text-muted-foreground">{t.chat.welcome.subtitle}</p>
                    </div>

                    <div className="space-y-3">
                      <button
                        onClick={() => setView("chat")}
                        className="w-full bg-primary text-primary-foreground p-4 rounded-xl hover:bg-primary/90 transition-colors text-left"
                      >
                        <div className="flex items-center gap-3">
                          <MessageCircle className="h-5 w-5" />
                          <div>
                            <div className="font-semibold">{t.chat.options.talkWithAI.title}</div>
                            <div className="text-xs opacity-90">{t.chat.options.talkWithAI.description}</div>
                          </div>
                        </div>
                      </button>

                      <button
                        onClick={() => setView("qa")}
                        className="w-full bg-card border border-border p-4 rounded-xl hover:bg-accent transition-colors text-left"
                      >
                        <div className="flex items-center gap-3">
                          <HelpCircle className="h-5 w-5 text-primary" />
                          <div>
                            <div className="font-semibold">{t.chat.options.exploreQA.title}</div>
                            <div className="text-xs text-muted-foreground">{t.chat.options.exploreQA.description}</div>
                          </div>
                        </div>
                      </button>

                      <button
                        onClick={() => setView("contact")}
                        className="w-full bg-card border border-border p-4 rounded-xl hover:bg-accent transition-colors text-left"
                      >
                        <div className="flex items-center gap-3">
                          <Mail className="h-5 w-5 text-primary" />
                          <div>
                            <div className="font-semibold">{t.chat.options.contact.title}</div>
                            <div className="text-xs text-muted-foreground">{t.chat.options.contact.description}</div>
                          </div>
                        </div>
                      </button>
                    </div>
                  </motion.div>
                )}

                {view === "chat" && (
                  <div className="space-y-4">
                    {messages.length === 0 && (
                      <div className="text-center text-muted-foreground text-sm py-8">
                        {t.chat.placeholders.startConversation}
                      </div>
                    )}
                    {messages.map((message) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-[80%] p-3 rounded-2xl ${message.sender === "user"
                            ? "bg-primary text-primary-foreground"
                            : "bg-accent text-accent-foreground"
                            }`}
                        >
                          <p className="text-sm">{message.text}</p>
                          <p className="text-xs opacity-70 mt-1">
                            {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {view === "qa" && (
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-3">
                    {qaItems.map((qa, index) => (
                      <button
                        key={index}
                        onClick={() => handleQAClick(qa)}
                        className="w-full bg-card border border-border p-4 rounded-xl hover:bg-accent transition-colors text-left"
                      >
                        <div className="flex items-start gap-3">
                          <HelpCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <div className="text-sm font-medium">{qa.question}</div>
                        </div>
                      </button>
                    ))}
                  </motion.div>
                )}

                {view === "contact" && (
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                    <form onSubmit={handleContactSubmit} className="space-y-4">
                      <div className="grid grid-cols-2 gap-3">
                        <div className="space-y-2">
                          <label htmlFor="firstName" className="text-sm font-medium">
                            {t.contact.form.firstName}
                          </label>
                          <Input
                            id="firstName"
                            placeholder={t.contact.form.firstName}
                            className="bg-background"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="lastName" className="text-sm font-medium">
                            {t.contact.form.lastName}
                          </label>
                          <Input
                            id="lastName"
                            placeholder={t.contact.form.lastName}
                            className="bg-background"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          {t.contact.form.email}
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          className="bg-background"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium">
                          {t.contact.form.subject}
                        </label>
                        <Input id="subject" placeholder="Project inquiry" className="bg-background" required />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          {t.contact.form.message}
                        </label>
                        <Textarea
                          id="message"
                          placeholder="Tell me about your project..."
                          rows={4}
                          className="bg-background resize-none"
                          required
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full">
                        {t.contact.form.send}
                        <Send className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                  </motion.div>
                )}
              </div>

              {view === "chat" && (
                <div className="p-4 border-t border-border">
                  <div className="flex gap-2">
                    <Input
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                      placeholder={t.chat.placeholders.typeMessage}
                      className="flex-1"
                    />
                    <Button onClick={handleSendMessage} size="icon" className="flex-shrink-0">
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <ConfirmationModal
        isOpen={showConfirmation}
        onClose={() => setShowConfirmation(false)}
        type="success"
        title={t.confirmation.formSubmitted.title}
        message={t.confirmation.formSubmitted.message}
      />
    </>
  );
}
