import React from 'react'
import { Link } from 'react-router-dom'
import "./siteHeaderSubMenuNewsItem.css"
import senna from "../../../../../assets/senna.jpg"

export default function SiteHeaderSubMenuNewsItem() {
    return (
        <li className='SiteHeaderSubMenuNewsItem' data-js-target={"SiteHeaderSubMenuNewsItem"} data-performed-transition={false}>
            <div className="SiteHeaderSubMenuNewsItem__container">
                <header className="SiteHeaderSubMenuNewsItem__header">
                    <img className='SiteHeaderSubMenuNewsItem__headerImage' src={senna} alt="" />
                </header>
                <div className="SiteHeaderSubMenuNewsItem__body">
                    <Link className='' to={""}>
                    
                    </Link>
                </div>
            </div>
        </li>
    )
}
