import '../styles/components/Header.scss'
import Place from "./Place.tsx";
import Search from "./Search.tsx";
import Settings from "./Settings.tsx";

const Header = () => {
    return (
        <div className="Header">
            <Place/>
            <Search/>
            <Settings/>
        </div>
    )
}

export default Header;