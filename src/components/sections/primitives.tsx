"use client"


import { motion, useInView } from "framer-motion";
import { useRef } from "react"; 
import Link from "next/link";
import clsx from "clsx";




export function FadeIn({
    children, delay=0, dir="up", className="",
}: { 
    children: React.ReactNode;
    delay?: number;
    dir?: "up" | "down" | "left" | "right" | "none";
    className?: string;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true , margin: "-100px"});
    const offsets: Record<string, {x?: number; y?: number}> = {
        up: {y: 20},
        down: {y: -20},
        left: {x: 20},
        right: {x: -20},
        none: {},
    };


    return (
        <motion.div
        ref={ref}
        initial={{ opacity: 0, ...offsets[dir] }}
        animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut", delay }}
        className={className}
        >
            {children}
        </motion.div>
    )


}








export function Section({children, className="", id,}: {children: React.ReactNode; className?: string; id?: string   }) {
    return (
        <section id={id} className={`max-w-5xl mx-auto px-6 py-16 md:py-24 ${className}`}>
            {children}
        </section>
    );
}




export function Heading({eye, title, desc, center=false}: {eye?: string; title: string; desc?: string; center?: boolean}) {
    return (
        <FadeIn className={`center ? "text-center" : "" `}>
            <div className={clsx("mb-10 md:mb-14", center && "flex flex-col items-center")}>
                {eye && <span className="text-xs inline-block font-sans font-medium uppercase tracking-widest text-gold mb-3">{eye}</span>}
                
                <h2 className="text-display font-serif text-6xl text-ink">{title}</h2>
                {desc && <p className="text-base text-ink-muted font-light leading-relaxed max-w-xl mt-4">{desc}</p>}
            </div>
        </FadeIn>
    )
}




export function Tag({
  label,
  active = false,
  onClick,
}: {
  label: string;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={clsx("tag cursor-pointer select-none", active && "active")}
    >
      {label}
    </button>
  );
}



