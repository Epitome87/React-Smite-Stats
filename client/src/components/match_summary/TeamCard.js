import React from "react"
import "./TeamCard.css"

export default function TeamCard({team}){

    return(
        <div className="team_card">
            <p>{team.team}</p>
            <ul>
                <li>{team.kills}k</li>
                <li>{team.deaths}d</li>
                <li>{team.assists}a</li>
            </ul>
        </div>
    )
}