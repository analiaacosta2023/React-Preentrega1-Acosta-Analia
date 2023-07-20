import "./Item.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faStar } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Item({producto}) {

    const navigate = useNavigate();

    return (
        <div onClick={() => navigate(`/item/${producto.id}`)} className="product-card-outlined-primary">
            <img src={producto.link_foto} alt="" />
            <div className="des">
                <span className="text-secondary">Colección {producto.coleccion}</span>
                <h5>{producto.nombre}</h5>
                <div className="star">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                </div>
                <h4>$ {producto.precio}</h4>
            </div>
            <div className="cart text-hover-white text-secondary" ><FontAwesomeIcon icon={faCartShopping} /></div>
        </div>
    )
}

export default Item