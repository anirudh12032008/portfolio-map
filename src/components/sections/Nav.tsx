"use client"





import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";



const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/experience", label: "Experience" },
    { href: "/timeline", label: "Timeline" },
    { href: "/life", label: "Life Beyond Code" },
]


export function Nav() {
    const pathname = usePathname();
    const [menu, setMenu] = useState(false);
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const onScroll = () => setScroll(window.scrollY > 25);
        window.addEventListener("scroll", onScroll, {passive: true});
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {setMenu(false)}, [pathname]);
    return (
<>
nav</>
    )}