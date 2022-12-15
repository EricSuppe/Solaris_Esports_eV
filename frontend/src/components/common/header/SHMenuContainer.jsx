import React from 'react'
import SHMenuSection from './SHMenuSection'
import propTypes from "prop-types"
import "./style/sHMenuContainer.css"

export default function SHMenuContainer(props) {
    return (
        <div className="SiteHeader__menuContainer">
            <div 
                className="SiteHeaderArrow" 
                aria-hidden={true}
            />
            <div
                className="SiteMenu SiteHeader__menu"
                hidden={true}
                data-js-target="SiteMenu"
            >
                <div 
                    className="Card SiteMenu__card"
                    data-js-target="SiteMenuCard"
                >
                    {props?.config && props.config.map((item, index) => {
                        let {key, siteHeaderNavItem, ...passthrough} = item
                        let dataKey = `${item.key}${index}`
                        return (
                            <SHMenuSection 
                                key={dataKey} 
                                parentKey={dataKey} 
                                nodeIndex={index}
                                {...passthrough}
                            /> 
                        )  
                    })}       
                </div>
            </div>
        </div>
    )
}
SHMenuContainer.propTypes = {
    siteHeaderConfig: propTypes.object,
}