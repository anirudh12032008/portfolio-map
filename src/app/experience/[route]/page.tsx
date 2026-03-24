import { compileMDX } from "next-mdx-remote/rsc"
import { notFound } from "next/navigation"
import path from "path"
import { promises as fs } from "fs"
import { RouteGallery } from "@/components/sections/RouteGallery"

type ExperiencePageFrontmatter = {
  title?: string
  description?: string
  gallery?: string[]
}

function toTitleCase(value: string) {
  return value
    .split("-")
    .filter(Boolean)
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ")
}

async function loadExperienceMdx(route: string) {
  const safeRoute = route.replace(/[^a-zA-Z0-9-]/g, "")
  const filePath = path.join(process.cwd(), "src", "content", "experience", `${safeRoute}.mdx`)

  let source = ""
  try {
    source = await fs.readFile(filePath, "utf-8")
  } catch {
    notFound()
  }

  return compileMDX<ExperiencePageFrontmatter>({
    source,
    options: {
      parseFrontmatter: true,
    },
  })
}

export async function generateStaticParams() {
  const dirPath = path.join(process.cwd(), "src", "content", "experience")

  let files: string[] = []
  try {
    files = await fs.readdir(dirPath)
  } catch {
    return []
  }

  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => ({ route: file.replace(/\.mdx$/, "") }))
}

export default async function ExperienceRoutePage({
  params,
}: {
  params: Promise<{ route: string }>
}) {
  const { route } = await params
  const { content, frontmatter } = await loadExperienceMdx(route)

  const title = frontmatter.title ?? toTitleCase(route)
  const description = frontmatter.description ?? `Notes from ${title}.`

  return (
    <div className="page-enter pt-16 md:pt-24">
      <section className="max-w-5xl mx-auto px-6 py-16 md:py-24">
        <div className="mb-10 md:mb-14">
          <span className="text-xs inline-block font-sans font-medium uppercase tracking-widest text-gold mb-3">experience</span>
          <h1 className="text-display font-serif text-6xl text-ink">{title}</h1>
          <p className="text-base text-ink-muted font-light leading-relaxed max-w-xl mt-4">{description}</p>
          {frontmatter.gallery?.length ? (
            <a
              href="#route-gallery"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-cream-300 bg-offwhite/70 px-4 py-2 text-xs font-sans uppercase tracking-wider text-ink transition-colors hover:bg-offwhite"
            >
              Gallery
            </a>
          ) : null}
        </div>

        <article className="max-w-3xl space-y-6 text-ink-soft leading-relaxed [&_h1]:font-serif [&_h1]:text-4xl [&_h1]:text-ink [&_h1]:font-medium [&_h1]:mt-10 [&_h2]:font-serif [&_h2]:text-3xl [&_h2]:text-ink [&_h2]:font-medium [&_h2]:mt-8 [&_h3]:font-serif [&_h3]:text-2xl [&_h3]:text-ink [&_h3]:font-medium [&_h3]:mt-6 [&_p]:leading-relaxed [&_a]:text-navy [&_a]:underline [&_a]:underline-offset-2 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-1 [&_li]:leading-relaxed">{content}</article>
        <RouteGallery items={frontmatter.gallery} section="experience" route={route} />
      </section>
    </div>
  )
}
