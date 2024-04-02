import { useEffect, useState } from "react";

import showURLs from "/data/shows.json";
const { bandsintownApiUrl, bandsintownLink, upcoming } = showURLs;

import ShowItem from "/components/layout/components/ShowItem";

export default function ShowsSection() {
  // const [upcoming, setUpcoming] = useState([]);

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch(bandsintownApiUrl, {
  //       next: { revalidate: 86400 },
  //     });
  //     let data;

  //     if (!response.ok) {
  //       console.log("error: bandsintown API down or no upcoming shows");
  //       return null;
  //     }

  //     data = await response.json();
  //     // if (data?.length > 4) data.length = 4;
  //     setUpcoming(data);
  //   }
  //   fetchData();
  // }, []);

  if (!upcoming || !upcoming.length) return null;

  const currDate = new Date();

  return (
    <section className="shows-section padded-section">
      <div className="shows-section-inner">
        <div className="shows-section-title u-mb-xxl">
          <h2 className="u-title u-font-lg u-mb-xxs">Upcoming events</h2>
          <p className="u-mb-lg">
            Powered by{" "}
            <a href={bandsintownLink} target="_blank">
              Bandsintown
            </a>
          </p>
        </div>

        <ul className="shows-list">
          {upcoming.map((show, i) => {
            const showDate = new Date(show.datetime);

            if (showDate < currDate) return null;

            return (
              <ShowItem
                date={showDate.toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                })}
                venue={show.venue.name}
                city={show.venue.location}
                href={show.url}
                index={i}
                key={show.id}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
}
