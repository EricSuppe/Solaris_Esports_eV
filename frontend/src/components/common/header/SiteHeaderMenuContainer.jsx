import React from 'react'
import { closeSiteHeaderMenu } from '../../../scripts/SiteHeader'
import SiteHeaderMenuSection from './SiteHeaderMenuSection'
import propTypes from "prop-types"

export default function SiteHeaderMenuContainer(props) {
    return (
        <div className="SiteHeader__menuContainer">
            <div className="SiteHeaderArrow" aria-hidden={true}></div>
            <div
                className="SiteMenu SiteHeader__menu"
                hidden={true}
                data-js-target="SiteMenu"
                onMouseLeave={() => closeSiteHeaderMenu()}
                >
                <div 
                className="Card SiteMenu__card"
                data-js-target="SiteMenuCard"
                >
                    {props?.config && props.config.map((item, index) => {
                        let {key, siteHeaderNavItem, ...passthrough} = item
                        return (
                            <SiteHeaderMenuSection key={`${item.key}${item.siteHeaderMenuSection.key}${index}`} {...passthrough}/> 
                        )  
                    })}       
                </div>
            </div>
        </div>
    )
}
SiteHeaderMenuContainer.propTypes = {
    siteHeaderConfig: propTypes.object,
}