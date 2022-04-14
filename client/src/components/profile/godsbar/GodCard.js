import React from "react"
import "./GodCard.css"

export default function GodCard({name, kda, kills, deaths, assists, wins, losses, winrate, playtime}){

    return(
        <div className="god_card">
            <h3 className="god_card_name">{name}</h3>
            <div className="god_card_row1">
                <p>kda - {kda}</p>
                <p>kills - {kills}</p>
                <p>deaths - {deaths}</p>
            </div>
            <div className="god_card_row2">
                <p>assists - {assists}</p>
                <p>wins - {wins}</p>
                <p>losses - {losses}</p>
            </div>
            <div className="god_card_row3">
                <p>winrate - {winrate}</p>
                <p>playtime - {playtime}</p>
            </div>
        </div>
    )
}