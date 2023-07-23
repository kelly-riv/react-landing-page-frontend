import React, {useState,useEffect} from "react";

import {Link} from "react-router-dom"

const ButtonFragment = ({label,linkTo}) =>{

    const [btnColor,setBtnColor] = useState(false)

    const handleColor=()=>{
        setBtnColor((prevBtnColor) => !btnColor)
    }

    return(

        <Link to={linkTo}>
            <button className={`black-btn ${btnColor? 'red-space':'white-space'}`} 
            onMouseEnter={handleColor} 
            onMouseLeave={handleColor}>{label}</button>
        </Link>
                
    )
}

export default ButtonFragment