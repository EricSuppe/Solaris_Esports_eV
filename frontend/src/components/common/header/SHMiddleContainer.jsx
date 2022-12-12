import React from 'react'
import propTypes from "prop-types"
import Logo from "../../../assets/svg/Logo.svg"
import profile from "../../../assets/meliodas.jpg"
import "./style/sHMiddleContainer.css"
import HoverArrow from '../arrow/HoverArrow'
import useTranslation from '../../../hooks/useTranslation'
import Button from '../button/Button'

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
            <div className="SiteHeader__search">
                <input 
                    className='SiteHeader__searchBar' 
                    type="text" 
                    placeholder='suchen'
                />
                <button className='SiteHeader__searchButton'></button>
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
                {/* <a 
                    href={`${(props.siteHeaderConfig?.ctaButton?.link && props.siteHeaderConfig?.ctaButton?.link) || "/"}`} 
                    className="CtaButton SiteHeader__profileContainer"
                >
                    <img 
                        className='SiteHeader__profilePicture' 
                        src={`${profile}`} 
                        alt="solaris logo"
                    />
                </a> */}
            </nav>
        </div>
    )
}
SHMiddleContainer.propTypes = {
    siteHeaderConfig: propTypes.object.isRequired,
}