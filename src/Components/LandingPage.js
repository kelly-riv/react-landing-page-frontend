import React, { useState } from "react";
import {Link} from "react-router-dom"

import CharacterFragment from "./Fragments/CharacterFragment";
import WaveFragment from "./Fragments/WaveFragment";
import ButtonFragment from "./Fragments/ButtonFragment";
import GifFragment from "./Fragments/GifFragment";


import Logo from "../Assets/Images/OMORI_Logo.png"
import UpsideWave from "../Assets/Images/upsideWave.svg"
import downsideWave from "../Assets/Images/downsideWave.svg"
import downsideWave1 from "../Assets/Images/wave (1).svg"


import "../Styles/Headspace.css"



const LandingPage =()=>{

    const [theme,setTheme] = useState(false)

    const handleTheme = () =>{
        setTheme((prevTheme)=>!theme)
    }

    return (<>

        <header>
            <br/>
            <center>
            <div className="container row">
                <div className="col-sd-6 col-md-4">
                    <ButtonFragment label={"Team"} linkTo={"/about"}/>
                </div>
                <div className="col-sd-6 col-md-4">
                    <ButtonFragment label={"Progress"} linkTo={"/ejercicios"}/>
        
                </div>
                <div className="col-sd-6 col-md-4">
                    <ButtonFragment label={"Get it now"} linkTo={"/obtener"}/>
                </div>
            </div>
            </center>

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
                    rwimage="https://gifdb.com/images/high/omori-neutral-sunny-4godm0x9p4idl6bx.gif"
                    hsimage= "https://www.nautiljon.com/images/jeuxvideo_persos/00/64/mini/omori_5446.webp?10"
                    title = "Omori"
                    rwquote = "OMORI did not succumb."
                    hsquote= "You did it."
                    cardClass="omori"
                    btnClass="btn btn-primary omori"
                    rwname="Sunny"
                    />
                </div>
            </div>

            <br/><br/>

            <div className="row">

                <div className="col-sd-12 col-md-4">
                    <CharacterFragment
                    rwimage="https://i.pinimg.com/originals/43/6a/17/436a179c1f5cac1898687d29f6c31de4.gif"
                    hsimage= "https://www.nautiljon.com/images/jeuxvideo_persos/00/34/aubrey_5443.webp"
                    title = "Aubrey"
                    rwquote = "Hi OMORI!"
                    hsquote= "The two of you against me! How's that sound?"

                    />
                </div>
                <div className="col-sd-12 col-md-4">
                    <CharacterFragment
                    rwimage="https://media.tenor.com/XVWBVVlzX90AAAAC/kel-omori-omori.gif"
                    hsimage= "https://www.nautiljon.com/images/jeuxvideo_persos/00/24/kel_5442.webp"
                    title = "Kel"
                    rwquote = "There you are! Where've you been, buddy?"
                    hsquote= "Thanks, friend! I knew I could count on you!"

                    />
                </div>
                <div className="col-sd-12 col-md-4">
                    <CharacterFragment
                    rwimage="https://media.tenor.com/_qALbo0eJcAAAAAC/omori-hero.gif"
                    hsimage= "https://www.nautiljon.com/images/jeuxvideo_persos/00/44/hero_5444.webp"
                    title = "Hero"
                    rwquote = "Who wants a group hug?"
                    hsquote= "You must miss MARI a lot..."
                    />
                </div>
            </div>

            <br/>
            <br/>

            <div className="row">
                <div className="col-sd-12 col-md-6">
                    <CharacterFragment
                    rwimage="https://media.tenor.com/ohMda_te_xYAAAAC/omori-basil.gif"
                    hsimage= "https://www.nautiljon.com/images/jeuxvideo_persos/00/14/basil_5441.webp"
                    title = "Basil"
                    rwquote = "I only take photos of people when they least expect it!"
                    hsquote= "Will you forgive me, my best friend?"
                    />
                    
                </div>
                <div className="col-sd-12 col-md-6">
                    <CharacterFragment
                    rwimage="https://giffiles.alphacoders.com/213/213292.gif"
                    hsimage= "https://www.nautiljon.com/images/jeuxvideo_persos/00/54/mari_5445.webp"
                    title = "Mari"
                    rwquote = "I promise I'll keep you safe!"
                    hsquote= "SUNNY... I love you..."
                    />
                    
                </div>
            </div>
        </div>

        <WaveFragment image={UpsideWave}/>


        </main>

        <footer className="footer-headspace">
            <WaveFragment image={downsideWave}/>
            <br/><br/><br/>
            <br/><br/><br/>
            <div className="container">
                <center>
            <ButtonFragment label={"Ready to uncover the truth?"} linkTo={"/obtener"}/>
            </center>
            <br/><br/><br/>
            <br/><br/><br/>
            <br/><br/><br/>

            </div>

        </footer>
    
    
    </>);
}

export default LandingPage