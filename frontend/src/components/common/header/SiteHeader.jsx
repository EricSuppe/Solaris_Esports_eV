import React, { useEffect } from 'react'
import Logo from "../../../assets/svg/Logo.svg"
import "./style/siteHeader.css"
import "./style/siteMenu.css"
import "./style/siteSubMenu.css"
import "./style/siteHeaderFooterLayout.css"
import "./style/siteHeaderBodyLayout.css"
import "./style/siteHeaderSocials.css"
import "./style/siteHeaderLang.css"
import propTypes from "prop-types"
import Guides from '../guides/Guides';
import siteHeaderInit, { handleLinkHover } from '../../../scripts/SiteHeader';
import SiteHeaderMenuContainer from './SiteHeaderMenuContainer';
import siteHeaderConfig from './SiteHeaderConfig'
import useTranslation from '../../../hooks/useTranslation'
import { Link } from 'react-router-dom'
import HoverArrow from '../arrow/HoverArrow'

export default function Header(props) {

  const translate = useTranslation()

  const socials = [
    {type: "logo", name: "twitter", font: "bx bxl-twitter", link: "", displayValue: "Twitter"},
    {type: "logo", name: "discord-alt", font: "bx bxl-discord-alt", link: "", displayValue: "Discord"},
    {type: "logo", name: "youtube", font: "bx bxl-youtube", link: "", displayValue: "Youtube"},
    {type: "logo", name: "twitch", font: "bx bxl-twitch", link: "", displayValue: "Twitch"},
    {type: "logo", name: "instagram", font: "bx bxl-instagram", link: "", displayValue: "Instagram"},
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
            <div 
              className="Guides SiteHeader__guides" 
              aria-hidden={true}
            >
              <Guides />
            </div>
          </div>
        )}
        <div className="SiteHeader__container">
          <div className="SiteHeader__configContainer">
            <ul className="SiteHeaderSocials__list">
              {socials && socials.map((item, index) => <li key={`${item}${index}`} className='SiteHeaderSocialsItem'>
                <Link className='SiteHeaderSocialsItem__link' to={`${item.link}`}>
                  <i className={`${item.font} SiteHeaderSocialsItem__icon`}></i>
                  <span className='SiteHeaderSocialsItem__label'>{`${item?.displayValue && item.displayValue || "Social"}`}</span>
                  <HoverArrow/>
                </Link>
              </li>)}
            </ul>
            <div className="SiteHeader__settingsContainer">
              <button className="SiteHeader__languageChanger">
                <span className='SiteHeaderSocialsItem__label' data-translation-key={`language`}>{translate("language","language")}</span>
                <HoverArrow/>
              </button>
            </div>
          </div>
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
                      data-translation-key={`${item.siteHeaderNavItem.translationKey}`}
                    >
                      {translate(item?.siteHeaderNavItem?.translationKey, item?.siteHeaderNavItem?.translationFallback)}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
            <nav className="SiteHeader__ctaNav">
              <a 
                href={`${(siteHeaderConfig?.ctaButton?.link && siteHeaderConfig?.ctaButton?.link) || "/"}`} 
                className="CtaButton"
              >
                <span data-translation-key={(siteHeaderConfig?.ctaButton?.label && siteHeaderConfig?.ctaButton?.label) || "error"}>{translate("hello")}</span>
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

