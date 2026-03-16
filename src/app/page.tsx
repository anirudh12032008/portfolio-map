"use client";

import { Cursor } from "@/components/sections/Cursor";
import { Grid } from "@/components/sections/Grid";
import { Hero } from "@/components/sections/Hero";
import { useState } from "react";


export default function Home() {
  return (
    <div className="relative w-full overflow-hidden ">
      <Cursor />
      {/* patience my friend */}
      <section className="justify-center pt-32 relative min-h-screen ">

      <Grid className="absolute inset-0" /> 
      </section>

      {/* temp removing this as it did not fit well in the theme */}
      {/* <Hero/> */}
    </div>
  );
}
