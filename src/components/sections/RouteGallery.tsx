import Image from "next/image"

type RouteGalleryProps = {
  items?: string[]
  section: "life" | "projects" | "experience" | "timeline"
  route: string
}

function isExternalUrl(value: string) {
  return value.startsWith("http://") || value.startsWith("https://")
}

function isVideoFile(value: string) {
  const clean = value.split("?")[0].toLowerCase()
  return [".mp4", ".webm", ".mov", ".m4v", ".ogg"].some((ext) => clean.endsWith(ext))
}

function resolveGalleryPath(value: string, section: RouteGalleryProps["section"], route: string) {
  const trimmed = value.trim()

  if (!trimmed) {
    return ""
  }

  if (isExternalUrl(trimmed)) {
    return trimmed
  }

  const normalizedRoute = route.replace(/[^a-zA-Z0-9-]/g, "")

  if (trimmed.startsWith("/")) {
    const segments = trimmed.split("/").filter(Boolean)

    if (segments.length === 1) {
      return `/${section}/${normalizedRoute}/${segments[0]}`
    }

    return trimmed
  }

  const withoutPrefix = trimmed.replace(/^\.\//, "")
  return `/${section}/${normalizedRoute}/${withoutPrefix}`
}

export function RouteGallery({ items, section, route }: RouteGalleryProps) {
  if (!items?.length) {
    return null
  }

  const resolvedItems = items
    .map((item) => resolveGalleryPath(item, section, route))
    .filter(Boolean)

  if (!resolvedItems.length) {
    return null
  }

  return (
    <section id="route-gallery" className="mt-14 md:mt-16">
      <div className="flex items-center gap-4 mb-5 md:mb-6">
        <h2 className="font-serif text-2xl md:text-3xl text-ink">Gallery</h2>
        <span className="h-px flex-1 bg-cream-200" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {resolvedItems.map((src, index) => (
          <a
            key={`${src}-${index}`}
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <figure className="relative overflow-hidden rounded-2xl border border-cream-200 bg-offwhite/50 shadow-[0_10px_30px_rgba(26,26,26,0.06)]">
              <div className="relative aspect-[4/3] w-full">
                {isVideoFile(src) ? (
                  <>
                    <video
                      src={src}
                      controls
                      playsInline
                      preload="metadata"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <span className="absolute top-2 right-2 inline-flex items-center gap-1 rounded-full border border-cream-200 bg-offwhite/90 px-2 py-1 text-[10px] font-sans uppercase tracking-wider text-ink">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3" aria-hidden>
                        <path d="M8 6.82v10.36c0 .57.62.92 1.12.63l8.14-5.18a.74.74 0 0 0 0-1.26L9.12 6.2A.74.74 0 0 0 8 6.82Z" />
                      </svg>
                      Video
                    </span>
                  </>
                ) : (
                  <Image
                    src={src}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                )}
              </div>
              <figcaption className="px-3 py-2 text-xs font-sans uppercase tracking-wider text-ink-faint bg-offwhite/80 border-t border-cream-200">
                {isVideoFile(src) ? "Video" : "Image"} {index + 1}
              </figcaption>
            </figure>
          </a>
        ))}
      </div>
    </section>
  )
}
