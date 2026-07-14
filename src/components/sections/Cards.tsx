"use client"

import { motion } from "framer-motion";
import Link from "next/link";

// simple numbered list instead of card grid, keeps it plain
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
        <div className="mt-24 pt-2 max-w-2xl mx-auto px-6">
            <motion.h2
                initial={{ opacity:0, y:15 }}
                whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }}
                transition={{ duration:0.6 }}
                className="font-serif text-display text-3xl text-ink mb-10"
            >
                Explore
            </motion.h2>

            <motion.div
                variants={cont}
                initial="hidden"
                whileInView="show"
                viewport={{ once:true, margin:"-80px" }}
                className=""
            >
                {spots.map((s) => (
                    <motion.div key={s.href} variants={item}>
                        <Link href={s.href} data-cursor className="group flex items-baseline gap-5 py-5">
                            <span className="font-serif text-2xl text-ink group-hover:text-navy transition-colors">{s.title}</span>
                            <span className="text-sm text-ink-muted ml-auto text-right hidden sm:block">{s.desc}</span>
                        </Link>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}
