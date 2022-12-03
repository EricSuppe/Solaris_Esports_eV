import React, { useEffect } from 'react'
import Logo from "../../../assets/svg/Logo.svg"
import "./siteHeader.css"
import "./siteMenu.css"
import "./siteSubMenu.css"
import propTypes from "prop-types"
import Guides from '../guides/Guides';
import siteHeaderInit, { handleLinkHover } from '../../../scripts/SiteHeader';
import SiteHeaderMenuContainer from './SiteHeaderMenuContainer';

export default function Header(props) {

  const navLinks = [
    {hasPopup: true, displayValue: "Startseite"},
    {hasPopup: true, displayValue: "News"},
    {hasPopup: true, displayValue: "Verein"},
    {hasPopup: true, displayValue: "Teams"},
    {hasPopup: true, displayValue: "Community"},
  ]

  useEffect(() => {
    siteHeaderInit();
  },[])
  
  return (
    <React.Fragment>
      <header
        className={`SiteHeader ${props?.hasGuides && "SiteHeader--hasGuides"} variant--${(props?.variant && props.variant) || "Standart"}`}
        data-js-target="SiteHeader"
      >
        {props?.hasGuides && (
          <div className="SiteHeader__guidesContiner">
            <div className="Guides SiteHeader__guides" aria-hidden={true}>
              <Guides />
            </div>
          </div>
        )}
        <div className="SiteHeader__container">
          <div className="SiteHeader__navContainer">
            <h1 className="SiteHeader__logo">
              <a href="/" className="SiteHeader__logoLink">
                <img src={`${Logo}`} alt="solaris logo" />
              </a>
            </h1>
            <nav className="SiteHeaderNav">
              <ul className="SiteHeaderNav__list">
                {navLinks.map((link, index) => (
                  <li
                    key={`${link.displayValue}${index}`}
                    className="SiteHeaderNavItem"
                    data-js-target="SiteHeaderDroppdownTriggers"
                    onMouseEnter={(event) => handleLinkHover(event, document.querySelectorAll('[data-js-target="SiteHeaderDroppdownTriggers"]')[index], index)}
                    onMouseLeave={(event) => handleLinkHover(event, document.querySelectorAll('[data-js-target="SiteHeaderDroppdownTriggers"]')[index], index)}
                  >
                    <button
                      className={`${link?.hasPopup ? "" : "Link"} SiteHeaderNavItem__link`}
                      aria-haspopup={(link?.hasPopup && true) || false}
                      aria-expanded={(link?.hasPopup && "false") || undefined}
                    >
                      {link?.displayValue || "error"}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
            <nav className="SiteHeader__ctaNav">
              <a href="" className="CtaButton">
                <span>Mitglied werden</span>
              </a>
            </nav>
            <SiteHeaderMenuContainer />
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}

Header.propTypes = {
  hasGuides: propTypes.bool,
  variant: propTypes.string,
}