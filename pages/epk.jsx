import {
  setTitle,
  setDescription,
} from "/components/layout/components/Meta";

import HeroSection from "/components/layout/components/HeroSection";
import TextSection from "/components/layout/components/TextSection";
import PressSection from "/components/layout/components/PressSection";
import GallerySection from "/components/layout/components/GallerySection";
import ShowsSection from "/components/layout/components/ShowsSection";
import StationsSection from "/components/layout/components/StationsSection";

export default function EPK() {
  return (
    <>
      {setTitle("Press kit")}
      <HeroSection title="Press Kit" pageSlug="epk" />
      <TextSection>
        <p className="u-subhead">
          Zillicoah is a post-punk trio helmed by guitarist and songwriter
          Rome Widenhouse with Andrew Breeden (bass) and
          Brandon Ball (drums).
        </p>
        <p>
          Zillicoah incorporates elements of Post-Hardcore, Folk, and
          Alternative Rock to create an electrified, enigmatic sound.
        </p>
        <p>
          While Zillicoah's sound contains the post-punk hallmarks of
          distorted guitars, anthemic vocals and blistering drums, the
          band takes a distinctly postmodern approach to song structure.
          What sets Zillicoah apart is their willingness to experiment and
          re-combine familiar genre elements into new music for the
          modern age.
        </p>
        <p>
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
      <StationsSection />
      <PressSection />
      <GallerySection />
      <ShowsSection />
    </>
  );
}
