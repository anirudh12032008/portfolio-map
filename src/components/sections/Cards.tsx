"use client"


import { motion } from "framer-motion";
import Link from "next/link";



const spots = [
    { href: "/projects", n: "01", title: "Projects", desc: "stuff i built, software + hardware" },
    { href: "/experience", n: "02", title: "Experience", desc: "work, mentoring, community programs" },
    { href: "/timeline", n: "03", title: "Timeline", desc: "moments that changed how i build" },
    { href: "/life", n: "04", title: "Life Beyond Code", desc: "what i do off screen" },
]

const item = { hidden:{ opacity:0, y:10 }, show:{ opacity:1, y:0, transition:{ duration:0.5, ease:"easeOut" } } }
const cont = { hidden:{}, show:{ transition:{ staggerChildren:0.08 } } }






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
                Explore 
            </motion.h2>

            <motion.div

            variants={cont}
            initial="hidden"
            whileInView="show"
            viewport={{once: true, margin: "-80px"}}
            className="divide-y divide-border"
            >


{spots.map((s) => (
                    <motion.div key={s.href} variants={item}>
                        <Link href={s.href} data-cursor className="group flex items-baseline gap-5 py-5">
                            <span className="font-sans text-xs text-ink-muted tabular-nums">{s.n}</span>
                            <span className="font-serif text-2xl text-ink group-hover:text-navy transition-colors">{s.title}</span>
                            <span className="text-sm text-ink-muted ml-auto text-right hidden sm:block">{s.desc}</span>
                        </Link>
                    </motion.div>
                ))}





            </motion.div>
        </div>
    )
}