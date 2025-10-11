"use client";

import type React from "react";
import { motion } from "framer-motion";
import { Mail, Calendar, Clock, CheckCircle2, Phone, Pin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { useLanguage } from "./language-provider";
import { ConfirmationModal } from "./confirmation-modal";
import { info } from "@/lib/info";

const budgetRanges = [
  "Under $5,000",
  "$5,000 - $10,000",
  "$10,000 - $25,000",
  "$25,000 - $50,000",
  "$50,000+",
  "Not sure yet",
];
const timelines = ["ASAP", "Within 1 month", "1-3 months", "3-6 months", "6+ months", "Flexible"];

export function RequestQuote() {
  const { t } = useLanguage();
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: "",
    specialRequests: "",
  });
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleServiceToggle = (service: string) => {
    setSelectedServices((prev) => (prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("[v0] Form submitted:", { ...formData, services: selectedServices });
    setShowConfirmation(true);
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      projectType: "",
      budget: "",
      timeline: "",
      description: "",
      specialRequests: "",
    });
    setSelectedServices([]);
  };

  const services = [
    t.quote.services.mobileNative,
    t.quote.services.mobileWeb,
    t.quote.services.desktopSoftware,
    t.quote.services.consulting,
    t.quote.services.webDevelopment,
    t.quote.services.automation,
    t.quote.services.testing,
  ];

  return (
    <section id="quote" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">{t.quote.title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t.quote.subtitle}</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
              <h3 className="text-2xl font-bold mb-6">{t.quote.projectDetails}</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t.quote.form.name} <span className="text-destructive">*</span>
                    </label>
                    <Input
                      placeholder={t.quote.form.name}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t.quote.form.email} <span className="text-destructive">*</span>
                    </label>
                    <Input
                      type="email"
                      placeholder="email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                {/* Company and Phone */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">{t.quote.form.company}</label>
                    <Input
                      placeholder={t.quote.form.company}
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">{t.quote.form.phone}</label>
                    <Input
                      type="tel"
                      placeholder="+91 88660 22789"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                {/* Project Type, Budget, Timeline */}
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t.quote.form.projectType} <span className="text-destructive">*</span>
                    </label>
                    <select
                      className="w-full px-3 py-2 rounded-md border border-input bg-background"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      required
                    >
                      <option value="">Select type</option>
                      <option value="mobile">Mobile App</option>
                      <option value="web">Web Application</option>
                      <option value="fullstack">Full-Stack Project</option>
                      <option value="consulting">Consulting</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t.quote.form.budget} <span className="text-destructive">*</span>
                    </label>
                    <select
                      className="w-full px-3 py-2 rounded-md border border-input bg-background"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      required
                    >
                      <option value="">Select budget</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t.quote.form.timeline} <span className="text-destructive">*</span>
                    </label>
                    <select
                      className="w-full px-3 py-2 rounded-md border border-input bg-background"
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      required
                    >
                      <option value="">When to start?</option>
                      {timelines.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Services of Interest */}
                <div>
                  <label className="block text-sm font-medium mb-3">{t.quote.form.services}</label>
                  <div className="grid md:grid-cols-2 gap-3">
                    {services.map((service) => (
                      <div key={service} className="flex items-start space-x-2">
                        <Checkbox
                          id={service}
                          checked={selectedServices.includes(service)}
                          onCheckedChange={() => handleServiceToggle(service)}
                        />
                        <label htmlFor={service} className="text-sm leading-tight cursor-pointer">
                          {service}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project Description */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {t.quote.form.description} <span className="text-destructive">*</span>
                  </label>
                  <Textarea
                    placeholder="Describe your project, goals, and any specific requirements..."
                    rows={5}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    required
                    maxLength={800}
                  />
                  <p className="text-xs text-muted-foreground mt-1">{formData.description.length}/800 characters</p>
                </div>

                {/* Special Requests */}
                <div>
                  <label className="block text-sm font-medium mb-2">{t.quote.form.specialRequests}</label>
                  <Textarea
                    placeholder="Any specific technologies, integrations, or preferences..."
                    rows={3}
                    value={formData.specialRequests}
                    onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  />
                </div>

                {/* Terms */}
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <Checkbox id="terms" required />
                    <label htmlFor="terms" className="text-sm leading-tight">
                      {t.quote.form.terms} <span className="text-destructive">*</span>
                    </label>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Checkbox id="marketing" />
                    <label htmlFor="marketing" className="text-sm leading-tight">
                      {t.quote.form.marketing}
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary to-cyan-500 hover:from-primary/90 hover:to-cyan-500/90"
                >
                  {t.quote.form.submit}
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Right Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Contact Details */}
            <div className="bg-card rounded-2xl p-6 shadow-lg border border-border space-y-4">
              <h3 className="text-xl font-bold mb-4">{t.quote.contactDetails}</h3>

              <div className="flex items-center gap-3 p-4 bg-primary/10 rounded-lg">
                <div className="bg-primary text-primary-foreground p-2 rounded-lg">
                  <Mail className="h-5 w-5" />
                </div>

                {/* Email */}
                <div>
                  <p className="text-sm font-medium">{t.contact.email}</p>
                  <a href={`mailto:${info.personal.email}`} className="text-sm text-primary hover:underline">
                    {info.personal.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 p-4 bg-primary/10 rounded-lg">
                <div className="bg-primary text-primary-foreground p-2 rounded-lg">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium">{t.contact.phone}</p>
                  <a href={`mailto:${info.personal.phone}`} className="text-sm text-primary hover:underline">
                    {info.personal.phone}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 p-4 bg-primary/10 rounded-lg">
                <div className="bg-primary text-primary-foreground p-2 rounded-lg">
                  <Pin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium">{t.contact.location}</p>
                  <a href={`mailto:${info.personal.location}`} className="text-sm text-primary hover:underline">
                    {info.personal.location}
                  </a>
                </div>
              </div>

            </div>

            {/* Schedule Meeting */}
            <div className="bg-card rounded-2xl p-6 shadow-lg border border-border">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold">{info.personal.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    Welcome to my scheduling page. Please follow the instructions to add an event to my calendar.
                  </p>
                </div>
              </div>

              <div className="border-t border-border pt-4 mt-4">
                <div className="flex items-center gap-3 p-3 hover:bg-accent rounded-lg cursor-pointer transition-colors">
                  <Calendar className="h-5 w-5 text-primary" />
                  <div className="flex-1">
                    <p className="font-medium">Coffee in person / Video call</p>
                    <p className="text-sm text-muted-foreground">
                      Let's meet over coffee to discuss project ideas, tech stack, or growth plans.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Response Guarantee */}
            <div className="bg-gradient-to-br from-primary to-cyan-500 rounded-2xl p-6 text-white shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-center">{t.quote.response.title}</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Clock className="h-8 w-8" />
                  </div>
                  <p className="text-2xl font-bold">&lt; 2h</p>
                  <p className="text-sm opacity-90">{t.quote.response.email}</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <p className="text-2xl font-bold">24h</p>
                  <p className="text-sm opacity-90">{t.quote.response.detailed}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <ConfirmationModal
        isOpen={showConfirmation}
        onClose={() => setShowConfirmation(false)}
        type="success"
        title={t.confirmation.formSubmitted.title}
        message={t.confirmation.formSubmitted.message}
      />
    </section>
  );
}
