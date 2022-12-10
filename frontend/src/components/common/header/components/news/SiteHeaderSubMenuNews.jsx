import React from 'react'
import propTypes from "prop-types"
import "../../style/siteHeaderSubMenuNews.css"
import useTranslation from '../../../../../hooks/useTranslation'
import { Link } from 'react-router-dom'
import HoverArrow from '../../../arrow/HoverArrow'
import SiteHeaderSubMenuNewsItem from './SiteHeaderSubMenuNewsItem'

export default function SiteHeaderSubMenuNews(props) {

    const translate = useTranslation()

    return (
        <section 
            className='SiteHeaderSubMenuComponent' 
            data-id={`${props.parentKey}`}
        >
            <div className="SiteHeaderComponent__container">
                <header className="SiteHeaderComponent__header">
                    <ul className="SiteHeaderComponent__headerList">
                        <li className="SiteHeaderComponent__labelContainer">
                            <span className="SiteNavItem__iconContainer">
                                <img 
                                    src={`${(props?.image && props.image) || ""}`} 
                                    alt={`${(props?.imageAlt && props.imageAlt) || "error"}`} 
                                />
                            </span>
                            <span className="SiteNavItem__labelContainer">
                                <span className="SiteNavItem__label">
                                    {`${(props?.label && props?.label) || "Error"}`}
                                </span>
                            </span>
                        </li>
                        <li className="SiteHeaderComponent__linkContainer">
                            <Link className='SiteHeaderComponentLink' to="">
                                <span className='SiteHeaderComponentLink__label'>See all Posts</span>
                                <HoverArrow/>
                            </Link>
                        </li>
                    </ul>
                </header>
                <div className="SiteHeaderComponent__body">
                    <ul className="SiteHeaderComponent__list">
                        <SiteHeaderSubMenuNewsItem/>
                        <SiteHeaderSubMenuNewsItem/>
                        <SiteHeaderSubMenuNewsItem/>
                    </ul>
                </div>
            </div>
        </section>
    )
}
SiteHeaderSubMenuNews.propTypes = {
    parentKey: propTypes.string.isRequired,
    image: propTypes.string,
    imageAlt: propTypes.string,
    label: propTypes.string,
    link: propTypes.string,
}