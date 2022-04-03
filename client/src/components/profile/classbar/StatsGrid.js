import React from "react"
import "./StatsGrid.css"

export default function StatsGrid({stats}){

    return(
        <div className="stats_grid">
        <ul>
            {
                stats.map((stat, index) => (
                    <li>{stats[index][0]} - {stats[index][1]}</li>
            ))}
        </ul>
        </div>
    )
}