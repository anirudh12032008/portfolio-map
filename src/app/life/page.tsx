"use client"

import { FadeIn, Heading, Section } from "@/components/sections/primitives"
import { link } from "fs"


const inter = [
    {
        title: "Research",
        desc: "The feeling of going into the depths of a topic is one of the best feelings for me :) I have coauthored 2 research papers published in JKLST",
        color: "bg-cream-200",
        link: "/research"
    },
    {
        title: "Piano",
        desc: "I started playing piano when I was 10 and have been playing ever since, I also have a YouTube channel where I post piano covers and tutorials <3  ",
        color: "bg-cream-200",
        // link: "https://www.youtube.com/watch?v=SmIjL40Wq74&list=PLQoQcohWBikjM_Go585JNFOknpXOOduNZ"
        link: "/piano"
    },
    {
        title: "Sketching",
        desc: "I love sketching portraits :) I really enjoy just spending the whole day sketching and listening to music, it's really relaxing and fun",
        color: "bg-cream-200",
        link: "/sketching"
    },
    {
        title: "Cooking",
        desc: "Starting cooking during the pandemic was a game changer for me, now whenever I feel stressed or just want to have some fun I cook :) ",
        color: "bg-cream-200",
        link: "/cooking"
    },
    {
        title: "Poetry",
        desc: "I find poetry the best way to express my thoughts and to make sense around me, short simple but still very deep",
        color: "bg-cream-200",
        link: "/poetry"
    },
    {
        title: "Anchoring",
        desc: "I have been doing achoring in my school from 7th grade and I really like being on stage and seeing soo many people listening, I also did anchoring in a relative wedding hehehe",
        color: "bg-cream-200",
        link: "/anchoring"
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





        <div className="mt-24 space-y-16">
            {inter.map((item, index) => (
                <FadeIn key={index} delay={0.3 + index * 0.1}>
                    <a href={item.link} className={`block p-6 rounded-lg shadow-lg ${item.color} hover:bg-cream-300 transition-colors duration-300`}>
                        <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                        <p className="text-gray-700">{item.desc}</p>
                    </a>
                </FadeIn>
            ))}
        </div>



</Section>
        </div>
            </>
    )}