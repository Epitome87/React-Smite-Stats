import React from "react"
import "./PlayerStat.css"
{/*
stats is a 2d array, 
stats[index][0] = name
stats[index][1] = value
*/}
export default function PlayerStat({ name, stats }) {

    return (
        <div className="player_stat">
            <h3>{name}</h3>
            <div className="player_stat_main">
                {
                    stats.map((stat, index) => (
                     <div className="individual_stat_wrapper">   
                        <p className="player_stat_name">{stats[index][0]}</p>
                        <p className="player_stat_stat">{stats[index][1]}</p>
                    </div>
                    ))}
            </div>
        </div>
    )

}