import { cn } from "@/lib/utils";

/**
 * The Simply Signature mark: an evergreen roundel with a gold ring,
 * a cream chef's toque and a gold leaf sprig — homemade, vegetarian, premium.
 * Also shipped as /public/logo.svg and src/app/icon.svg for favicons & sharing.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      role="img"
      aria-label="Simply Signature logo"
      className={cn("h-10 w-10", className)}
    >
      <circle cx="32" cy="32" r="31" fill="#17352a" />
      <circle cx="32" cy="32" r="27.5" fill="none" stroke="#c9a24b" strokeWidth="1.6" />
      {/* Chef's toque */}
      <g fill="#f7f3e9">
        <circle cx="23.5" cy="23.5" r="6.6" />
        <circle cx="32" cy="19.8" r="8.2" />
        <circle cx="40.5" cy="23.5" r="6.6" />
        <rect x="23.5" y="21.5" width="17" height="12.5" />
      </g>
      <rect x="23.5" y="35.2" width="17" height="3.6" rx="1.8" fill="#c9a24b" />
      {/* Leaf sprig */}
      <path
        d="M32 42.5 C32 46 32 49 32 52.5"
        stroke="#c9a24b"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M31.6 47.5 C27.8 46.8 25.4 44.2 24.8 41.2 C28.2 41.6 30.8 43.8 31.6 47.5 Z"
        fill="#c9a24b"
      />
      <path
        d="M32.4 50 C36.2 49.3 38.6 46.7 39.2 43.7 C35.8 44.1 33.2 46.3 32.4 50 Z"
        fill="#c9a24b"
      />
    </svg>
  );
}

export function LogoLockup({
  className,
  dark = false,
}: {
  className?: string;
  dark?: boolean;
}) {
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <LogoMark className="h-10 w-10 shrink-0" />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-xl leading-tight",
            dark ? "text-cream" : "text-evergreen-900",
          )}
        >
          <em className="font-light italic">Simply</em>{" "}
          <span className="font-semibold text-gold-600">Signature</span>
        </span>
        <span
          className={cn(
            "mt-1 text-[9px] font-medium uppercase tracking-[0.22em]",
            dark ? "text-gold-300/90" : "text-evergreen-600",
          )}
        >
          Premium Vegetarian · Gayathri&rsquo;s Kitchen
        </span>
      </span>
    </span>
  );
}
