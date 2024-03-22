import { setTitle } from "/components/layout/components/Meta";

import HeroSection from "/components/layout/components/HeroSection";
import ShowsSection from "/components/layout/components/ShowsSection";
import TextSection from "/components/layout/components/TextSection";

export default function About() {
  return (
    <>
      {setTitle("About")}
      <HeroSection title="About Zillicoah" pageSlug="about" />
      <TextSection>
        <p className="u-subhead">
          Zillicoah is a post-punk trio helmed by guitarist and songwriter
          Rome Widenhouse with Andrew Breeden (bass) and
          Brandon Ball (drums).
        </p>
        <p>
          Zillicoah incorporates elements of Post-Hardcore, Folk, and
          Alternative Rock to create an electrified, enigmatic sound.
          Since the band’s inception in 2020, Zillicoah has released a
          string of EPs and Singles.
        </p>
        <p>
          Zillicaoh’s debut LP, Kudzu, was released in August of 2023,
          accompanied by a music video for the third single, Lobera.
          Zillicoah’s sophomore album has been independently recorded and
          is slated for release in late 2024. The band is currently based
          in Asheville, NC.
        </p>
      </TextSection>
      <ShowsSection />
    </>
  );
}
