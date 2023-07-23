import React,{useState,useEffect} from "react";

import AccordionItemFragment from "./Fragments/AccordionItemFragment";
import GifFragment from "./Fragments/GifFragment";
import ButtonFragment from "./Fragments/ButtonFragment";
import WaveFragment from "./Fragments/WaveFragment";


import bwWave from "../Assets/Images/wave.svg"



const About = ()=>{

return(
    <>
    <main className="about"><br/><br/><br/>
    <div className="row">
        <div className="col-1"/>
        <div className="col-2">
        <ButtonFragment label={"Back"} linkTo={"/"}/>
        </div>
    </div>
    <div className="container">
        <div className="row">
            <div className="col-4"/>
            <div className="col-6"><h1 className="title-about">Meet the team</h1> </div>
        </div>
        <div className="row">
            <div className="col-5"/>
            <div className="col-4"><GifFragment url={"https://media.tenor.com/6MPN-AiGXSIAAAAC/something-omori.gif"} height="11rem"/></div>
        </div>
        
    <div class="accordion" id="accordionExample">
        <div className="row">
        <AccordionItemFragment collapseNum={1} name={"OMOCAT"} specialty={"(Game Director)"} description={" is an illustrator and the owner of OMOCAT, LLC. OMORI is a special project close to their heart. They have spent the past few years working tirelessly on OMORI with the rest of the team on every aspect of the game including writing, art, and programming. Now that OMORI is released, they are looking forward to directing new projects."}/>
        <AccordionItemFragment collapseNum={2} name={"MINCED / CHARLENE LU"} specialty={"(Illustrator, Animator, Leaf)"} description={" is an artist who reflects and adapts to their surroundings. A lot of thought critters scramble around in their head, but they will always keep trying their best to convey what they want in earnest. It’s okay to take one step at a time and just enjoy life!"}/>
        <AccordionItemFragment collapseNum={3} name={"EMS / EMILY SHAW"} specialty={"(Pixel Artist, Map Designer, Hamster Enthusiast)"} description={" is an illustrator who spends upwards of 3 hours at buffets. Dear Protagonist is her personal brand dedicated to celebrating individuality with delicate sensibilities, all while going bananas about her favorite series. She loves bringing poetry and narratives to life, and hopes you enjoy the vibrant and mundane world of OMORI!"}/>
        </div>
        <div className="row">
        <AccordionItemFragment collapseNum={4} name={"CLOVER & SEALIFE"} specialty={"(Composer)"} description={" is the project of Jami Lynne, a composer, vocalist, and electronic musician based in Seattle, Washington. With deep influence of and love for the sounds of vintage drum machines, shoegaze and city pop, CLOVER & SEALIFE sings a song of sentimentality and uncertain hope in the face of melancholy. She hopes her work on the OMORI soundtrack can express the feeling of finding small bits of joy in hopelessness, through the lens of early-CD-quality game music."}/>
        <AccordionItemFragment collapseNum={5} name={"BLUEMOON / LUCA MASTROIANNI"} specialty={"(Programmer) "} description={" has been an indie game developer and programmer for 5 years and enjoys coding in every language. He studied the piano for ten years but can also play guitar, bass and drums. As an Italian, he loves pizza and eats it once a week, and he loves ginseng coffee. He really likes video games, and some of his other hobbies are watching anime, reading manga, and learning about history and economics. He also likes staying up all night with his friends, dancing, and drinking wine. He’s just an ordinary Italian dude."}/>
        <AccordionItemFragment collapseNum={6} name={"OCEAN'S DREAM / CESAR RENDON"} specialty={"(Programmer, Foodmonster)"} description={" is a long time indie game developer, having worked on multiple projects before OMORI. He is a jack of all trades and works on a little bit of everything. He’s also obsessed with pizza."}/>
        </div>
        <div className="row">
        <AccordionItemFragment collapseNum={7} name={"SLEEPYKUYA / ANDREW VANCE"} specialty={"(Battle Programmer)"} description={" does programming for the battle system, which entails balancing enemy and player character stats, skills, items, and so on. He’s also incredibly good at fixing plot holes."}/>
        <AccordionItemFragment collapseNum={8} name={"YIN / WHITNEY E. WHITE "} specialty={"(Programmer)"} description={" is a bit of an introvert, but loves making games and hanging out with like-minded people. She’s worked on several indie titles prior to OMORI, drawing inspiration from classic games of earlier eras, particularly JRPGs. When not making games she is a proud mother of six and a bit of a food connoisseur, her favorites being cheesecake and lasagna. She also occasionally streams game development and even gameplay during downtime. Creating games has always been a huge part of her life and she enjoys every moment of it."}/>
        <AccordionItemFragment collapseNum={9} name={"CZO / CACHI CORDOVA"} specialty={"(Programmer)"} description={" is currently studying game development in college, and has been making and programming games for his friends since middle school. He’s used RPG Maker for 5 years and likes to experiment by creating complex mechanics within the existing engine. He likes games of all kinds, but especially loves horror games... and witches."}/>
        </div>
    
    </div>
    </div>
    </main>

    <footer className="blackspace">
    <WaveFragment image={bwWave}/>


    </footer>
    </>

);

}

export default About

