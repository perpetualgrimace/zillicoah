export default function TextSection(props) {
  const { title, slug, children } = props;
  return (
    <section
      className="text-section padded-section"
      id={slug || "text-section"}
    >
      {title && <h2 className="u-text-c u-title">{title}</h2>}

      <div className="text-section-inner u-font-md">{children}</div>
    </section>
  );
}
