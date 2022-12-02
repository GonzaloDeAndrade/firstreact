import React from "react";
import './styles.css';


const Navbar = ({text,onHandlerClick}) => { 
   
    return (

        <button onClick= {onHandlerClick} className="button-list">{text}</button>

    )


}
export default Navbar;