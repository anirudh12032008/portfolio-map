"use client"


import {act, useState} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section, Heading, FadeIn, Tag } from "@/components/sections/primitives";
import { useRouter } from "next/navigation";



const TAGS = ["All", "Software", "Hardware", "Community", "3D Printing"]

// these are scrapped from my github latest ones rn 
const projects = [
  {
    title: "My First Program - QBASIC Quiz Game",
    description: "My first ever program built in QBASIC with ~200-300 lines of code inspired by Kaun Banega Crorepati. Later appeared nationally when I won KBC 7 years later with the same quiz concept.",
    github: "https://github.com/anirudh12032008/qbasic",
    link: "/projects/qbasic",
    tags: ["Software"],
    year: "2019",
    featured: true,
  },
  {
    title: "Dev Rover",
    description: "A wireless rover with camera, audio, display, and remote control capabilities. Designed and built hardware, firmware and CAD from scratch.",
    github: "https://github.com/anirudh12032008/devrover",
    link: "/projects/dev-rover",
    tags: ["Hardware", "Software"],
    year: "2025",
    featured: true,
  },
  {
    title: "Connected Hearts",
    description: "Custom PCB with ESP32, RGB LEDs, and display to sync messages across devices. Designed, programmed, and built as a personal hardware project to gift to friends.",
    github: "https://github.com/anirudh12032008/hcheart",
    link: "/projects/connected-hearts",
    tags: ["Hardware", "Software"],
    year: "2025",
    featured: true,
  },
  {
    title: "ECG Machine",
    description: "Portable ECG signal monitoring device built out of curiosity during dealing with PSVT. Designed to capture and display ECG waveforms with sensor integration and real-time output.",
    github: "https://github.com/anirudh12032008/ecg",
    link: "/projects/ecg",
    tags: ["Hardware", "Software"],
    year: "2025",
    featured: true,
  },
  {
    title: "Macropad",
    description: "Hand-wired wireless macropad on perfboard with 3D-printed case. Built completely from scratch with full custom design, debugging 5+ short circuits, and achieving reliable wireless operation.",
    github: "https://github.com/anirudh12032008/macropad",
    link: "/projects/macropad",
    tags: ["Hardware", "3D Printing"],
    year: "2026",
    featured: true,
  },
  {
    title: "Portfolio Map",
    description: "Interactive portfolio map app built with TypeScript for showcasing projects visually.",
    github: "https://github.com/anirudh12032008/portfolio-map",
    link: "/projects/portfolio-map",
    tags: ["Software"],
    year: "2026",
    featured: true,
  },
  {
    title: "portal-vr",
    description: "Web project powering PORTAL VR event content and participant-facing pages.",
    github: "https://github.com/anirudh12032008/portal-vr",
    tags: ["Community", "Software"],
    year: "2025",
    featured: false,
  },
  {
    title: "rpicamera",
    description: "Raspberry Pi camera utility project for capture workflows and camera automation.",
    github: "https://github.com/anirudh12032008/rpicamera",
    tags: ["Hardware", "Software"],
    year: "2026",
    featured: false,
  },
  {
    title: "rpicamera-images",
    description: "Companion storage repository used by the rpicamera project for image assets.",
    github: "https://github.com/anirudh12032008/rpicamera-images",
    tags: ["Software"],
    year: "2026",
    featured: false,
  },
  {
    title: "subatomicparticlesimulator",
    description: "Python simulator for visualizing and experimenting with subatomic particle behavior.",
    github: "https://github.com/anirudh12032008/subatomicparticlesimulator",
    tags: ["Software"],
    year: "2026",
    featured: false,
  },
  {
    title: "dsml_projects",
    description: "Collection of data science and machine learning notebooks for practice and experiments.",
    github: "https://github.com/anirudh12032008/dsml_projects",
    tags: ["Software"],
    year: "2026",
    featured: false,
  },
  {
    title: "shery_py",
    description: "Python practice repository with scripts and exercises from ongoing learning work.",
    github: "https://github.com/anirudh12032008/shery_py",
    tags: ["Software"],
    year: "2026",
    featured: false,
  },
  {
    title: "flavortown",
    description: "Community-focused project repository related to Hack Club FlavorTown activities.",
    github: "https://github.com/anirudh12032008/flavortown",
    tags: ["Community", "Software"],
    year: "2026",
    featured: false,
  },
  {
    title: "3dvase",
    description: "3D printing project for a vase model optimized for practical fabrication.",
    github: "https://github.com/anirudh12032008/3dvase",
    tags: ["3D Printing"],
    year: "2025",
    featured: false,
  }
]



const GH = () => (

    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.156-1.11-1.463-1.11-1.463-.908-.621.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.522 2 12 2z" />
  </svg>
)


export default function Projects() {
    const [active, setActive] = useState("All");
  const router = useRouter();

    const fil = active === "All" ? projects : projects.filter((p) => p.tags.includes(active));

  const getProjectHref = (project: (typeof projects)[number]) => {
    if (project.link) {
      return project.link
    }

    return `/projects/${toRouteSlug(project.title)}`
  }

  const toRouteSlug = (value: string) =>
    value
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");



    return (

        <div className="page-enter pt-16">
            <Section>
                <Heading eye="work" title="Projects" desc="A showcase of my work, from software to hardware and 3D printing" />
            
            
            
            
            
            
            
            <FadeIn delay={0.15}>
                <div className="flex flex-wrap gap-2 mb-12">
                    {TAGS.map((t) => (
                        <Tag key={t} label={t} active={active === t} onClick={() => setActive(t)} />
                    ))}
                </div>
            </FadeIn>
            
            



            
            
            <AnimatePresence mode="wait">
                <motion.div 
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6">


                    {fil.map((p, i) => (
                        <FadeIn key={p.title} delay={i * 0.1}>
                        <div
                          data-cursor
                          role="button"
                          tabIndex={0}
                          onClick={() => router.push(getProjectHref(p))}
                          onKeyDown={(event) => {
                            if (event.key === "Enter" || event.key === " ") {
                              event.preventDefault();
                              router.push(getProjectHref(p));
                            }
                          }}
                          className="group relative z-20 text-gold rounded-2xl border border-cream-200 bg-offwhite/40 backdrop-blur-[1px] p-7 transition-all duration-300 hover:shadow-[0_18px_36px_rgba(30,58,95,0.14)] hover:bg-offwhite/90 hover:-translate-y-1 hover:border-cream-300 flex flex-col h-full cursor-pointer"
                        >
                                <span className="text-xs font-sans text-ink-faint tabular-nums">{p.year}</span>
                                {/* we don;t event have camel case func :((((( */}
                            
                                <h3 className="mt-2 font-serif text-2xl font-medium text-ink group-hover:text-navy transition-colors">{p.title.charAt(0).toUpperCase() + p.title.slice(1)}</h3> 
                                <p className="mt-2 font-sans text-ink-muted font-light leading-relaxed flex-1">{p.description}</p>


                                <div className="mt-5 flex items-center ">
                                    {p.tags.map((tag) => (
                                        <span key={tag} className="tag px-2 py-1 ">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <a href={p.github} target="_blank" rel="noopener noreferrer" onClick={(event) => event.stopPropagation()} className="flex items-center gap-1.5 text-sm font-sans text-ink-muted hover:text-navy transition-colors mt-4 duration-200 flex-shrink-0 ml-3">
                                    <GH />
                                    <span className="">View</span>
                                </a>
                            </div>
                        </FadeIn>
                    ))}



            </motion.div>
             </AnimatePresence>
            
            
            
            
            
            
            
            
            </Section>
        </div>
    )
}