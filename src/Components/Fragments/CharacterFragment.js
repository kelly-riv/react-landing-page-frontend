import React, {useState,useEffect} from "react";
import {Link} from "react-router-dom";

import ConteoFragment from "./ConteoFragment";

const CharacterFragment =({hsimage,rwimage,title,rwquote,hsquote,cardClass="card",btnClass="btn btn-primary",rwname=title})=>{

    const [friendStyle,setFriendStyle] = useState(true)

    const handleFriendStyle =(evento) =>{
        setFriendStyle((prevFriendStyle)=>!friendStyle)

    }

    return(<>

        <section className={friendStyle? 'no-bg':'blackspace-bg'}>
        <center>
        <div className={friendStyle ? cardClass:title} id={title} style={{width: "18rem",height:"37rem"}}>
        <img src={friendStyle ? hsimage:rwimage} className="card-img-top" alt="..." style={{height:"18rem",maxWidth:"18rem"}}/>
        <div className="card-body">
            <h5 className="card-title">{friendStyle ? title:rwname}</h5>
            <p className="card-text">{friendStyle ? rwquote:hsquote}</p>
            <ConteoFragment character={title}/>
            <button className={btnClass} onClick={handleFriendStyle}>{friendStyle? 'Real world':'Headspace'}</button>
        </div>
        </div>
        </center>
        </section>
    
    
    </>);
}

export default CharacterFragment

