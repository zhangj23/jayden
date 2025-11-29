"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  GraduationCap,
  BookOpen,
  Award,
  Users,
  Building,
  ChevronRight,
} from "lucide-react";

const courseWork = [
  {
    code: "ECO 182",
    name: "Microeconomics",
    description: "Market mechanics, supply/demand analysis",
  },
  {
    code: "PSY 101",
    name: "Behavioral Psychology",
    description: "Behavioral economics foundation",
  },
  {
    code: "MGG 199",
    name: "Corp. Social Responsibility",
    description: "Ethics in business decisions",
  },
  {
    code: "GEO 101",
    name: "Earth Systems",
    description: "Physical land analysis for Real Estate",
  },
  {
    code: "MGG 101",
    name: "Business Fundamentals",
    description: "Core business principles",
  },
];

const skills = [
  "AutoCAD",
  "Revit",
  "Excel (Financial Modeling)",
  "TradingView",
  "Thinkorswim",
  "Technical Analysis",
  "Fundamental Valuation",
  "Market Forecasting",
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-16 sm:py-24 md:py-32 bg-surface">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Education & Background
          </h2>
          <p className="max-w-2xl mx-auto text-text-muted">
            Building a foundation in business administration with a focus on real
            estate and finance, complemented by technical design skills.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* University at Buffalo Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-background rounded-2xl border border-border overflow-hidden"
          >
            {/* Card Header */}
            <div className="p-6 border-b border-border bg-surface-elevated">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">University at Buffalo</h3>
                  <p className="text-text-muted">The State University of New York</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="px-2 py-0.5 rounded bg-accent/10 text-accent text-xs font-medium">
                      Current
                    </span>
                    <span className="text-sm text-text-muted">Expected May 2029</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card Body */}
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-5 h-5 text-accent" />
                <h4 className="font-semibold">B.S. in Business Administration</h4>
              </div>
              <p className="text-sm text-text-muted mb-6">
                Finance & Real Estate Concentration
              </p>

              <h5 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-4">
                Current Coursework
              </h5>
              <div className="space-y-3">
                {courseWork.map((course, index) => (
                  <motion.div
                    key={course.code}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="group flex items-start gap-3 p-3 rounded-lg hover:bg-surface-elevated transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 text-accent mt-0.5 group-hover:translate-x-1 transition-transform" />
                    <div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-2">
                        <span className="font-mono text-xs sm:text-sm text-accent">
                          {course.code}
                        </span>
                        <span className="font-medium text-xs sm:text-sm">{course.name}</span>
                      </div>
                      <p className="text-xs text-text-muted mt-0.5">
                        {course.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* High School Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-background rounded-2xl border border-border p-6"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-500 to-slate-700 flex items-center justify-center flex-shrink-0">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold">Staten Island Technical High School</h3>
                  <p className="text-sm text-text-muted">Advanced Regents Diploma | GPA: 91.68%</p>
                </div>
              </div>
              <p className="text-sm text-text-muted leading-relaxed">
                Built a technical foundation in architectural design and 3D modeling
                through Computer Aided Design (CAD) & Revit. Completed AP Macroeconomics
                and AP Calculus AB, providing a unique perspective for Real Estate
                development and financial analysis.
              </p>
            </motion.div>

            {/* Fraternity Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-background rounded-2xl border border-border p-6"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold">Lambda Phi Epsilon</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <Award className="w-4 h-4 text-accent" />
                    <span className="text-sm text-accent font-medium">Fundraising Chair + Rush Team</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-text-muted leading-relaxed">
                Leading fundraising initiatives and financial strategy while supporting
                recruitment efforts. Managing budget allocation for chapter operations
                and collaborating with the Rush Team on engagement events.
              </p>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-background rounded-2xl border border-border p-6"
            >
              <h4 className="font-semibold mb-4">Software & Tools</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                    className="px-3 py-1.5 rounded-lg bg-surface-elevated border border-border text-sm font-medium hover:border-accent hover:text-accent transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

