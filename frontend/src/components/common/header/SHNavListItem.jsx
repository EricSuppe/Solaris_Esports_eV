import React from 'react'
import propTypes from "prop-types"
import "./style/sHNavListItem.css"

export default function SHNavListItem(props) {
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
                    <span className="SiteNavItem__label">
                        {`${(props?.label && props?.label) || "Error"}`}
                        <img src="" alt="" />
                    </span>
                    <p className="SiteNavItem__body">
                        {`${(props?.description && props.description) || "Error"}`}
                    </p>
                    &nbsp;
                </span>
            </a>
        </li>
    )
}
SHNavListItem.propTypes = {
    parentKey: propTypes.string.isRequired,
    description: propTypes.string,
    image: propTypes.string,
    imageAlt: propTypes.string,
    label: propTypes.string,
    link: propTypes.string,
}