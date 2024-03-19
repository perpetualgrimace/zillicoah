import { useState } from "react";

import loadIcon from "/helpers/loadIcon";
import SocialLink from "/components/common/SocialLink";
import SocialPopup from "/components/common/SocialPopup";

export default function SocialLinkList(props) {
  const { links, theme, wrapperClass, hideText } = props;

  return (
    <ul
      className={`social-link-list${
        wrapperClass ? ` ${wrapperClass}` : ""
      }`}
    >
      {links.map((link) =>
        Array.isArray(link) && link.length ? (
          <SocialPopup theme={theme} key="popup">
            {link.map((nestedLink) =>
              generateSocialLink(nestedLink, theme, hideText)
            )}
          </SocialPopup>
        ) : (
          generateSocialLink(link, theme, hideText)
        )
      )}
    </ul>
  );
}

function generateSocialLink(link, theme, hideText) {
  return (
    <SocialLink
      href={link.href}
      Icon={loadIcon(link.icon)}
      theme={theme}
      hideText={hideText}
      key={link.href}
    >
      {link.label}
      {link?.smallText && (
        <span className="u-font-xs"> {link.smallText}</span>
      )}
    </SocialLink>
  );
}
