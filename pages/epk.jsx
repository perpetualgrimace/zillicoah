import Quotes from "/data/quotes.json";

import {
  setTitle,
  setDescription,
} from "/components/layout/components/Meta";

import HeroSection from "/components/layout/components/HeroSection";
import ImgTextSection from "/components/layout/components/ImgTextSection";
import PressSection from "/components/layout/components/PressSection";
import GallerySection from "/components/layout/components/GallerySection";
import QuotesSection from "/components/layout/components/QuotesSection";
import ShowsSection from "/components/layout/components/ShowsSection";
import StatsSection from "/components/layout/components/StatsSection";
import StationsSection from "/components/layout/components/StationsSection";

export default function EPK() {
  return (
    <>
      {setTitle("Press kit")}
      <HeroSection title="Press Kit" pageSlug="epk" />
      <ImgTextSection title="You won’t be bored" imgSrc="thumbnail/epk-1">
        <p>
          Zillicoah is a genre-bending rock and/or metal band from
          Asheville, NC. With a sound that mixes big riffs, soaring vocal
          melodies, and just enough technicality to keep you on your toes,
          we make music for fans of bands like Thrice, Cave In, A Perfect
          Circle, and Coheed & Cambria.
        </p>
        <p>
          Since starting as the solo project of James Ferrell in late
          2021, the band has been busy playing shows, festivals, and
          weekend tours in multiple states and cities, and our songs have
          been played on the air in multiple countries.
        </p>
      </ImgTextSection>
      <StatsSection />
      <StationsSection />
      <PressSection />
      <GallerySection />
      <ShowsSection />
      <QuotesSection quotes={Quotes.epk} />
    </>
  );
}
