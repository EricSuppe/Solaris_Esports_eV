import React, { useState } from 'react'
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
import { useMemo } from 'react'
import { gen } from '../../../scripts/gen'
import { useRef } from 'react'

export default function SHMiddleContainer(props) {

    /* initialize a new generator */
    const generator = new gen()

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
            <SHMenuContainer {...props.siteHeaderConfig}/>
            <SiteHeaderSearch generator={generator}/>
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

const SiteHeaderSearch = (props) => {

    const [items, setItems] = useState([
        {icon: "", label: "Blog", description: "Esports Blog"},
        {icon: "", label: "Stoeartebreaker", description: "Head of Esport und Autor"},
        {icon: "", label: "Über uns", description: "Alles was man über den Solaris Esport eV wissen muss"},
    ])
    const [query, setQuery] = useState("")
    const inputRef = useRef()

    const filteredItems = useMemo(() => {
        if(query === "") return null
        return Array.from(props.generator.filter(items, i => {
            return i.label.toLowerCase().includes(query.toLowerCase()) || i.description.toLowerCase().includes(query.toLowerCase())
        }, 6))
    },[items, query])

    function onChange(e) {
        return setQuery(e.target.value)
    }

    function onClick() {
        if(inputRef.current.value !== null) return inputRef.current.value = null
        return null
    }

    return (
        <div 
            className="SiteHeader__search" 
            aria-haspopup={true} 
            aria-expanded={false}
            data-js-target="SiteHeaderSearchBarContainer" 
        >
            <div className="SiteHeader__searchConatiner">
                <input 
                    className='SiteHeader__searchBar' 
                    type="search" 
                    placeholder='suchen'
                    data-js-target="SiteHeaderSearchBar"
                    value={query}
                    onChange={e => onChange(e)}
                    ref = {inputRef}
                />
                <button className='SiteHeader__searchButton'>
                    {query.length < 1 
                    ? <i className='bx bx-search-alt-2'></i> 
                    : <i className='bx bx-x' onClick={() => onClick()}></i>}
                </button>
                <div 
                    className="SiteHeader__searchResultContainer SearchBar--hideContent" 
                    data-js-target="SiteHeaderSearchResultContainer"
                    aria-hidden={true}
                    hidden
                >
                    <div className="SiteHeader__searchRecent">
                        {filteredItems !== null ? filteredItems.map((item, index) => {
                            return <div 
                                className="SearchResult" 
                                key={`${index}`} 
                                aria-label="search-result" 
                                role={"navigation"}
                            >
                                <div className="SearchResult__iconContainer">
                                    <img className='SearchResult__icon' src="" alt="" />
                                </div>
                                <div className="SearchResult__body">
                                    <div className='SearchResult__labelContainer'>
                                        <span className='SerachResult__label'>{item.label}</span>
                                    </div>
                                    <span className='SerachResult__description'>{item.description}</span>
                                </div>              
                            </div>
                        }) : null}
                    </div>
                </div>    
            </div>
        </div>
    )
}
SiteHeaderSearch.propTypes = {
    generator: propTypes.object
}