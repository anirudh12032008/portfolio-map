"use client"

import { FadeIn, Heading, Section } from "@/components/sections/primitives"
import Link from "next/link"


const inter = [
    {
        title: "Research",
        desc: "The feeling of going into the depths of a topic is one of the best feelings for me :) I have coauthored 2 research papers published in JKLST",
        link: "/life/research"
    },
    {
        title: "Piano",
        desc: "I started playing piano when I was 10 and have been playing ever since, I also have a YouTube channel where I post piano covers and tutorials <3  ",
        // link: "https://www.youtube.com/watch?v=SmIjL40Wq74&list=PLQoQcohWBikjM_Go585JNFOknpXOOduNZ"
        link: "/life/piano"
    },
    {
        title: "Sketching",
        desc: "I love sketching portraits :) I really enjoy just spending the whole day sketching and listening to music, it's really relaxing and fun",
        link: "/life/sketching"
    },
    {
        title: "Cooking",
        desc: "Starting cooking during the pandemic was a game changer for me, now whenever I feel stressed or just want to have some fun I cook :) ",
        link: "/life/cooking"
    },
    {
        title: "Poetry",
        desc: "I find poetry the best way to express my thoughts and to make sense around me, short simple but still very deep",
        link: "/life/poetry"
    },
    {
        title: "Anchoring",
        desc: "I have been doing achoring in my school from 7th grade and I really like being on stage and seeing soo many people listening, I also did anchoring in a relative wedding hehehe",
        link: "/life/anchoring"
    }
]



export default function Life() {
    return (
        <>
        <div className="page-enter pt-16 md:pt-24">
<Section>
<Heading eye="life" title="Life Beyond Code" desc="The things that keep me curious, grounded, and occasionally surprised like covered in flour" />
        <FadeIn delay={0.2}>
            <div className="mt-16 text-center max-w-xl mx-auto">
                <p className="font-serif italic text-xl md:text-2xl text-ink-soft leading-relaxed">
                    The best builders are the ones who remain genuinely curious about everything not just their field :3 
                </p>
                <p className="text-sm text-ink-faint mt-5 font-sans uppercase tracking-widest">
                    - A working belief of mine :) 
                </p>
            </div>
        </FadeIn>





        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-6">
            {inter.map((item, index) => (
                <FadeIn key={index} delay={0.3 + index * 0.1}>
                    <Link href={item.link} className="group block h-full">
                        <article className="h-full rounded-2xl border border-border bg-offwhite/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-navy/30 hover:shadow-lg">
                            

                            <h3 className="mt-4 font-serif text-3xl leading-tight text-ink transition-colors duration-200 group-hover:text-navy">
                                {item.title}
                            </h3>
                            <p className="mt-3 leading-relaxed text-ink-soft transition-colors duration-200 group-hover:text-ink">
                                {item.desc}
                            </p>

                            <div className="mt-6 inline-flex items-center gap-2 text-sm text-ink-muted transition-colors duration-200 group-hover:text-navy">
                                <span>Open</span>
                                <svg
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                                    stroke="currentColor"
                                    strokeWidth={1.5}
                                >
                                    <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </article>
                    </Link>
                </FadeIn>
            ))}
        </div>



</Section>
        </div>
            </>
    )}