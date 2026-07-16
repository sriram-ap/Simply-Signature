import type { Metadata } from "next";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { faqs } from "@/data/faqs";
import { site, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Everything you need to know about ordering from Simply Signature — deadlines, delivery, packaging, payments and more.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="bg-evergreen-950 text-cream">
        <div className="mx-auto max-w-3xl px-4 py-14 text-center sm:px-6 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-400">FAQ</p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Good questions,
            <em className="font-light italic text-gold-300"> honest answers</em>
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 md:py-16">
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <Reveal key={faq.question} delay={Math.min(i * 0.04, 0.25)}>
              <details className="group rounded-2xl border border-evergreen-900/10 bg-cream-soft shadow-card open:border-evergreen-700/30">
                <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 font-display text-lg font-medium text-evergreen-900 sm:p-6">
                  {faq.question}
                  <ChevronDown
                    className="size-5 shrink-0 text-gold-600 transition-transform duration-200 group-open:rotate-180"
                    aria-hidden
                  />
                </summary>
                <p className="px-5 pb-5 leading-relaxed text-ink-soft sm:px-6 sm:pb-6">
                  {faq.answer}
                </p>
              </details>
            </Reveal>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-ink-soft">
          Something else on your mind?{" "}
          <a
            href={waLink(site.contact.whatsappPrimary.number)}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-evergreen-800 underline decoration-gold-500 underline-offset-4 hover:text-terracotta-600"
          >
            Ask {site.founder} directly on WhatsApp
          </a>
        </p>
      </section>
    </>
  );
}
