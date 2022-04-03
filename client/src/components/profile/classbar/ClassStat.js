import React from "react"
import "./ClassStat.css"
import TopBar from "./TopBar.js"
import StatsGrid from "./StatsGrid"

export default function ClassStat({cName, stats, games, wins}){

    return(
        <div className="class_stat">
        <TopBar cName={cName} games={games} wins={wins}/>
        <StatsGrid stats={stats}/>
        </div>
    )
}