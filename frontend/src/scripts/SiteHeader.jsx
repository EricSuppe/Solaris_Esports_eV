import {_p as p, _c as c} from "./add.js"
let siteHeader
let siteHeaderMenu
let siteHeaderMenuSection
let siteHeaderDroppdownTriggers
let siteHeaderSubMenu;
let siteHeaderSubNavItem;
let siteHeaderSubMenuSection;
let siteHeaderSubMenuNewsItem;
let siteHeaderSearchBar;
let siteHeaderSearchResultContainer;

let initialMenuHeight = 100;
let initialMenuWidth = 100;
let initalArrowOffset = 0;
let initialSubMenuTriggerOffsetY = 0;
let initialSubMenuTriggerOffsetYCenter = 48;
let initialSubMenuTriggerBackgroundHeight = 96;

function siteHeaderInit() {
    siteHeader = document.querySelector('[data-js-target="SiteHeader"]')
    siteHeaderMenu = document.querySelector('[data-js-target="SiteMenu"]')
    siteHeaderMenuSection = document.querySelectorAll('[data-js-target="SiteMenuSection"]')
    siteHeaderDroppdownTriggers = document.querySelectorAll('[data-js-target="SiteHeaderDroppdownTriggers"]');
    siteHeaderSubMenu = document.querySelector('[data-js-target="SiteHeaderSubMenu"]');
    siteHeaderSubNavItem = document.querySelectorAll('[data-js-target="SiteSubNavItem"]');
    siteHeaderSubMenuSection = document.querySelectorAll('[data-js-target="SiteSubMenuSection"]')
    siteHeaderSubMenuNewsItem = document.querySelectorAll('[data-js-target="SiteHeaderSubMenuNewsItem"]')
    siteHeaderSearchBar = document.querySelector('[data-js-target="SiteHeaderSearchBar"]')
    siteHeaderSearchResultContainer = document.querySelector('[data-js-target="SiteHeaderSearchResultContainer"]')

    initFirst()
    setSiteMenuProps(initialMenuHeight, initialMenuWidth);
    setArrowProps(initalArrowOffset);
    setSubMenuProps({
        triggerOffsetY: initialSubMenuTriggerOffsetY, 
        triggerOffsetYCenter: initialSubMenuTriggerOffsetYCenter,
        triggerBackgroundHeight: siteHeaderSubNavItem[0].offsetHeight || initialSubMenuTriggerBackgroundHeight,
    })
}

function initFirst() {
    siteHeaderSubMenuSection[0].setAttribute("aria-hidden", false)
    siteHeaderSubMenuSection[0].removeAttribute("hidden")
    siteHeaderSubNavItem[0].setAttribute("aria-expanded", true)
}

/**
 * @param {*} event 
 * @param {*} element 
 * @param {*} index 
 */
export function handleLinkHover(event, element, index) {
    if(event.type === "mouseenter") {
        attrOnMouseEnter(element, index)
        setArrowProps(element.offsetLeft + element.offsetWidth/2 - 630)
        setSiteMenuProps(siteHeaderMenuSection[index].offsetHeight, siteHeaderMenuSection[index].offsetWidth)
        siteHeaderMenu.style.pointerEvents = "auto"
        if(event.relatedTarget instanceof HTMLElement && !event.relatedTarget.hasAttribute("aria-haspopup")) {
            c(siteHeader,"SiteHeader--dropdownVisible")
        }
        if(index === 0) {
            fadeIn()
            for(let i = 0; i < siteHeaderSubMenuNewsItem.length; i++) {
                siteHeaderSubMenuNewsItem[i].setAttribute("data-performed-transition", true)
            }
        }
    } 
    if(event.type === "mouseleave") {
        if(event.relatedTarget instanceof HTMLElement && !event.relatedTarget.hasAttribute("aria-haspopup")) {
            if(event.relatedTarget.getAttribute("data-js-target") !== "SiteMenu" && !isDescendant(siteHeaderMenu, event.relatedTarget)) {
                siteHeader.classList.remove("SiteHeader--dropdownVisible") 
                siteHeaderMenu.style.pointerEvents = "none"
            }
        }
        if(event.relatedTarget instanceof HTMLElement && event.relatedTarget.getAttribute("data-js-target") !== "SiteMenu" && !isDescendant(siteHeaderMenu, event.relatedTarget)) {
            attrOnMouseLeave(element, index); 
        }
    }
}

/**
 * @param {*} event 
 * @param {*} element 
 * @param {*} index 
 */
export function handleSubNavHover(event, element, index) {
    if(event.type === "mouseenter") {
        if(element.getAttribute('data-js-target') === "SiteSubNavItem") {
            let offset = 0;
            for(let i = 0; i < index; i++) {
                offset += siteHeaderSubNavItem[i].offsetHeight
            }
            setSubMenuProps({
                triggerOffsetY: offset, 
                triggerOffsetYCenter: initialSubMenuTriggerOffsetYCenter,
                triggerBackgroundHeight: element.offsetHeight,
            })
            subMenuOnMouseEnter(siteHeaderSubNavItem[index], index)
        }
    }
}

export function closeSiteHeaderMenu() {
    siteHeader.classList.remove("SiteHeader--dropdownVisible")
    siteHeaderMenu.style.pointerEvents = "none"
    siteHeaderDroppdownTriggers.forEach(element => {
        if(element.firstChild.getAttribute("aria-expanded") === "true") {
            element.firstChild.setAttribute("aria-expanded", false)
        }
    });
    siteHeaderMenu.setAttribute("hidden", true)
    siteHeaderMenuSection.forEach(element => {
        if(element.getAttribute("aria-hidden") === "false") {
            element.setAttribute("hidden", true)
            element.setAttribute("aria-hidden", true)
        }
    })
}

/**
 * @param {*} element 
 * @param {*} index 
 */
function attrOnMouseEnter(element, index) {
    element.firstChild.setAttribute("aria-expanded", true);
    for(let i = 0; i < 5; i++) {
        if(i !== index) {
            siteHeaderDroppdownTriggers[i].firstChild.setAttribute("aria-expanded", false);
            siteHeaderMenuSection[i].setAttribute("hidden", true)
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
    for(let i = index + 1; i < siteHeaderMenuSection.length; i++) {
        siteHeaderMenuSection[i].classList.add("SiteMenu__section--right")
        siteHeaderMenuSection[i].classList.remove("SiteMenu__section--left")
    }
}

/**
 * @param {*} element 
 * @param {*} index 
 */
function subMenuOnMouseEnter(element, index) {
    element.setAttribute("aria-expanded", true)
    for(let i = 0; i < siteHeaderSubNavItem.length; i++) {
        if(i !== index) {
            siteHeaderSubNavItem[i].setAttribute("aria-expanded", false)
            siteHeaderSubMenuSection[i].setAttribute("aria-hidden", true)
            siteHeaderSubMenuSection[i].setAttribute("hidden", true)
        }
    }
    siteHeaderSubMenuSection[index].setAttribute("aria-hidden", false)
    siteHeaderSubMenuSection[index].removeAttribute("hidden")
    for(let i = 0; i < index; i++) {
        siteHeaderSubMenuSection[i].classList.add("SiteSubMenuSection--before")
        siteHeaderSubMenuSection[i].classList.remove("SiteSubMenuSection--after")
    }
    for(let i = index + 1; i < siteHeaderSubMenuSection.length; i++) {
        siteHeaderSubMenuSection[i].classList.add("SiteSubMenuSection--after")
        siteHeaderSubMenuSection[i].classList.remove("SiteSubMenuSection--before")
    }
    siteHeaderSubMenuSection[index].classList.remove("SiteSubMenuSection--after")
    siteHeaderSubMenuSection[index].classList.remove("SiteSubMenuSection--before")
}

/**
 * @param {*} element 
 * @param {*} index 
 */
function attrOnMouseLeave(element, index) {
    element.firstChild.setAttribute("aria-expanded", false)
    siteHeaderMenu.setAttribute("hidden", "")
    siteHeaderMenuSection[index].setAttribute("hidden", true)
    siteHeaderMenuSection[index].setAttribute("aria-hidden", true)
}

/**
 * @param {*} height 
 * @param {*} width 
 */
function setSiteMenuProps(height, width) {
    const currentStyle = siteHeaderMenu.style;
    siteHeaderMenu.style = `--siteMenuHeight: ${height}px; width: ${width}px; ${currentStyle};`
}

/**
 * @param {*} value 
 */
function setArrowProps(value) {
    siteHeader.style = `--siteMenuArrowOffset: ${value}px`
}

/**
 * @param {*} value 
 */
function setSubMenuProps(value) {
    siteHeaderSubMenu.style = 
        `--siteSubMenuTriggerOffsetY: ${value.triggerOffsetY}px; 
        --siteSubMenuTriggerOffsetYCenter: ${value.triggerOffsetYCenter}px;
        --siteSubMenuTriggerBackgroundHeight: ${value.triggerBackgroundHeight}px`
}

/**
 * @param {*} parent 
 * @param {*} child 
 * @returns 
 */
function isDescendant(parent, child) {
    var node = child.parentNode;
    while (node != null) {
        if (node === parent) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}

function fadeIn() {
    for(let i = 0; i < siteHeaderSubMenuNewsItem.length; i++) {
        siteHeaderSubMenuNewsItem[i].classList.add("SiteHeaderSubMenuNewsItem--fadeIn")
    }
}

export function handleSearchBarClick() {
    siteHeaderSearchBar.style = "--siteHeaderSearchBarWidth: calc(var(--layoutWidth)/3)"
    siteHeaderSearchBar.setAttribute("aria-expanded", true);
    siteHeaderSearchResultContainer.setAttribute("aria-hidden", false);
    siteHeaderSearchResultContainer.removeAttribute("hidden");
}

export function handleSearchBarLoseFocus() {
    siteHeaderSearchBar.style = "--siteHeaderSearchBarWidth: calc(var(--layoutWidth)/5)"
    siteHeaderSearchBar.setAttribute("aria-expanded", false);
    siteHeaderSearchResultContainer.setAttribute("aria-hidden", true);
    siteHeaderSearchResultContainer.setAttribute("hidden", true);
}

export default siteHeaderInit
