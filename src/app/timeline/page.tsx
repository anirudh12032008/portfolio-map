"use client"





// help taken from external library!!!!!!!!!!!

import { Circle } from "lucide-react";
import { Heading, Section } from "@/components/sections/primitives";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";







const events = [
  {
    date: "2021",
    title: "First Program + Science Fair",
    subtitle: "School Lab / QBASIC",
    description: "Built a simple quiz app in QBASIC and showed it at our school science fair; that was the moment coding became serious for me.",
  },
  {
    date: "2020 - 2021",
    title: "Early Game Dev Phase",
    subtitle: "Unity & C#",
    description: "Learned Unity and C# by making a small 3D prototype and shipping an Android APK just for fun.",
  },
  {
    date: "Early 2022",
    title: "Shift to Web Development",
    subtitle: "HTML, CSS, & JavaScript",
    description: "Moved from Android experiments to web and built 'How Was Your Day?' using Google Sheets as a makeshift database.",
  },
  {
    date: "May 2022",
    title: "First Open Source Win",
    subtitle: "Strapi Plugin Development",
    description: "Built a to-do plugin for Strapi and got my first bit of community recognition (and a Strapi hoodie).",
  },
  {
    date: "Late 2022",
    title: "First Client Attempt",
    subtitle: "E-commerce Development",
    description: "Tried building an e-commerce site for a local business and learned hard lessons about admin flows and payment setup.",
  },
  {
    date: "Dec 2022",
    title: "Zero to One Program Volunteer",
    subtitle: "Sheryians Coding School",
    description: "Supported high school learning sessions and program operations for foundational IT education.",
  },
  {
    date: "2023",
    title: "Deeper Full-Stack Learning",
    subtitle: "Next.js & Python",
    description: "Built a stronger Next.js project with Stripe and used Python for scraping and basic data work.",
  },
  {
    date: "2023 - 2024",
    title: "Research Mentoring",
    subtitle: "Incognito Blueprint",
    description: "Mentored high school students through research planning, writing, and final presentation work.",
  },
  {
    date: "2024 - 2025",
    title: "Hardware Build Phase",
    subtitle: "Hack Club / Embedded Systems",
    description: "Built things like a wireless rover, ESP32 boards, and a DIY ECG prototype.",
  },
  {
    date: "2025",
    title: "Portal VR (YSWS)",
    subtitle: "Hack Club You Ship We Ship",
    description: "Pitched and ran a VR-focused YSWS program, mentored students, and handled reviews and fulfillment.",
  },
];

export default function Timeline() {
  return (
    <div className="page-enter pt-16">
      <Section>
        <Heading
          eye="Journey"
          title="Timeline"
          desc="Key moments that shaped how I build, learn, and work with communities."
        />

        <VerticalTimeline lineColor="var(--border)">
          {events.map((event) => (
            <VerticalTimelineElement
              key={`${event.date}-${event.title}`}
              date={event.date}
              dateClassName="!text-ink-muted !font-sans"
              iconStyle={{
                background: "var(--offwhite)",
                color: "var(--navy)",
                border: "1px solid var(--border)",
              }}
              contentStyle={{
                background: "color-mix(in srgb, var(--offwhite) 78%, transparent)",
                color: "var(--ink)",
                border: "1px solid var(--border)",
                borderRadius: "1rem",
                boxShadow: "0 10px 30px color-mix(in srgb, var(--ink) 10%, transparent)",
                backdropFilter: "blur(1px)",
              }}
              contentArrowStyle={{ borderRight: "7px solid var(--border)" }}
              icon={<Circle size={18} />}
            >
              <h3 className="font-serif text-2xl text-ink">{event.title}</h3>
              <h4 className="font-sans text-sm text-ink-muted mt-1">{event.subtitle}</h4>
              <p className="font-sans text-sm text-ink-soft mt-3 leading-relaxed">{event.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </Section>
    </div>
  );
}