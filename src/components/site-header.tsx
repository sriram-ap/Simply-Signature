"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu as MenuIcon, X } from "lucide-react";
import { LogoLockup } from "@/components/logo";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/menu", label: "Menu" },
  { href: "/specials", label: "This Week" },
  { href: "/about", label: "Our Story" },
  { href: "/gallery", label: "Gallery" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-evergreen-900/8 bg-cream/90 backdrop-blur-md">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-evergreen-900 focus:px-4 focus:py-2 focus:text-cream"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" aria-label="Simply Signature — home" className="shrink-0">
          <LogoLockup />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                pathname === link.href
                  ? "bg-evergreen-900 text-cream"
                  : "text-evergreen-800 hover:bg-evergreen-50",
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/order"
            className="ml-3 inline-flex h-11 items-center rounded-full bg-gold-500 px-6 text-sm font-semibold text-evergreen-950 shadow-card transition-colors hover:bg-gold-400"
          >
            Order This Week
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex size-11 items-center justify-center rounded-full text-evergreen-900 hover:bg-evergreen-50 lg:hidden"
        >
          {open ? <X className="size-6" aria-hidden /> : <MenuIcon className="size-6" aria-hidden />}
        </button>
      </div>

      {/* Mobile panel */}
      <div
        id="mobile-nav"
        className={cn(
          "overflow-hidden border-t border-evergreen-900/8 bg-cream transition-[max-height] duration-300 ease-out lg:hidden",
          open ? "max-h-[480px]" : "max-h-0 border-t-0",
        )}
      >
        <nav aria-label="Mobile" className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={pathname === link.href ? "page" : undefined}
                  className={cn(
                    "block rounded-xl px-4 py-3 text-base font-medium",
                    pathname === link.href
                      ? "bg-evergreen-900 text-cream"
                      : "text-evergreen-800 hover:bg-evergreen-50",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/order"
                onClick={() => setOpen(false)}
                className="block rounded-xl bg-gold-500 px-4 py-3 text-center text-base font-semibold text-evergreen-950"
              >
                Order This Week
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
