import React from 'react'
import propTypes from "prop-types"
import Guides from '../common/Guides'

export default function SectionTemplate(props) {
    return (
        <React.Fragment>
            <section className={`Section--${props.hasGuides ? "hasGuides" : "skippingGuides"} Section__${props.label}`} data-section-id={`${props.sectionID}`}>
                <div className="Section__masked">
                    <div className="Section__backgroundMask">
                        <div className="Section__background">
                            {props.hasGuides ? <Guides/> : null}
                        </div>
                    </div>
                    <div className="Section__contentMask">
                        <div className="Section__layout">
                            <div className="Section__LayoutContainer">
                                {props.children}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

SectionTemplate.propTypes = {
    children: propTypes.oneOfType([
        propTypes.arrayOf(propTypes.element),
        propTypes.element
    ]),
    sectionID: propTypes.string.isRequired,
    hasGuides: propTypes.bool,
}
