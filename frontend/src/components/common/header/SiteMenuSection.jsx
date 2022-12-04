import React from 'react'
import propTypes from "prop-types"

export default function SiteHeaderMenuSection(props) {
    return (
        <div
            className={`SiteMenu__section SiteMenu__section--left ${props?.hasSubMenu && "SiteMenu--hasSubMenu"}`}
            data-js-target="SiteMenuSection"
            aria-hidden={true}
            hidden={true}
        >
            <section className="SiteMenuSection">
                <div className="SiteMenuSection__body">
                    {props?.hasSubMenu && <SiteHeaderSubMenu/>}
                </div>
            </section>
        </div>
    )
}
SiteHeaderMenuSection.propTypes = {
    hasSubMenu: propTypes.bool,
}

function SiteHeaderSubMenu(props) {
    return (
        <div className="SiteSubMenu" data-js-target="SiteHeaderSubMenu"> 
            <div className="SiteSubMenu__nav">
                <span className="SiteSubMenu__navHoverBackground">        
                    <svg className="SiteSubMenu__navHoverArrow" width="12" height="28" viewBox="0 0 12 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.29289 13.2929 0 6v16l7.29289-7.2929c.39053-.3905.39053-1.0237 0-1.4142Z" fill="var(--backgroundColorLayer2)"></path>
                        <path fillRule="evenodd" clipRule="evenodd" d="m0 27.657 9.41421-9.4142c2.34319-2.3432 2.34319-6.1422.00001-8.48532L0 .343262V6.00012l6.58579 6.58578c.78105.7811.78105 2.0474 0 2.8284L0 22.0001v5.6569Z" fill="var(--backgroundColorLayer1)"></path>
                    </svg>
                </span>
                <div>
                    
                </div>
            </div>
            <div className="SiteSubMenu__sectionList">
                {/* <SiteSubMenuSection/> */}
            </div>
        </div>
    )
}

function SiteHeaderSubNavItem() {
    return (
        <button className="SiteSubNavItem">
            <strong className="SiteSubNavItem__label">
                hier das label
            </strong>
            <p className="SiteSubNavItem__body">
                Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Nemo, quasi!
            </p>
        </button>
    )
}


function SiteSubMenuSection(props) {
    return (
        <div className="SiteSubMenuSection" data-js-target="SiteSubMenuSection" aria-hidden={true} data-section-count={props.sectionCount.length} hidden>
            {props?.sectionCount && props.sectionCount.map((section, index) => 
                <SiteNavList />
            )}
        </div>
    )
}
SiteSubMenuSection.propTypes = {
    sectionCount: propTypes.arrayOf(propTypes.object),
}

function SiteNavList(props) {
    return (
        <section className="SiteNavList">
            <ul className="SiteNavList__list">

            </ul>
        </section>
    )
}
SiteNavList.propTypes = {

}

function SiteNavItem(props) {
    return (
        <li className="SiteNavItem">
            <a href="" className="SiteNavItem__link">
                <span className="SiteNavItem__iconContainer">
                    <img src="" alt="" />
                </span>
                <span className="SiteNavItem__labelContainer">lol irgendwie
                    <p className="SiteNavItem__body">
                        Irgendnen scheiß balb bla
                    </p>
                </span>
            </a>
        </li>
    )
}