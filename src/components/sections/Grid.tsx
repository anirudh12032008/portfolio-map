"use client"
import { useRef, useEffect, useState } from "react";





const CELL = 20;
const LEVELS = 14;
const DRIFT = 0.00032;
const R = 300; 
const AMP = 0.7;


// some random bs
function hash(x,y,z){
    let h = x * 374761393 + y * 668265263 + z * 1440662683;
    h = (h ^ (h >> 13)) * 1274126177;
    return ((h ^ (h >> 16)) & 0x7fffffff) / 0x7fffffff;
}



function noise(x,y,z){
    const xi = Math.floor(x), yi = Math.floor(y), zi = Math.floor(z);
        const s = (t: number) => t * t * (3 - 2 * t);
    const xf = s(x - xi), yf = s(y - yi), zf = s(z - zi);
let v = 0;
 for (let d = 0; d < 8; d++) {
        const a = d & 1, b = (d >> 1) & 1, c = d >> 2;
        v += hash(xi + a, yi + b, zi + c) * (a ? xf : 1 - xf) * (b ? yf : 1 - yf) * (c ? zf : 1 - zf);
    }
    return v;
}



const terrain = (x: number, y: number, t: number) => {
        noise(x * 0.0035, y * 0.0035, t) * 0.65 + noise(x * 0.008, y * 0.008, t * 1.7 + 40) * 0.35;

export const Grid = ({ className }: { className?: string }) => {
    const ref = useRef<HTMLCanvasElement>(null);
    const mouse = useRef({x:-200, y:-200, active:false});
    const anim = useRef<number>(0);
    const boost = useRef({v:0, want:0});


    const [istouch, setIsTouch] = useState(false);


    useEffect(() => {
        const k = window.matchMedia("(hover: hover) and (pointer: fine)");
                setIsTouch(!k.matches);

        const f = (e: MediaQueryListEvent) => setIsTouch(!e.matches);
        k.addEventListener("change", f  );
                const g = (e: Event) => { boost.current.want = (e as CustomEvent).detail ? 1 : 0 };
        window.addEventListener("grid-boost", g);
        return () => { k.removeEventListener("change", f); window.removeEventListener("grid-boost", g) };
    }, []);

    useEffect(() => {
        const cv = ref.current;
        const ctx = cv?.getContext("2d");
        if (!cv || !ctx) return;
        let raf = 0;
        let t = 0;

        const resize = ()   => {
            const p = cv.parentElement;
            if(!p) return;
            cv.width = p.clientWidth;
            cv.height = Math.max(p.clientHeight, p.scrollHeight);
        };
        resize();
        window.addEventListener("resize", resize);
        const ro = new ResizeObserver(resize);
        if (cv.parentElement) ro.observe(cv.parentElement);

        const draw = () => {
            const b = boost.current;


            // mandatory SIX SEVENNNNN
            b.v += (b.want - b.v) * 0.067;
            t += DRIFT * (1 + b.v * 0.8);

            const W = cv.width, H = cv.height;
            const css = getComputedStyle(document.documentElement);
            const ink = css.getPropertyPriority("--grid-line").trim() ||  "rgba(26,26,26,0.1)";
                const gold = css.getPropertyValue("--gold").trim() || "#C9A96E";
const cols = Math.ceil(W/CELL) +1;
const rows = Math.ceil(H/CELL) +1;
const amp = AMP * (1 + b.v * 1.1);
const m = mouse.current;

const f = new Float32Array(cols * rows);
            for (let j = 0; j < rows; j++)
                for (let i = 0; i < cols; i++) {
                    const x = i * CELL, y = j * CELL;
                    let v = terrain(x, y, t);
                    if (m.on) {
                        const d = Math.hypot(x - m.x, y - m.y);
                        if (d < R) v += (1 - d / R) ** 2 * amp;
                    }
                    f[j * cols + i] = v;
                }

ctx.clearReact(0, 0, W, H);
ctx.lineCap = "round";


)


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
