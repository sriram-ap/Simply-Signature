import type { Metadata } from "next";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/reveal";
import { galleryPosters } from "@/lib/menu";

export const metadata: Metadata = {
  title: "Gallery — Weekly Poster Archive",
  description:
    "Every week at Simply Signature gets its own poster. Browse the archive of past weekend specials from Gayathri's kitchen.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <section className="bg-evergreen-950 text-cream">
        <div className="mx-auto max-w-3xl px-4 py-14 text-center sm:px-6 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-400">
            Gallery
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            The weekly
            <em className="font-light italic text-gold-300"> poster archive</em>
          </h1>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-cream/80">
            Every service gets its own poster — a small tradition we&rsquo;ve kept
            since day one. Here&rsquo;s everything we&rsquo;ve cooked so far.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-16">
        {galleryPosters.length === 0 ? (
          <p className="mx-auto max-w-md rounded-2xl bg-cream-deep/60 p-8 text-center text-ink-soft">
            The archive is warming up — the first posters will appear here soon.
          </p>
        ) : (
          <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
            {galleryPosters.map((poster, i) => (
              <Reveal key={poster.src} delay={Math.min(i * 0.06, 0.3)}>
                <figure className="break-inside-avoid overflow-hidden rounded-2xl border border-evergreen-900/10 bg-cream-soft shadow-card transition-shadow hover:shadow-card-hover">
                  <Image
                    src={poster.src}
                    alt={poster.alt}
                    width={poster.width}
                    height={poster.height}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="w-full"
                  />
                  <figcaption className="flex flex-wrap items-center justify-between gap-2 p-4">
                    <span className="font-display text-sm font-semibold text-evergreen-900">
                      {poster.caption}
                    </span>
                    <Badge variant="cream">{poster.date}</Badge>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        )}
        <p className="mt-10 text-center text-sm text-ink-soft">
          Menu pages currently feature licensed photographs by Wikimedia Commons
          photographers (credited on each dish page) — photos of our own plates
          are coming as we grow. We never use AI-generated food imagery.
        </p>
      </section>
    </>
  );
}
