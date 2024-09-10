import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const domain = process.env.NEXT_PUBLIC_DOMAIN;
  const rules = [
    {
      userAgent: "*",
      allow: "/",
    },
  ];

  return {
    rules,
    sitemap: `https://${domain}/sitemap.xml`,
  };
}
