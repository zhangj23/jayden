"use client";

import { Linkedin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
            <a
              href="mailto:jaydenzhang30@gmail.com"
              className="p-2 rounded-lg text-text-muted hover:text-accent hover:bg-accent/10 transition-all"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
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
    </footer>
  );
}

