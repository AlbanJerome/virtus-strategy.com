import { Helmet } from "react-helmet-async";

const SITE_ORIGIN = "https://virtus-strategy.com";

type SeoProps = {
  title: string;
  description: string;
  /** Path only (e.g. `/services`) or full URL. */
  url: string;
};

function resolveCanonical(url: string): string {
  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }
  const path = url.startsWith("/") ? url : `/${url}`;
  return `${SITE_ORIGIN}${path === "/" ? "" : path}` || SITE_ORIGIN;
}

export function Seo({ title, description, url }: SeoProps) {
  const canonical = resolveCanonical(url);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
    </Helmet>
  );
}
