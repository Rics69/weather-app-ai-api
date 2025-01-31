import Header from "./components/Header"
import Main from "./components/Main"

import './styles/components/App.scss'
import 'bootstrap-icons/font/bootstrap-icons.scss'

function App() {

    const dark = true;

    return (
        <div className={dark ? "App-dark" : "App-light"}>
            <Header/>
            <Main/>
        </div>
    )
}

export default App
