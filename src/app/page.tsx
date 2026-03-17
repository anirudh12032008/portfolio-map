"use client";

import { Cards } from "@/components/sections/Cards";
import { Cursor } from "@/components/sections/Cursor";
import { Hero } from "@/components/sections/Hero";
import { useState } from "react";


export default function Home() {
  return (
    <div className="relative w-full overflow-hidden ">
      {/* <Cursor /> */}
      {/* patience my friend */}
      <section className="justify-center relative min-h-screen ">
      <Hero/>
      <Cards/>
      </section>

      {/* temp removing this as it did not fit well in the theme */}
      {/* adding back but with significant changes */}
    </div>
  );
}
