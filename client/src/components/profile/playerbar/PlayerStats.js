import React from "react"
import PlayerStat from "./PlayerStat"
import Stat from "../Stat"
import "./PlayerStats.css"

{/* 
Stat is a simple function that takes in (name, value) and returns them in an array of [name, value]
So each of the stat arrays is actually a 2d array, which I access in the PlayerStat component\
Stat[0] = name, Stat[1] = value
*/}
export default function PlayerStats(props){
    const damageStats=[Stat("Player", 205127938), Stat("Team Healing", 145833076), Stat("Self Healing", 47405325), Stat("Weapon", 175301322), Stat("Shielding", 130313579), Stat("Taken", 301803191)]
    const objectiveStats=[Stat("CPM", 266), Stat("Credits", 15535418), Stat("Objective Time", 81197)]
    const killStats=[Stat("KDA", 2.28), Stat("Kills", 26515), Stat("Deaths", 28386), Stat("Assists", 76587)]
    const matchStats=[Stat("Played", 5027), Stat("Won", 3105), Stat("Lost", 1922)]

    return(
        <div className="player_stats">
        <h2>Player Stats</h2>
        {/* This div will essentially be re-used 4x -- Component? */}
            <PlayerStat name="MATCHES" stats={matchStats} />
            <PlayerStat name="PLAYER KILLS" stats={killStats} />
            <PlayerStat name="OBJECTIVES" stats={objectiveStats} />
            <PlayerStat name="DAMAGE" stats={damageStats} />
      </div>
    )
}