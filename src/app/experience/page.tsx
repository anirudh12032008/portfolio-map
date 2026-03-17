"use client"
import { desc, div } from "framer-motion/client";

const exp = [
    {
        category: "Mentorship",
        items: [
            // This certificate is awarded to
// Anirudh Sahu

// in recognition of his valuable contribution to the successful organization and support of the Zero to One Program conducted by Sheriyans Coding School at St. Thomas Convent School from 26 December 2022 to 31 December 2022.

// The program focused on introducing high school students to foundational computer and IT skills, and his support helped ensure the smooth execution of the learning sessions and activities during the program.
            // create another exoerience card for the above contribution for the zero to one program
            {
                title: "Zero to One Program Volunteer",
                org: "Sheryians Coding School",
                period: "Dec 2022 · 1 week",
                desc: "Volunteered for the Zero to One Program, organized by Sheryians Coding School at St. Thomas Convent School for High School students, where I provided support in organizing and facilitating learning sessions for high school students. Assisted in coordinating activities and ensuring the smooth execution of the program, which aimed to introduce students to foundational computer and IT skills.",
                tags: ["Volunteer", "Education", "Community Engagement"],
            },
{ 
                title: "Artificial Intelligence Intern",
                org: "Unsway",
                period: "Aug 2024 - Jun 2024 · 3 months",
                desc: "Collaborated with the team to develop and implement AI algorithms for various applications, including natural language processing and computer vision. Contributed to the design and optimization of machine learning models, and assisted in data preprocessing and analysis tasks.",
                tags: ["Internship", "Team work"],
            },
            {
                title: "Research Commitment Mentor Cohort #5",
                org: "Incognito Blueprints",
                period: "Apr 2024 - Jul 2024 · 3 months",
                // thanks copilot lol
                
                
                desc: "Mentored a high school student in a 12 week research commitment, guiding them through the process of developing and executing an independent research project in the field of human-computer interaction. Provided regular feedback and support to help them refine their research question, design their study, and analyze their results.",
                tags: ["Mentorship", "Research", "Technical Guidance"],
            },

            {
                title: "Python Mentor",
                org: "Sheryians Coding School",
                period: "Feb 2024 - Aug 2024 · 6 months",
                desc: "Mentored 2 batches P15 and P16 of 100+ college students in learning Python programming fundamentals, including variables, data structures, and basic algorithms. Provided one-on-one tutoring sessions and guided them through hands-on coding exercises.",
                tags: ["Mentorship", "Programming", "Education"],
            },
            {
                title: "Research Commitment Mentor Cohort #6",
                org: "Incognito Blueprints",
                period: "May 2025 - Jul 2025 · 3 months",
                desc: "Mentored a group of college students in a 12 week research commitment, guiding them through the process of developing and executing an independent research project in the field of human-computer interaction. Provided regular feedback and support to help them refine their research question, design their study, and analyze their results.",
                tags: ["Mentorship", "Research", "Technical Guidance"],
            },
            {
                title: "Student Ambassador",
                org: "Oswaal Books",
                period: "May 2025 - Aug 2025 · 4 months",
                desc: "Represented the brand as a student ambassador, promoting Oswaal Books' products and services to fellow students. Organized and participated in various marketing campaigns and events to increase brand awareness and student engagement.",
                tags: ["Ambassador", "Marketing", "Student Engagement"],
            }
        ]
    }
]






function Experience({   title,
  org,
  period,
  desc,
  tags,
}: {
  title: string;
  org: string;
  period: string;
  desc: string;
  tags: string[];
}) {
    // since when did nextjs gave types to props errors without me asking for it :sob:
    return (

        <div>
<div className="flex flex-col sm:flex-row gap-6 py-8 border-b border-cream-200 last:border-0">
    <div className="sm:w-56 flex-shrink-0"> 
<p className="text-xs font-sans uppercase tracking-widest text-gold mb-2"> {period} </p>
<h3 className="text-lg font-bold font-sherif text-cream-800">{title}</h3>
    <p className="text-cream-600">{org}</p>
    </div>

</div>

        </div>
    )
    }






export default function ExpPage() {
    return(
        // <SectionHeading
        //   eyebrow="Background"
        //   title="Experience"
        //   description="Programs I've been part of, communities I've contributed to, and challenges I've helped run."
        // />
// write the above thing without using the section heading component and instead just use regular html and tailwind classes
        <div className="relative w-full overflow-hidden ">
        <section className="justify-center relative min-h-screen ">
        <div className="max-w-2xl mx-auto px-6 py-20">
            <p className="text-xs uppercase tracking-widest text-gold mb-2"> Background </p>
            <h2 className="text-4xl font-bold text-cream-800 mb-4"> Experience </h2>
            <p className="text-lg text-cream-600 mb-12"> Programs I've been part of, communities I've contributed to, and challenges I've helped run. </p>
            </div>





            <div className="space-y-12">


                {exp.map(({ category, items }) => (
                    <div key={category}>
                        <div className="flex items-center gap-4 mb-3">
                            <span className="text-sm uppercase tracking-wider font-sans text-ink-faint">{category}</span>
                {/* call me genuius for using this lol */}
                <span className="flex-1 h-px bg-cream-200"/>
                        </div>

                <div className="rounded-2xl border border-cream-200 bg-cream-50 px-6 py-4 overflow-hidden">
{items.map((k) => (
    <Experience key={k.title} {...k} />
))}
                </div>

</div>
                ))}            
            </div>
            </section>
            </div>
    )
}