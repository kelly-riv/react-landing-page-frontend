import React, {useState,useEffect} from "react";
import {Link} from "react-router-dom"

import ButtonFragment from "./Fragments/ButtonFragment";

const Ejercicios= () =>{
    return(<>
        <div className="row">
            <div className="col-md-2"/>
            <div className="col-md-2"> 
        <ButtonFragment label={"Back"} linkTo={"/"}/></div>
        </div>
        <h1>Ejercicios</h1>
    </>)

}
export default Ejercicios