"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Mail, ArrowUp, Copy, Check } from "lucide-react";

export default function Footer() {
  const [emailCopied, setEmailCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("jaydenzhang30@gmail.com");
      setEmailCopied(true);
      setShowToast(true);
      setTimeout(() => {
        setEmailCopied(false);
        setShowToast(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <footer className="py-8 bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-emerald-400 flex items-center justify-center">
              <span className="text-background font-bold text-sm">J</span>
            </div>
            <span className="text-sm text-text-muted">
              © {new Date().getFullYear()} Jayden. All rights reserved.
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-4">
            <button
              onClick={copyEmail}
              className="p-2 rounded-lg text-text-muted hover:text-accent hover:bg-accent/10 transition-all"
              aria-label="Copy Email"
            >
              {emailCopied ? <Check size={18} /> : <Mail size={18} />}
            </button>
            <a
              href="https://www.linkedin.com/in/jayden-zhang-4b3367342/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-text-muted hover:text-accent hover:bg-accent/10 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg text-text-muted hover:text-accent hover:bg-accent/10 transition-all"
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
          >
            <div className="bg-surface-elevated border border-accent/30 rounded-xl px-6 py-4 shadow-lg flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                <Check className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="font-semibold text-sm">Email copied!</p>
                <p className="text-xs text-text-muted">jaydenzhang30@gmail.com</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
}

