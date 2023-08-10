import './CartWidget.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";


function CartWidget() {

    const {getTotalItemsInCart} = useContext(cartContext);
    const totalItems = getTotalItemsInCart()

    return (
        <Link to="/cart" className='cart-widget-outlined-secondary text-secondary text-hover-white'>
           <FontAwesomeIcon icon={faCartShopping} />
           {totalItems > 0 && <p>{totalItems}</p> }
        </Link>
    );
}

export default CartWidget