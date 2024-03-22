export default function ShowItem(props) {
  const { date, venue, city, href } = props;

  return (
    <li className="show-item">
      <a href={href} className="show-link" target="_blank">
        <span className="show-date u-heading u-font-lg u-mb-xs">
          {date} <span className="u-visually-hidden"> at </span>
        </span>
        <span className="show-meta u-font-md u-mb-sm">
          {venue} <span className="u-visually-hidden"> in </span>
          <span className="show-meta-separator" ariaHidden>
            •
          </span>{" "}
          {city}
        </span>
      </a>
    </li>
  );
}
