import React from "react"
import "./GodCard.css"

export default function GodCard({name, kda, kills, deaths, assists, wins, losses, winrate, playtime}){

    return(
        <div className="god_card">
            <h3>{name}</h3>
            <p>kda - {kda}</p>
            <p>kills - {kills}</p>
            <p>deaths - {deaths}</p>
            <p>assists - {assists}</p>
            <p>wins - {wins}</p>
            <p>losses - {losses}</p>
            <p>winrate - {winrate}</p>
            <p>playtime - {playtime}</p>
        </div>
    )
}