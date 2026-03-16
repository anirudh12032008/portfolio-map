"use client";

import {useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";


export function Hero() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true });
    useEffect(() => {
        const onMove = (e: MouseEvent) => {
            if (!ref.current) return;
            // i just like using dx and dy lol
            const dx = (e.clientX - window.innerWidth / 2)/ window.innerWidth;
            const dy = (e.clientY - window.innerHeight / 2) / window.innerHeight;
            ref.current.style.transform = `translate(${dx * 25}px, ${dy * 25}px)`;
        };
        window.addEventListener("mousemove", onMove);
        return () => window.removeEventListener("mousemove", onMove);
    }, []); 

    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden    grid-bg" >

<motion.div
    className="relative z-10 text-center max-w-5xl px-4 mx-auto"
    initial={{ opacity: 0, y: 50 }}
    animate={{opacity:1, y:0}}
    transition={{duration:0.8}}
>
    <motion.div>
<div>
    <h1 className="font-display font-light leading-none mb-0 hero ">
        <span className="text-ivory ">Hi, I'm </span>
        <span className="text-gold glow" style={{fontStyle:"italic"}}>Anirudh</span>
        <span className="text-gold/40 ">.</span>
    </h1>
</div>
    </motion.div>


    <motion.div className="mt-5 mb-8">
        <p className="font-display font-light text-cream/80">
            I'm a BUILDER
        </p>
    </motion.div>
</motion.div>
    
    
    </div>
    );
}