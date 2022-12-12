import React from 'react'
import propTypes from "prop-types"
import "./button.css"

export default function Button(props) {
    return (
        <button className={`Button ${props.name}`} role="button" data-button-id={`${props.buttonId}`}>
            <span className='Button__ground' aria-label='button-content'>
                {props.children}
            </span>
            <span className='Button__hoverOverlay' aria-label='button-hover-overlay'>
                {props.children}
            </span>
        </button>
    )
}
Button.propTypes = {
    buttonId: propTypes.string.isRequired,
    name: propTypes.string.isRequired,

}