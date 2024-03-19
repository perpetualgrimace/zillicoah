export default function SocialLink(props) {
  const {
    Icon,
    href,
    children,
    theme = "dark",
    hideText = false,
  } = props;

  return (
    <li className="social-item">
      <a
        href={href}
        className={`social-link ${theme}-theme${
          hideText ? " icon-only" : ""
        }`}
      >
        {Icon || ""}

        {hideText ? (
          <span className="u-visually-hidden">{children}</span>
        ) : (
          children
        )}
      </a>
    </li>
  );
}
