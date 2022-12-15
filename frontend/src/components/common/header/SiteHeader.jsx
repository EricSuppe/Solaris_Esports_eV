import React, { useEffect } from 'react'
import "./style/siteHeader.css"
import "./style/siteHeaderSocials.css"
import "./style/siteHeaderLang.css"
import propTypes from "prop-types"
import Guides from '../guides/Guides';
import siteHeaderConfig from './SiteHeaderConfig'
import SHConfigContainer from './SHConfigContainer'
import SHMiddleContainer from './SHMiddleContainer'
import SHNavContainer from './SHNavContainer'
import { sH } from '../../../scripts/SiteHeader'

export default function Header(props) {

  useEffect(() => {
    new sH().__reconnect()
  },[])
  
  return (
    <React.Fragment>
      <header
        className={`SiteHeader ${props?.hasGuides && "SiteHeader--hasGuides"} variant--${(props?.variant && props.variant) || "Standart"}`}
        data-js-target="SiteHeader"
      >
        {props?.hasGuides && (
          <div className="SiteHeader__guidesContiner">
            <div 
              className="Guides SiteHeader__guides" 
              aria-hidden={true}
            >
              <Guides />
            </div>
          </div>
        )}
        <div className="SiteHeader__container" data-js-target="SiteHeaderLayout">
          <SHConfigContainer/>
          <SHMiddleContainer siteHeaderConfig={siteHeaderConfig}/>
          <SHNavContainer siteHeaderConfig={siteHeaderConfig}/>
        </div>
      </header>
    </React.Fragment>
  );
}
Header.propTypes = {
  hasGuides: propTypes.bool,
  variant: propTypes.string,
}

