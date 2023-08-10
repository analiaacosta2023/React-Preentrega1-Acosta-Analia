import CartWidget from "../CartWidget/CartWidget"
import DropdownItem from "./DropdownItem";
import "./NavBar.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars} from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import { NavLink } from "react-router-dom";

function NavBar() {

    const navRef = useRef();
    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
        <nav className="navbar-primary container">
            <NavLink to="/"><img className="site-logo" src="../../img/logo.jpg" alt="" /></NavLink>
            <ul ref={navRef} className="nav-menu text-secondary">
                <li className="text-hover-white"><NavLink to="/">INICIO</NavLink></li>
                <DropdownItem Title="PRODUCTOS">
                    <NavLink to="/category/flamingo" className="text-hover-white">Colección Flamingo</NavLink>
                    <NavLink to="/category/crocodile" className="text-hover-white">Colección Crocodile</NavLink>
                    <NavLink to="/category/dinosaur" className="text-hover-white">Colección Dinosaur</NavLink>
                    <NavLink to="/category/watermelon" className="text-hover-white">Colección Watermelon</NavLink>
                    <NavLink to="/category/orange" className="text-hover-white">Colección Orange</NavLink>
                </DropdownItem>
                <li className="text-hover-white"><NavLink to="/comingsoon">NOSOTROS</NavLink></li>
                <li className="text-hover-white"><NavLink to="/comingsoon">CONTACTO</NavLink></li>
                <button onClick={showNavBar} className="nav-btn nav-close-btn text-hover-white"><FontAwesomeIcon icon={faTimes} /></button>
            </ul>
            <CartWidget/>
            <button onClick={showNavBar} className="nav-btn text-secondary text-hover-white"><FontAwesomeIcon icon={faBars} /></button>
        </nav>
    )
}

export default NavBar