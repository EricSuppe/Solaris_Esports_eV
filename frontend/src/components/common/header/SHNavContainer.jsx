import React from 'react'
import useTranslation from '../../../hooks/useTranslation'
import { handleLinkHover } from '../../../scripts/SiteHeader'
import SHMenuContainer from './SHMenuContainer'
import propTypes from "prop-types"
import "./style/sHNavContainer.css"
import { Link } from 'react-router-dom'

export default function SHNavContainer(props) {

    const translate = useTranslation()

    return (
        // <div className="SiteHeader__navContainer">
        //     <nav className="SiteHeaderNav">
        //       <ul className="SiteHeaderNav__list">
        //         {props.siteHeaderConfig.config.map((item, index) => (
        //           <li
        //             key={`${item.key}${index}`}
        //             className="SiteHeaderNavItem"
        //             data-js-target="SiteHeaderDroppdownTriggers"
        //             onMouseEnter={(event) => handleLinkHover(event, document.querySelectorAll('[data-js-target="SiteHeaderDroppdownTriggers"]')[index], index)}
        //             onMouseLeave={(event) => handleLinkHover(event, document.querySelectorAll('[data-js-target="SiteHeaderDroppdownTriggers"]')[index], index)}
        //           >
        //             <Link
        //               className={`${item?.siteHeaderNavItem?.hasPopup ? "" : "Link"} SiteHeaderNavItem__link`}
        //               aria-haspopup={(item?.siteHeaderNavItem?.hasPopup && true) || false}
        //               aria-expanded={(item?.siteHeaderNavItem?.hasPopup && "false") || undefined}
        //               data-translation-key={`${item.siteHeaderNavItem.translationKey}`}
        //               data-start-transition={true}
        //             >
        //               {translate(item?.siteHeaderNavItem?.translationKey, item?.siteHeaderNavItem?.translationFallback)}
        //             </Link>
        //           </li>
        //         ))}
        //       </ul>
        //     </nav>
        //     <SHMenuContainer {...props.siteHeaderConfig}/>
        // </div>
        null
    )
}
SHNavContainer.propTypes = {
    siteHeaderConfig: propTypes.object.isRequired,
}