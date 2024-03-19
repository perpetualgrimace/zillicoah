import RetinaImg from "/components/common/RetinaImg";
import SocialLinkList from "/components/common/SocialLinkList";

export default function AlbumSection(props) {
  const { imgSrc, bgImgSrc, title, subhead, links, hideText } = props;
  return (
    <section className="album-section padded-section">
      <RetinaImg
        className="album-section-img"
        file={`artwork/${imgSrc}`}
        extension="jpg"
      />

      <div className="album-section-caption">
        <h2 className="u-title u-mb-0">{title || "missing title"}</h2>
        <p className="u-font-lg u-subhead u-mb-xl">{subhead}</p>

        <SocialLinkList
          wrapperClass="album-section-social-list"
          links={links}
          theme="light"
          hideText={hideText}
        />
      </div>

      <RetinaImg
        className="album-section-bg"
        file={`bg/${bgImgSrc}`}
        extension="jpg"
      />
    </section>
  );
}
