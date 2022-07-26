const changeThemeButtons = document.querySelectorAll('[name=theme]')
const rootStyles = document.documentElement.style
const lightTheme = {
    "--main-color":     "#3e75c3",
    "--text-color":     "#333",
    "--bg-color":       "#d7d7d7",
    "--bg-cards-color": "#f0f0f0",
    "--bg-cards-color-alt": "#3e75c344"
}
const darkTheme = {
    "--main-color":     "#e00",
    "--text-color":     "#eee",
    "--bg-color":       "#222",
    "--bg-cards-color": "#555",
    "--bg-cards-color-alt": "#c007"
}

for(let button of changeThemeButtons) {
    button.addEventListener('change', e => {
        if(e.target.id === 'dark') {
            changeTheme(darkTheme)
        } else if(e.target.id === 'light') {
            changeTheme(lightTheme)
        } 
    })
}

const changeTheme = theme => {
    let cssVars = Object.keys(theme)
    for(let cssVar of cssVars) {
        rootStyles.setProperty(cssVar, theme[cssVar])
    }
}