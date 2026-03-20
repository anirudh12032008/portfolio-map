"use client"





import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";



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

    <div className="md:hidden flex items-center gap-2">
        <button
            type="button"
            onClick={toggleTheme}
            aria-pressed={dark}
            aria-label="Toggle dark mode"
            className="inline-flex items-center gap-1 rounded-full border border-cream-200 bg-offwhite/70 p-1.5 text-xs font-sans text-ink-muted transition-all duration-300 hover:border-navy/50 hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy/40"
        >
            <span
                className={`inline-flex h-5 w-5 items-center justify-center rounded-full transition-colors duration-300 ${
                    dark ? "bg-surface text-ink-muted" : "bg-navy/15 text-navy"
                }`}
                aria-hidden="true"
            >
                <Sun size={11} />
            </span>
            <span
                className={`inline-flex h-5 w-5 items-center justify-center rounded-full transition-colors duration-300 ${
                    dark ? "bg-navy/15 text-navy" : "bg-surface text-ink-muted"
                }`}
                aria-hidden="true"
            >
                <Moon size={11} />
            </span>
        </button>

        <button
            type="button"
            onClick={() => setMenu((prev) => !prev)}
            aria-expanded={menu}
            aria-controls="mobile-nav"
            aria-label={menu ? "Close navigation menu" : "Open navigation menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-cream-200 bg-offwhite/70 text-ink transition-all duration-300 hover:border-navy/50 hover:text-navy hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy/40"
        >
            {menu ? <X size={18} /> : <Menu size={18} />}
        </button>
    </div>





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
            aria-pressed={dark}
            aria-label="Toggle dark mode"
            className="ml-2 inline-flex items-center gap-1 rounded-full border border-cream-200 bg-offwhite/70 p-1.5 text-xs font-sans text-ink-muted transition-all duration-300 hover:border-navy/50 hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy/40"
        >
            <span
                className={`inline-flex h-6 w-6 items-center justify-center rounded-full transition-colors duration-300 ${
                    dark ? "bg-surface text-ink-muted" : "bg-navy/15 text-navy"
                }`}
                aria-hidden="true"
            >
                <Sun size={13} />
            </span>
            <span
                className={`inline-flex h-6 w-6 items-center justify-center rounded-full transition-colors duration-300 ${
                    dark ? "bg-navy/15 text-navy" : "bg-surface text-ink-muted"
                }`}
                aria-hidden="true"
            >
                <Moon size={13} />
            </span>
        </button>
</nav>





</div>

<div
    id="mobile-nav"
    className={`md:hidden overflow-hidden transition-all duration-300 ${menu ? "max-h-96 border-t border-cream-200" : "max-h-0"}`}
>
    <nav className="max-w-5xl mx-auto px-6 py-4 flex flex-col gap-1 bg-offwhite/90 backdrop-blur-md">
        {links.map(({ href, label }) => (
            <Link
                key={href}
                href={href}
                className={`rounded-lg px-4 py-3 font-sans text-sm transition-colors duration-300 ${pathname === href ? "bg-surface text-ink font-medium" : "text-ink-muted hover:text-ink hover:bg-surface/80"}`}
            >
                {label}
            </Link>
        ))}
    </nav>
</div>
</header>


</>
    )}