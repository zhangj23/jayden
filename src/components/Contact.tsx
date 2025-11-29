"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Mail,
  Linkedin,
  Send,
  MapPin,
  Calendar,
  ArrowUpRight,
} from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-16 sm:py-24 md:py-32 gradient-bg overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Contact
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Let&apos;s Connect
          </h2>
          <p className="max-w-2xl mx-auto text-text-muted">
            Open to opportunities in investment banking, real estate, and business
            development. Let&apos;s discuss how we can work together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Quick Links */}
            <div className="bg-surface rounded-2xl border border-border p-6">
              <h3 className="text-lg font-semibold mb-6">Quick Connect</h3>
              <div className="space-y-4">
                <a
                  href="mailto:jaydenzhang30@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-surface-elevated border border-border hover:border-accent transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-text-muted">jaydenzhang30@gmail.com</p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-text-muted group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </a>

                <a
                  href="https://www.linkedin.com/in/jayden-zhang-4b3367342/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-surface-elevated border border-border hover:border-accent transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Linkedin className="w-5 h-5 text-accent" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">LinkedIn</p>
                    <p className="text-sm text-text-muted">Professional Network</p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-text-muted group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </a>
              </div>
            </div>

            {/* Location & Availability */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-surface rounded-xl border border-border p-5">
                <MapPin className="w-5 h-5 text-accent mb-3" />
                <p className="font-medium mb-1">Location</p>
                <p className="text-sm text-text-muted">Buffalo, NY</p>
              </div>
              <div className="bg-surface rounded-xl border border-border p-5">
                <Calendar className="w-5 h-5 text-accent mb-3" />
                <p className="font-medium mb-1">Availability</p>
                <p className="text-sm text-text-muted">Open to Opportunities</p>
              </div>
            </div>

            {/* Resume Download */}
            <a
              href="/jayden_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
            >
              <div className="bg-gradient-to-r from-accent to-emerald-400 rounded-xl p-[1px]">
                <div className="bg-surface rounded-xl p-5 flex items-center justify-between hover:bg-surface-elevated transition-colors">
                  <div>
                    <p className="font-semibold">Download Resume</p>
                    <p className="text-sm text-text-muted">PDF Format</p>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                    <Send className="w-5 h-5 text-background" />
                  </div>
                </div>
              </div>
            </a>
          </motion.div>

          {/* Decorative Element */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="bg-surface rounded-2xl border border-border p-6 sm:p-8 relative overflow-hidden">
              {/* Background Pattern */}
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, var(--accent) 1px, transparent 0)`,
                  backgroundSize: "32px 32px",
                }}
              />

              <div className="relative">
                <div className="mb-8">
                  <span className="text-6xl font-bold text-gradient">{">"}</span>
                </div>

                <blockquote className="text-lg sm:text-xl md:text-2xl font-medium leading-relaxed mb-6 sm:mb-8">
                  &quot;The best way to predict the future is to analyze the present
                  and position accordingly.&quot;
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-emerald-400 flex items-center justify-center">
                    <span className="font-bold text-background">J</span>
                  </div>
                  <div>
                    <p className="font-semibold">Jayden Zhang</p>
                    <p className="text-sm text-text-muted">
                      B.S. Business Administration (Finance & Real Estate)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements - hidden on mobile */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="hidden sm:block absolute -top-4 -right-4 w-24 h-24 rounded-2xl bg-accent/10 border border-accent/20 backdrop-blur-sm"
            />
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="hidden sm:block absolute -bottom-4 -left-4 w-16 h-16 rounded-xl bg-surface-elevated border border-border"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

