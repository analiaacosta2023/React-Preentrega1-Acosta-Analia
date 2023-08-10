import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import "./Accordion.scss"

function Accordion(props) {

    const { Title, children } = props

    const AccordionRef = useRef();

    const [open, setOpen] = useState(false);

    const showAccordion = () => {
        AccordionRef.current.classList.toggle("mobile-not-show");
        setOpen(!open);
    }


    return (
        <div className="col">

            <div className="titulo">
                <h4>{Title}</h4>
                <h4 onClick={showAccordion} className='icono'>{open ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}</h4>
            </div>

            <div ref={AccordionRef} className="desplegable mobile-not-show">
                {children}
            </div>

        </div>
    )
}

export default Accordion