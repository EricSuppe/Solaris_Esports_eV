import React, { useEffect } from 'react'
import Logo from "../../../assets/svg/Logo.svg"
import "./header.css"
import propTypes from "prop-types"
import Guides from '../guides/Guides';
import SiteHeaderDroppdownTriggers from '../../../scripts/SiteHeaderDroppdownTriggers';
import SiteMenuInit from '../../../scripts/SiteMenu';

export default function Header(props) {

  const navLinks = [
    {hasPopup: true, displayValue: "Startseite"},
    {hasPopup: true, displayValue: "News"},
    {hasPopup: true, displayValue: "Verein"},
    {hasPopup: true, displayValue: "Teams"},
    {hasPopup: false, displayValue: "Community"},
  ]

  useEffect(() => {
    SiteHeaderDroppdownTriggers();
    SiteMenuInit();
  },[])
  
  return (
    <React.Fragment>
      <header
        className={`SiteHeader ${
          props?.hasGuides && "SiteHeader--hasGuides"
        } variant--${(props?.variant && props.variant) || "Standart"}`}
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
                    >
                    <button
                      className={`${
                        link?.hasPopup ? "" : "Link"
                      } SiteHeaderNavItem__link`}
                      aria-haspopup={(link?.hasPopup && true) || false}
                      data-check-for-popup={(link?.hasPopup && true) || undefined}
                      aria-expanded={(link?.hasPopup && false) || undefined}
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
              <div className="SiteMenu SiteHeader__menu" hidden={true} data-js-target="SiteMenu">
                <div className="Card SiteMenu__card">
                  <div className="SiteMenu__section SiteMenu__section--left" data-js-target="SiteMenuSection" aria-hidden={true} hidden={true}>
                    <section className="SiteMenuSection">
                      <div className="SiteMenuSection__body">
                        <div className="SiteSubMenu">
                          <div className="SiteSubMenu__nav">
                            <span className="SiteSubMenu__navHoverBackground">
                              <img src="" alt="" />
                            </span>
                            <div>
                              <button className='SiteSubNavItem'>
                                <strong className='SiteSubNavItem__label'>hier das label</strong>
                                <p className="SiteSubNavItem__body">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, quasi!</p>
                              </button>
                            </div>
                          </div>
                          <div className="SiteSubMenu__sectionList">
                            <div className="SiteSubMenuSection">
                              <section className="SiteNavList">
                                <ul className='SiteNavList__list'>
                                  <li className='SiteNavItem'>
                                    <a href="" className='SiteNavItem__link'>
                                      <span className='SiteNavItem__iconContainer'>
                                        <img src="" alt="" />
                                      </span>
                                      <span className='SiteNavItem__labelContainer'>Lol irgendwie
                                        <p className='SiteNavItem__body'>Irgendnen scheiß balb bla</p>
                                      </span>
                                    </a>
                                  </li>
                                </ul>
                              </section>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                  <div className="SiteMenu__section SiteMenu__section--left" data-js-target="SiteMenuSection" aria-hidden={true} hidden={true}></div>
                  <div className="SiteMenu__section SiteMenu__section--left" data-js-target="SiteMenuSection" aria-hidden={true} hidden={true}></div>
                  <div className="SiteMenu__section SiteMenu__section--left" data-js-target="SiteMenuSection" aria-hidden={true} hidden={true}></div>
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