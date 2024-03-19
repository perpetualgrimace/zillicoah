import RetinaImg from "/components/common/RetinaImg";

export default function HeroSection(props) {
  const { slug, pageSlug, title, subhead, children } = props;
  return (
    <section
      className={`hero-section ${pageSlug}-hero-section`}
      id={slug || "hero-section"}
    >
      <RetinaImg className="hero-img" file="hero/hero" extension="jpg" />

      <div className="padded-section">
        <h1 className="u-title hero-title u-mb-lg">
          {title || "missing `title` prop"}
          {subhead && (
            <span className="hero-subhead u-subhead u-font-lg">
              {" "}
              {subhead}
            </span>
          )}
        </h1>

        {children}
      </div>
    </section>
  );
}
