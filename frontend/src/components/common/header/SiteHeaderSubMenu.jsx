import React from 'react'
import propTypes from "prop-types"
import SiteSubMenuSection from './SiteSubMenuSection'
import SiteHeaderSubNavItem from './SiteHeaderSubNavItem'

export default function SiteHeaderSubMenu(props) {
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
                            clipRule="evenodd" 
                            d="m0 27.657 9.41421-9.4142c2.34319-2.3432 2.34319-6.1422.00001-8.48532L0 .343262V6.00012l6.58579 6.58578c.78105.7811.78105 2.0474 0 2.8284L0 22.0001v5.6569Z" 
                            fill="var(--backgroundColorLayer1)"
                        />
                    </svg>
                </span>
                <div>
                    {props?.siteHeaderMenuSection?.subMenuNavItem && props.siteHeaderMenuSection.subMenuNavItem.map((item, index) => {
                        let {key, ...passthrough} = item
                        let dataKey = `${item.key}${index}`
                        return (
                            <SiteHeaderSubNavItem
                                key={dataKey}
                                parentKey={dataKey}
                                nodeIndex={index}
                                {...passthrough} 
                            />
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

