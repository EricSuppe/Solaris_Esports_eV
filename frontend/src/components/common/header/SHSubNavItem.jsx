import React from 'react'
import propTypes from "prop-types"
import { handleSubNavHover } from '../../../scripts/SiteHeader'
import useTranslation from '../../../hooks/useTranslation'
import "./style/sHSubNavItem.css"

export default function SHSubNavItem(props) {
    const translate = useTranslation()

    return (
        <button 
            className="SiteSubNavItem"
            data-id={`${props.parentKey}`}
            data-js-target="SiteSubNavItem"
            onMouseEnter={(event) => handleSubNavHover(event, event.target, props.nodeIndex)}
            onMouseLeave={(event) => handleSubNavHover(event, event.target, props.nodeIndex)}
        >
            <div className="SiteSubNavItem__iconContainer">
                {/* <img src="" alt="" className="SiteSubNavItem__icon" /> */}
                <svg class="ProductIcon " width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Checkout logo</title><path d="M31.54 4h-19.7c-.84 0-1.63.43-2.09 1.14a2.52 2.52 0 0 0-.18 2.39l5.1 11.46c.3.64.3 1.38 0 2.02L8 36h23.54c.97 0 1.86-.58 2.26-1.48l5.98-13.5c.3-.65.3-1.39 0-2.04L33.8 5.48A2.48 2.48 0 0 0 31.54 4z" fill="#ff5c00"></path><path d="M7.23 36a2.3 2.3 0 0 1-.98-.22h.04a2.43 2.43 0 0 1-1.23-1.23L.22 23.53a2.54 2.54 0 0 1 .17-2.38A2.45 2.45 0 0 1 2.46 20h19.5c.97 0 1.84.57 2.23 1.46l4.8 10.85.68 1.53c.1.22.23.42.38.6.49.64 1.2 1.3 1.98 1.51-.11.03-.3.05-.55.05H7.22z" fill="black"></path><path d="M21.97 20c.9 0 1.72.5 2.14 1.3l.08.16 4.8 10.85.68 1.53a4.43 4.43 0 0 0 2.3 2.01l.18.07c-.2.05-.4.08-.61.08H8L14.67 21c.15-.32.22-.66.22-1.01h7.08z" fill="#303030"></path></svg>
            </div>
            <div className="SiteSubNavItem__labelContainer">
                <strong className="SiteSubNavItem__label" data-translation-key={`${props.label.translationKey}`}>
                    {translate(props.label.translationKey, props.label.translationFallback)}
                </strong>
                <p className="SiteSubNavItem__body" data-translation-key={`${props.description.translationKey}`}>
                    {translate(props.description.translationKey, props.description.translationFallback)}
                </p>
            </div>
        </button>
    )
}
SHSubNavItem.propTypes = {
    parentKey: propTypes.string.isRequired,
    nodeIndex: propTypes.number.isRequired,
    label: propTypes.object,
    description: propTypes.object,
}
