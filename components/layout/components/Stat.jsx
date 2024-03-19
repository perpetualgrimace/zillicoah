import loadIcon from "/helpers/loadIcon";

export default function Stat(props) {
  const { Icon, heading, preValue, value, label, clarificationText } =
    props;
  return (
    <li className="stat u-font-lg">
      {heading && (
        <span className="stat-heading u-heading u-font-md u-block u-mb-sm">
          {heading}
          {HiddenColon()}
        </span>
      )}
      {Icon && loadIcon(Icon)}
      {preValue && (
        <span className="stat-pre-value">
          {preValue} {HiddenColon()}
        </span>
      )}
      <strong className="stat-value">
        {value} <span className="stat-label">{label}</span>
      </strong>
      {clarificationText && (
        <span className="u-visually-hidden"> {clarificationText}</span>
      )}
    </li>
  );
}

function HiddenColon() {
  return <span className="u-visually-hidden">: </span>;
}
