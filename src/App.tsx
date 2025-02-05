import Header from "./components/Header"
import Main from "./components/Main"
import {useContext} from "react";
import ThemeContext from "./context/theme.context.tsx";

import './styles/components/App.scss'
import 'bootstrap-icons/font/bootstrap-icons.scss'

function App() {

    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error("App must be used within a ThemeProvider");
    }

    const { dark } = context;

    return (
        <div className={dark ? "App-dark" : "App-light"}>
            <Header/>
            <Main/>
        </div>
    )
}

export default App