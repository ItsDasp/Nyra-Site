import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
}

const BASE_URL = "https://nyra.app";
const DEFAULT_IMAGE = "/og-image.png";

export const SEO = ({
  title,
  description,
  keywords = "nyra, anime, android, app, streaming, ver anime, aplicación anime, anime gratis",
  image = DEFAULT_IMAGE,
  url = "",
  type = "website",
}: SEOProps) => {
  const fullUrl = `${BASE_URL}${url}`;
  const fullImage = image.startsWith("http") ? image : `${BASE_URL}${image}`;
  const fullTitle = title === "Nyra" ? title : `${title} | Nyra`;

  return (
    <Helmet>
      
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullUrl} />

      
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Nyra" />
      <meta property="og:locale" content="es_ES" />

      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />

      
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#8b5cf6" />
    </Helmet>
  );
};
