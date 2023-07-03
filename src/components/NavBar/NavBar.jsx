import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.scss"

function NavBar() {
    return (
        <nav className="navbar-primary">
            <div className="container">
                <img className="site-logo" src="img/logo.jpg" alt="" />
                <ul className="nav-menu text-secondary">
                    <li className="text-hover-white"><a href="#">INICIO</a></li>
                    <li className="text-hover-white"><a href="#">PRODUCTOS</a></li>
                    <li className="text-hover-white"><a href="#">NOSOTROS</a></li>
                    <li className="text-hover-white"><a href="#">CONTACTO</a></li>
                    <li className="text-hover-white"><CartWidget></CartWidget></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar