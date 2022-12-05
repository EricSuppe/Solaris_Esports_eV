import React from 'react'
import propTypes from "prop-types"

export default function SiteNavItem(props) {
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