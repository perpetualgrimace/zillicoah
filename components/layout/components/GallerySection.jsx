import Assets from "/data/assets.json";

import RetinaImg from "/components/common/RetinaImg";

export default function GallerySection() {
  return (
    <section className="gallery-section">
      <h2 className="u-title u-mb-x u-text-c">Photos & assets</h2>

      <ul className="asset-list u-text-l-c">
        {Assets.map((asset) => (
          <li
            className="asset-item u-font-md u-mb-sm"
            key={asset.thumbnail}
          >
            <figure className="asset-figure">
              <a className="asset-link" href={asset.dropbox}>
                <RetinaImg
                  className="asset-img"
                  file={`thumbnail/gallery/${asset.thumbnail}`}
                  extension="jpg"
                  loading="eager"
                />
                <span className="asset-link-text u-font-sm">
                  Download on Dropbox.com
                </span>
              </a>

              <figcaption className="asset-figcaption u-font-sm">
                <strong className="asset-title u-font-md u-block u-mb-xxs">
                  {asset.name}
                </strong>
                <span className="u-visually-hidden"> by </span>
                <span className="asset-credits u-block u-mb-xs">
                  {asset.credits}
                </span>
                {asset.location && (
                  <>
                    <span className="u-visually-hidden"> at </span>
                    <span className="asset-location u-block u-subhead u-font-xs">
                      {asset.location}
                    </span>
                  </>
                )}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}
