import React, {useState,useEffect} from "react";
import {Link} from "react-router-dom"

import ButtonFragment from "./Fragments/ButtonFragment";
import GifFragment from "./Fragments/GifFragment";
import WaveFragment from "./Fragments/WaveFragment";

import UpsideWave from "../Assets/Images/upsideWave.svg"

const Get = () =>{

    const [showcaseState,setShowcaseState]=useState(0)

    const handleShowcaseState = () =>{
        setShowcaseState((prevShowcaseState)=>prevShowcaseState+1);
    }

    const viewShowcaseState = ()=>{
        if (showcaseState===0){
            return(<>
            <GifFragment  url={"https://64.media.tumblr.com/f53a989eb93f00a8c6a70072fb66fd32/c6434c21fd7c7164-7f/s400x600/4770129a50f3dffd20c3d018ca7957157a08073f.gif"} height="10rem"/>
            <GifFragment  url={"https://www.spriters-resource.com/resources/sheet_icons/153/155739.gif?updated=1686611444"} height="20rem"/>
            <GifFragment  url={"https://i.redd.it/2nyj3436j73b1.gif"} height="11rem"/>
            <GifFragment  url={"https://64.media.tumblr.com/218535119e9aaaa4255184c0c4957f06/f08664aaa1b27bc2-1f/s400x600/529ebe228564ce619349f4b592787d82eedc84cd.gif"} height="10rem"/>
            </>)
        }
        else if(showcaseState===1){
            return(
                <>
            <GifFragment  url={"https://64.media.tumblr.com/f6bc59af27ea1fdaf5a79a1b9d295029/097fe48bc948878f-ee/s1280x1920/650e41765a88ee64b61f21683d97b27ffb142922.gif"} height="10rem"/>
            <GifFragment  url={"https://www.spriters-resource.com/resources/sheet_icons/178/181435.gif?updated=1677119066"} height="20rem"/>
            <GifFragment  url={"https://i.redd.it/xv8zchgai7d71.gif"} height="11rem"/>
                </>
            )
        }
        else if(showcaseState===2){
            return(
                <>
                <br/>
                <GifFragment  url={"https://64.media.tumblr.com/b949deab2b057921e6604a4b3e702bdd/f1b40a75b97ea700-94/s540x810/3a2de4439535bab8976d14f5e7caae87b3623c37.gifv"} height="10rem"/>
                <GifFragment  url={"https://i.redd.it/t7lx91oyi73b1.gif"} height="16rem"/>
                <GifFragment  url={"https://i.redd.it/8i6wbxjdj73b1.gif"} height="16rem"/>
                
                </>
            )
        }
        else if(showcaseState===3){
            return(
                <>
                <br/>
                <GifFragment  url={"https://i.redd.it/ca35tgujduua1.gif"} height="15rem"/>
                <GifFragment  url={"https://i.redd.it/maka146go8h81.gif"} height="15rem"/>
                <GifFragment  url={"https://i.redd.it/e6mmclbhi73b1.gif"} height="15rem"/>
                
                </>
            )
        }
        else {
            setShowcaseState(0)
        }
    }


    return(
        <>
        <main className="get-image">
        <br/><br/><br/>
        <div className="row">
            <div className="col-md-2"/>
            <div className="col-md-2"> 
        <ButtonFragment label={"Back"} linkTo={"/"}/></div>
        </div>
        <br/><br/>

        <div className="row get-height">
            <div className="col-md-2"/>
            <div className="col-md-6">

            {viewShowcaseState()}
            </div>
            <div className="col-md-4">
                <Link to={"/https://store.steampowered.com/app/1150690/OMORI/"}><button className="black-btn white-space" onMouseOver={handleShowcaseState}>Get it on Steam</button></Link> <br/><br/>
                <Link to={"https://www.nintendo.com/es-cl/store/products/omori-switch/"}><button className="black-btn white-space" onMouseOver={handleShowcaseState}>Get it on Switch</button></Link><br/><br/>
                <Link to={"https://www.xbox.com/es-GT/games/store/omori/9P8WMQ1S4TF9"}><button className="black-btn white-space" onMouseOver={handleShowcaseState}>Get it on Xbox</button></Link><br/><br/>
                <Link to={"https://store.playstation.com/es-cl/product/UP7787-CUSA33851_00-1042987614787642?gclid=Cj0KCQjwn_OlBhDhARIsAG2y6zO_Ui_T7Z915jmWymFzCp52JXkU1xL8-J2IF2guSGDlx2MscAncMDQaAuz_EALw_wcB&gclsrc=aw.ds"}><button className="black-btn white-space" onMouseOver={handleShowcaseState}>Get it on Play Station</button></Link>
            </div>

        </div>
        <WaveFragment image={UpsideWave} />
        </main>
        </>
    )
}

export default Get