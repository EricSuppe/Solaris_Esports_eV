function defineProperty(el,key,value) {
    return key in el ? Object.defineProperty(el, key, {
        value: value,
        enumerable: !0,
        configurable: !0,
        writable: !0,
    }) : el[key] = value,el
}

export {defineProperty as defProp}