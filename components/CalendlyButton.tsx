"use client";

import Script from 'next/script';
import { Calendar } from "lucide-react";
import { useLanguage } from './language-provider';

declare global {
  interface Window {
    Calendly: {
      initPopupWidget: (options: { url: string; }) => void;
    };
  }
}

export default function CalendlyButton() {
  const { t } = useLanguage();

  function initCalendly() {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: 'https://calendly.com/v-cornici/30min' });
    }
  }

  return (
    <>
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
      <div
        onClick={initCalendly}
        className="flex items-center gap-3 p-3 hover:bg-muted rounded-lg cursor-pointer transition-colors"
      >
        <Calendar className="h-5 w-5 text-primary" />
        <div className="flex-1">
          <p className="font-medium">{t.calendly.scheduleMeeting}</p>
          <p className="text-sm">
            {t.calendly.requestQuoteDescription}
          </p>
        </div>
      </div>
    </>
  );
}
