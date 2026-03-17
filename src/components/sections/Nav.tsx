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
<header className={`fixed top-0 insert-x-0 z-10  transition-all duration-500 border-b ${scroll ? "bg-offwhite/50 py-2 backdrop-blur-md" : "bg-offwhite/80 py-5 backdrop-blur-md"} `}>
<div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
    <Link href="/" className="font-serif text-2xl font-medium px-6  block text-ink">
        Anirudh
    </Link>
</div>
</header>


</>
    )}