import React from 'react'
import propTypes from "prop-types"
import SiteHeaderSubMenu from './SiteHeaderSubMenu'
import SiteHeaderMenu from './SiteHeaderMenu'

export default function SiteHeaderMenuSection(props) {
    return (
        <div
            className={`SiteMenu__section SiteMenu__section--left ${props?.siteHeaderMenuSection.hasSubMenu && "SiteMenu--hasSubMenu"}`}
            aria-hidden={true}
            data-js-target="SiteMenuSection"
            data-id={`${props.parentKey}`}
            hidden
        >
            <section className="SiteMenuSection">
                <div className="SiteMenuSection__body">
                    {props?.siteHeaderMenuSection.hasSubMenu && <SiteHeaderSubMenu {...props}/>}
                    {!props?.siteHeaderMenuSection.hasSubMenu && 
                        <SiteHeaderMenu 
                            type={"body"}
                            key={`${props.siteHeaderMenuSection.menuBody.key}${props.nodeIndex}`} 
                            parentKey={`${props.siteHeaderMenuSection.menuBody.key}${props.nodeIndex}`} 
                            {...props.siteHeaderMenuSection.menuBody}
                        />
                    }
                </div>
                {props?.siteHeaderMenuSection.hasFooter && 
                    <footer className='SiteMenuSection__footer'>
                        <SiteHeaderMenu 
                            type={"footer"} 
                            key={`${props.siteHeaderMenuSection.menuFooter.key}${props.nodeIndex}`}
                            parentKey={`${props.siteHeaderMenuSection.menuFooter.key}${props.nodeIndex}`} 
                            {...props.siteHeaderMenuSection.menuFooter}
                        />
                    </footer>
                }
            </section>
        </div>
    )
}
SiteHeaderMenuSection.propTypes = {
    parentKey: propTypes.string.isRequired,
    nodeIndex: propTypes.number.isRequired,
    siteHeaderMenuSection: propTypes.object,
}