import React from 'react'
import propTypes from "prop-types"
import Logo from "../../../assets/svg/Logo.svg"
import profile from "../../../assets/meliodas.jpg"
import "./style/sHMiddleContainer.css"
import HoverArrow from '../arrow/HoverArrow'
import useTranslation from '../../../hooks/useTranslation'
import Button from '../button/Button'
import "./style/sHSearchBar.css"
import { Link } from 'react-router-dom'
import SHMenuContainer from './SHMenuContainer'
import "./style/sHNavContainer.css"

export default function SHMiddleContainer(props) {

    const isLoggedIn = false
    const isMember = false

    const translate = useTranslation()

    return (
        <div className="SiteHeader__middleContainer">
            <h1 className="SiteHeader__logo">
                <a 
                    href="/" 
                    className="SiteHeader__logoLink"
                >
                    <img 
                        src={`${Logo}`} 
                        alt="solaris logo"
                    />
                </a>
            </h1>
            <div className="SiteHeader__navContainer">
                <nav className="SiteHeaderNav">
                <ul className="SiteHeaderNav__list">
                    {props.siteHeaderConfig.config.map((item, index) => (
                    <li
                        key={`${item.key}${index}`}
                        className="SiteHeaderNavItem"
                        data-js-target="SiteHeaderDroppdownTriggers"
                    >
                        <Link
                            className={`${item?.siteHeaderNavItem?.hasPopup ? "" : "Link"} SiteHeaderNavItem__link`}
                            aria-haspopup={(item?.siteHeaderNavItem?.hasPopup && true) || false}
                            aria-expanded={(item?.siteHeaderNavItem?.hasPopup && "false") || undefined}
                            data-translation-key={`${item.siteHeaderNavItem.translationKey}`}
                            data-start-transition={true}
                        >
                        {translate(item?.siteHeaderNavItem?.translationKey, item?.siteHeaderNavItem?.translationFallback)}
                        </Link>
                    </li>
                    ))}
                </ul>
                </nav>
            </div>
            <div 
                className="SiteHeader__search" 
                data-js-target="SiteHeaderSearchBar" 
                aria-haspopup={true} 
                aria-expanded={false}
            >
                <div className="SiteHeader__searchConatiner">
                    <input 
                        className='SiteHeader__searchBar' 
                        type="text" 
                        placeholder='suchen'
                    />
                    <button className='SiteHeader__searchButton'>
                        <i className='bx bx-search-alt-2'></i>
                    </button>
                    <div 
                        className="SiteHeader__searchResultContainer" 
                        data-js-target="SiteHeaderSearchResultContainer"
                        aria-hidden={true}
                        hidden
                    >
                        <div className="SiteHeader__searchRecent">
                            test
                        </div>
                        <div className="SiteHeader__searchCurrent"></div>
                    </div>    
                </div>
                <SHMenuContainer {...props.siteHeaderConfig}/>
            </div>
            <nav className={`SiteHeader__ctaAccount 
                ${isLoggedIn ? "SiteHeader__ctaAccoun--loggedOut" : "SiteHeader__ctaAccoun--loggedIn"} 
                ${(isMember && "SiteHeader__ctaAccoun--member") || ""}`}
            >
                {isLoggedIn 
                ? (isMember 
                    ? <></> 
                    : <></>) 
                : <div className='SiteHeader__loginContainer'>
                    <Button name={"SiteHeader__loginButton"} buttonId={"SHLB"}>
                        <div className="SiteHeaderLogin__labelContainer">
                            <span 
                                className="SiteHeaderLogin__label" 
                                data-translation-key={"siteHeader.account.login"}
                                >
                                {translate("siteHeader.account.login","login")}
                            </span>
                        </div>
                        <HoverArrow variant={"Dark"} transfrom={true}/>
                    </Button>
                </div>}
            </nav>
        </div>
    )
}
SHMiddleContainer.propTypes = {
    siteHeaderConfig: propTypes.object.isRequired,
}