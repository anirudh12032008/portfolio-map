"use client"
import { FadeIn, Heading, Section } from "@/components/sections/primitives";
import { desc, div } from "framer-motion/client";
import { title } from "process";
import Link from "next/link";

// organize this data in a better way into different categories


const exp = [
    {
        category: "Mentorship",
        items: [
            {
                title: "Python Mentor",
                org: "Sheryians Coding School",
                period: "Feb 2024 - Aug 2024 · 6 months",
                desc: "Mentored 2 batches (P15 & P16) of 100+ college students in Python fundamentals. Created a custom platform for problem-solving with built-in compiler, leaderboards, and resources. Stayed available for support and resolved repeated issues to ensure student retention.",
                tags: ["Mentorship", "Programming", "Education"],
                href: "/experience/python-mentor",
            },
            {
                title: "Research Commitment Mentor Cohort #5",
                org: "Incognito Blueprints",
                period: "Apr 2024 - Jul 2024 · 3 months",
                desc: "Mentored a high school student through a 12-week independent research journey in human-computer interaction. Provided weekly checkpoints, feedback loops, and confidence building to help them develop and defend their research findings.",
                tags: ["Mentorship", "Research", "Technical Guidance"],
                href: "/experience/research-mentor-5",
            },
        ]
    },
    {
        category: "Event Organization & Community Scaling",
        items: [
            {
                title: "Portal VR - YSWS Organizer",
                org: "Hack Club",
                period: "Jul 2025 - Nov 2025",
                desc: "Organized Portal VR as a Hack Club YSWS event exploring VR with A-Frame. Designed a tier-based program for all skill levels, ran workshops, managed participant support, handled reviews and timelines. Coordinated 12.2 weighted grants of work across 12+ submitted projects.",
                tags: ["Community", "Events", "VR", "Hack Club"],
                href: "http://portalvr.hackclub.com/",
            },
            {
                title: "Optimization Sidequest - FlavorTown",
                org: "Hack Club",
                period: "Mar 2026 - Present",
                desc: "Co-organizing the Optimization Sidequest for Hack Club's FlavorTown. Created PR requirement, designed custom banner art, defined requirements and shop items, and continuously review submissions while supporting participants.",
                tags: ["Community", "Events", "Hack Club"],
                href: "/experience/optimize-sidequest",
            }
        ]
    },
    {
        category: "Community Contributions",
        items: [
            {
                title: "Shipwright & YSWS Reviews",
                org: "Hack Club",
                period: "Jun 2025 - Present",
                desc: "Active reviewer across FlavorTown and Summer Of Making programs. Completed 2000+ Shipwright reviews and 1000+ YSWS reviews. Among the top reviewers, supporting builders and makers at early stages of their journeys with quality feedback.",
                tags: ["Community", "Reviews", "Hack Club"],
                href: "/experience/reviews",
            },
        ]
    },
    {
        category: "Volunteer & Community Engagement",
        items: [
            {
                title: "Zero to One Program Volunteer",
                org: "Sheryians Coding School",
                period: "Dec 2022 · 1 week",
                desc: "Supported a 7-day workshop organized at St. Thomas Convent School for 100+ high school students. Helped coordinate with the school, managed operations, and taught one session on basic web development fundamentals.",
                tags: ["Volunteer", "Education", "Community"],
                href: "/experience/zero-to-one-volunteer",
            },
            {
                title: "School Content Team Lead",
                org: "School",
                period: "2024 - 2025",
                desc: "Led initial video content creation efforts for school. Headed the team, onboarded members, and worked on filming and editing 3 videos for the school YouTube page.",
                tags: ["Leadership", "Content Creation", "Education"],
                href: "/experience/schoolcontent",
            },
        ]
    },
    {
        category: "Skills & Learning",
        items: [
            {
                title: "Competitive Programming",
                org: "LeetCode & HackerRank",
                period: "2024 - 2025",
                desc: "Spent 6 months learning Data Structures and Algorithms in Python. Completed 150+ LeetCode problems and all Python problems on HackerRank with 5-star rating in both Python and SQL.",
                tags: ["DSA", "Programming", "Problem Solving"],
                href: "/experience/cp",
            },
            {
                title: "Game Development",
                org: "Personal Learning",
                period: "2024 - Present",
                desc: "Built small games and shared tutorials online on YouTube. Continued learning and experimenting with game development concepts independently.",
                tags: ["Game Dev", "Content Creation", "Learning"],
                href: "/experience/gamedev",
            },
            {
                title: "3D Printing & Modeling",
                org: "Personal Projects",
                period: "2024 - Present",
                desc: "Own Bambu Lab H2D and A1 mini printers. Designed and 3D printed 250+ models, recently started designing models and sharing online on Printables.",
                tags: ["3D Printing", "Engineering", "Design"],
                href: "/experience/3dp",
            },
        ]
    }
]







function Experience({   title,
  org,
  period,
  desc,
  tags,
  href,
}: {
  title: string;
  org: string;
  period: string;
  desc: string;
  tags: string[];
  href?: string;
}) {
    // since when did nextjs gave types to props errors without me asking for it :sob:
    if (href) {
      return (
        <Link href={href} className="block group hover:opacity-75 transition-opacity">
          <div className="flex flex-col sm:flex-row gap-6 py-8 border-b border-cream-200 last:border-0">
            <div className="sm:w-56 flex-shrink-0">
              <p className="text-xs font-sans uppercase tracking-widest text-gold">{period}</p>
              <h3 className="mt-2 font-serif text-xl font-medium text-ink">{title}</h3>
              <p className="mt-1 text-sm font-sans text-ink-muted">{org}</p>
            </div>
            <div className="flex-1">
              <p className="text-sm font-sans font-light text-ink-soft leading-relaxed">{desc}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {tags.map((t) => (
                  <span key={t} className="tag text-[10px] py-0.5 px-2.5">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Link>
      );
    }
    
    return (
    <div className="block group hover:opacity-75 transition-opacity">
    <div className="flex flex-col sm:flex-row gap-6 py-8 border-b border-cream-200 last:border-0">
      <div className="sm:w-56 flex-shrink-0">
        <p className="text-xs font-sans uppercase tracking-widest text-gold">{period}</p>
        <h3 className="mt-2 font-serif text-xl font-medium text-ink">{title}</h3>
        <p className="mt-1 text-sm font-sans text-ink-muted">{org}</p>
      </div>
      <div className="flex-1">
        <p className="text-sm font-sans font-light text-ink-soft leading-relaxed">{desc}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {tags.map((t) => (
            <span key={t} className="tag text-[10px] py-0.5 px-2.5">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
    }






export default function ExpPage() {
    return(
       <div className="page-enter relative w-full overflow-hidden">
        <section className="relative min-h-screen pt-16">
          <Section className="relative z-10">

        
        {/* <div className="max-w-2xl mx-auto px-6 py-20">
            <p className="text-xs uppercase tracking-widest text-gold mb-2"> Background </p>
            <h2 className="text-4xl font-bold text-cream-800 mb-4"> Experience </h2>
            <p className="text-lg text-cream-600 mb-12"> Programs I've been part of, communities I've contributed to, and challenges I've helped run. </p>
            </div> */}
{/* <div className="mb-10 md:mb-14 flex flex-col items-center ">
    
</div> */}

<Heading eye="Background" title="Experience" desc="Programs I've been part of, communities I've contributed to, and challenges I've helped run." />

 <FadeIn delay={0.2}>
            <div className="mt-16 text-center max-w-xl mx-auto">
                <p className="font-serif italic text-xl md:text-2xl text-ink-soft leading-relaxed">
The best part of every program isn't in the project, its in the people

                </p>
                <p className="text-sm text-ink-faint mt-5 font-sans uppercase tracking-widest">
~ Something I genuienly belive :)

                </p>
            </div>
        </FadeIn>
            <div className="space-y-12 mt-24">


                {exp.map(({ category, items }) => (
                    <FadeIn key={category}>
                        <div className="flex items-center gap-4 mb-3">
                            <span className="text-sm uppercase tracking-wider font-sans text-ink-faint">{category}</span>
                {/* call me genuius for using this lol */}
                <span className="flex-1 h-px bg-cream-200"/>
                        </div>

                <div className="rounded-2xl border border-cream-200 hover:bg-offwhite/67 bg-offwhite/40 backdrop-blur-[1px]  shadow-[0_10px_30px_rgba(26,26,26,0.04)] px-6 py-4 overflow-hidden">
{items.map((k) => (
    <Experience key={k.title} {...k} />
))}
                </div>

</FadeIn>
                ))}            
            </div>

{/* <3 */}


{/* <FadeIn delay={0.2} >

    <div className="mt-16 rounded-2xl bg-navy/5 border border-navy/15 p-8">
    <p className="font-serif italic text-xl text-navy leading-relaxed">
                The best part of every program isn't in the project, its in the people
    </p>

    <p className="mt-3  font-sans text-ink-muted tracking-wider">
        ~ Something I genuienly belive :)
    </p>
    </div>
</FadeIn> */}



          </Section>
        </section>
      </div>
    )
}