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
  const siteHeaderConfig = {
    config: [
      {
        key: "sHCI_", 
        siteHeaderNavItem: {
          key: "sHNI_", 
          hasPopup: true, 
          displayValue: "Startseite"
        },
        siteHeaderMenuSection: {
          key: "sHMS_", 
          hasSubMenu: true, 
          subMenuNavItem: [
            {
              key: "sHSMNI_", 
              label: "League Of Legends", 
              description: "unsere League Of Legends Teams ein einem Blick"
            },
            {
              key: "sHSMNI_", 
              label: "Valorant", 
              description: "unsere Valorant Teams ein einem Blick"
            },
          ],
          subMenuSection: [
            {
              key: "sHSMS_", 
              siteNavItemList: [
                {
                  key: "sHSMNIL_", 
                  siteNavItem: [
                    {key: "sHSMNI_", label: "SLR Solaris Esports", description: "Unser erstes Main Team", image: "", imageAlt: "logo", link: ""},
                    {key: "sHSMNI_", label: "SLR Solaris Esports", description: "Unser erstes Main Team", image: "", imageAlt: "logo", link: ""},
                    {key: "sHSMNI_", label: "SLR Solaris Esports", description: "Unser erstes Main Team", image: "", imageAlt: "logo", link: ""},
                  ]
                },
                {
                  key: "sHSMNIL_", 
                  siteNavItem: [
                    {key: "sHSMNI_", label: "SLR Solaris Esports", description: "Unser erstes Main Team", image: "", imageAlt: "logo", link: ""},
                  ]
                },
              ]
            },
            {
              key: "sHSMS_", 
              siteNavItemList: [
                {
                  key: "sHSMNIL_", 
                  siteNavItem: [
                    {key: "sHSMNI_", label: "SLR Solaris Esports", description: "Unser erstes Main Team", image: "", imageAlt: "logo", link: ""},
                  ]
                },
              ]
            },
          ],
        },
      },
      {
        key: "sHCI_", 
        siteHeaderNavItem: {key: "sHNI_", hasPopup: true, displayValue: "News"},
        siteHeaderMenuSection: {key: "sHMS_", hasSubMenu: false},
      },
      {
        key: "sHCI_", 
        siteHeaderNavItem: {key: "sHNI_", hasPopup: true, displayValue: "Verein"},
        siteHeaderMenuSection: {key: "sHMS_", hasSubMenu: false},
      },
      {
        key: "sHCI_", 
        siteHeaderNavItem: {key: "sHNI_", hasPopup: true, displayValue: "Teams"},
        siteHeaderMenuSection: {key: "sHMS_", hasSubMenu: false},
      },
      {
        key: "sHCI_", 
        siteHeaderNavItem: {key: "sHNI_", hasPopup: true, displayValue: "Community"},
        siteHeaderMenuSection: {key: "sHMS_", hasSubMenu: false},
      },
    ] 
  }

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
                {siteHeaderConfig.config.map((item, index) => (
                  <li
                    key={`${item.key}${index}`}
                    className="SiteHeaderNavItem"
                    data-js-target="SiteHeaderDroppdownTriggers"
                    onMouseEnter={(event) => handleLinkHover(event, document.querySelectorAll('[data-js-target="SiteHeaderDroppdownTriggers"]')[index], index)}
                    onMouseLeave={(event) => handleLinkHover(event, document.querySelectorAll('[data-js-target="SiteHeaderDroppdownTriggers"]')[index], index)}
                  >
                    <button
                      className={`${item?.siteHeaderNavItem?.hasPopup ? "" : "Link"} SiteHeaderNavItem__link`}
                      aria-haspopup={(item?.siteHeaderNavItem?.hasPopup && true) || false}
                      aria-expanded={(item?.siteHeaderNavItem?.hasPopup && "false") || undefined}
                    >
                      {item?.siteHeaderNavItem?.displayValue || "error"}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
            <nav className="SiteHeader__ctaNav">
              <a href="" className="CtaButton">
                <span>Verein</span>
              </a>
            </nav>
            <SiteHeaderMenuContainer {...siteHeaderConfig}/>
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

