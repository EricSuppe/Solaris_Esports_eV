import React from 'react'
import { Link } from 'react-router-dom'
import useTranslation from '../../../hooks/useTranslation'
import HoverArrow from '../arrow/HoverArrow'
import "./style/sHConfigContainer.css"

export default function SHConfigContainer() {

    const translate = useTranslation()

    const socials = [
        {type: "logo", name: "twitter", font: "bx bxl-twitter", link: "", displayValue: "Twitter"},
        {type: "logo", name: "discord-alt", font: "bx bxl-discord-alt", link: "", displayValue: "Discord"},
        {type: "logo", name: "youtube", font: "bx bxl-youtube", link: "", displayValue: "Youtube"},
        {type: "logo", name: "twitch", font: "bx bxl-twitch", link: "", displayValue: "Twitch"},
        {type: "logo", name: "instagram", font: "bx bxl-instagram", link: "", displayValue: "Instagram"},
    ]

    return (
        <div className="SiteHeader__configContainer">
            <ul className="SiteHeaderSocials__list">
              {socials && socials.map((item, index) => <li key={`${item}${index}`} className='SiteHeaderSocialsItem'>
                <Link className='SiteHeaderSocialsItem__link' to={`${item.link}`}>
                  <i className={`${item.font} SiteHeaderSocialsItem__icon`}></i>
                  <span className='SiteHeaderSocialsItem__label'>{`${(item?.displayValue && item.displayValue) || "Social"}`}</span>
                  <HoverArrow/>
                </Link>
              </li>)}
            </ul>
            <div className="SiteHeader__settingsContainer">
              <button className="SiteHeader__languageChanger">
                <span className='SiteHeaderSocialsItem__label' data-translation-key={`language`}>{translate("language","language")}</span>
                <HoverArrow/>
              </button>
            </div>
          </div>
    )
}
