import { useEffect, useState } from "react";

import showURLs from "/data/shows.json";
const { bandsintownApiUrl, bandsintownLink } = showURLs;

import ShowTile from "/components/layout/components/ShowTile";

export default function ShowsSection() {
  const [upcoming, setUpcoming] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(bandsintownApiUrl, {
        next: { revalidate: 86400 },
      });
      let data;

      if (!response.ok) {
        console.log("error: bandsintown API down or no upcoming shows");
        return null;
      }

      data = await response.json();
      if (data?.length > 4) data.length = 4;
      setUpcoming(data);
    }
    fetchData();
  }, []);

  if (!upcoming || !upcoming.length) return null;

  return (
    <section className="shows-section u-text-c">
      <h2 className="u-title u-mb-xxs">Upcoming events</h2>
      <p className="u-mb-lg">
        Powered by{" "}
        <a href={bandsintownLink} target="_blank">
          Bandsintown
        </a>
      </p>

      <ul className="shows-list">
        {upcoming.map((show, i) => (
          <ShowTile
            date={new Date(show.datetime).toLocaleDateString("en-US", {
              weekday: "short",
              month: "short",
              day: "numeric",
            })}
            venue={show.venue.name}
            city={show.venue.location}
            href={show.url}
            index={i}
            key={show.id}
          />
        ))}
      </ul>
    </section>
  );
}
