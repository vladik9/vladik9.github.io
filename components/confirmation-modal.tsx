"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, Info, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "./language-provider";

export type ConfirmationType = "success" | "error" | "info";

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: ConfirmationType;
  title: string;
  message: string;
}

export function ConfirmationModal({ isOpen, onClose, type, title, message }: ConfirmationModalProps) {
  const { t } = useLanguage();

  const icons = {
    success: CheckCircle2,
    error: XCircle,
    info: Info,
  };

  const colors = {
    success: "text-green-500",
    error: "text-red-500",
    info: "text-blue-500",
  };

  const bgColors = {
    success: "bg-green-500/10",
    error: "bg-red-500/10",
    info: "bg-blue-500/10",
  };

  const Icon = icons[type];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md mx-4 bg-card border border-border rounded-2xl shadow-2xl z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${bgColors[type]} flex items-center justify-center`}>
                  <Icon className={`h-6 w-6 ${colors[type]}`} />
                </div>
                <h3 className="text-xl font-bold">{title}</h3>
              </div>
              <button
                onClick={onClose}
                className="hover:bg-accent p-2 rounded-full transition-colors"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              <p className="text-muted-foreground">{message}</p>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-border flex justify-end">
              <Button onClick={onClose} className="bg-primary text-primary-foreground hover:bg-primary/90">
                {t.confirmation.close}
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
