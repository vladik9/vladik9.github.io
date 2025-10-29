"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "terms" | "privacy";
  title: string;
  content: {
    sections: Array<{
      title: string;
      content: string | string[];
    }>;
    lastUpdated: string;
  };
}

export function LegalModal({ isOpen, onClose, type, title, content }: LegalModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-4xl max-h-[85vh] bg-card rounded-2xl border border-border shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border bg-gradient-to-r from-primary/10 to-cyan-500/10">
              <h2 className="text-2xl font-bold gradient-text">{title}</h2>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-muted transition-colors"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6">
              {content.sections.map((section, index) => (
                <div key={index} className="space-y-3">
                  <h3 className="text-xl font-semibold text-foreground">
                    {section.title}
                  </h3>
                  {Array.isArray(section.content) ? (
                    <ul className="space-y-2 pl-5">
                      {section.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-muted-foreground leading-relaxed list-disc">
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                      {section.content}
                    </p>
                  )}
                </div>
              ))}

              {/* Last Updated */}
              <div className="pt-4 mt-6 border-t border-border">
                <p className="text-sm text-muted-foreground italic">
                  {content.lastUpdated}
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-border bg-muted/30">
              <Button
                onClick={onClose}
                className="w-full bg-gradient-to-r from-primary to-cyan-500 hover:from-primary/90 hover:to-cyan-500/90"
              >
                Close
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
