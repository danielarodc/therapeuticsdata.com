import type { Metadata } from "next";
import { bodyFont, displayFont } from "@/lib/fonts";
import { content } from "@/lib/content";
import { SITE_URL } from "@/lib/config";
import "../globals.css";

const c = content.es;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: c.meta.title,
  description: c.meta.description,
  alternates: {
    canonical: "/es",
    languages: {
      es: "/es",
      en: "/",
    },
  },
  openGraph: {
    title: c.meta.title,
    description: c.meta.description,
    url: "/es",
    siteName: "Therapeutics Data",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: c.meta.title,
    description: c.meta.description,
  },
};

export default function EsLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${bodyFont.variable} ${displayFont.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Therapeutics Data",
              url: SITE_URL,
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
