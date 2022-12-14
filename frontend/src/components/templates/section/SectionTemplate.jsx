import React from 'react'
import propTypes from "prop-types"
import Guides from '../../common/guides/Guides'
import "./sectionTemplate.css"
import image from "../../../assets/test.jpg"

export default function SectionTemplate(props) {
    return (
        <React.Fragment>
            <section className={`Section Section--${props?.hasGuides && "hasGuides"} Section__${props.label}`} data-section-id={`${props.sectionID}`}>
                <div className="Section__masked">
                    <div className="Section__backgroundMask">
                        {/* BackgroundImage */}
                        <img className='image' src={image} alt="" />
                        <div className="mask"></div>
                        <div className="Section__background">
                            {props?.hasGuides && <Guides/>}
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
    children: propTypes.oneOfType([
        propTypes.arrayOf(propTypes.element),
        propTypes.element
    ]),
    sectionID: propTypes.string.isRequired,
    hasGuides: propTypes.bool,
}
