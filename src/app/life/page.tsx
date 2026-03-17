"use client"

import { FadeIn, Heading, Section } from "@/components/sections/primitives"

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
</Section>
        </div>
            </>
    )}