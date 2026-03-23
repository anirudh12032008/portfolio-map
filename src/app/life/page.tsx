"use client"

import { FadeIn, Heading, Section } from "@/components/sections/primitives"
import Link from "next/link"


const inter = [
    {
        title: "Research Mentorship",
        desc: "Mentored 8 teams of international high school students in an 8-week research program across two cohorts. Co-authored two research papers published in JKLST.",
        link: "/life/research"
    },
    {
        title: "Piano & Music",
        desc: "Learned piano from a young age and regularly practiced through covers, tutorials, and performances at school events. Shared music tutorials online.",
        link: "/life/piano"
    },
    {
        title: "KBC (National TV Appearance)",
        desc: "Participated in Kaun Banega Crorepati (Indian Who Wants to Be a Millionaire) and won ₹640k. Same quiz game I built 7 years earlier in QBASIC.",
        link: "/life/kbc"
    },
    {
        title: "Sketching",
        desc: "Started sketching during COVID and practiced regularly creating portraits of famous people, friends, and family.",
        link: "/life/sketching"
    },
    {
        title: "Poetry",
        desc: "Wrote poetry primarily in Hindi to express feelings and thoughts. Performed at school publications and Bhopal Literature Festival with award recognition.",
        link: "/life/poetry"
    },
    {
        title: "Cooking",
        desc: "Learned cooking at home during lockdown. Started preparing meals for myself and family through self-teaching and experimentation.",
        link: "/life/cooking"
    },
    {
        title: "Competitions & Certificates",
        desc: "Participated in multiple academic and extracurricular competitions across debates, technical, and creative events.",
        link: "/life/achievements"
    },
    {
        title: "Courses & Learning",
        desc: "Completed online courses including CS50, Stanford, Google, and cloud programs. Explored concepts across different domains.",
        link: "/life/courses"
    }
]



export default function Life() {
    return (
        <>
        <div className="page-enter pt-16 md:pt-24">
<Section>
<Heading eye="life" title="Life Beyond Code" desc="The things that keep me curious, grounded, and occasionally surprised like covered in flour" />
        <FadeIn delay={0.2}>
            <div className="mt-16 text-center max-w-xl mx-auto">
                <p className="font-serif italic text-xl md:text-2xl text-ink-soft leading-relaxed">
                    The best builders are the ones who remain genuinely curious about everything not just their field :3 
                </p>
                <p className="text-sm text-ink-faint mt-5 font-sans uppercase tracking-widest">
                    - A working belief of mine :) 
                </p>
            </div>
        </FadeIn>





        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-6">
            {inter.map((item, index) => (
                <FadeIn key={index} delay={0.3 + index * 0.1}>
                    <Link href={item.link} className="group block h-full">
                        <article className="h-full rounded-2xl border border-border bg-offwhite/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-navy/30 hover:shadow-lg">
                            

                            <h3 className="mt-4 font-serif text-3xl leading-tight text-ink transition-colors duration-200 group-hover:text-navy">
                                {item.title}
                            </h3>
                            <p className="mt-3 leading-relaxed text-ink-soft transition-colors duration-200 group-hover:text-ink">
                                {item.desc}
                            </p>

                            <div className="mt-6 inline-flex items-center gap-2 text-sm text-ink-muted transition-colors duration-200 group-hover:text-navy">
                                <span>Open</span>
                                <svg
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                                    stroke="currentColor"
                                    strokeWidth={1.5}
                                >
                                    <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </article>
                    </Link>
                </FadeIn>
            ))}
        </div>



</Section>
        </div>
            </>
    )}