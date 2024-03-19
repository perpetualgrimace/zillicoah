import RetinaImg from "/components/common/RetinaImg";

export default function ShowTile(props) {
  const { date, venue, city, href, index } = props;

  return (
    <li className="show-tile">
      <a href={href} className="show-link u-text-c" target="_blank">
        <span className="show-date u-heading u-font-md u-mb-lg">
          {date} <span className="u-visually-hidden"> at </span>
        </span>
        <span className="show-venue u-font-md u-mb-sm">
          {venue} <span className="u-visually-hidden"> in </span>
        </span>
        <span className="show-city">{city}</span>
      </a>

      <RetinaImg
        className="show-img"
        file={`thumbnail/show-${index + 1}`}
        loading="lazy"
        extension="jpg"
      />
    </li>
  );
}
