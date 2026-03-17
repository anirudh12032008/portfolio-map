"use client"





// help taken from external library!!!!!!!!!!!

import { Circle } from "lucide-react";
import { Heading, Section } from "@/components/sections/primitives";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";







const events = [
  {
    date: "2021",
    title: "First Program & Science Fair",
    subtitle: "School Lab / QBASIC",
    description: "Built a CLI quiz program in QBASIC and presented it to 50+ visitors at a school science fair, sparking a passion for building systems.",
  },
  {
    date: "2020 - 2021",
    title: "Game Development Exploration",
    subtitle: "Unity & C#",
    description: "Self-taught Unity and C# basics to create a 3D playable prototype with raycasting mechanics, eventually exporting it as an Android APK.",
  },
  {
    date: "Early 2022",
    title: "Web Development Transition",
    subtitle: "HTML, CSS, & JavaScript",
    description: "Pivoted from heavy Android tooling to web development, building the 'How Was Your Day?' project using Google Sheets as a clever database workaround.",
  },
  {
    date: "May 2022",
    title: "First Open Source Recognition",
    subtitle: "Strapi Plugin Development",
    description: "Built a to-do list plugin for Strapi's ecosystem, receiving my first developer community recognition and an official Strapi hoodie.",
  },
  {
    date: "Late 2022",
    title: "First Real Client Opportunity",
    subtitle: "E-commerce Development",
    description: "Attempted an 80% complete e-commerce platform for a neighbor, learning the complexities of admin dashboards and payment gateway verification.",
  },
  {
    date: "Dec 2022",
    title: "Zero to One Program Volunteer",
    subtitle: "Sheryians Coding School",
    description: "Supported high school learning sessions and program operations for foundational IT education.",
  },
  {
    date: "2023",
    title: "Full-Stack Mastery",
    subtitle: "Next.js & Python",
    description: "Completed a production-ready e-commerce site with Stripe integration and explored Python for web scraping (Selenium) and data analysis.",
  },
  {
    date: "2023 - 2024",
    title: "International Research Mentor",
    subtitle: "Incognito Blueprint",
    description: "Guided global high school cohorts through research methodology and documentation, leading to published academic conference papers.",
  },
  {
    date: "2024 - 2025",
    title: "Hardware & Robotics Engineering",
    subtitle: "Hack Club / Embedded Systems",
    description: "Engineered a wireless rover with live camera streaming and designed custom ESP32 PCBs and a DIY ECG monitoring device.",
  },
  {
    date: "2025",
    title: "Portal VR YSWS ",
    subtitle: "Hack Club You Ship We Ship",
    description: "Designed, pitched, and ran an official sponsored VR development program, mentoring students in A Frame and Virtual Reality and managing reviews alongwith fulfillment.",
  },
];

export default function Timeline() {
  return (
    <div className="page-enter pt-16">
      <Section>
        <Heading
          eye="Journey"
          title="Timeline"
          desc="A quick walkthrough of key milestones, programs, and community work."
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
                background: "rgba(248, 246, 241, 0.78)",
                color: "var(--ink)",
                border: "1px solid var(--border)",
                borderRadius: "1rem",
                boxShadow: "0 10px 30px rgba(26,26,26,0.05)",
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