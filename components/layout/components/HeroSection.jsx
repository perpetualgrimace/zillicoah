import RetinaImg from "/components/common/RetinaImg";

export default function HeroSection(props) {
  const { pageSlug, title, subhead, children } = props;
  return (
    <section className={`hero-section ${pageSlug}-hero-section`}>
      <RetinaImg
        className="hero-img u-mb-lg"
        file={`hero/hero-${pageSlug === "home" ? "home" : "default"}`}
        extension="jpg"
      />

      <div className="padded-section">
        <h1 className="u-title hero-title u-mb-lg">
          {title || "missing `title` prop"}
          {subhead && (
            <span className="hero-subhead u-subhead u-font-lg u-mb-md">
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
