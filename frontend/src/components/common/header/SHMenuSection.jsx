import React from 'react'
import propTypes from "prop-types"
import SHSubMenu from './SHSubMenu'
import SHMenu from './SHMenu'
import "./style/sHMenuSection.css"

export default function SHMenuSection(props) {
    return (
        <div
            className={`SiteMenu__section SiteMenu__section--left ${props?.siteHeaderMenuSection.hasSubMenu && "SiteMenu--hasSubMenu SiteMenuSection--variantNoPadding"}`}
            aria-hidden={true}
            data-js-target="SiteMenuSection"
            data-id={`${props.parentKey}`}
            hidden
        >
            <section className="SiteMenuSection">
                <div className="SiteMenuSection__body">
                    {props?.siteHeaderMenuSection.hasSubMenu && <SHSubMenu {...props}/>}
                    {!props?.siteHeaderMenuSection.hasSubMenu && 
                        <SHMenu 
                            type={"body"}
                            key={`${props.siteHeaderMenuSection.menuBody.key}${props.nodeIndex}`} 
                            parentKey={`${props.siteHeaderMenuSection.menuBody.key}${props.nodeIndex}`} 
                            {...props.siteHeaderMenuSection.menuBody}
                        />
                    }
                </div>
                {props?.siteHeaderMenuSection.hasFooter && 
                    <footer className='SiteMenuSection__footer'>
                        <SHMenu 
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
SHMenuSection.propTypes = {
    parentKey: propTypes.string.isRequired,
    nodeIndex: propTypes.number.isRequired,
    siteHeaderMenuSection: propTypes.object,
}