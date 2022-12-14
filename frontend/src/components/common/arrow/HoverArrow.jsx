import React from 'react'
import propTypes from "prop-types"
import "./hoverArrow.css"

export default function HoverArrow(props) {
    return (
        <svg className={`HoverArrow HoverArrow__variant--${props.variant || "Standart"} ${props.transfrom ? "HoverArrow--transfrom" : ""}`} width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
            <g fillRule="evenodd">
                <path className="HoverArrow__linePath" d="M0 5h7"></path>
                <path className="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path>  
            </g>
        </svg>
    )
}
HoverArrow.propTypes = {
    variant: propTypes.string,
}