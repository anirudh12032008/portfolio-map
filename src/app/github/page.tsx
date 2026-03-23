"use client";

import ReactMarkdown from "react-markdown";

const githubProfile = `
# Heyyy, I'm Anirudh!

## I'm a 18 yr old from India. I like building and breaking things, sometimes it's hardware, sometimes code, sometimes small communities around ideas

## I'm a 18 yr old from India. I like trying things :D

not in a "i'll try this once and move on" way but in a "i'll stay with it long enough to understand how it works" way. I usually start without knowing everything and figure it out as I go!

## over the time things turned into a mix of things:
- building random hardware stuff like a rover, macropad, pcbs and a ECG machine
- mentoring students and working on research
- sketching, music and other creative stuff
- contributing to Hack Club ( my fav reviews, some sidequests, a bit of organizing my own event)
- and somehow even ending up on National Television for KBC and meeting Amitabh Bachchan <3


## I don't really fit into one box, and I'm okay with that. I like exploring different things and seeing how they connect

"jack of all trades, master of none" gets said a lot but I think there's value in being able to connect things acroos different domains and figure things out from scrath :)
and the full quote is "jack of all trades, master of none, but oftentimes better than master of one" and I like that part a lot :D


## What am i trying to do right now??
just trying to get better at building things that I find interesting and are actually useful to people!


## More about me
-> https://www.anirudhsahu.tech

---

*"The best way to predict the future is to build it."*
`;

export default function GitHub() {
  return (
    <div className="min-h-screen w-full px-4 py-8 md:px-8 md:py-16">
      <div className="max-w-3xl mx-auto text-ink">
        <ReactMarkdown 
          components={{
            h1: ({node, ...props}) => <h1 className="text-4xl font-bold mb-6 mt-0" {...props} />,
            h2: ({node, ...props}) => <h2 className="text-2xl font-bold mb-4 mt-8" {...props} />,
            p: ({node, ...props}) => <p className="text-lg mb-4 leading-relaxed" {...props} />,
            ul: ({node, ...props}) => <ul className="list-disc list-inside mb-6 space-y-2" {...props} />,
            li: ({node, ...props}) => <li className="text-lg" {...props} />,
            strong: ({node, ...props}) => <strong className="font-bold text-ink" {...props} />,
            a: ({node, ...props}) => <a className="text-ink underline underline-offset-2 opacity-90 hover:opacity-100" {...props} />,
            hr: ({node, ...props}) => <hr className="my-8 border-ink/20" {...props} />,
            blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-ink/30 pl-4 italic text-ink/80 my-4" {...props} />,
          }}
        >
          {githubProfile}
        </ReactMarkdown>
      </div>
    </div>
  );
}
