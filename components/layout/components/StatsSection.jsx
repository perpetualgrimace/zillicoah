import Stats from "/data/stats.json";

import Stat from "/components/layout/components/Stat";
import StatTile from "/components/layout/components/StatTile";

const { neptune, Abbasid, followers } = Stats;
const {
  spotifyListeners,
  twitterFollowers,
  facebookFollowers,
  instagramFollowers,
} = followers;

export default function StatsSection() {
  return (
    <section className="stats-section">
      <h2 className="u-visually-hidden">
        Recent releases and social media followers
      </h2>

      <StatTile
        title="Neptune EP"
        subhead={makeReleaseDate(neptune.releaseDate)}
        imgSrc="artwork/neptune"
        imgClass="stat-tile-album-img stat-tile-img"
      >
        {makeAlbumTile(neptune)}
      </StatTile>

      <StatTile
        title="Decayed | Remade"
        subhead={makeReleaseDate(Abbasid.releaseDate)}
        imgSrc="artwork/decayed-remade"
        imgClass="stat-tile-album-img stat-tile-img"
      >
        {makeAlbumTile(Abbasid)}
      </StatTile>

      <StatTile imgSrc="thumbnail/epk-2" imgClass="stat-tile-img">
        <h3 className="stat-tile-title u-title">Media statistics</h3>
        <ul className="stat-list">
          <Stat
            Icon="Spotify"
            value={spotifyListeners}
            label="monthly listeners"
            clarificationText="on Spotify"
          />
          <Stat
            Icon="Twitter"
            value={twitterFollowers}
            label="followers"
            clarificationText="on Twitter"
          />
          <Stat
            Icon="Facebook"
            value={facebookFollowers}
            label="followers"
            clarificationText="on Facebook"
          />
          <Stat
            Icon="Instagram"
            value={instagramFollowers}
            label="followers"
            clarificationText="on Instagram"
          />
        </ul>
      </StatTile>
    </section>
  );
}

function makeReleaseDate(releaseDate) {
  return (
    <>
      Released <strong>{releaseDate}</strong>
    </>
  );
}

function makeAlbumTile(statObj) {
  const { spotifyPlays, bandcampSales, topTrack } = statObj;
  return (
    <ul className="stat-list">
      <Stat
        Icon="Spotify"
        value={spotifyPlays}
        label="plays"
        clarificationText="on Spotify"
      />
      <Stat
        Icon="Bandcamp"
        value={bandcampSales}
        label="sales"
        clarificationText="on Bandcamp"
      />
      <Stat
        heading="Top track"
        preValue={topTrack.title}
        value={topTrack.spotifyPlays}
        label="plays"
        clarificationText="on Spotify"
      />
    </ul>
  );
}
