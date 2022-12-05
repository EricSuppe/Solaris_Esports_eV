import React from 'react'
import propTypes from "prop-types"
import { handleSubNavHover } from '../../../scripts/SiteHeader'

export default function SiteHeaderSubNavItem(props) {
    return (
        <button 
            className="SiteSubNavItem"
            data-id={`${props.parentKey}`}
            data-js-target="SiteSubNavItem"
            onMouseEnter={(event) => handleSubNavHover(event, event.target, props.nodeIndex)}
            onMouseLeave={(event) => handleSubNavHover(event, event.target, props.nodeIndex)}
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
    nodeIndex: propTypes.number.isRequired,
    label: propTypes.string,
    description: propTypes.string,
}
