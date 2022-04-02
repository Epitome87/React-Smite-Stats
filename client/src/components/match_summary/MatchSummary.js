import React from "react"
import "./MatchSummary.css"
import TeamList from "./TeamList.js"
import TeamCard from "./TeamCard.js"

function MatchSummary({game}){
    const team1 = game.teams[0]
    const team2 = game.teams[1]
    const team1players = team1.players
    const team2players = team2.players
    const gamemode = game.gamemode
    const duration = game.duration
    const time = game.time

    return(
        <div className="match_summary">
            <div className="game_description">
                <TeamCard team={team1}/>
                <TeamCard team={team2}/>
                <h1>{gamemode}</h1>
                <h2>{duration} - {time}</h2>
            </div>
            <TeamList team={team1.team} players={team1players}/>
            <TeamList team={team2.team} players={team2players}/>
        </div>
    )
    }

export default MatchSummary