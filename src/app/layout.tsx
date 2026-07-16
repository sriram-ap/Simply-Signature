import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { site } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Premium Vegetarian, From Gayathri's Kitchen`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "home kitchen",
    "vegetarian food",
    "homemade food",
    "Jal Vayu Towers",
    "JVT",
    "weekend meals",
    "pre-order food",
    "Simply Signature",
    "Gayathri's Kitchen",
  ],
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} — Premium Vegetarian, From Gayathri's Kitchen`,
    description: site.description,
    url: site.url,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Premium Vegetarian, From Gayathri's Kitchen`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": `${site.url}/#restaurant`,
  name: site.name,
  alternateName: "Simply Signature — Gayathri's Kitchen",
  description: site.description,
  url: site.url,
  logo: `${site.url}/logo.svg`,
  image: `${site.url}/opengraph-image`,
  telephone: `+${site.contact.whatsappPrimary.number}`,
  servesCuisine: ["Indian", "South Indian", "North Indian", "Maharashtrian", "Vegetarian"],
  priceRange: "₹₹",
  foundingDate: site.establishedISO,
  founder: {
    "@type": "Person",
    name: site.founder,
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: `${site.location.unit}, ${site.location.community}`,
    addressCountry: site.location.country,
  },
  acceptsReservations: "False",
  potentialAction: {
    "@type": "OrderAction",
    target: `${site.url}/order`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }}
        />
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
