import React from "react"
import "./TopBar.css"

export default function TopBar({cName, games, wins}){

    return(
        <div className="class_top_bar">
        <h2>{cName}</h2>
        <p>Games {games}</p>
        <p>Wins {wins}</p>
        </div>
    )
    }