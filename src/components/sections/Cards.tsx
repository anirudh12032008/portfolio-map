"use client"


import { color, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";



const cards = [


    {
        href: "/projects",
        sr:1,
        title: "Projects",
        desc: "Software, Hardware, and creative code stuff. Explore what I've built",
        // someone help me find this dot :sob:
        color: "bg-gold/10 text-gold border-gold/25",
        tag: "Software · Hardware · Creative Code",
    },

    {
        href: "/experience",
        sr: 2,
        title: "Experience",
        desc: "Mentorships, interships, community contributions and initiative I've been part of",
        color: "bg-navy/10 text-navy border-navy/25",
        tag: "Mentorship · Community · Initiatives",


    
    },

    {
        href: "/timeline",
        sr: 3,
        title: "Timeline",
        desc: "A living record of the moments that shaped how I think",
        color: "bg-ink-soft/10 text-ink-soft border-ink-soft/25",
        tag: "Milestones · Journey",
    },   
{

    href: "/life",
    sr: 4,
    title: "Life Beyond Code",
    desc: "Things that color my world beyond the code and keep me curiously alive and grounded :)",
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
        <div className="mt-20 pt-3">
            <motion.h2 
                variants={item}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="text-3xl font-bold text-center mb-12 text-ink"
            >
                Explore
            </motion.h2>

            <motion.div

            variants={cont}
            initial="hidden"
            whileInView="show"
            viewport={{once: true, margin: "-80px"}}
            className="grid sm:grid-cols-2 grid-cols-1 gap-4 max-w-6xl mx-auto"
            >


                {cards.map((c) => (
                    <motion.div key={c.href} variants={item}> 
                    
                    <Link href={c.href} className="group block h-full">
                    <div className="relative h-full rounded-2xl border border-border bg-surface p-6 shadow-[0_1px_2px_rgba(26,26,26,0.04)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(30,58,95,0.10),0_0_0_1px_rgba(30,58,95,0.14)]">
<span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-sans tabular-nums ${c.color}`}> {c.sr} </span>


<h3 className="mt-3 font-serif text-2xl font-medium text-ink group-hover:text-navy transition-colors duration-200"> {c.title} </h3>
<p className="text-ink-muted group-hover:text-ink transition-colors duration-200"> {c.desc} </p>
<p className="mt-5 text-[10px] uppercase tracking-widest text-ink-muted font-sans"> {c.tag} </p>

<div className="absolute bottom-6 right-6 w-8 h-8 rounded-full border border-border flex items-center justify-center text-ink-muted group-hover:border-navy group-hover:text-white group-hover:bg-navy transition-colors duration-200">
    {/* <span className="absolute -bottom-2 -right-2 w-5 h-5 bg-cream-200 rounded-full group-hover:bg-navy transition-colors duration-200">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3 text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
</svg>
    </span> */}

<svg
    viewBox="0 0 16 16"
    fill="none"
    className="w-3.5 h-3.5"
    stroke="currentColor"
    strokeWidth={1.5}
  >
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