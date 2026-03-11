import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
}

export function SEO({ title, description, keywords }: SEOProps) {
  const defaultKeywords =
    "Best gym in Kochi, Gym in Kochi, Fitness center in Kochi, Gym in Vyttila";
  const siteTitle = `${title} | FORZA FITNESS`;

  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content={keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords}
      />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
}
