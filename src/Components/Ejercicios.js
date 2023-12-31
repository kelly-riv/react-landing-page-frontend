import React, {useState,useEffect} from "react";
import {Link} from "react-router-dom"

import "../Styles/Headspace.css"

import ButtonFragment from "./Fragments/ButtonFragment";
import Ejercicio1Fragment from "./Fragments/Ejercicio1Fragment";
import Ejercicio2Fragment from "./Fragments/Ejercicio2Fragment";
import Ejercicio3Fragment from "./Fragments/Ejercicio3Fragment";

const Ejercicios= () =>{
    return(<>
    <main className="main-ejercicios">
        <br/><br/>
        <div className="container">
        <div className="row">
            <div className="col-md-2"/>
            <div className="col-md-2"> 

        <ButtonFragment label={"Back"} linkTo={"/"}/></div>

        </div>
        <br/><br/>

        <center><h1 className="ejercicio">Ejercicios</h1></center>
        <div className="container-ejercicio">
        <center>
            <Ejercicio1Fragment/></center>
        </div>

        <br/>

        
        <div className="container-ejercicio">
        <center>
            <Ejercicio2Fragment/></center>
        </div>
        <br/>

        <div className="container-ejercicio">
            <center>
            <Ejercicio3Fragment/></center>
        </div>
        </div>
        </main>
    </>)

}
export default Ejercicios