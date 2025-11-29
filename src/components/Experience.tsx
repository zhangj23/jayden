"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Users,
  Trophy,
  Heart,
  Calendar,
  ChevronRight,
  Target,
  BarChart3,
  Megaphone,
} from "lucide-react";

const experiences = [
  {
    id: "fundraising-chair",
    title: "Fundraising Chair + Rush Team",
    organization: "Lambda Phi Epsilon",
    type: "Leadership",
    period: "Fall 2025 - Present",
    description: "Financial Strategy & Recruitment Support",
    details: [
      "Spearheaded fundraising initiatives, developing strategic campaigns to secure chapter funding and operational resources",
      "Managed budget allocation and financial planning for fraternity events and organizational expenses",
      "Collaborated with the Rush Team to coordinate recruitment events and engage with 50+ prospective members",
    ],
    skills: ["Fundraising", "Budget Management", "Team Collaboration", "Event Planning"],
    icon: Users,
    color: "from-amber-500 to-orange-600",
  },
  {
    id: "track-captain",
    title: "Varsity Captain",
    organization: "Staten Island Tech Varsity Track Team",
    type: "Athletics",
    period: "June 2024 - June 2025",
    description: "Performance Optimization & Team Leadership",
    details: [
      "Led the Sprinter/Jumper crew, developing standardized operating procedures (SOPs) for warmups and technical drills",
      "Analyzed performance data to create customized exercise routines, directly contributing to improved teammate times",
      "Mentored junior athletes on form optimization and race-day psychology",
    ],
    skills: ["Coaching", "Performance Analysis", "Team Building", "SOPs"],
    icon: Trophy,
    color: "from-blue-500 to-indigo-600",
  },
  {
    id: "luv-michael",
    title: "Volunteer & Advocate",
    organization: "Luv Michael",
    type: "Non-Profit",
    period: "Feb 2023 - Present",
    description: "Non-Profit Outreach & Advocacy",
    details: [
      "Executed targeted outreach campaigns to raise awareness for autism spectrum disorder advocacy",
      "Distributed educational resources to local communities, analyzing engagement to refine messaging strategies",
    ],
    skills: ["Advocacy", "Community Outreach", "Social Impact", "Campaign Strategy"],
    icon: Heart,
    color: "from-pink-500 to-rose-600",
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-16 sm:py-24 md:py-32 bg-surface">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Experience
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Leadership & Impact
          </h2>
          <p className="max-w-2xl mx-auto text-text-muted">
            Demonstrating leadership across organizations, athletics, and community
            service with transferable skills in strategy, management, and team building.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {/* Experience cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className={`relative grid md:grid-cols-2 gap-8 ${
                    isEven ? "" : "md:direction-rtl"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-accent border-4 border-background md:-translate-x-2 mt-8" />

                  {/* Card */}
                  <div
                    className={`ml-6 sm:ml-8 md:ml-0 ${
                      isEven ? "md:pr-12" : "md:pl-12 md:col-start-2"
                    }`}
                  >
                    <div className="bg-background rounded-2xl border border-border overflow-hidden hover:border-accent/50 transition-colors">
                      {/* Card Header */}
                      <div className="p-4 sm:p-6 border-b border-border">
                        <div className="flex items-start gap-3 sm:gap-4">
                          <div
                            className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center flex-shrink-0`}
                          >
                            <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 flex-wrap mb-1">
                              <h3 className="font-bold text-base sm:text-lg">{exp.title}</h3>
                              <span className="px-2 py-0.5 rounded bg-surface-elevated text-[10px] sm:text-xs text-text-muted">
                                {exp.type}
                              </span>
                            </div>
                            <p className="text-accent font-medium text-sm sm:text-base">{exp.organization}</p>
                            <div className="flex items-center gap-2 mt-2 text-xs sm:text-sm text-text-muted">
                              <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                              <span>{exp.period}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Card Body */}
                      <div className="p-4 sm:p-6">
                        <p className="font-medium mb-3 sm:mb-4 text-sm sm:text-base">{exp.description}</p>

                        <ul className="space-y-2 mb-4 sm:mb-6">
                          {exp.details.map((detail, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-xs sm:text-sm text-text-muted"
                            >
                              <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-accent flex-shrink-0 mt-0.5" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Skills */}
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {exp.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-lg bg-surface-elevated border border-border text-[10px] sm:text-xs font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Empty column for timeline alignment */}
                  <div
                    className={`hidden md:block ${
                      isEven ? "md:col-start-2" : "md:col-start-1 md:row-start-1"
                    }`}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

