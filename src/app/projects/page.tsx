"use client"


import {act, useState} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section, Heading, FadeIn, Tag } from "@/components/sections/primitives";



const TAGS = ["All", "Software", "Hardware", "Community", "3D Printing"]

// these are scrapped from my github latest ones rn 
const projects = [
  {
    title: "portfolio-map",
    description: "Interactive portfolio map app built with TypeScript for showcasing projects visually.",
    github: "https://github.com/anirudh12032008/portfolio-map",
    tags: ["Software"],
    year: "2026",
    featured: true,
  },
  {
    title: "macropad",
    description: "A hand-wired and 3D-printed custom macropad project built completely from scratch.",
    github: "https://github.com/anirudh12032008/macropad",
    tags: ["Hardware", "3D Printing"],
    year: "2026",
    featured: true,
  },
  {
    title: "ECG",
    description: "Embedded C++ project for ECG signal capture and heart monitoring experiments.",
    github: "https://github.com/anirudh12032008/ECG",
    tags: ["Hardware", "Software"],
    year: "2025",
    featured: true,
  },
  {
    title: "portal-vr",
    description: "Web project powering PORTAL VR event content and participant-facing pages.",
    github: "https://github.com/anirudh12032008/portal-vr",
    tags: ["Community", "Software"],
    year: "2025",
    featured: true,
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

    const fil = active === "All" ? projects : projects.filter((p) => p.tags.includes(active));



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
            
            



            
            
            
            
            
            
            
            
            
            
            
            
            </Section>
        </div>
    )
}