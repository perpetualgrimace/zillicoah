import { setTitle } from "/components/layout/components/Meta";
import { generatePressItem } from "/components/layout/components/PressSection";

import HeroSection from "/components/layout/components/HeroSection";
import ShowsSection from "/components/layout/components/ShowsSection";
import SidebarSection from "/components/layout/components/SidebarSection";

import Interviews from "/data/interviews.json";

export default function About() {
  return (
    <>
      {setTitle("About")}
      <HeroSection title="About Zillicoah" pageSlug="about" />
      <SidebarSection
        sidebarContent={
          <>
            <h2>Appearing on</h2>
            <ul className="bullet-list">
              <li>
                <span className="u-subhead">103.3 Asheville FM</span> (US)
              </li>
              <li>
                <span className="u-subhead">98.1 The River</span> (US)
              </li>
            </ul>

            <h2>Interviews</h2>
            <ul>
              {Interviews.map((interview) =>
                generatePressItem(
                  interview.format,
                  interview.url,
                  interview.title,
                  interview.publicationDate
                )
              )}
            </ul>
          </>
        }
      >
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
          re-combine familiar genre elements into new music for the modern
          age.
        </p>
        <p className="u-subhead">
          Since the band’s inception in 2020, Zillicoah has released a
          string of EPs and Singles.
        </p>
        <p>
          Zillicaoh’s debut LP, Kudzu, was released in August of 2023,
          accompanied by a music video for the third single, Lobera.
          Zillicoah’s sophomore album has been independently recorded and
          is slated for release in late 2024.
        </p>
        <p>The band is currently based in Asheville, NC.</p>
      </SidebarSection>
      <ShowsSection />
    </>
  );
}
