"use client"
import { useRef, useEffect, useCallback, useState } from "react";


interface GridProps {
    className?: string;
}


export const Grid = ({className}: GridProps) => {
    const ref = useRef<HTMLCanvasElement>(null);
    const mouseref = useRef({x:-200, y:-200, active:false});
    const anim = useRef<number>(0);


    const [istouch, setIsTouch] = useState(false);

    const SPACING = 40;
    const WIDTH = 2;
    const COLOR = "rgba(50,62,20,0.08)";
    const RADIUS = 205;
    // six sevennnnn
    const STRENGTH = 1.067;

    useEffect(() => {
        const k = window.matchMedia("(hover: hover) and (pointer: fine)");
        const handleChange = (e: MediaQueryListEvent) => setIsTouch(!e.matches);
        k.addEventListener("change", handleChange);
        setIsTouch(!k.matches);
        return () => k.removeEventListener("change", handleChange);
    }, []);


const draw = useCallback(() => {
    const canavas = ref.current;
    if (!canavas) return;
    const ctx = canavas.getContext("2d");
    if (!ctx) return;

    const {width, height} = canavas;
    const {x: mx, y: my, active} = mouseref.current;

    ctx.clearRect(0, 0, width, height);
    ctx.strokeStyle = COLOR;
    ctx.lineWidth = WIDTH;


    for (let x = 0; x <= width; x += SPACING) {
        ctx.beginPath();
        for (let y = 0; y <= height; y += SPACING) {
            let drx = x;
            let dry = y;
            if (active) {
                const dx = x - mx;
                const dy = y - my;
                const d = Math.sqrt(dx * dx + dy * dy);
                if (d < RADIUS) {
                    const force = ( 1- d / RADIUS) * STRENGTH;
                    const angle = Math.atan2(dy, dx);
                    const push = force* (STRENGTH - d) * 0.5
                    drx += force * Math.cos(angle) * push; 
                    dry += force * Math.sin(angle) * push;
                }
            }

            if (y === 0) {
                ctx.moveTo(drx, dry);
            } else {
                ctx.lineTo(drx, dry);
            }
        }
        ctx.stroke();
    }


    for (let y = 0; y <= height; y += SPACING) {
        ctx.beginPath();
        for (let x = 0; x <= width; x += SPACING) {
            let drx = x;
            let dry = y;
            if (active) {
                const dx = x - mx;
                const dy = y - my;
                const d = Math.sqrt(dx * dx + dy * dy);
                if (d < RADIUS) {
                    const force = ( 1- d / RADIUS) * STRENGTH;
                    const angle = Math.atan2(dy, dx);
                    drx += force * Math.cos(angle);
                    dry += force * Math.sin(angle);
                }
            }

            if (x === 0) {
                ctx.moveTo(drx, dry);
            } else {
                ctx.lineTo(drx, dry);
            }   
        }
        ctx.stroke();
    }
anim.current = requestAnimationFrame(draw);
}, []);

useEffect(() => {
    if (istouch) return;
        const canavas = ref.current;
        if (!canavas) return;


        const resize = () => {
            const parent = canavas.parentElement;
            if (!parent) return;
            canavas.width = parent.clientWidth;
            canavas.height = Math.max(parent.clientHeight, parent.scrollHeight);
        };
                // const force = Math.max(-RADIUS, Math.min(RADIUS, STRENGTH * (1 - d / RADIUS)));
                // const angle = Math.atan2(dy, dx);
                // drx += force * Math.cos(angle);
                // dry += force * Math.sin(angle);

                resize();
                window.addEventListener("resize", resize);
                const observer = new ResizeObserver(resize);
                if (canavas.parentElement) observer.observe(canavas.parentElement);
                anim.current = requestAnimationFrame(draw);

                const onMove = (e: MouseEvent) => {
                    const rect = canavas.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;

                    if (x >=0 && x <= rect.width && y >=0 && y <= rect.height) {
                        mouseref.current = {x, y, active: true};
                    } else {
                        mouseref.current = { ...mouseref.current, active: false};
                    }
                };
                window.addEventListener("mousemove", onMove);

                return () => {
                    window.removeEventListener("resize", resize);
                    window.removeEventListener("mousemove", onMove);
                    observer.disconnect();
                    cancelAnimationFrame(anim.current);
                };
}, [istouch, draw]);

if (istouch) {
    return (
      <div
        className={`${className} bg-grid-hero`}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
    );
}


return (
    <canvas
    ref={ref}
        className={className}
        style={{ position: "absolute", inset: 0, width: 
        '100%', height: '100%', pointerEvents: 'none', zIndex: 0,
         }}


         />

        );
};
