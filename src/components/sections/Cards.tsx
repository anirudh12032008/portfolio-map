"use client"


import { color, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";



const cards = [


    {
        href: "/projects",
        sr:0,
        title: "Projects",
        desc: "Software, Hardware, and creative code stuff. Explore what I've built",
        // someone help me find this dot :sob:
        color: "bg-gold/10 text-gold",
        tag: "Software · Hardware · Creative Code",
    },

    {
        href: "/experience",
        sr: 2,
        title: "Experience",
        desc: "Mentorships, interships, community contributions and initiative I've been part of",
        color: "bg-blue/10 text-blue",
        tag: "Mentorship · Community · Initiatives",


    
    },

    {
        href: "/timeline",
        sr: 3,
        title: "Timeline",
        desc: "A living record of the moments that shaped how I think",
        color: "bg-green/10 text-green",
        tag: "Milestones · Journey",
    },   
{

    href: "/life",
    sr: 4,
    title: "Life Beyond Code",
    desc: "Things that color my world beyond the code and keep me curiously alive and grounded :)",
    color: "bg-pink/10 text-pink",
    tag: "Passions · Sketching · Music · Poetry",
}
]













export function Cards(){
    return (
        <div>
            cards
        </div>
    )
}