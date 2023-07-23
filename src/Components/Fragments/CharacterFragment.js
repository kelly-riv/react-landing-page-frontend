import React, {useState,useEffect} from "react";
import {Link} from "react-router-dom";

const CharacterFragment =({image,title,quote,cardClass="card",btnClass="btn btn-primary"})=>{

    return(<>
        <center>
        <div className={cardClass} style={{width: "18rem",minHeight:"18rem"}}>
        <img src={image} className="card-img-top" alt="..." style={{maxHeight:"18rem",maxWidth:"18rem"}}/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{quote}</p>
            <Link to="/about">
            <button className={btnClass}>Ver información</button>
            </Link>
        </div>
        </div>
        </center>
    
    
    </>);
}

export default CharacterFragment

