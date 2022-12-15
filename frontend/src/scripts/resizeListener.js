import { app as App } from "./App"

class resizeListener {
    constructor(App) {
        this.App = App
    }
    __init() {

    }
    async __connect() {

    }
    __disconnect() {

    }
    __reconnect() {
        return this.__disconnect(), this.__init(), this.__connect()
    }
}

export { resizeListener as resizeListener}