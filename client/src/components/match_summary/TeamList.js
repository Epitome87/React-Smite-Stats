import React from "react"
import "./TeamList.css"
import PlayerCard from "./PlayerCard"

function TeamList({team, players}){

return(
    <div id={team}>
    <ul className="mainlist">
            <li>
                <PlayerCard player={players[0]} />
            </li>
            <li>
                <PlayerCard player={players[1]} />
            </li>
            <li>
                <PlayerCard player={players[2]} />
            </li>
            <li>
                <PlayerCard player={players[3]} />
            </li>
            <li>
                <PlayerCard player={players[4]} />
            </li>
        </ul>
    </div>
    )
}

export default TeamList