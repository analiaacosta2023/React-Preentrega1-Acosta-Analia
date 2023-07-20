import CartWidget from "../CartWidget/CartWidget"
import DropdownItem from "./DropdownItem";
import "./NavBar.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars, faChevronDown, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function NavBar() {

    const navRef = useRef();
    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    const navigate = useNavigate();

    const [open, setOpen] = useState(false);

    return (
        <nav className="navbar-primary container">
            <NavLink to="/"><img className="site-logo" src="img/logo.jpg" alt="" /></NavLink>
            <ul ref={navRef} className="nav-menu text-secondary">
                <li className="text-hover-white"><NavLink to="/">INICIO</NavLink></li>
                <li onClick={() => setOpen(!open)}>
                    <p className="text-hover-white">PRODUCTOS{open ? <FontAwesomeIcon className='ml-1' icon={faChevronDown} /> : <FontAwesomeIcon className='ml-1' icon={faChevronRight} />}</p>
                    {open && <DropdownItem />}
                </li>
                <li className="text-hover-white"><NavLink to="/about">NOSOTROS</NavLink></li>
                <li className="text-hover-white"><NavLink to="/contact">CONTACTO</NavLink></li>
                <button onClick={showNavBar} className="nav-btn nav-close-btn text-hover-white"><FontAwesomeIcon icon={faTimes} /></button>
            </ul>
            <div onClick={() => navigate("/cart")} className="text-secondary text-hover-white"><CartWidget></CartWidget></div>
            <button onClick={showNavBar} className="nav-btn text-secondary text-hover-white"><FontAwesomeIcon icon={faBars} /></button>
        </nav>
    )
}

export default NavBar