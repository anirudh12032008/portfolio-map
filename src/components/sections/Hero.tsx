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






import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";


const socials = [
    {label: "GitHub", href: "https://github.com/anirudh12032008/"},
    {label: "LinkedIn", href: "https://www.linkedin.com/in/anirudh-sahu-4b245327b/"},
    {label: "Email", href: "mailto:anirudh12sahu@gmail.com"}
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
    Hi I'm <span className="text-gold glow relative" style={{fontStyle:"italic"}}>Anirudh</span>.
</motion.h1>

<motion.p 
variants={item}
// yeah the yapping was needed
className="mt-7 text-lg md:text-xl text-inf-soft font-sans font-light leading-relaxed max-w-lg"

> I enjoy building things around
<span className="font-serif text-navy">software</span>, <span className="font-serif text-navy">hardware</span>, <span className="font-serif text-navy">community</span></motion.p>



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
        className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-cream-200 bg-cream-100 text-ink hover:bg-navy hover:border-navy hover:text-white transition-colors duration-300 shadow-sm" >
            {s.label}
        </a>
    ))}
</motion.div>






    </motion.div>
        </div>
    )
}