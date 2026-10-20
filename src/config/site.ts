export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    reddit?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Tulsa King Season 4 Wiki",
  shortName: "Tulsa King 4",
  logoText: "T",
  tagline: "Season 4 Release Date, Episodes, Cast & Trailer",
  description: "A fan-made Tulsa King Season 4 wiki covering the premiere date, episode schedule, cast, story, trailer, and Paramount+ streaming details.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://tulsa-king-season-4.wiki",
  supportEmail: "support@tulsa-king-season-4.wiki",
  gameUrl: "https://www.paramountplus.com/shows/tulsa-king/",
  heroVideoId: "yaCHj96d1PA", // Tulsa King Season 4 official teaser
  social: {
    youtube: "https://www.youtube.com/@ParamountPlus",
    reddit: "https://www.reddit.com/r/TulsaKing/",
    twitter: "https://x.com/ParamountPlus",
  },
  locales: ["en", "es", "de", "fr"],
  defaultLocale: "en",
};
