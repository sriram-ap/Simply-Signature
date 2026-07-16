import type { Metadata } from "next";
import { Heart, MessageCircle, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/reveal";
import { reviews } from "@/lib/menu";
import { site, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "What the Jal Vayu Towers community says about Simply Signature — honest feedback from real neighbours, never bought, never botted.",
  alternates: { canonical: "/reviews" },
};

function Stars({ rating }: { rating: number }) {
  return (
    <span className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          aria-hidden
          className={
            i < rating ? "size-4 fill-gold-500 text-gold-500" : "size-4 text-evergreen-200"
          }
        />
      ))}
    </span>
  );
}

export default function ReviewsPage() {
  return (
    <>
      <section className="bg-evergreen-950 text-cream">
        <div className="mx-auto max-w-3xl px-4 py-14 text-center sm:px-6 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-400">
            Reviews
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Word of mouth,
            <em className="font-light italic text-gold-300"> literally</em>
          </h1>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-cream/80">
            Every review here comes from a real neighbour at {site.location.community}.
            Never bought, never botted — that&rsquo;s a promise.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-16">
        {reviews.length === 0 ? (
          <Reveal>
            <div className="mx-auto max-w-xl rounded-3xl border border-evergreen-900/8 bg-cream-soft p-10 text-center shadow-card">
              <Heart className="mx-auto size-8 text-gold-600" aria-hidden strokeWidth={1.5} />
              <h2 className="mt-4 font-display text-2xl font-semibold text-evergreen-900">
                We&rsquo;re just getting started
              </h2>
              <p className="mt-3 leading-relaxed text-ink-soft">
                Simply Signature launched on {site.established}, and our first happy
                families at JVT are already coming back for more. Their words will
                appear here — with their permission — as we grow.
              </p>
              <p className="mt-3 text-sm text-ink-soft">
                Tried our food? We&rsquo;d genuinely love to hear what you thought.
              </p>
              <a
                href={waLink(
                  site.contact.whatsappPrimary.number,
                  "Hello Gayathri! I tried Simply Signature and wanted to share some feedback: ",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex h-12 items-center gap-2 rounded-full bg-evergreen-900 px-7 text-sm font-semibold text-cream transition-colors hover:bg-evergreen-800"
              >
                <MessageCircle className="size-4" aria-hidden />
                Share your experience
              </a>
            </div>
          </Reveal>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review, i) => (
              <Reveal key={`${review.name}-${review.date}`} delay={Math.min(i * 0.06, 0.3)}>
                <blockquote className="flex h-full flex-col gap-4 rounded-2xl border border-evergreen-900/8 bg-cream-soft p-7 shadow-card">
                  <Stars rating={review.rating} />
                  <p className="flex-1 leading-relaxed text-ink">&ldquo;{review.text}&rdquo;</p>
                  <footer className="flex items-center justify-between gap-3">
                    <cite className="not-italic">
                      <span className="block text-sm font-semibold text-evergreen-900">
                        {review.name}
                      </span>
                      <span className="text-xs text-ink-soft">{review.flat}</span>
                    </cite>
                    <Badge variant="cream">{review.date}</Badge>
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
