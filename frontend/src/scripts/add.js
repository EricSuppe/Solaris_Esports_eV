function addProperty(el, prop, value) {
    if(el instanceof HTMLElement && el.hasAttribute(prop)) {
        if(el.getAttribute(prop) !== value) {
            return el.setAttribute(prop, value)
        } else return null
    } else {
        return el.setAttribute(prop, value)
    };
}

export {addProperty as _p}

function addClass(el, cl) {
    if(el instanceof HTMLElement && el.classList.contains(cl)) {
        return el.classList.remove(cl) 
    } else {
        return el.classList.add(cl)
    };
}

export {addClass as _c}