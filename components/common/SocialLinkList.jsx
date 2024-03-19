import { useState } from "react";

import loadIcon from "/helpers/loadIcon";
import SocialLink from "/components/common/SocialLink";
import SocialPopup from "/components/common/SocialPopup";

export default function SocialLinkList(props) {
  const { links, wrapperClass, hideText } = props;

  return (
    <ul
      className={`social-link-list${
        wrapperClass ? ` ${wrapperClass}` : ""
      }`}
    >
      {links.map((link) =>
        Array.isArray(link) && link.length ? (
          <SocialPopup key="popup">
            {link.map((nestedLink) =>
              generateSocialLink(nestedLink, hideText)
            )}
          </SocialPopup>
        ) : (
          generateSocialLink(link, hideText)
        )
      )}
    </ul>
  );
}

function generateSocialLink(link, hideText) {
  return (
    <SocialLink
      href={link.href}
      Icon={loadIcon(link.icon)}
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
