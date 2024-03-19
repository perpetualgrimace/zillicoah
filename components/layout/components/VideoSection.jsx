import RetinaImg from "/components/common/RetinaImg";

import YouTubeIcon from "/components/icons/social/YouTubeIcon.svg";
import BandcampIcon from "/components/icons/social/BandcampIcon.svg";
import SocialLink from "/components/common/SocialLink";

export default function VideoSection(props) {
  const { embedUrl, videoUrl, bgImgSrc, title, subhead } = props;
  return (
    <section className="video-section padded-section">
      <div className="video-section-caption">
        <h2 className="u-title u-mb-0">{title || "missing title"}</h2>

        <p className="u-font-lg u-subhead u-mb-xl">{subhead}</p>

        <ul className="video-section-social-list">
          <SocialLink
            href={videoUrl}
            Icon={<YouTubeIcon />}
            theme="light"
          >
            Watch on YouTube
          </SocialLink>
        </ul>
      </div>

      <div className="video-iframe-wrapper">
        <iframe
          className="video-iframe"
          width="560"
          height="315"
          src={embedUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>

      <RetinaImg
        className="video-section-bg"
        file={`bg/${bgImgSrc}`}
        extension="jpg"
      />
    </section>
  );
}
