import React from 'react'
import { closeSiteHeaderMenu } from '../../../scripts/SiteHeader'
import SiteMenuSection from './SiteMenuSection'

export default function SiteHeaderMenuContainer() {
    return (
        <div className="SiteHeader__menuContainer">
            <div className="SiteHeaderArrow" aria-hidden={true}></div>
            <div
                className="SiteMenu SiteHeader__menu"
                hidden={true}
                data-js-target="SiteMenu"
                onMouseLeave={() => closeSiteHeaderMenu()}
            >
                <div 
                className="Card SiteMenu__card"
                data-js-target="SiteMenuCard"
                >
                    <SiteMenuSection/>
                    <SiteMenuSection/>
                    <SiteMenuSection/>
                    <SiteMenuSection/>
                    <SiteMenuSection/>       
                </div>
            </div>
        </div>
    )
}
