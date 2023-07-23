import React, { useState } from "react";
import {Link} from "react-router-dom"

import CharacterFragment from "./Fragments/CharacterFragment";

import Logo from "../Assets/Images/OMORI_Logo.png"
import GifFragment from "./Fragments/GifFragment";

import UpsideWave from "../Assets/Images/upsideWave.svg"
import downsideWave from "../Assets/Images/downsideWave.svg"

import WaveFragment from "./Fragments/WaveFragment";

import "../Styles/Headspace.css"
import "../Styles/Blackspace.css"



const LandingPage =()=>{

    const [btnColor,setBtnColor] = useState(false)

    const handleColor=()=>{
        setBtnColor((prevBtnColor) => !btnColor)
    }

    return (<>

        <header>

            <div className="container row">
                <div className="col-2">
                <Link to={"/about"}>
                    <button className={`black-btn ${btnColor? 'red-space':'white-space'}`} onMouseOver={handleColor}>Equipo</button>
                </Link>
                
                </div>
                <div className="col-2">
                <Link to={"/ejercicios"}>
                    <button className="black-btn" onMouseOver={handleColor}>Progreso</button>
                </Link>
                </div>
                <div className="col-5">
                <Link to={"/blackspace"}>
                    <button className="black-btn" onMouseOver={handleColor}>Welcome to Blackspace</button>
                </Link>
                </div>

            </div>


            <div className="container logo1">
                <center>
                <img src={Logo} className="logo"/> <br/><br/>
                <GifFragment url={"https://omori.wiki/images/c/ca/Mewo_sprite.gif"}/>
                <h2 className="omori">Waiting for something to happen?</h2>
                </center>
            </div>
            <WaveFragment image={UpsideWave}/>

        </header>
        
        <main>
        <WaveFragment image={downsideWave}/>

        <div className="container">

            <div className="row">
                <div className="col-12">
                    <CharacterFragment
                    image= "https://www.nautiljon.com/images/jeuxvideo_persos/00/64/mini/omori_5446.webp?10"
                    title = "Omori"
                    quote = "Waiting for something to happen?"
                    cardClass="omori"
                    btnClass="btn btn-primary omori"
                    />
                </div>
            </div>

            <br/>
            <br/>

            <div className="row">

                <div className="col-sd-12 col-md-4">
                    <CharacterFragment
                    image= "https://www.nautiljon.com/images/jeuxvideo_persos/00/34/aubrey_5443.webp"
                    title = "Aubrey"
                    quote = "Keep going!"
                    />
                </div>
                <div className="col-sd-12 col-md-4">
                    <CharacterFragment
                    image= "https://www.nautiljon.com/images/jeuxvideo_persos/00/24/kel_5442.webp"
                    title = "Kel"
                    quote = "Keep going!"
                    />
                    
                </div>
                <div className="col-sd-12 col-md-4">
                    <CharacterFragment
                    image= "https://www.nautiljon.com/images/jeuxvideo_persos/00/44/hero_5444.webp"
                    title = "Hero"
                    quote = "Keep going!"
                    />
                </div>
            </div>

            <br/>
            <br/>

            <div className="row">
                <div className="col-sd-12 col-md-6">
                    <CharacterFragment
                    image= "https://www.nautiljon.com/images/jeuxvideo_persos/00/14/basil_5441.webp"
                    title = "Basil"
                    quote = "Keep going!"
                    />
                    
                </div>
                <div className="col-sd-12 col-md-6">
                    <CharacterFragment
                    image= "https://www.nautiljon.com/images/jeuxvideo_persos/00/54/mari_5445.webp"
                    title = "Mari"
                    quote = "Keep going!"
                    />
                    
                </div>
            </div>
        </div>

        <WaveFragment image={UpsideWave}/>


        </main>

        <footer>
            <Link to={"/blackspace"}>
                <h1>Ready to uncover the truth?</h1>
            </Link>

        </footer>
    
    
    </>);
}

export default LandingPage