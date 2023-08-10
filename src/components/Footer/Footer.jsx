import React from 'react'
import "./Footer.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faPinterest, faYoutube } from "@fortawesome/free-brands-svg-icons";
import Accordion from './Accordion';
import { Link } from "react-router-dom";

function Footer() {


    return (
        <div className='container footer'>

            <Accordion Title="Contacto">
                <h6><strong>Dirección:</strong> calle número, ciudad, país</h6>
                <h6><strong>Teléfono:</strong> +54 11 9999 9999</h6>
                <h6><strong>Horarios de atención:</strong> 9:00 a 21:00 hs</h6>
                <h6>Seguinos</h6>
                <div className="icon">
                    <FontAwesomeIcon className="icono" icon={faFacebook} />
                    <FontAwesomeIcon className="icono" icon={faTwitter} />
                    <FontAwesomeIcon className="icono" icon={faInstagram} />
                    <FontAwesomeIcon className="icono" icon={faPinterest} />
                    <FontAwesomeIcon className="icono" icon={faYoutube} />
                </div>
            </Accordion>

            <Accordion Title="Sobre">
                <Link to="/comingsoon">Nosotros</Link>
                <Link to="/comingsoon">Envíos</Link>
                <Link to="/comingsoon">Política de privacidad</Link>
                <Link to="/comingsoon">Términos y condiciones</Link>
                <Link to="/comingsoon">Contacto</Link>
            </Accordion>

            <Accordion Title="Mi cuenta">
                <Link to="/comingsoon">Ingresar</Link>
                <Link to="/cart">Ver carrito</Link>
                <Link to="/comingsoon">Mi lista de deseos</Link>
                <Link to="/comingsoon">Mis órdenes</Link>
                <Link to="/comingsoon">Ayuda</Link>
            </Accordion>

            <div className="pagos">

                <div className="titulo">
                    <h4>Medios de pago seguros</h4>
                </div>

                <div className="cards">
                    <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/visa@2x.png"
                        alt="" />
                    <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/mastercard@2x.png"
                        alt="" />
                    <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/amex@2x.png"
                        alt="" />
                    <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/diners@2x.png"
                        alt="" />
                    <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/paypal@2x.png"
                        alt="" />
                    <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/cabal@2x.png"
                        alt="" />
                    <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/tarjeta-naranja@2x.png"
                        alt="" />
                    <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/tarjeta-shopping@2x.png"
                        alt="" />
                    <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/mercadopago@2x.png"
                        alt="" />
                    <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/argencard@2x.png"
                        alt="" />
                </div>

            </div>

            <div className="copyright">
                <p>COPYRIGHT ANA RANDOM STORE - 2023. TODOS LOS DERECHOS RESERVADOS.</p>
            </div>

        </div>
    )
}

export default Footer