import RetinaImg from "/components/common/RetinaImg";
import InstagramIcon from "/components/icons/social/InstagramIcon.svg";

export default function MusicianTile(props) {
  const { name, bio, role, instagram, imgSrc } = props;

  return (
    <li className="musician-tile">
      <RetinaImg
        className="musician-img"
        file={`thumbnail/${imgSrc}`}
        loading="lazy"
        extension="jpg"
        alt={`${name} playing ${role} on stage`}
      />
      <span className="musician-tile-text">
        <h3 className="musicain-name u-title u-font-sm u-mb-0">{name}</h3>
        <p className="musician-role u-mb-md">{role}</p>
        <p className="musician-bio u-mb-xs">{bio}</p>
        <a
          className="musician-instagram"
          href={`https://instagram.com/${instagram}`}
          target="_blank"
        >
          <InstagramIcon />
          {instagram}
        </a>
      </span>
    </li>
  );
}
