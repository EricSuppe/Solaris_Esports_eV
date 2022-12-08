import React from 'react'

export default function HoverArrow() {
    return (
        <svg className="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
            <g fillRule="evenodd">
                <path className="HoverArrow__linePath" d="M0 5h7"></path>
                <path className="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path>  
            </g>
        </svg>
    )
}
