import RetinaImg from "/components/common/RetinaImg";

export default function StatTile(props) {
  const { title, subhead, imgClass, imgSrc, children } = props;

  return (
    <section className="stat-tile">
      {title && (
        <h3 className="stat-tile-title u-title u-mb-0">{title}</h3>
      )}
      {subhead && (
        <p className="stat-tile-subhead u-font-md u-mb-xl">{subhead}</p>
      )}

      <RetinaImg className={imgClass} file={imgSrc} extension="jpg" />

      {children}
    </section>
  );
}
