import { use, useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import clsx from "clsx";


export const Cursor = () => {
    const dX = useMotionValue(-100);
    const dY = useMotionValue(-100);
    // ahh need to twek this some day........
    const rX = useSpring( dX, { stiffness: 150, damping: 20, mass: 0.5 });
    const rY = useSpring( dY, { stiffness: 150, damping: 20, mass: 0.5 });

    // const [active, setActive] = useState(false);
    const [hovered, setHovered] = useState(false);
    const [ istouch, setIsTouch] = useState(false);


    useEffect(() => {
        const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
        setIsTouch(!mq.matches);

        const hc = ( e: MediaQueryListEvent) => setIsTouch(!e.matches);
        mq.addEventListener("change", hc);
        return () => mq.removeEventListener("change", hc);
    }, []); 


    useEffect(() => {
        if (istouch) return;


        const move = (e: MouseEvent) => {
            // i alr added the offset
            dX.set(e.clientX );
            dY.set(e.clientY);
         const t = e.target as HTMLElement;
         if (
            t.tagName.toLowerCase() === "a" ||
            t.tagName.toLowerCase() === "button" ||
            t.closest("a") ||
            t.closest("button") ||
            t.closest("[data-cursor]") ||
            t.closest("[data-clickable='true']")
         ) {
            setHovered(true);
         } else {
            setHovered(false);
         }


        };
        window.addEventListener("mousemove", move);
        return () => window.removeEventListener("mousemove", move);
    }, [dX, dY, istouch]);

    if (istouch) return null;

    const dotC = 'bg-olive-dark';
    const ringC = hovered ? "border-olive-dark" : "border-olive-light/50";

    return (
        <>
        
        <motion.div
        className={clsx(
            "fixed top-0 left-0 pointer-events-none z-50 rounded-full border border-solid transition-colors duration-300",
            ringC,
        )}
        style={{
            x: rX,
            y: rY,
            translateX: "-50%",
            translateY: "-50%",
        }}
        animate={{ width: hovered ? 60 : 30, height: hovered ? 60 : 30, opacity: hovered ? 0.5 : 1   }}
transition={{
    type: "spring",
    stiffness: 300,
    damping: 25
}}/>

<motion.div
className={clsx(
    "fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-50 transition-colors duration-300",
    dotC,
)}  
style={{
    x: dX,
    y: dY,
    translateX: "-50%",
    translateY: "-50%",

}}
/>
        </>
    );
};
