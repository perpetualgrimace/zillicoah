import Link from "next/link";
import { useRouter } from "next/router";

import SocialLinks from "/data/socialLinks.json";
import MenuItems from "/data/siteNav.json";

import checkRoute from "/helpers/checkRoute";
import getCurrentYear from "/helpers/getCurrentYear";

import RetinaImg from "/components/common/RetinaImg";
import SocialLinkList from "/components/common/SocialLinkList";

export default function footerSection(props) {
  const currRoute = useRouter().pathname;

  return (
    <footer className="footer padded-section u-text-c">
      <div className="footer-row">
        <div className="footer-email u-mb-xl">
          <h2 className="footer-heading">Booking</h2>
          <p>
            <a
              className="footer-email-link u-font-lg"
              href="mailto:zillicoahmusic@gmail.com"
            >
              zillicoahmusic@gmail.com
            </a>
          </p>
        </div>

        <div className="footer-socials u-mb-xl">
          <h2 className="footer-heading">Follow us</h2>

          <SocialLinkList
            wrapperClass="footer-social-list"
            links={SocialLinks}
            hideText={true}
          />
        </div>

        <RetinaImg
          className="footer-logo u-mh-auto u-mb-md"
          file="logo-square"
        />
      </div>

      <nav className="footer-nav u-mb-lg">
        <ul className="footer-menu">
          {MenuItems.map((link) => (
            <li key={link?.label} className="footer-menu-item">
              <Link
                href={link?.route}
                className="footer-menu-link"
                aria-current={checkRoute(link?.route, currRoute)}
              >
                {link?.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <p className="footer-colophon" role="contentinfo">
        © 2016-{getCurrentYear()} Zillicoah. Website designed & built by{" "}
        <a href="https://jamesferrell.me" target="_blank">
          James Ferrell
        </a>
      </p>

      <RetinaImg
        className="footer-bg"
        file="bg/footer-bg"
        extension="jpg"
      />
    </footer>
  );
}
