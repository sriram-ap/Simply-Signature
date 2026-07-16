import Link from "next/link";
import { LogoMark } from "@/components/logo";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-4 py-24 text-center sm:px-6">
      <LogoMark className="h-16 w-16" />
      <h1 className="mt-6 font-display text-4xl font-semibold text-evergreen-900">
        This plate is empty
      </h1>
      <p className="mt-3 leading-relaxed text-ink-soft">
        The page you&rsquo;re looking for isn&rsquo;t on the menu. Perhaps something
        from this week&rsquo;s special instead?
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="inline-flex h-12 items-center rounded-full bg-evergreen-900 px-7 text-sm font-semibold text-cream transition-colors hover:bg-evergreen-800"
        >
          Back to home
        </Link>
        <Link
          href="/order"
          className="inline-flex h-12 items-center rounded-full bg-gold-500 px-7 text-sm font-semibold text-evergreen-950 transition-colors hover:bg-gold-400"
        >
          Order this week
        </Link>
      </div>
    </div>
  );
}
