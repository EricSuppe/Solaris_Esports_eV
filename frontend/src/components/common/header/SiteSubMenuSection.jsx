import React from 'react'
import propTypes from "prop-types"
import SiteNavList from './SiteNavList'

export default function SiteSubMenuSection(props) {
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
                    <SiteNavList 
                        key={dataKey} 
                        parentKey={dataKey}
                        {...passthrough} 
                    />
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
