let siteHeader
let siteHeaderMenu
let siteHeaderMenuSection
let siteHeaderDroppdownTriggers

let initialMenuheight = 484;
let initalArrowOffset = 0;

function siteHeaderInit() {
    
    siteHeader = document.querySelector('[data-js-target="SiteHeader"]')
    siteHeaderMenu = document.querySelector('[data-js-target="SiteMenu"]')
    siteHeaderMenuSection = document.querySelectorAll('[data-js-target="SiteMenuSection"]')
    siteHeaderDroppdownTriggers = document.querySelectorAll('[data-js-target="SiteHeaderDroppdownTriggers"]');

    setMenuHeightVar(initialMenuheight);
    setArrowOffset(initalArrowOffset);
}

export function handleLinkHover(event, element, index) {
    if(event.type === "mouseenter") {
        attrOnMouseEnter(element, index)
        setArrowOffset(element.offsetLeft + element.offsetWidth/2 - 630)
        setMenuHeightVar(siteHeaderMenuSection[index].offsetHeight)
        siteHeaderMenu.style.pointerEvents = "auto"
        if(!event.relatedTarget.hasAttribute("aria-haspopup")) {
            siteHeader.classList.add("SiteHeader--dropdownVisible") 
        }
    } 
    if(event.type === "mouseleave") {
        if(!event.relatedTarget.hasAttribute("aria-haspopup")) {
            if(event.relatedTarget.getAttribute("data-js-target") !== "SiteMenu" && !isDescendant(siteHeaderMenu, event.relatedTarget)) {
                siteHeader.classList.remove("SiteHeader--dropdownVisible") 
                siteHeaderMenu.style.pointerEvents = "none"
            }
        }
        if(event.relatedTarget.getAttribute("data-js-target") !== "SiteMenu" && !isDescendant(siteHeaderMenu, event.relatedTarget)) {
            attrOnMouseLeave(element, index); 
        }
    }
}

function attrOnMouseEnter(element, index) {
    element.firstChild.setAttribute("aria-expanded", true);
    for(let i = 0; i < 5; i++) {
        if(i !== index) {
            siteHeaderDroppdownTriggers[i].firstChild.setAttribute("aria-expanded", false);
            siteHeaderMenuSection[i].setAttribute("hidden", "")
            siteHeaderMenuSection[i].setAttribute("aria-hidden", true)
            if(i < index) {
                siteHeaderMenuSection[i].classList.add("SiteMenu__section--left")
                siteHeaderMenuSection[i].classList.remove("SiteMenu__section--right")
            }
            if(i > index) {
                siteHeaderMenuSection[i].classList.add("SiteMenu__section--right")
                siteHeaderMenuSection[i].classList.remove("SiteMenu__section--left")
            }
        }
    }
    siteHeaderMenu.removeAttribute("hidden")
    siteHeaderMenuSection[index].removeAttribute("hidden")
    siteHeaderMenuSection[index].setAttribute("aria-hidden", false)
    for(let i = 0; i < index; i++) {
        siteHeaderMenuSection[i].classList.add("SiteMenu__section--left")
        siteHeaderMenuSection[i].classList.remove("SiteMenu__section--right")
    }
    siteHeaderMenuSection[index].classList.remove("SiteMenu__section--right")
    siteHeaderMenuSection[index].classList.remove("SiteMenu__section--left")
    for(let i = index + 1; i < 4; i++) {
        siteHeaderMenuSection[i].classList.add("SiteMenu__section--right")
        siteHeaderMenuSection[i].classList.remove("SiteMenu__section--left")
    }
}

function attrOnMouseLeave(element, index) {
    element.firstChild.setAttribute("aria-expanded", false)
    siteHeaderMenu.setAttribute("hidden", "")
    siteHeaderMenuSection[index].setAttribute("hidden", "")
    siteHeaderMenuSection[index].setAttribute("aria-hidden", true)
}

function setMenuHeightVar(value) {
    const currentStyle = siteHeaderMenu.style;
    siteHeaderMenu.style = `--siteMenuHeight: ${value}px; width: 804px; ${currentStyle};`
}

function setArrowOffset(value) {
    siteHeader.style = `--siteMenuArrowOffset: ${value}px`
}

export function closeSiteHeaderMenu() {
    siteHeader.classList.remove("SiteHeader--dropdownVisible")
    siteHeaderMenu.style.pointerEvents = "none"
    siteHeaderDroppdownTriggers.forEach(element => {
        if(element.firstChild.getAttribute("aria-expanded") === "true") {
            element.firstChild.setAttribute("aria-expanded", false)
        }
    });
    siteHeaderMenu.setAttribute("hidden", "")
    siteHeaderMenuSection.forEach(element => {
        if(element.getAttribute("aria-hidden") === "false") {
            element.setAttribute("hidden", "")
            element.setAttribute("aria-hidden", true)
        }
    })
}

function isDescendant(parent, child) {
    var node = child.parentNode;
    while (node != null) {
        if (node == parent) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}

export default siteHeaderInit
