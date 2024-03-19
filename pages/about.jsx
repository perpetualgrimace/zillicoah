import Quotes from "/data/quotes.json";
import showURLs from "/data/shows.json";
const { bandsintownLink, songkickLink, facebookEventsLink } = showURLs;

import { setTitle } from "/components/layout/components/Meta";

import HeroSection from "/components/layout/components/HeroSection";
import ImgTextSection from "/components/layout/components/ImgTextSection";
import MusiciansSection from "/components/layout/components/MusiciansSection";
import QuotesSection from "/components/layout/components/QuotesSection";

const description =
  "Zillicoah is a genre-bending rock and/or metal band from Asheville, NC. With a sound that mixes big riffs, soaring vocal melodies, and just enough technicality to keep you on your toes, we make music for fans of bands like Thrice, Cave In, A Perfect Circle, and Coheed & Cambria.";

export default function About() {
  return (
    <>
      {setTitle("About")}
      <HeroSection title="About Zillicoah" pageSlug="about" />
      <ImgTextSection
        title="Don’t call us a p**g band"
        imgSrc="thumbnail/about-1"
      >
        <p>{description}</p>
      </ImgTextSection>

      <MusiciansSection />

      <ImgTextSection
        title="How it started | How it's going"
        imgSrc="thumbnail/about-2"
      >
        <p>
          It began with the release of the solo album, Decayed | Remade in
          late 2021. The album's unique and compelling sound quickly
          attracted the current lineup, and we've been working together to
          both expand and focus our sound ever since, resulting in the
          release of Neptune in late 2023.
        </p>
        <p>
          We've brought our intense live show to multiple states and
          cities already, and we have no plans to stop. Follow our
          {generateOutboundLink(songkickLink, "Songkick")},
          {generateOutboundLink(bandsintownLink, "Bandsintown")}, or
          {generateOutboundLink(facebookEventsLink, "Facebook page")} for
          upcoming events — we'd love to see you!
        </p>
      </ImgTextSection>

      <QuotesSection quotes={Quotes.about} />
    </>
  );
}

function generateOutboundLink(href, text) {
  return (
    <>
      {" "}
      <a href={href} target="_blank">
        {text}
      </a>
    </>
  );
}
