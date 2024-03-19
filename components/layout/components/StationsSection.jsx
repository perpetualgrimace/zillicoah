import stations from "/data/radioStations.json";

export default function StationsSection() {
  return (
    <section className="stations-section padded-section">
      <h2 className="u-title u-mb-x u-text-c">Appearing on</h2>

      <ul className="station-list u-text-l-c">
        {stations.map((station) => (
          <li
            className="station-item u-font-md u-mb-sm"
            key={station.name}
          >
            <strong>{station.name}</strong> ({station.country})
          </li>
        ))}
      </ul>
    </section>
  );
}
