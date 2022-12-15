import {_p as p} from "./add.js"

class siteHeaderHandler {
    constructor() {
        this.siteHeader = document.querySelector('[data-js-target="SiteHeader"]')
        this.siteHeaderMenu = document.querySelector('[data-js-target="SiteMenu"]')
        this.siteHeaderMenuSection = document.querySelectorAll('[data-js-target="SiteMenuSection"]')
        this.siteHeaderDroppdownTriggers = document.querySelectorAll('[data-js-target="SiteHeaderDroppdownTriggers"]');
        this.siteHeaderSubMenu = document.querySelector('[data-js-target="SiteHeaderSubMenu"]');
        this.siteHeaderSubNavItem = document.querySelectorAll('[data-js-target="SiteSubNavItem"]');
        this.siteHeaderSubMenuSection = document.querySelectorAll('[data-js-target="SiteSubMenuSection"]');
        this.siteHeaderSubMenuNewsItem = document.querySelectorAll('[data-js-target="SiteHeaderSubMenuNewsItem"]')
        this.siteHeaderSearchBar = document.querySelector('[data-js-target="SiteHeaderSearchBar"]')
        this.siteHeaderSearchResultContainer = document.querySelector('[data-js-target="SiteHeaderSearchBar"]')

        this.initialMenuHeight = 100;
        this.initialMenuWidth = 100;
        this.initalArrowOffset = 0;
        this.initialSubMenuTriggerOffsetY = 0;
        this.initialSubMenuTriggerOffsetYCenter = 48;
        this.initialSubMenuTriggerBackgroundHeight = 96;
        this.scrollbarWidth = undefined;
        this.layoutWidth = undefined;
    }
    __init() {
        document.querySelector("html").style = `--scrollbarWidth: ${this.getScrollbarWidth()}px`
        p(this.siteHeaderSubMenuSection[0], "aria-hidden", false)
        p(this.siteHeaderSubMenuSection[0], "hidden", null)
        p(this.siteHeaderSubMenuSection[0], "aria-expanded", true)    
        this.updateMenu(this.initialMenuHeight,this.initialMenuWidth)
        this.updateArrow(this.initalArrowOffset)
        this.updateSubMenu({
            triggerOffsetY: this.initialSubMenuTriggerOffsetY, 
            triggerOffsetYCenter: this.initialSubMenuTriggerOffsetYCenter,
            triggerBackgroundHeight: this.siteHeaderSubNavItem[0].offsetHeight || this.initialSubMenuTriggerBackgroundHeight,
        })
    }
    __connect() {
        for(let i = 0; i < this.siteHeaderDroppdownTriggers.length; i++) {
            this.siteHeaderDroppdownTriggers[i].addEventListener("mouseenter", (e) => {this.sHLinkGainFocus(e, e.target, i)}) 
            this.siteHeaderDroppdownTriggers[i].addEventListener("mouseleave", (e) => {this.sHLinkLoseFocus(e, e.target, i)}) 
        }
        for(let i = 0; i < this.siteHeaderSubNavItem.length; i++) {
            this.siteHeaderSubNavItem[i].addEventListener("mouseenter", (e) => {this.sHSubNavGainFocus(e.target, i)})
        }
        this.siteHeaderMenu.addEventListener("mouseleave", () => {this.sHExit()})
        this.siteHeaderSearchBar.addEventListener("focus", () => {this.sHSearchBarGainFocus()})
        this.siteHeaderSearchBar.addEventListener("blur", () => {this.sHSearchBarLoseFocus()})
    }
    __disconnect() {
        for(let i = 0; i < this.siteHeaderDroppdownTriggers.length; i++) {
            this.siteHeaderDroppdownTriggers[i].removeEventListener("mouseenter", (e) => {this.sHLinkGainFocus(e, e.target, i)}) 
            this.siteHeaderDroppdownTriggers[i].removeEventListener("mouseleave", (e) => {this.sHLinkLoseFocus(e, e.target, i)}) 
        }
        for(let i = 0; i < this.siteHeaderSubNavItem.length; i++) {
            this.siteHeaderSubNavItem[i].removeEventListener("mouseenter", (e) => {this.sHSubNavGainFocus(e.target, i)})
        }
        this.siteHeaderMenu.removeEventListener("mouseleave", () => {this.sHExit()})
        this.siteHeaderSearchBar.removeEventListener("focus", () => {this.sHSearchBarGainFocus()})
        this.siteHeaderSearchBar.removeEventListener("blur", () => {this.sHSearchBarLoseFocus()})
    }
    __reconnect() {
        return this.__disconnect(), this.__init(), this.__connect()
    }
    isDescendant(parent, child) {
        var node = child.parentNode;
        while (node != null) {
            if (node === parent) {
                return true;
            }
            node = node.parentNode;
        }
        return false;
    }
    updateArrow(value) {
       return  this.siteHeader.style = `--siteMenuArrowOffset: ${value}px`
    }
    updateMenu(height, width) {
        const currentStyle = this.siteHeaderMenu.style;
        return this.siteHeaderMenu.style = `--siteMenuHeight: ${height}px; width: ${width}px; ${currentStyle};`
    }
    updateSubMenu(value) {
        return this.siteHeaderSubMenu.style = 
            `--siteSubMenuTriggerOffsetY: ${value.triggerOffsetY}px; 
            --siteSubMenuTriggerOffsetYCenter: ${value.triggerOffsetYCenter}px;
            --siteSubMenuTriggerBackgroundHeight: ${value.triggerBackgroundHeight}px`
    }
    fadeIn() {
        for(let i = 0; i < this.siteHeaderSubMenuNewsItem.length; i++) {
            return this.siteHeaderSubMenuNewsItem[i].classList.add("SiteHeaderSubMenuNewsItem--fadeIn")
        }
    }
    sHMouseEnter(element, index) {
        if(!element instanceof HTMLElement) throw "something went wrong"
        p(element.firstChild, "aria-expanded", true)
        p(this.siteHeaderMenu, "hidden")
        p(this.siteHeaderMenuSection[index], "hidden", null)
        p(this.siteHeaderMenuSection[index], "aria-hidden", false)
        this.siteHeaderMenuSection[index].classList.remove("SiteMenu__section--right")
        this.siteHeaderMenuSection[index].classList.remove("SiteMenu__section--left")
        for(let i = 0; i < this.siteHeaderDroppdownTriggers.length; i++) {
            if(i !== index) {
                p(this.siteHeaderDroppdownTriggers[i].firstChild, "aria-expanded", false)
                p(this.siteHeaderMenuSection[i], "hidden", true)
                p(this.siteHeaderMenuSection[i], "aria-hidden", true)
                if(i < index) {
                    this.siteHeaderMenuSection[i].classList.add("SiteMenu__section--left"),
                    this.siteHeaderMenuSection[i].classList.remove("SiteMenu__section--right")
                }
                if(i > index) {
                    this.siteHeaderMenuSection[i].classList.add("SiteMenu__section--right"),
                    this.siteHeaderMenuSection[i].classList.remove("SiteMenu__section--left")
                }
            }
        }
        for(let i = 0; i < index; i++) {
            this.siteHeaderMenuSection[i].classList.add("SiteMenu__section--left")
            this.siteHeaderMenuSection[i].classList.remove("SiteMenu__section--right")
        }
        for(let i = index + 1; i < this.siteHeaderMenuSection.length; i++) {
            this.siteHeaderMenuSection[i].classList.add("SiteMenu__section--right")
            this.siteHeaderMenuSection[i].classList.remove("SiteMenu__section--left")
        }
    }
    sHMouseLeave(element, index) {
        p(element.firstChild, "aria-expanded", false)
        p(this.siteHeaderMenu, "hidden", true)
        p(this.siteHeaderMenuSection[index], "hidden", true)
        p(this.siteHeaderMenuSection[index], "aria-hidden", true)
    }
    sHLinkGainFocus(event, element, index) {
        this.sHMouseEnter(element, index)
        this.updateArrow(element.getBoundingClientRect().left - ((window.innerWidth - this.getLayoutWidth() - this.getScrollbarWidth())/2) + element.offsetWidth/2)
        this.updateMenu(this.siteHeaderMenuSection[index].offsetHeight, this.siteHeaderMenuSection[index].offsetWidth)
        this.siteHeaderMenu.style.pointerEvents = "auto"
        if(event.relatedTarget instanceof HTMLElement && !event.relatedTarget.hasAttribute("aria-haspopup")) {
            this.siteHeader.classList.add("SiteHeader--dropdownVisible")
        }
        if(index === 0) {
            this.fadeIn()
            for(let i = 0; i < this.siteHeaderSubMenuNewsItem.length; i++) {
                p(this.siteHeaderSubMenuNewsItem[i], "data-performed-transition", true)
            }
        }
    }
    sHLinkLoseFocus(event, element, index) {
        if(event.relatedTarget instanceof HTMLElement 
        && !event.relatedTarget.hasAttribute("aria-haspopup")) {
            if(event.relatedTarget.getAttribute("data-js-target") !== "SiteMenu" 
            && !this.isDescendant(this.siteHeaderMenu, event.relatedTarget)) {
                this.siteHeader.classList.remove("SiteHeader--dropdownVisible") 
                this.siteHeaderMenu.style.pointerEvents = "none"
            }
        }
        if(event.relatedTarget instanceof HTMLElement 
        && event.relatedTarget.getAttribute("data-js-target") !== "SiteMenu" 
        && !this.isDescendant(this.siteHeaderMenu, event.relatedTarget)) {
            this.sHMouseLeave(element, index); 
        }
    }
    sHSubNavGainFocus(element, index) {
        if(element.getAttribute('data-js-target') === "SiteSubNavItem") {
            let offset = 0;
            for(let i = 0; i < index; i++) {
                offset += this.siteHeaderSubNavItem[i].offsetHeight
            }
            this.updateSubMenu({
                triggerOffsetY: offset, 
                triggerOffsetYCenter: this.initialSubMenuTriggerOffsetYCenter,
                triggerBackgroundHeight: element.offsetHeight,
            })
            this.sHSubMenuGainFocus(this.siteHeaderSubNavItem[index], index)
        }
    }
    sHSubMenuGainFocus(element, index) {
        p(element, "aria-expanded", true)
        p(this.siteHeaderSubMenuSection[index], "aria-hidden", false )
        p(this.siteHeaderSubMenuSection[index], "hidden", null)
        this.siteHeaderSubMenuSection[index].classList.remove("SiteSubMenuSection--after")
        this.siteHeaderSubMenuSection[index].classList.remove("SiteSubMenuSection--before")
        for(let i = 0; i < this.siteHeaderSubNavItem.length; i++) {
            if(i !== index) {
                p(this.siteHeaderSubNavItem[i], "aria-expanded", false)
                p(this.siteHeaderSubMenuSection[i], "aria-hidden", true)
                p(this.siteHeaderSubMenuSection[i], "hidden", true)
            }
        }
        for(let i = 0; i < index; i++) {
            this.siteHeaderSubMenuSection[i].classList.add("SiteSubMenuSection--before")
            this.siteHeaderSubMenuSection[i].classList.remove("SiteSubMenuSection--after")
        }
        for(let i = index + 1; i < this.siteHeaderSubMenuSection.length; i++) {
            this.siteHeaderSubMenuSection[i].classList.add("SiteSubMenuSection--after")
            this.siteHeaderSubMenuSection[i].classList.remove("SiteSubMenuSection--before")
        }
    }
    sHExit() {
        p(this.siteHeaderMenu, "hidden", true)
        this.siteHeader.classList.remove("SiteHeader--dropdownVisible")
        this.siteHeaderMenu.style.pointerEvents = "none"
        this.siteHeaderDroppdownTriggers.forEach(element => {
            if(element.firstChild.getAttribute("aria-expanded") === "true") {
                p(element.firstChild, "aria-expanded", false)
            }
        });
        this.siteHeaderMenuSection.forEach(element => {
            if(element.getAttribute("aria-hidden") === "false") {
                p(element, "hidden", true)
                p(element, "aria-hidden", true)
            }
        })
    }
    sHSearchBarGainFocus() {
        this.siteHeaderSearchBar.style = "--siteHeaderSearchBarWidth: calc(var(--layoutWidth)/3)"
        p(this.siteHeaderSearchBar, "aria-expanded", true)
        p(this.siteHeaderSearchResultContainer, "aria-hidden", false)
        p(this.siteHeaderSearchResultContainer, "hidden", null)
    }
    sHSearchBarLoseFocus() {
        this.siteHeaderSearchBar.style = "--siteHeaderSearchBarWidth: calc(var(--layoutWidth)/5)"
        p(this.siteHeaderSearchBar, "aria-expanded", false)
        p(this.siteHeaderSearchResultContainer, "aria-hidden", true)
        p(this.siteHeaderSearchResultContainer, "hidden", true)
    }
    getScrollbarWidth() {
        if(this.scrollbarWidth !== undefined) return this.scrollbarWidth
        const outer = document.createElement('div');
        outer.style.visibility = 'hidden';
        outer.style.overflow = 'scroll';
        outer.style.msOverflowStyle = 'scrollbar';
        document.body.appendChild(outer);

        const inner = document.createElement('div');
        outer.appendChild(inner);
        
        const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);
        outer.parentNode.removeChild(outer);
        return this.scrollbarWidth = scrollbarWidth
    }
    getLayoutWidth() {
        if(this.layoutWidth !== undefined) return this.layoutWidth
        const layoutWidth = window.innerWidth - this.getScrollbarWidth() - 32
        if(layoutWidth > 1250) {
            return this.layoutWidth = 1250
        } return this.layoutWidth = layoutWidth
    }
    setActiveHoverIndex() {
        //TODO: set active index when hovering menu so mapping insint required
    }
}

export {siteHeaderHandler as sH}
