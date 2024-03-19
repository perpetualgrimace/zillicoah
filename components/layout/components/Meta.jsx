import Head from "next/head";
import { useRouter } from "next/router";

export default function Meta(props) {
  const { children } = props;
  return (
    <Head>
      <meta charSet="utf-8" />
      <title key="title">{defaultTitle}</title>
      <meta key="og:title" property="og:title" content={defaultTitle} />
      <meta key="x:title" name="twitter:title" content={defaultTitle} />

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      />

      <meta
        name="description"
        content={`${defaultDescription} For fans of bands like Thrice, Cave In, A Perfect Circle, Coheed & Cambria.`}
      />
      <meta name="twitter:description" content={defaultDescription} />

      <meta
        name="keywords"
        content="the welcoming, asheville, rock, metal, post-hardcore, hard rock, prog rock, progressive, band, decayed, remade, neptune"
      />

      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={`${baseUrl}${useRouter().pathname}`}
      />

      <meta property="og:image" content={defaultImgUrl} />
      <meta property="og:image:secure_url" content={defaultImgUrl} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta name="twitter:image" content={defaultImgUrl} />
      <meta name="twitter:card" content="summary_large_image" />

      <link rel="icon" href="favicon.ico" sizes="any" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#0F0819" />

      {children}
    </Head>
  );
}

const baseUrl = "https://thewelcomingmusic.com";
const defaultTitle = "The Welcoming";
const defaultImgUrl = `${baseUrl}/opengraph-image.jpg`;
const defaultDescription =
  "Genre-bending rock and/or metal band from Asheville, NC. We mix big riffs, soaring vocal melodies, and just enough technicality to keep you on your toes.";

function generateTitle(pageTitle) {
  let title = defaultTitle;
  if (pageTitle) title += ` | ${pageTitle}`;
  return title;
}

export function setTitle(title) {
  return (
    <Head>
      <title key="title">{generateTitle(title)}</title>
      <meta
        key="og:title"
        property="og:title"
        content={generateTitle(title)}
      />
      <meta
        key="x:title"
        name="twitter:title"
        content={generateTitle(title)}
      />
    </Head>
  );
}
