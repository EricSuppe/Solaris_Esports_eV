function SiteMenuInit() {
    setMenuHeightVar();
    setArrowOffset();
}

function setMenuHeightVar() {
    const currentStyle = document.querySelector('[data-js-target="SiteMenu"]').style;
    document.querySelector('[data-js-target="SiteMenu"]').style = `--siteMenuHeight: ${484}px; width: 604px; ${currentStyle}; `
}

function setArrowOffset() {
    document.querySelector('[data-js-target="SiteHeader"]').style = `--siteMenuArrowOffset: ${200}px`
}

export default SiteMenuInit