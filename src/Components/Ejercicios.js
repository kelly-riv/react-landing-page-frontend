import React, {useState,useEffect} from "react";
import {Link} from "react-router-dom"

import "../Styles/Headspace.css"

import ButtonFragment from "./Fragments/ButtonFragment";
import Ejercicio1Fragment from "./Fragments/Ejercicio1Fragment";

const Ejercicios= () =>{
    return(<>
        <div className="row">
            <div className="col-md-2"/>
            <div className="col-md-2"> 

        <ButtonFragment label={"Back"} linkTo={"/"}/></div>

        </div>
        <h1>Ejercicios</h1>
        <Ejercicio1Fragment/>
    </>)

}
export default Ejercicios