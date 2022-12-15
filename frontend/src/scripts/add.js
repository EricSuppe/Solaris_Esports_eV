function addProperty(el, prop, value) {
    if(value === null || value === undefined) {
        return el.removeAttribute(prop)
    }
    if(el instanceof HTMLElement && el.hasAttribute(prop)) {
        if(el.getAttribute(prop) !== value) {
            return el.setAttribute(prop, value)
        } else return null
    } else {
        return el.setAttribute(prop, value)
    };
}

export {addProperty as _p}