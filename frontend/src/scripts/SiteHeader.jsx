function SiteHeader(event, element, index) {
    // document.querySelector('[data-js-target="SiteHeader"]').classList.toggle("SiteHeader--droppdownVisible", true) 
    // console.log(document.querySelector('[data-js-target="SiteHeader"]'));
    if(event.type === "mouseenter" && (event.relatedTarget.dataset['checkForPopup'] === undefined || event.relatedTarget.dataset['checkForPopup'] === false)) {
        document.querySelector('[data-js-target="SiteHeader"]').classList.add("SiteHeader--dropdownVisible", true) 
        document.querySelector('[data-js-target="SiteMenu"]').style.pointerEvents = "auto"
        
    } 
    if(event.type === "mouseleave" && !event.relatedTarget.classList.contains("SiteHeader__menu")) {
        document.querySelector('[data-js-target="SiteHeader"]').classList.remove("SiteHeader--dropdownVisible", true) 
        document.querySelector('[data-js-target="SiteMenu"]').style.pointerEvents = "none"
    }
}

export default SiteHeader 