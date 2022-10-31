import React from "react";
export default function Meme(){
    return(
        <form>
            <input className="form--input" placeholder="Top text" type="text"/>
            <input className="form--input" placeholder="Bottom text" type="text"/>
            <button className="form--button">Get new meme image <img src="../../public/images/small.png" className="small--button"  alt=""/></button>
        </form>
    )
}