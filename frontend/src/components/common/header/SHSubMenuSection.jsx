import React from 'react'
import propTypes from "prop-types"
import "./style/sHSubMenuSection.css"

export default function SHSubMenuSection(props) {
    return (
        <div 
            className="SiteSubMenuSection" 
            key={`${props.parentKey}${props.nodeIndex}`} 
            aria-hidden={true} 
            data-js-target="SiteSubMenuSection" 
            data-node-index={`${props.nodeIndex}`} 
            // data-nav-item-count={`${props.components.length}`}
            data-id={`${props.parentKey}`} 
            hidden
        >
           <props.component/>
            {/* {props?.component && props.component.map((item, index) => {
                let {key, ...passthrough} = item
                let dataKey = `${props.parentKey}_${props.nodeIndex}_${item.key}${index}`
                return (
                    <item.component 
                        key={`${dataKey}`} 
                        parentKey={`${dataKey}`} 
                        {...passthrough}
                    />
                )
            })} */}
        </div>
    )
}
SHSubMenuSection.propTypes = {
    // parentKey: propTypes.string.isRequired,
    nodeIndex: propTypes.number.isRequired,
    siteNavItemList: propTypes.arrayOf(propTypes.object),
}
