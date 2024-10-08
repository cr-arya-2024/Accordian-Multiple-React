import useLocalStorage from "./useLocalStorage"
import './style.css'
export default function LightDarkMoode() {
const [theme,setTheme]=useLocalStorage('theme','dark')
function handleToogleTheme(){
    setTheme(theme==='light' ? 'dark' : 'light')
}

    return <div className="light-dark-mode" data-theme={theme}>
        <div className="container">
            <p>Hello World</p>
            <button onClick={handleToogleTheme}>
                <div data-theme={theme}></div>
            </button>
        </div>
    </div>
}