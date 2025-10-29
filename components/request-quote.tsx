"use client";

import type React from "react";
import { motion } from "framer-motion";
import { Mail, Clock, CheckCircle2, Phone, Pin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { useLanguage } from "./language-provider";
import { ConfirmationModal } from "./confirmation-modal";
import { LegalModal } from "./legal-modal";
import { info } from "@/lib/info";
import CalendlyButton from "./CalendlyButton";

export function RequestQuote() {
  const { t } = useLanguage();

  const budgetRanges = [
    t.quote.budgetRanges.under5k,
    t.quote.budgetRanges.range5to10k,
    t.quote.budgetRanges.range10to25k,
    t.quote.budgetRanges.range25to50k,
    t.quote.budgetRanges.over50k,
    t.quote.budgetRanges.notSure,
  ];

  const timelines = [
    t.quote.timelines.asap,
    t.quote.timelines.withinMonth,
    t.quote.timelines.oneToThree,
    t.quote.timelines.threeToSix,
    t.quote.timelines.sixPlus,
    t.quote.timelines.flexible,
  ];
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
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [marketingAccepted, setMarketingAccepted] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [termsError, setTermsError] = useState(false);

  const handleServiceToggle = (service: string) => {
    setSelectedServices((prev) => (prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate terms acceptance
    if (!termsAccepted) {
      setTermsError(true);
      return;
    }

    setTermsError(false);
    console.log("[v0] Form submitted:", { ...formData, services: selectedServices, termsAccepted, marketingAccepted });
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
    setTermsAccepted(false);
    setMarketingAccepted(false);
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
                      placeholder={t.quote.form.emailPlaceholder}
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
                      placeholder="+40 123 123 123"
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
                      <option value="">{t.quote.form.selectType}</option>
                      <option value="mobile">{t.quote.projectTypes.mobile}</option>
                      <option value="web">{t.quote.projectTypes.web}</option>
                      <option value="fullstack">{t.quote.projectTypes.fullstack}</option>
                      <option value="consulting">{t.quote.projectTypes.consulting}</option>
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
                      <option value="">{t.quote.form.selectBudget}</option>
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
                      <option value="">{t.quote.form.whenToStart}</option>
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
                    placeholder={t.quote.form.descriptionPlaceholder}
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
                    placeholder={t.quote.form.specialRequestsPlaceholder}
                    rows={3}
                    value={formData.specialRequests}
                    onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  />
                </div>

                {/* Terms */}
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="terms"
                      checked={termsAccepted}
                      onCheckedChange={(checked) => {
                        setTermsAccepted(checked as boolean);
                        if (checked) setTermsError(false);
                      }}
                    />
                    <label htmlFor="terms" className="text-sm leading-tight">
                      {t.legalDocs.acceptText.split("{terms}")[0]}
                      <button
                        type="button"
                        onClick={() => setShowTermsModal(true)}
                        className="text-primary hover:underline font-medium mx-1"
                      >
                        {t.legalDocs.termsAndConditions.linkText}
                      </button>
                      {t.legalDocs.acceptText.split("{terms}")[1].split("{privacy}")[0]}
                      <button
                        type="button"
                        onClick={() => setShowPrivacyModal(true)}
                        className="text-primary hover:underline font-medium mx-1"
                      >
                        {t.legalDocs.privacyPolicy.linkText}
                      </button>
                      <span className="text-destructive ml-1">*</span>
                    </label>
                  </div>
                  {termsError && (
                    <p className="text-sm text-destructive ml-6">
                      {t.legalDocs.termsRequired}
                    </p>
                  )}
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="marketing"
                      checked={marketingAccepted}
                      onCheckedChange={(checked) => setMarketingAccepted(checked as boolean)}
                    />
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
                    {t.calendly.scheduleMeeting}
                  </p>
                </div>
              </div>

              <div className="border-t border-border pt-4 mt-4">
                <CalendlyButton />
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
                  <p className="text-2xl font-bold">&lt; {info.personal.contact.mailTime}</p>
                  <p className="text-sm opacity-90">{t.quote.response.email}</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <p className="text-2xl font-bold">{info.personal.contact.detailedResponse}</p>
                  <p className="text-sm opacity-90">{t.quote.response.detailed}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Confirmation Modal */}
      <ConfirmationModal
        isOpen={showConfirmation}
        onClose={() => setShowConfirmation(false)}
        type="success"
        title={t.confirmation.formSubmitted.title}
        message={t.confirmation.formSubmitted.message}
      />

      {/* Terms and Conditions Modal */}
      <LegalModal
        isOpen={showTermsModal}
        onClose={() => setShowTermsModal(false)}
        type="terms"
        title={t.legalDocs.termsAndConditions.title}
        content={{
          sections: t.legalDocs.termsAndConditions.sections,
          lastUpdated: t.legalDocs.termsAndConditions.lastUpdated,
        }}
      />

      {/* Privacy Policy Modal */}
      <LegalModal
        isOpen={showPrivacyModal}
        onClose={() => setShowPrivacyModal(false)}
        type="privacy"
        title={t.legalDocs.privacyPolicy.title}
        content={{
          sections: t.legalDocs.privacyPolicy.sections,
          lastUpdated: t.legalDocs.privacyPolicy.lastUpdated,
        }}
      />
    </section>
  );
}
