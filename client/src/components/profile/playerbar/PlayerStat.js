import React from "react"
import "./PlayerStat.css"
{/*
stats is a 2d array, 
stats[index][0] = name
stats[index][1] = value
*/}
export default function PlayerStat({name, stats}){
    
    return(
        <div className="player_stat">
        <h3>{name}</h3>
        <ul>
        {
            stats.map((stat, index) => (
                <li>{stats[index][0]} - {stats[index][1]}</li>
        ))}
          </ul>
        </div>
    )

}