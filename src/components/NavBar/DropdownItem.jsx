import React from 'react'
import "./DropdownItem.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";

function DropdownItem(props) {

  const { children, Title } = props
  const DropdownRef = useRef();
  const [open, setOpen] = useState(false);
  const showDropdown = () => {
    DropdownRef.current.classList.toggle("closed");
    setOpen(!open);
  }

  return (
    <div>
      <li className='titulo'>
        <p onClick={showDropdown} className="text-hover-white">{Title}{open ? <FontAwesomeIcon className='ml-1' icon={faChevronUp} /> : <FontAwesomeIcon className='ml-1'icon={faChevronDown} />}</p> 
      </li>

      <div ref={DropdownRef} className='dropdown closed'>
        <div className='contenido'>
          {children}
        </div>
      </div>
    </div>

  )
}

export default DropdownItem