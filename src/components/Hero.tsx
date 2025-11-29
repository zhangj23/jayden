"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText, TrendingUp, Building2, Users } from "lucide-react";

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center gradient-bg overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(var(--accent) 1px, transparent 1px),
              linear-gradient(90deg, var(--accent) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Floating orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(0,212,170,0.08) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(0,184,148,0.06) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-surface border border-border mb-6 sm:mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-accent pulse-live flex-shrink-0" />
            <span className="text-xs sm:text-sm text-text-muted text-center">
              Business Administration @ UB
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-4 sm:mb-6 px-2"
          >
            <span className="block">Analyzing Markets,</span>
            <span className="block text-gradient">Visualizing Growth,</span>
            <span className="block">Building Communities.</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-text-muted mb-8 sm:mb-10 px-2"
          >
            Business Student at University at Buffalo exploring{" "}
            <span className="text-foreground">Real Estate Market Intelligence</span> &{" "}
            <span className="text-foreground">Equity Strategy</span>. Bridging technical
            analysis with strategic leadership.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 px-4"
          >
            <button
              onClick={() => scrollToSection("#dashboard")}
              className="btn-primary flex items-center gap-2 group w-full sm:w-auto justify-center"
            >
              <TrendingUp size={18} />
              View Market Insights
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
            <a
              href="/jayden_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <FileText size={18} />
              Download Resume
            </a>
          </motion.div>

          {/* Stats/Focus Areas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-3 gap-2 sm:gap-4 max-w-3xl mx-auto px-2"
          >
            <div className="metric-card p-3 sm:p-6 rounded-xl bg-surface border border-border">
              <Building2 className="w-6 h-6 sm:w-8 sm:h-8 text-accent mb-2 sm:mb-3 mx-auto" />
              <h3 className="font-semibold mb-1 text-xs sm:text-base">Real Estate</h3>
              <p className="text-xs text-text-muted hidden sm:block">Market Trend Analysis</p>
            </div>
            <div className="metric-card p-3 sm:p-6 rounded-xl bg-surface border border-border">
              <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-accent mb-2 sm:mb-3 mx-auto" />
              <h3 className="font-semibold mb-1 text-xs sm:text-base">Equity</h3>
              <p className="text-xs text-text-muted hidden sm:block">Technical & Macro</p>
            </div>
            <div className="metric-card p-3 sm:p-6 rounded-xl bg-surface border border-border">
              <Users className="w-6 h-6 sm:w-8 sm:h-8 text-accent mb-2 sm:mb-3 mx-auto" />
              <h3 className="font-semibold mb-1 text-xs sm:text-base">Leadership</h3>
              <p className="text-xs text-text-muted hidden sm:block">Lambda Phi Epsilon</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-border flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-accent"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

