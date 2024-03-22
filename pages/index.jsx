import SocialLinks from "/data/socialLinks.json";
import KudzuLinks from "/data/kudzuLinks.json";
import AbbasidLinks from "/data/abbasidLinks.json";

import HeroSection from "/components/layout/components/HeroSection";
import ShowsSection from "/components/layout/components/ShowsSection";
import AlbumSection from "/components/layout/components/AlbumSection";
import VideoSection from "/components/layout/components/VideoSection";

import SocialLinkList from "/components/common/SocialLinkList";

export default function Home() {
  return (
    <>
      <HeroSection
        title="A new sound for the nostalgic"
        subhead="Appalachian post-punk with undeniable 90s influence"
        pageSlug="home"
      >
        <SocialLinkList
          wrapperClass="hero-social-list"
          links={SocialLinks}
          hideText={true}
        />
      </HeroSection>

      <ShowsSection />

      <AlbumSection
        title="Kudzu"
        subhead="Out now"
        imgSrc="kudzu"
        bgImgSrc="kudzu-bg"
        links={KudzuLinks}
      />

      <VideoSection
        title="Lobera"
        subhead="Official music video"
        videoUrl="https://www.youtube.com/watch?v=QtaW6OgZye4"
        embedUrl="https://www.youtube.com/embed/QtaW6OgZye4"
        bgImgSrc="lobera-bg"
      />

      <AlbumSection
        title="Abbasid"
        subhead="The debut EP"
        imgSrc="abbasid"
        bgImgSrc="abbasid-bg"
        links={AbbasidLinks}
      />
    </>
  );
}
