function getPreferedTheme() {
    const prefTheme = "Dark"
    document.querySelector(".CRA__config--root").classList.add(`theme--${prefTheme}`)
}

export default getPreferedTheme