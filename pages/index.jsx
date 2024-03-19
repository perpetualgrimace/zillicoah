import SocialLinks from "/data/socialLinks.json";
import NeptuneLinks from "/data/neptuneLinks.json";
import DecayedRemadeLinks from "/data/decayedRemadeLinks.json";

import HeroSection from "/components/layout/components/HeroSection";
import ShowsSection from "/components/layout/components/ShowsSection";
import AlbumSection from "/components/layout/components/AlbumSection";
import VideoSection from "/components/layout/components/VideoSection";

import SocialLinkList from "/components/common/SocialLinkList";

export default function Home() {
  return (
    <>
      <HeroSection
        title="Exploring the gray area between rock and metal"
        subhead="In Western NC and beyond"
        pageSlug="home"
      >
        <SocialLinkList
          wrapperClass="home-hero-social-list"
          links={SocialLinks}
        />
      </HeroSection>

      <ShowsSection />

      <AlbumSection
        title="Neptune EP"
        subhead="Out now"
        imgSrc="neptune"
        bgImgSrc="neptune-blue"
        links={NeptuneLinks}
      />

      <VideoSection
        title="The Making of Neptune"
        subhead="Docuseries"
        videoUrl="https://www.youtube.com/watch?v=kp-Ybvr60W4&list=PL2OXkh0m_R5ykVrouKOwIC-gTso42KaLB"
        embedUrl="https://www.youtube.com/embed/kp-Ybvr60W4?si=A6gfbWqHkW3m_5Fn"
        bgImgSrc="neptune-purple"
      />

      <AlbumSection
        title="Decayed | Remade"
        subhead="The debut album"
        imgSrc="decayed-remade"
        bgImgSrc="decayed-remade"
        links={DecayedRemadeLinks}
      />
    </>
  );
}
