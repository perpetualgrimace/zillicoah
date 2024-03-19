import RetinaImg from "/components/common/RetinaImg";

export default function ImgTextSection(props) {
  const { title, children, imgSrc, imgExtension = "jpg" } = props;
  return (
    <section className="img-text-section fullscreen-section">
      {imgSrc && (
        <RetinaImg
          className="img-text-img"
          file={imgSrc}
          extension={imgExtension}
        />
      )}
      <div className="img-text-caption">
        <h2 className="u-heading u-font-lg">
          {title || "missing title"}
        </h2>
        {children}
      </div>
    </section>
  );
}
