import React, { useEffect,useState} from "react";
import { Link } from "react-router-dom";

const Ejercicio2Fragment = () =>{
    const [ contadorLikes , setContadorLikes ]= useState(0)

    const handleContador = (evento) =>{
        setContadorLikes(contadorLikes+1)
    }
    return(
        <>
            <h1>Ejercicio 2</h1>
            <p>Perfil</p>
            <button type="button" className="black-btn white-space" onClick={handleContador}>Dar Like</button>
            <p>Conteo de Likes: {contadorLikes} </p> <br/>

        </>
    )
}

export default Ejercicio2Fragment