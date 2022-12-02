import React from 'react'
import { Helmet } from 'react-helmet';
import propTypes from "prop-types"
import "./contentTemplate.css"

export default function ContentTemplate(props) {
  return (
    <React.Fragment>
      <Helmet>
        <title>{props.meta.title}</title>
        <meta name="description" content="placeholder" />
        <meta name="theme-color" content="#ff5c00" />
      </Helmet>
      <main className={`${props.pageID}-${props.label} Page--templated`} data-page-id={`${props.pageID}`} aria-label={`${props.label}`}>
        {props.children}
      </main>
    </React.Fragment>
  )
}

ContentTemplate.propTypes = {
    children: propTypes.oneOfType([
        propTypes.arrayOf(propTypes.element),
        propTypes.element
    ]),
    pageID: propTypes.string.isRequired,
    label: propTypes.string.isRequired,
    meta: propTypes.object,
}