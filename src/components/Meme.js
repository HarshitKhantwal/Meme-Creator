import React, { useState } from "react";
import memeData from "../memeData";
export default function Meme(){
   const[meme,setMeme]=useState("")
    function getImage(){
        const memeArray=memeData.data.memes
        const random=Math.floor(Math.random()*memeArray.length)
        setMeme(memeArray[random].url)
    }
    return(
        <main>
        <div className="form">
            <input className="form--input" placeholder="Top text" type="text"/>
            <input className="form--input" placeholder="Bottom text" type="text"/>
            <button onClick={getImage} className="form--button">Get new meme image <img src="../../public/images/small.png" className="small--button"  alt=""/></button>
        </div>
        <img src={meme} alt="Meme" className="meme--image"/>
        </main>
    )
}