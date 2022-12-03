import React from 'react'

export default function SiteMenuSection() {
    return (
        <div
            className="SiteMenu__section SiteMenu__section--left"
            data-js-target="SiteMenuSection"
            aria-hidden={true}
            hidden={true}
        >
            <section className="SiteMenuSection">
                <div className="SiteMenuSection__body">
                    <div className="SiteSubMenu">
                        <div className="SiteSubMenu__nav">
                        <span className="SiteSubMenu__navHoverBackground">        
                            <svg className="SiteSubMenu__navHoverArrow" width="12" height="28" viewBox="0 0 12 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.29289 13.2929 0 6v16l7.29289-7.2929c.39053-.3905.39053-1.0237 0-1.4142Z" fill="#fff"></path>
                                <path fillRule="evenodd" clipRule="evenodd" d="m0 27.657 9.41421-9.4142c2.34319-2.3432 2.34319-6.1422.00001-8.48532L0 .343262V6.00012l6.58579 6.58578c.78105.7811.78105 2.0474 0 2.8284L0 22.0001v5.6569Z" fill="var(--siteSubMenuBackgroundColor, #f0f3f6)"></path>
                            </svg>
                        </span>
                        <div>
                            <button className="SiteSubNavItem">
                                <strong className="SiteSubNavItem__label">
                                    hier das label
                                </strong>
                                <p className="SiteSubNavItem__body">
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Nemo, quasi!
                                </p>
                            </button>
                            <button className="SiteSubNavItem">
                                <strong className="SiteSubNavItem__label">
                                    hier das label
                                </strong>
                                <p className="SiteSubNavItem__body">
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Nemo, quasi!
                                </p>
                            </button>
                            <button className="SiteSubNavItem">
                                <strong className="SiteSubNavItem__label">
                                    hier das label
                                </strong>
                                <p className="SiteSubNavItem__body">
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Nemo, quasi!
                                </p>
                            </button>
                        </div>
                        </div>
                        <div className="SiteSubMenu__sectionList">
                            <div className="SiteSubMenuSection">
                                <section className="SiteNavList">
                                <ul className="SiteNavList__list">
                                    <li className="SiteNavItem">
                                    <a href="" className="SiteNavItem__link">
                                        <span className="SiteNavItem__iconContainer">
                                        <img src="" alt="" />
                                        </span>
                                        <span className="SiteNavItem__labelContainer">
                                        Lol irgendwie
                                        <p className="SiteNavItem__body">
                                            Irgendnen scheiß balb bla
                                        </p>
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
    )
}
