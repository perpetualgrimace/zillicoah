import { useEffect, useRef, useState, useCallback } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import MenuItems from "/data/siteNav.json";

import checkRoute from "/helpers/checkRoute";

import CrossIcon from "/components/icons/CrossIcon.svg";
import HamburgerIcon from "/components/icons/HamburgerIcon.svg";
import RetinaImg from "/components/common/RetinaImg";

export default function Navbar() {
  const currRoute = useRouter().pathname;
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [menuHasBeenOpened, setMenuHasBeenOpened] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(1);

  const menuContainerRef = useRef(null);
  const menuOpenButtonRef = useRef(null);
  const menuCloseButtonRef = useRef(null);

  const openMenu = useCallback(() => {
    setMenuIsOpen(true);
    setMenuHasBeenOpened(true);
    menuCloseButtonRef.current.focus();
  }, [menuIsOpen, menuHasBeenOpened]);

  const closeMenu = useCallback(() => {
    setMenuIsOpen(false);
    setHighlightedIndex(-1);
    menuOpenButtonRef.current.focus();
  }, [menuIsOpen, highlightedIndex]);

  useEffect(() => {
    if (menuIsOpen) {
      const nodes = menuContainerRef.current.childNodes;

      if (highlightedIndex >= 0 && highlightedIndex < MenuItems.length) {
        nodes[highlightedIndex].focus();
      }
    } else if (menuHasBeenOpened) {
      menuOpenButtonRef.current.focus();
    }
  }, [menuIsOpen, menuHasBeenOpened, highlightedIndex]);

  return (
    <div className="navbar">
      <nav className="navbar-nav" role="navigation">
        <Link
          href="/"
          className="navbar-logo"
          aria-current={checkRoute("/", currRoute)}
        >
          <RetinaImg
            className="navbar-logo-img"
            file="logo-horizontal"
            alt="Zillicoah, home"
          />
        </Link>

        <button
          className="navbar-toggle u-subhead u-font-md"
          onClick={openMenu}
          aria-pressed={menuIsOpen}
          ref={menuOpenButtonRef}
          aria-haspopup="true"
          type="button"
        >
          <span className="u-visually-hidden-sm">Menu </span>
          <HamburgerIcon />
        </button>

        <button
          className={`navbar-menu-bg ${
            menuIsOpen ? "is-open" : "is-closed"
          }`}
          onClick={() => setMenuIsOpen(false)}
          tabIndex={menuIsOpen ? 0 : -1}
          onFocus={closeMenu}
          aria-label="closing menu"
        />

        <ul
          className={`navbar-menu darkglass ${
            menuIsOpen ? "is-open" : "is-closed"
          }`}
          ref={menuContainerRef}
        >
          <li className="navbar-menu-toggle">
            <button
              className="navbar-menu-toggle u-subhead u-font-md"
              onClick={() => setMenuIsOpen(false)}
              tabIndex={menuIsOpen ? 0 : -1}
              ref={menuCloseButtonRef}
              type="button"
              aria-pressed="true"
            >
              <span className="u-visually-hidden-sm">Menu </span>
              <CrossIcon />
            </button>
          </li>

          {MenuItems.map((link, i) => (
            <li key={link?.label} className="navbar-menu-item">
              <Link
                href={link?.route}
                className="navbar-menu-link"
                aria-current={checkRoute(link?.route, currRoute)}
                onClick={() => setMenuIsOpen(false)}
              >
                {link?.label}
              </Link>
            </li>
          ))}

          <li className="navbar-player-wrapper">
            <iframe
              style={{ border: "none", width: "100%", height: "42px" }}
              src="https://bandcamp.com/EmbeddedPlayer/album=1312496295/size=small/bgcol=000000/linkcol=DF854B/transparent=true/artwork=none"
              seamless
              tabIndex="-1"
            />
          </li>
        </ul>

        <button
          className="u-visually-hidden"
          onClick={() => setMenuIsOpen(false)}
          tabIndex={menuIsOpen ? 0 : -1}
          onFocus={closeMenu}
          aria-label="closing menu"
        />
      </nav>
    </div>
  );
}
