"use client";

// import {useEffect, useRef, useState } from "react";
// import { motion, useInView } from "framer-motion";
// import Link from "next/link";


// export function Hero() {
//     const ref = useRef<HTMLDivElement>(null);
//     const isInView = useInView(ref, { once: true });
//     useEffect(() => {
//         const onMove = (e: MouseEvent) => {
//             if (!ref.current) return;
//             // i just like using dx and dy lol
//             const dx = (e.clientX - window.innerWidth / 2)/ window.innerWidth;
//             const dy = (e.clientY - window.innerHeight / 2) / window.innerHeight;
//             ref.current.style.transform = `translate(${dx * 25}px, ${dy * 25}px)`;
//         };
//         window.addEventListener("mousemove", onMove);
//         return () => window.removeEventListener("mousemove", onMove);
//     }, []); 

//     return (
//         <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden    grid-bg" >

// <motion.div
//     className="relative z-10 text-center max-w-5xl px-4 mx-auto"
//     initial={{ opacity: 0, y: 50 }}
//     animate={{opacity:1, y:0}}
//     transition={{duration:0.8}}
// >
//     <motion.div>
// <div>
//     <h1 className="font-display font-light leading-none mb-0 hero ">
//         <span className="text-ivory ">Hi, I'm </span>
//         <span className="text-gold glow" style={{fontStyle:"italic"}}>Anirudh</span>
//         <span className="text-gold/40 ">.</span>
//     </h1>
// </div>
//     </motion.div>

// {/* need to make this special later */}
//     <motion.div className="mt-5 mb-8">
//         <p className="font-display font-light text-cream/80">
//             I'm a BUILDER
//         </p>
//     </motion.div>


// <motion.div>
//     <p className="font-sans text-base text-mist/50 tracking-wide max-w-sm mx-auto mb-12">
//     Building, Learning, etcetcetedfjgvslkhdfgj </p>
// </motion.div>




// </motion.div>
    
    
//     </div>
//     );
// }






import { animate, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";


const socials = [
    {label: "GitHub", href: "https://github.com/anirudh12032008/", icon: (<svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.156-1.11-1.463-1.11-1.463-.908-.621.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.522 2 12 2z" />
      </svg>)},
    {label: "LinkedIn", href: "https://www.linkedin.com/in/anirudh-sahu-4b245327b/", icon: ( <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>)},
    {label: "Instagram", href: "https://www.instagram.com/anirudh_sahu_12/", icon: (<svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0-2A7.75 7.75 0 0 0 0 7.75v8.5A7.75 7.75 0 0 0 7.75 24h8.5A7.75 7.75 0 0 0 24 16.25v-8.5A7.75 7.75 0 0
        0 16.25 0h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0-2a7 7 0 1 0 .001 14.001A7 7 0 0 0 12 5zm4.5-.75a1.25 1.25 0 1 1-2.5-.001A1.25 1.25 0 0 1 16.5 4.25z" />
        </svg>)},
    {label: "Email", href: "mailto:anirudh12sahu@gmail.com", icon: (<svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-4 h-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
        />
      </svg>)}
];

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } }
}


const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
};




export function Hero(){

    return (
        <div className="relative min-h-[88vh] flex flex-col justify-center pt-28 pb-16 max-w-5xl mx-auto px-6">

{/* 
<motion.h1
variants={item}
className="inline-block text-xs uppercase tracking-widest text-gold mb-7 font-medium font-sans" */}
<motion.div
variants={container}
initial="hidden"
animate="show"
className="max-w-2xl">
    
<motion.h1
variants={item}
className="font-serif text-display"
style={{fontSize: "clamp(3.5rem, 9vw, 7rem)", lineHeight: 1}}
>
    Hi I'm <span className=" glow relative" style={{fontStyle:"italic"}}>Anirudh</span>.
</motion.h1>

<motion.p 
variants={item}
// yeah the yapping was needed
className="mt-7 text-lg md:text-xl text-inf-soft font-sans font-light leading-relaxed max-w-lg"

> I enjoy building things around
<span className="font-serif text-navy"> software</span>, <span className="font-serif text-navy">hardware</span>, <span className="font-serif text-navy">community</span></motion.p>



<motion.p 
variants={item}
className="mt-3 text-sm text-ink-muted">

    Developer · Hardware Builder · Mentor · Curious Learner 
</motion.p>


<motion.div variants={item} className="mt-10 flex flex-wrap gap-3">
    {socials.map((s) => (
        <a
        key={s.label}
        href={s.href}
        target="_blank"
        rel="noopener noreferrer"
        // ahhhhhhhhhhhh
       className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cream-100 border border-cream-200 text-ink text-sm font-sans hover:border-navy hover:bg-navy hover:text-white transition-all duration-200 shadow-sm" >
            {s.icon}
            {s.label}
        </a>
    ))}
</motion.div>






    </motion.div>




    <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 1.5 }}

    className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-ink-muted font-sans flex items-center gap-2">
        {/* i can't make it better so used copilot here  */}
        <span className="text-[11px] uppercase tracking-[0.18em]">
            Scroll
        </span>
        <span aria-hidden="true" className="inline-block text-base leading-none animate-bounce">
            ↓
        </span>
    </motion.div>
        </div>
    )
}