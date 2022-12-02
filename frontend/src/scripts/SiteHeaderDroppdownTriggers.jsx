import SiteHeader from "./SiteHeader"

function SiteHeaderDroppdownTriggers() {
    const elements = document.querySelectorAll('[data-js-target="SiteHeaderDroppdownTriggers"]')
    elements.forEach((element, index) => element.addEventListener("mouseenter", (event) => {
        SiteHeader(event);
        element.firstChild.setAttribute("aria-expanded", true);
        document.querySelectorAll('[data-js-target="SiteMenuSection"]')[index].removeAttribute("hidden")
        document.querySelectorAll('[data-js-target="SiteMenuSection"]')[index].setAttribute("aria-hidden", false)
        for(let i = 0; i < index; i++) {
            document.querySelectorAll('[data-js-target="SiteMenuSection"]')[i].classList.add("SiteMenu__section--left")
            document.querySelectorAll('[data-js-target="SiteMenuSection"]')[i].classList.remove("SiteMenu__section--right")
        }
        document.querySelectorAll('[data-js-target="SiteMenuSection"]')[index].classList.remove("SiteMenu__section--right")
        document.querySelectorAll('[data-js-target="SiteMenuSection"]')[index].classList.remove("SiteMenu__section--left")
        for(let i = index + 1; i < 4; i++) {
            document.querySelectorAll('[data-js-target="SiteMenuSection"]')[i].classList.add("SiteMenu__section--right")
            document.querySelectorAll('[data-js-target="SiteMenuSection"]')[i].classList.remove("SiteMenu__section--left")
        }
    }))
    elements.forEach((element, index) => element.addEventListener("mouseleave", (event) => {    
        SiteHeader(event, element, index);
        element.firstChild.setAttribute("aria-expanded", false)
        document.querySelectorAll('[data-js-target="SiteMenuSection"]')[index].setAttribute("hidden", "")
        document.querySelectorAll('[data-js-target="SiteMenuSection"]')[index].setAttribute("aria-hidden", true)
    }))
}

export default SiteHeaderDroppdownTriggers