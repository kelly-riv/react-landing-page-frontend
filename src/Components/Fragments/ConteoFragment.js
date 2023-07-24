import React, { useEffect,useState} from "react";
import { Link } from "react-router-dom";

const ConteoFragment = ({character}) =>{
    const [ contadorLikes , setContadorLikes ]= useState(0)
    const [ btnNameClass, setBtnNameClass] = useState(true)
    const [ nameClass, setNameClass] = useState(true)

    useEffect(()=>{
        setNameClass('likes ${character}')
    })

    useEffect(()=>{
        setBtnNameClass('btn ${character}')
    }

    )


    const handleContador = (evento) =>{
        setContadorLikes(contadorLikes+1)
    }
    return(
        <>
            <button type="button" onClick={handleContador} className={btnNameClass}>Me gusta</button>
            <p className={nameClass}>Likes: {contadorLikes} </p> <br/>
        </>
    )
}

export default ConteoFragment