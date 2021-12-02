import {Link, NavLink} from 'react-router-dom';

import './Header.scss';
import '../../styles/variables.scss';

const Header = () => {

    return (
        <header className="app__header">
            <h1 className="app__title">
                <Link to="/">
                    <span>Marvel</span> information portal
                </Link>
            </h1>
            <nav className="app__menu">
                <ul>
                    <li><NavLink 
                        to="/"
                        style={ ({ isActive }) => ({ color: isActive ? "#9F0013" : "#232222" }) }
                        >Characters</NavLink></li>
                    /
                    <li><NavLink 
                        to="/comics"
                        style={ ({ isActive }) => ({ color: isActive ? "#9F0013" : "#232222" }) }
                        >Comics</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;