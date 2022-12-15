import { resizeListener } from "./resizeListener"

class App {
    constructor() {
        this.main = document.querySelector("main")

        this.scrollOffset = undefined;
        this.scrollbarWidth = undefined;
        this.layoutWidth = undefined;

        this.siteHeaderTransfromOffset = 400;
    }
    __init() {
        new resizeListener(App).__connect()
        this.getPreferedLanguage()
        document.querySelector("html").style = `--scrollbarWidth: ${this.getScrollbarWidth()}px`
    }
    async __connect() {
        
    }
    __disconnect() {
        
    }
    __reconnect() {
        return this.__disconnect(), this.__init(), this.__connect()
    }
    getWindowScrollOffset() {
        return this.scrollOffset = this.main.scrollTop
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
    getPreferedLanguage() {
        const prefLanguage = navigator.language || navigator.userLanguage
        return document.querySelector("html").lang = `${prefLanguage}`
    }
    getLayoutWidth() {
        if(this.layoutWidth !== undefined) return this.layoutWidth
        const layoutWidth = window.innerWidth - this.getScrollbarWidth() - 32
        if(layoutWidth > 1250) {
            return this.layoutWidth = 1250
        } return this.layoutWidth = layoutWidth
    }
    isLandingInView() {
        return this.scrollOffset < (window.innerHeight - this.siteHeaderTransfromOffset)
    }
}

export {App as app}