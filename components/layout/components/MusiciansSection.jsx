import Musicians from "/data/musicians.json";

import MusicianTile from "/components/layout/components/MusicianTile";

export default function MusiciansSection() {
  return (
    <section className="musicians-section">
      <h2 className="u-title u-text-c u-mb-sm">Meet the band</h2>
      <ul className="musicians-list">
        {Musicians.map((musician) => (
          <MusicianTile
            name={musician.name}
            bio={musician.bio}
            role={musician.role}
            instagram={musician.instagram}
            imgSrc={musician.imgSrc}
            key={musician.name}
          />
        ))}
      </ul>
    </section>
  );
}
