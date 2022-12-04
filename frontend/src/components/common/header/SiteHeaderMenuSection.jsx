import React from 'react'
import propTypes from "prop-types"

export default function SiteHeaderMenuSection(props) {
    return (
        <div
            className={`SiteMenu__section SiteMenu__section--left ${props?.siteHeaderMenuSection.hasSubMenu && "SiteMenu--hasSubMenu"}`}
            data-js-target="SiteMenuSection"
            aria-hidden={true}
            hidden
        >
            <section className="SiteMenuSection">
                <div className="SiteMenuSection__body">
                    {props?.siteHeaderMenuSection.hasSubMenu && <SiteHeaderSubMenu {...props}/>}
                </div>
            </section>
        </div>
    )
}
SiteHeaderMenuSection.propTypes = {
    siteHeaderMenuSection: propTypes.object,
}

function SiteHeaderSubMenu(props) {
    return (
        <div 
            className="SiteSubMenu" 
            data-js-target="SiteHeaderSubMenu"
        > 
            <div className="SiteSubMenu__nav">
                <span className="SiteSubMenu__navHoverBackground">        
                    <svg 
                        className="SiteSubMenu__navHoverArrow" 
                        width="12" 
                        height="28" 
                        viewBox="0 0 12 28" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path 
                            d="M7.29289 13.2929 0 6v16l7.29289-7.2929c.39053-.3905.39053-1.0237 0-1.4142Z" 
                            fill="var(--backgroundColorLayer2)"
                        />
                        <path 
                            fillRule="evenodd" 
                            clipRule="evenodd" d="m0 27.657 9.41421-9.4142c2.34319-2.3432 2.34319-6.1422.00001-8.48532L0 .343262V6.00012l6.58579 6.58578c.78105.7811.78105 2.0474 0 2.8284L0 22.0001v5.6569Z" 
                            fill="var(--backgroundColorLayer1)"
                        />
                    </svg>
                </span>
                <div>
                    {props?.siteHeaderMenuSection?.subMenuNavItem && props.siteHeaderMenuSection.subMenuNavItem.map((item, index) => {
                        let {key, ...passthrough} = item
                        let dataKey = `${item.key}${index}`
                        return (
                            <SiteHeaderSubNavItem key={dataKey} {...passthrough} parentKey={dataKey}/>
                        )
                    })}
                </div>
            </div>
            <div className="SiteSubMenu__sectionList">
                {props?.siteHeaderMenuSection?.subMenuSection && props.siteHeaderMenuSection.subMenuSection.map((item, index) => {
                    let {key, ...passthrough} = item
                    let dataKey = `${item.key}${index}`
                    return (
                        <SiteSubMenuSection 
                            key={dataKey} 
                            parentKey={dataKey} 
                            nodeIndex={index}
                            {...passthrough} 
                        />
                    )
                })}
            </div>
        </div>
    )
}
SiteHeaderSubMenu.propTypes = {
    siteHeaderMenuSection: propTypes.object,
}

function SiteHeaderSubNavItem(props) {
    return (
        <button 
            data-id={`${props.parentKey}`}
            className="SiteSubNavItem"
        >
            <strong className="SiteSubNavItem__label">
                {(props?.label && props.label) || "error"}
            </strong>
            <p className="SiteSubNavItem__body">
                {(props?.description && props.description) || "error"}
            </p>
        </button>
    )
}
SiteHeaderSubNavItem.propTypes = {
    parentKey: propTypes.string.isRequired,
    label: propTypes.string,
    description: propTypes.string,
}

function SiteSubMenuSection(props) {
    return (
        <div 
            className="SiteSubMenuSection" 
            key={`${props.parentKey}${props.nodeIndex}`} 
            aria-hidden={true} 
            data-js-target="SiteSubMenuSection" 
            data-node-index={`${props.nodeIndex}`} 
            data-nav-item-count={`${props.siteNavItemList.length}`}
            data-id={`${props.parentKey}`} 
            hidden
        >
            {props?.siteNavItemList && props.siteNavItemList.map((item, index) => {
                let {key, ...passthrough} = item
                let dataKey = `${props.parentKey}_${props.nodeIndex}_${item.key}${index}`
                return (
                    <SiteNavList key={dataKey} {...passthrough} parentKey={dataKey}/>
                )
            })}
        </div>
    )
}
SiteSubMenuSection.propTypes = {
    parentKey: propTypes.string.isRequired,
    nodeIndex: propTypes.number.isRequired,
    siteNavItemList: propTypes.arrayOf(propTypes.object),
}

function SiteNavList(props) {
    return (
        <section className="SiteNavList" data-id={`${props.parentKey}`}>
            <ul className="SiteNavList__list">
                {props?.siteNavItem && props.siteNavItem.map((item, index) => {
                    let {key, ...passthrough} = item
                    let dataKey = `${props.parentKey}_${item.key}${index}`
                    return (
                        <SiteNavItem key={dataKey} {...passthrough} parentKey={dataKey}/>
                    )
                })}
            </ul>
        </section>
    )
}
SiteNavList.propTypes = {
    parentKey: propTypes.string.isRequired,
    siteNavItem: propTypes.arrayOf(propTypes.object),
}

function SiteNavItem(props) {
    return (
        <li 
            className="SiteNavItem" 
            data-id={`${props.parentKey}`}
        >
            <a 
                href={`${(props?.link && props.link) || "/"}`} 
                className="SiteNavItem__link"
            >
                <span className="SiteNavItem__iconContainer">
                    <img 
                        src={`${(props?.image && props.image) || ""}`} 
                        alt={`${(props?.imageAlt && props.imageAlt) || "error"}`} 
                    />
                </span>
                <span className="SiteNavItem__labelContainer">
                    {`${(props?.label && props?.label) || "Error"}`}
                    <p className="SiteNavItem__body">
                        {`${(props?.description && props.description) || "Error"}`}
                    </p>
                </span>
            </a>
        </li>
    )
}
SiteNavItem.propTypes = {
    parentKey: propTypes.string.isRequired,
    description: propTypes.string,
    image: propTypes.string,
    imageAlt: propTypes.string,
    label: propTypes.string,
    link: propTypes.string,
}