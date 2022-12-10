import React from 'react'
import propTypes from "prop-types"
import SHNavListItem from './SHNavListItem'
import "./style/sHNavList.css"

export default function SHNavList(props) {
    return (
        <section className="SiteNavList SiteNavList--iconSizeLarge" data-id={`${props.parentKey}`}>
            {props?.children && props.children}
            <ul className="SiteNavList__list">
                {props?.siteNavItem && props.siteNavItem.map((item, index) => {
                    let {key, ...passthrough} = item
                    let dataKey = `${props.parentKey}_${item.key}${index}`
                    return (
                        <SHNavListItem 
                            key={dataKey} 
                            parentKey={dataKey}
                            {...passthrough} 
                        />
                    )
                })}
            </ul>
        </section>
    )
}
SHNavList.propTypes = {
    parentKey: propTypes.string.isRequired,
    siteNavItem: propTypes.oneOfType([
        propTypes.arrayOf(propTypes.object),
        propTypes.object
    ]),
    children: propTypes.oneOfType([
        propTypes.arrayOf(propTypes.element),
        propTypes.element,
    ]),
}
