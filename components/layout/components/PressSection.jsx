import Interviews from "/data/interviews.json";
import Reviews from "/data/reviews.json";

import { getBaseUrlFromString } from "/helpers/getBaseUrlFromString.js";

export default function PressSection() {
  return (
    <section className="press-section">
      <h2 className="u-title u-text-c u-mb-sm">Reviews & interviews</h2>

      <ul className="press-list">
        {Reviews.map((interview) =>
          generatePressItem(
            "Album review",
            interview.url,
            interview.title,
            interview.publicationDate
          )
        )}
        {Interviews.map((interview) =>
          generatePressItem(
            interview.format,
            interview.url,
            interview.title,
            interview.publicationDate
          )
        )}
      </ul>
    </section>
  );
}

function generatePressItem(format, url, title, date) {
  return (
    <li className="press-item" key={title}>
      <span className="press-format u-title u-font-sm u-block u-mb-sm">
        {format !== "Album review" ? `${format} review` : format}
      </span>
      <span className="u-visually-hidden">: </span>
      <a
        href={url}
        className="press-link u-block u-mb-md"
        target="_blank"
      >
        {getBaseUrlFromString(url)}
      </a>
      <span className="u-visually-hidden">; </span>
      <span className="press-title u-font-lg u-block">
        <strong>{title}</strong>{" "}
        <span className="u-font-md">({date})</span>
      </span>
    </li>
  );
}
