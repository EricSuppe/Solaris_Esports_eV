import { defProp } from "./defineProperty";

function initialize() {
    /* SiteHeader.menuHover */
    const el = document.querySelectorAll(`[data-js-target]`);
    for(const o of el) {
        if(o.dataset.jsTarget) {
            const el = o;
            const key = el.dataset.jsTarget.split(".")[0]
            const value = el.dataset.jsTarget.split(".")[1]
            defProp(el,key,new handler())
            console.log(el)
        }
    }
}

class handler {
    constructor() {
        defProp(this,"el",void 0)
        console.log(this)
    }
}


export {initialize as init}