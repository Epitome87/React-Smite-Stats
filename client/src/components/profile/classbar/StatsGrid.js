import React from "react"
import "./StatsGrid.css"

export default function StatsGrid({stats}){

    return(
        <div className="stats_grid">
            {
                stats.map((stat, index) => (
                    <p>{stats[index][0]} - {stats[index][1]}</p>
            ))}
        </div>
    )
}