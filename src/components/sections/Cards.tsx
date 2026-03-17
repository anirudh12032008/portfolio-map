"use client"


import { motion } from "framer-motion";
import Link from "next/link";



const cards = [


    {
        href: "/projects",
        sr:1,
        title: "Projects",
        desc: "Things I've built across software, hardware, and side experiments.",
        color: "bg-gold/10 text-gold border-gold/25",
        tag: "Software · Hardware · Creative Code",
    },

    {
        href: "/experience",
        sr: 2,
        title: "Experience",
        desc: "Work, mentoring, and community programs I’ve been part of.",
        color: "bg-navy/10 text-navy border-navy/25",
        tag: "Mentorship · Community · Programs",


    
    },

    {
        href: "/timeline",
        sr: 3,
        title: "Timeline",
        desc: "Key moments that changed how I build and think.",
        color: "bg-ink-soft/10 text-ink-soft border-ink-soft/25",
        tag: "Milestones · Journey",
    },   
{

    href: "/life",
    sr: 4,
    title: "Life Beyond Code",
    desc: "What I do outside coding that keeps me creative and grounded.",
    color: "bg-ink-muted/10 text-ink-muted border-ink-muted/25",
    tag: "Passions · Sketching · Music · Poetry",
}
]





const cont = {
    hidden: {
    },
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
}







export function Cards(){
    return (
        <div className="mt-24 pt-2">
            <motion.h2 
                variants={item}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="text-3xl font-bold text-center mb-12 text-ink"
            >
                Explore More
            </motion.h2>

            <motion.div

            variants={cont}
            initial="hidden"
            whileInView="show"
            viewport={{once: true, margin: "-80px"}}
            className="grid sm:grid-cols-2 grid-cols-1 gap-5 max-w-5xl mx-auto"
            >


                {cards.map((c) => (
                    <motion.div key={c.href} variants={item}> 
                    
                    <Link href={c.href} className="group block h-full">
                                        <div data-cursor className="relative h-full rounded-xl border border-border bg-offwhite/70 backdrop-blur-[1px] px-6 py-5 shadow-[0_2px_6px_rgba(26,26,26,0.03)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_28px_rgba(30,58,95,0.10)]">
{/* <span className="inline-block text-xs font-mono-dm text-ink-muted tabular-nums"></span> */}


<h3 className="mt-2 font-serif text-[1.7rem] leading-tight font-medium text-ink group-hover:text-navy transition-colors duration-200"> {c.title} </h3>
<p className="mt-2 text-ink-soft group-hover:text-ink transition-colors duration-200 leading-relaxed"> {c.desc} </p>
<p className="mt-4 text-[10px] uppercase tracking-[0.14em] text-ink-muted font-sans"> {c.tag} </p>

<div className="mt-5 inline-flex items-center gap-2 text-sm font-sans text-ink-muted group-hover:text-navy transition-colors duration-200">
    <span>Open</span>
    <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5" stroke="currentColor" strokeWidth={1.5}>
        <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
</div>
</div>


</Link>
                    </motion.div>
                ))}





            </motion.div>
        </div>
    )
}