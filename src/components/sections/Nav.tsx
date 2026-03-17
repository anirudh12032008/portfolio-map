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
    const [dark, setDark] = useState(false);

    useEffect(() => {
        const onScroll = () => setScroll(window.scrollY > 25);
        window.addEventListener("scroll", onScroll, {passive: true});
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {setMenu(false)}, [pathname]);

    useEffect(() => {
        const root = document.documentElement;
        const stored = window.localStorage.getItem("theme");
        const isDark = stored === "dark";
        root.classList.toggle("dark", isDark);
        setDark(isDark);
    }, []);

    const toggleTheme = () => {
        const root = document.documentElement;
        const next = !dark;
        root.classList.toggle("dark", next);
        window.localStorage.setItem("theme", next ? "dark" : "light");
        setDark(next);
    };

    return (
<>
<header className={`fixed top-0 w-full insert-x-0 z-50  transition-all duration-500 border-b ${scroll ? "bg-offwhite/50 py-2 backdrop-blur-md" : "bg-offwhite/80 py-5 backdrop-blur-md"} `}>
<div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
    <Link href="/" className="font-serif text-2xl font-medium px-6  block text-ink">
        Anirudh
    </Link>





<nav className="hidden md:flex items-center gap-8">
    {links.map(({href, label}) => (
        <Link
            key={href}
            href={href}
            className={`hover:text-ink/70 transition-colors duration-300 ${pathname === href ? "text-ink font-medium" : "text-ink/70"}`}
        >
            {label}
        </Link>
    ))}

        <button
            type="button"
            onClick={toggleTheme}
            className="ml-2 rounded-full border border-cream-200 bg-offwhite/70 px-3 py-1 text-xs font-sans text-ink-muted hover:text-ink hover:border-navy transition-colors"
            aria-label="Toggle dark mode"
        >
            {dark ? "Light" : "Dark"}
        </button>
</nav>





</div>
</header>


</>
    )}