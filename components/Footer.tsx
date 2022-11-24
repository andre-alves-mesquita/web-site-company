import Link from "next/link";
import Logo from "components/Logo";
import { darken } from "polished";
import { spacing, typography, colors } from "theme";

export default function Footer() {
  return (
    <footer>
      <div className="pure-g container">
        <div className="pure-u-1 pure-u-md-1-5">
          <Logo />
          <br />
        </div>
        <div role="navigation" className="pure-u-1-2 pure-u-md-1-5">
          <h3>Product</h3>
          <ul>
            <li>
              <Link href="/changelog">
                <a>Changelog</a>
              </Link>
            </li>
            <li>
              <Link href="/integrations">
                <a>Integrations</a>
              </Link>
            </li>
            <li>
              <Link href="/developers">
                <a>Developers</a>
              </Link>
            </li>
            <li>
              <Link href="/pricing">
                <a>Pricing</a>
              </Link>
            </li>
            <li>
              <a href="https://status.getoutline.com">Status</a>
            </li>
          </ul>
        </div>
        <div role="navigation" className="pure-u-1-2 pure-u-md-1-5">
          <h3>Community</h3>
          <ul>
            <li>
              <Link href="/contact">
                <a>Contact Us</a>
              </Link>
            </li>
            <li>
              <a href="https://github.com/outline" target="_blank">
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://github.com/outline/outline/discussions"
                target="_blank"
              >
                Discuss
              </a>
            </li>
            <li>
              <a href="https://twitter.com/getoutline" target="_blank">
                Twitter
              </a>
            </li>
          </ul>
        </div>
        <div role="navigation" className="pure-u-1-2 pure-u-md-1-5">
          <h3>Company</h3>
          <ul>
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="/privacy">
                <a>Privacy</a>
              </Link>
            </li>
            <li>
              <Link href="/terms">
                <a>Terms of Use</a>
              </Link>
            </li>
            <li>
              <a href="https://climate.stripe.com/x7Updz" target="_blank">
                Climate Impact
              </a>
            </li>
          </ul>
        </div>
        <div role="navigation" className="pure-u-1-2 pure-u-md-1-5">
          <h3>Compare</h3>
          <ul>
            <li>
              <Link href="/compare/confluence-alternative">
                <a>Confluence</a>
              </Link>
            </li>
            <li>
              <Link href="/compare/google-docs-alternative">
                <a>Google Docs</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="copy">
        <div className="container">
          <p>
            &copy; {new Date().getFullYear()} General Outline, Inc. &middot;
            Built in California.
          </p>
        </div>
      </div>
      <div className="copy2">
        <div className="container">
          <div className="barFixed">
            <div className="contactFooter">
              <i className="fa-sharp iHoverContacts iconDisplayNone espacoIcons fa-lg fa-solid fa-phone">
                {"  "}
                <b>(61) 99999 - 9999</b>
              </i>
              <i className="fa-solid iHoverContacts iconDisplayNone espacoIcons fa-lg fa-envelope">
                {"  "}
                <b>email@email.com</b>
              </i>
            </div>
            <div className="socialMedia">
              <i className="fa-brands iHover espacoIcons fa-lg fa-youtube"></i>
              <i className="fa-brands iHover espacoIcons fa-lg fa-linkedin"></i>
              <i className="fa-brands iHover espacoIcons fa-lg fa-instagram"></i>
              <i className="fa-brands iHover espacoIcons fa-lg fa-square-facebook"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="whatsapp">
        <a href="https://wa.me/5561985487081?text=Tenho%20interesse%20em%20comprar%20seu%20carro">
          <img src="/images/icons8-whatsapp.svg" width="80"></img>
        </a>
      </div>
      <style jsx>
        {`
          @media (max-width: 48em) {
            .iconDisplayNone {
              display: none;
            }
            .barFixed {
              display: flex;
              justify-content: flex-start;
            }
          }

          .iHover:hover {
            transform: scale(1.3);
            transition-timing-function: ease;
            transition-duration: 0.5s;
          }
          .iHoverContacts:hover {
            transform: scale(1.1);
            transition-timing-function: ease;
            transition-duration: 0.5s;
          }
          .whatsapp {
            position: fixed;
            bottom: 0;
            right: 40px;
          }
          .whatsapp:hover {
            transform: scale(1.1);
            transition-timing-function: ease;
            transition-duration: 0.5s;
          }
          .espacoIcons {
            margin: 0 20px 0 20px;
            color: white;
          }
          b {
            font-family: Roboto, sans-serif;
          }
          .socialMedia {
            display: flex;
            justify-content: space-around;
          }
          .contactFooter {
            display: flex;
            justify-content: space-around;
          }
          .barFixed {
            position: fixed;
            bottom: 0;
            left: 0;
            background-color: #e5e9ee;
            width: 100vw;
            height: 40px;
            background-color: #5f697d;
            display: flex;
            justify-content: space-around;
            align-items: center;
            flex-direction: row-reverse;
          }
          .copy2 {
            background: white;
            width: 100%;
            height: 40px;
            color: #444;
            padding: 2px 4px;
          }
          .copy {
            font-size: 12px;
            font-family: ${typography.fontFamilyMono};
            background: ${darken(0.05, colors.lightGrey)};
            padding: 2px 4px;
            margin-top: ${spacing.large};
            color: #444;
          }
          footer {
            margin-top: ${spacing.xlarge};
            padding-top: ${spacing.xlarge};
            background: ${colors.lightGrey};
          }

          h3 {
            margin-top: 0;
            font-weight: 600;
          }

          ul,
          li {
            margin: 0;
            padding: 0;
            list-style: none;
          }

          ul {
            margin-bottom: ${spacing.large};
          }

          li {
            margin: 8px 0;
          }

          li a {
            color: ${colors.textSecondary};
            text-decoration: none;
            line-height: 1.4em;
          }

          li a:hover {
            padding-bottom: 1px;
            border-bottom: 2px solid ${colors.textSecondary};
          }
        `}
      </style>
    </footer>
  );
}
