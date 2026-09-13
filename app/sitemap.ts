import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      alternates: {
        languages: {
          en: SITE_URL,
          es: `${SITE_URL}/es`,
        },
      },
    },
    {
      url: `${SITE_URL}/es`,
      alternates: {
        languages: {
          en: SITE_URL,
          es: `${SITE_URL}/es`,
        },
      },
    },
  ];
}
