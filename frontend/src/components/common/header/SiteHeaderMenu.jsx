import React from 'react'
import propTypes from "prop-types"
import SiteNavList from './SiteNavList'

export default function SiteHeaderMenu(props) {
    return (
        <div 
            className={`Site${props?.label && props.label}__${props.type}Layout`}
            data-id={`${props.parentKey}_${props.label}`}
            key={`${props.parentKey}`}
        >
            {props.type === "body" 
                ? <header className={`Site${props?.label && props.label}__header`}>
                    {props?.siteNavItemlist && props.siteNavItemList.map((item, index) => {
                        let {key, ...passthrough} = item
                        let dataKey = `${props.parentKey}${item.key}${index}_`
                        return (
                            <SiteNavList
                                key={dataKey} 
                                parentKey={dataKey} 
                                {...passthrough}
                            />
                        )
                    })}
                </header> 
                : props.type === "footer" 
                ? props?.siteNavItemList && props.siteNavItemList.map((item, index) => {
                    let {key, ...passthrough} = item
                    let dataKey = `${props.parentKey}${item.key}${index}_`
                    return (
                        <SiteNavList
                            key={dataKey} 
                            parentKey={dataKey} 
                            {...passthrough}
                        />
                    )
                }) : null
            }
            {/* /*TODO */ }
        </div>
    )
}
SiteHeaderMenu.propTypes = {
    parentKey: propTypes.string.isRequired,
    type: propTypes.string.isRequired,
    label: propTypes.string,
    siteNavItemList: propTypes.oneOfType([
        propTypes.arrayOf(propTypes.object),
        propTypes.object,
    ]),
}