import { compileMDX } from "next-mdx-remote/rsc"
import { notFound } from "next/navigation"
import path from "path"
import { promises as fs } from "fs"
import { RouteGallery } from "@/components/sections/RouteGallery"

type TimelinePageFrontmatter = {
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

async function loadTimelineMdx(route: string) {
  const safeRoute = route.replace(/[^a-zA-Z0-9-]/g, "")
  const filePath = path.join(process.cwd(), "src", "content", "timeline", `${safeRoute}.mdx`)

  let source = ""
  try {
    source = await fs.readFile(filePath, "utf-8")
  } catch {
    notFound()
  }

  return compileMDX<TimelinePageFrontmatter>({
    source,
    options: {
      parseFrontmatter: true,
    },
  })
}

export async function generateStaticParams() {
  const dirPath = path.join(process.cwd(), "src", "content", "timeline")

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

export default async function TimelineRoutePage({
  params,
}: {
  params: Promise<{ route: string }>
}) {
  const { route } = await params
  const { content, frontmatter } = await loadTimelineMdx(route)

  const title = frontmatter.title ?? toTitleCase(route)
  const description = frontmatter.description ?? `Notes from ${title}.`

  return (
    <div className="page-enter pt-16 md:pt-24">
      <section className="max-w-5xl mx-auto px-6 py-16 md:py-24">
        <div className="mb-10 md:mb-14">
          <span className="text-xs inline-block font-sans font-medium uppercase tracking-widest text-gold mb-3">timeline</span>
          <h1 className="text-display font-serif text-6xl text-ink">{title}</h1>
          <p className="text-base text-ink-muted font-light leading-relaxed max-w-xl mt-4">{description}</p>
        </div>

        <article className="max-w-3xl space-y-6 text-ink-soft leading-relaxed">{content}</article>
        <RouteGallery items={frontmatter.gallery} section="timeline" route={route} />
      </section>
    </div>
  )
}
