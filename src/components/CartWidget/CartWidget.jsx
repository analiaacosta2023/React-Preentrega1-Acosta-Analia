import './CartWidget.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";


function CartWidget() {

    return (
        <div className='cart-widget-outlined-secondary'>
            <FontAwesomeIcon icon={faCartShopping} />
            <p>1</p>
        </div>
    );
}

export default CartWidget