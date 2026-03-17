"use client"


import { color, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";



const cards = [


    {
        href: "/projects",
        sr:0,
        title: "Projects",
        desc: "Software, Hardware, and creative code stuff. Explore what I've built",
        // someone help me find this dot :sob:
        color: "bg-gold/10 text-gold",
        tag: "Software · Hardware · Creative Code",
    },

    {
        href: "/experience",
        sr: 2,
        title: "Experience",
        desc: "Mentorships, interships, community contributions and initiative I've been part of",
        color: "bg-blue/10 text-blue",
        tag: "Mentorship · Community · Initiatives",


    
    },

    {
        href: "/timeline",
        sr: 3,
        title: "Timeline",
        desc: "A living record of the moments that shaped how I think",
        color: "bg-green/10 text-green",
        tag: "Milestones · Journey",
    },   
{

    href: "/life",
    sr: 4,
    title: "Life Beyond Code",
    desc: "Things that color my world beyond the code and keep me curiously alive and grounded :)",
    color: "bg-pink/10 text-pink",
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
        <div>
            <motion.h2 
                variants={item}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="text-3xl font-bold text-center mb-12"
            >
                Explore
            </motion.h2>

            <motion.div

            variants={cont}
            initial="hidden"
            whileInView="show"
            viewport={{once: true, margin: "-100px"}}
            className="grid md:grid-cols-2 grid-cols-1 gap-8 max-w-4xl mx-auto"
            >


                {cards.map((c) => (
                    <motion.div key={c.href} variants={item}> 
                    
                    <Link href={c.href} className="group block h-full">
                    <div className={`relative h-full rounded-2xl border border-cream-200 ${c.color} p-6 transistion-transform duration-200 hover:border-cream-300 hover:-translate-y-1`}>
<span className="text-xs font-sans text-ink-faint tabular-nums"> {c.sr} </span>


<h3 className="mt-3 font-serif text-2xl font-medium text-ink group-hover:text-navy transition-colors duration-200"> {c.title} </h3>
<p className="text-ink-faint group-hover:text-ink transition-colors duration-200"> {c.desc} </p>
<p className="mt-5 text-[10px] uppercase tracking-widest text-ink-faint font-sans"> {c.tag} </p>

<div className="absolute bottom-6 right-6 w-8 h-8 rounded-full border border-cream-300 flex items-center justify-center text-ink-faint group-hover:border-navy group-hover:text-navy transition-colors duration-200">
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