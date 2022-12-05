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
            ? <React.Fragment>
                <header className={`Site${props?.label && props.label}__header`}>
                    {props?.header?.siteNavItemList && props.header.siteNavItemList.map((item, index) => {
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
                {props?.siteNavItemList && props.siteNavItemList.map((item, index) => {
                    let {key, ...passthrough} = item
                    let dataKey = `${props.parentKey}${item.key}${index}_`
                    return (
                        <React.Fragment key={`${dataKey}`}>
                            <SiteNavList
                                key={dataKey} 
                                parentKey={dataKey} 
                                {...passthrough}
                            >
                                <h1 className='SiteNavList__title'>test</h1>
                            </SiteNavList>
                        </React.Fragment>
                    )
                })}
            </React.Fragment>
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
            }) : null}
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