"use client"


import { motion, useInView } from "framer-motion";
import { useRef } from "react"; 
import Link from "next/link";




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





