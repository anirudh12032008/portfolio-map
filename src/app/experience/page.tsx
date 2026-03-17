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
                title: "Research Commitment Mentor Cohort #5",
                org: "Incognito Blueprints",
                period: "Apr 2024 - Jul 2024 · 3 months",
                desc: "Mentored a high school student in a 12 week research commitment, guiding them through the process of developing and executing an independent research project in the field of human-computer interaction. Provided regular feedback and support to help them refine their research question, design their study, and analyze their results.",
                tags: ["Mentorship", "Research", "Technical Guidance"],
                href: "/experience/research-mentor-5",
            },
            {
                title: "Python Mentor",
                org: "Sheryians Coding School",
                period: "Feb 2024 - Aug 2024 · 6 months",
                desc: "Mentored 2 batches P15 and P16 of 100+ college students in learning Python programming fundamentals, including variables, data structures, and basic algorithms. Provided one-on-one tutoring sessions and guided them through hands-on coding exercises.",
                tags: ["Mentorship", "Programming", "Education"],
                href: "/experience/python-mentor",
            },
            {
                title: "Research Commitment Mentor Cohort #6",
                org: "Incognito Blueprints",
                period: "May 2025 - Jul 2025 · 3 months",
                desc: "Mentored a group of college students in a 12 week research commitment, guiding them through the process of developing and executing an independent research project in the field of human-computer interaction. Provided regular feedback and support to help them refine their research question, design their study, and analyze their results.",
                tags: ["Mentorship", "Research", "Technical Guidance"],
                href: "/experience/research-mentor-6",
            },
        ]
    },
    {
        category: "Internship",
        items: [
            {
                title: "Artificial Intelligence Intern",
                org: "Unsway",
                period: "Aug 2024 - Jun 2024 · 3 months",
                desc: "Collaborated with the team to develop and implement AI algorithms for various applications, including natural language processing and computer vision. Contributed to the design and optimization of machine learning models, and assisted in data preprocessing and analysis tasks.",
                tags: ["Internship", "AI", "Team work"],
                href: "/experience/ai-intern-unsway",
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
                desc: "Volunteered for the Zero to One Program, organized by Sheryians Coding School at St. Thomas Convent School for High School students, where I provided support in organizing and facilitating learning sessions for high school students. Assisted in coordinating activities and ensuring the smooth execution of the program, which aimed to introduce students to foundational computer and IT skills.",
                tags: ["Volunteer", "Education", "Community Engagement"],
                href: "/experience/zero-to-one-volunteer",
            },
            {
                title: "Student Ambassador",
                org: "Oswaal Books",
                period: "May 2025 - Aug 2025 · 4 months",
                desc: "Represented the brand as a student ambassador, promoting Oswaal Books' products and services to fellow students. Organized and participated in various marketing campaigns and events to increase brand awareness and student engagement.",
                tags: ["Ambassador", "Marketing", "Student Engagement"],
                href: "/experience/student-ambassador-oswaal",
            },
        ]
    },
    {
        category: "Community Contributions",
        items: [
            {
                title: "Shipwright (Reviewer)",
                org: "Hack Club",
                period: "Jun 2025 - Present",
                desc: "Active contributor across two long running community programs FlavorTown and Summer Of Making. Submitted over 2,000 reviews and participated in community activities supporting builders, learners, and makers. Proud to have supported people at early stages of their journeys.",
                tags: ["Community", "Reviews", "Hack Club"],
                href: "/experience/shipwright-reviewer",
            },
            {
                title: "YSWS Reviewer",
                org: "Hack Club",
                period: "Jun 2025 - Present",
                desc: "Reviewed over 1000 submissions for FlavorTown and Summer Of Making programs, which involved doing internal checks and submitting them to the Unifed database. This role was crucial in maintaining the quality and integrity of the programs, ensuring that submissions met the required standards.",
                tags: ["Community", "Reviews", "Hack Club"],
                href: "/experience/ysws-reviewer",
            },
        ]
    },
    {
        category: "Event Organization",
        items: [
            {
                title: "PORTAL VR - YSWS Organizer",
                org: "Hack Club",
                period: "Jul 2025 - Nov 2025",
                desc: "Organized PORTAL VR event as part of the Hack Club's You Ship We Ship initiative. This involved coordinating with participants, managing fullfilments, reviewing the projects, organizing workshops and ensuring a smooth execution of the event. Total 122hr ( 12.2 Weighted Grants ) of work was put in by the participants in their final projects",
                tags: ["Community", "Events", "Hack Club"],
                href: "http://portalvr.hackclub.com/",
            },
            {
                title: "Optimize SideQuest - FlavorTown Organizer",
                org: "Hack Club",
                period: "Mar 2026 - Present",
                desc: "Organized and managed the Optimize SideQuest event as part of the Hack Club's FlavorTown. This involved coordinating with participants, reviewing the projects and ensuring a smooth execution of the event.",
                tags: ["Community", "Events", "Hack Club"],
                href: "/experience/optimize-sidequest",
            }
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


            <div className="space-y-12">


                {exp.map(({ category, items }) => (
                    <FadeIn key={category}>
                        <div className="flex items-center gap-4 mb-3">
                            <span className="text-sm uppercase tracking-wider font-sans text-ink-faint">{category}</span>
                {/* call me genuius for using this lol */}
                <span className="flex-1 h-px bg-cream-200"/>
                        </div>

                <div className="rounded-2xl border border-cream-200 bg-offwhite shadow-[0_10px_30px_rgba(26,26,26,0.04)] px-6 py-4 overflow-hidden">
{items.map((k) => (
    <Experience key={k.title} {...k} />
))}
                </div>

</FadeIn>
                ))}            
            </div>

{/* <3 */}


<FadeIn delay={0.2} >

    <div className="mt-16 rounded-2xl bg-navy/5 border border-navy/15 p-8">
    <p className="font-serif italic text-xl text-navy leading-relaxed">
                The best part of every program isn't in the project, its in the people
    </p>

    <p className="mt-3  font-sans text-ink-muted tracking-wider">
        ~ Something I genuienly belive :)
    </p>
    </div>
</FadeIn>



          </Section>
        </section>
      </div>
    )
}