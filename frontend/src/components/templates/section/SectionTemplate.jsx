import React from 'react'
import propTypes from "prop-types"
import Guides from '../../common/guides/Guides'
import "./sectionTemplate.css"

export default function SectionTemplate(props) {
    return (
        <React.Fragment>
            <section 
                className={`
                    Section Section--${props.hasGuides ? "hasGuides" : null} 
                    Section__${props.label} 
                    Section--${props.background ? "hasBackground" : null}
                `} 
                data-section-id={`${props.sectionID}`}
                data-mask-overlay={props.background ? true : false}
            >
                <div className="Section__masked">
                    <div className="Section__backgroundMask">
                        {props.background ? props.background : null}
                        <div className="Section__background">
                            {props.hasGuides ? <Guides/> : null}
                        </div>
                    </div>
                    <div className="Section__contentMask">
                        <div className="Section__layoutContainer">
                            <div className="Section__layout Section__layoutFull">
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
    sectionID: propTypes.string.isRequired,
    children: propTypes.oneOfType([
        propTypes.arrayOf(propTypes.element),
        propTypes.element,
    ]),
    hasGuides: propTypes.bool,
    background: propTypes.oneOfType([
        propTypes.arrayOf(propTypes.element),
        propTypes.element,
    ]),
}
