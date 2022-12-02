import React, { useEffect } from 'react'
import Logo from "../../../assets/svg/Logo.svg"
import "./header.css"
import propTypes from "prop-types"
import Guides from '../guides/Guides';

export default function Header(props) {

  const navLinks = [
    {hasPopup: false, displayValue: "Startseite"},
    {hasPopup: true, displayValue: "News"},
    {hasPopup: true, displayValue: "Verein"},
    {hasPopup: true, displayValue: "Teams"},
    {hasPopup: true, displayValue: "Community"},
  ]

  useEffect(() => {

    document.querySelector("header").style = `--siteMenuArrowOffset: ${200}px`
    document.querySelector(".SiteMenu").style = `--siteMenuHeight: ${373}px; width: 604px; pointer-events: none;`
  },[])
  
  return (
    <React.Fragment>
      <header
        className={`SiteHeader ${
          props?.hasGuides && "SiteHeader--hasGuides"
        } variant--${(props?.variant && props.variant) || "Standart"}`}
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
                  >
                    <button
                      className={`${
                        link?.hasPopup ? "" : "Link"
                      } SiteHeaderNavItem__link`}
                      aria-haspopup={(link?.hasPopup && true) || false}
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
            <div className="SiteHeader__menuContainer">
              <div className="SiteHeaderArrow" aria-hidden={true}></div>
              <div className="SiteMenu SiteHeader__menu" hidden={true}>
                <div className="Card SiteMenu__card">
                  <div className="SiteMenu__section SiteMenu__section--left" aria-hidden={true} hidden={true}></div>
                  <div className="SiteMenu__section SiteMenu__section--left" aria-hidden={true} hidden={true}></div>
                  <div className="SiteMenu__section SiteMenu__section--left" aria-hidden={true} hidden={true}></div>
                  <div className="SiteMenu__section SiteMenu__section--left" aria-hidden={true} hidden={true}></div>
                </div>
              </div>
            </div>
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