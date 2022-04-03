import React from "react"
import TopBar from "./TopBar"
import GodCard from "./GodCard"
import "./PlayerGods.css"

export default function PlayerGods(props){ 
    const name = "ares"
    const kda="2.08"
    const kills="1,114"
    const deaths="1,090"
    const assists="2,314"
    const wins="155"
    const losses="75"
    const winrate="67%"
    const playtime="81h 05m"
    return(
        <div className="player_gods">
            <TopBar />
            <GodCard name={name} kda={kda} kills={kills} deaths={deaths} assists={assists} wins={wins} losses={losses} winrate={winrate} playtime={playtime}/>
            <GodCard name={name} kda={kda} kills={kills} deaths={deaths} assists={assists} wins={wins} losses={losses} winrate={winrate} playtime={playtime}/>
            <GodCard name={name} kda={kda} kills={kills} deaths={deaths} assists={assists} wins={wins} losses={losses} winrate={winrate} playtime={playtime}/>
            <GodCard name={name} kda={kda} kills={kills} deaths={deaths} assists={assists} wins={wins} losses={losses} winrate={winrate} playtime={playtime}/>
            <GodCard name={name} kda={kda} kills={kills} deaths={deaths} assists={assists} wins={wins} losses={losses} winrate={winrate} playtime={playtime}/>
        </div>
    )
}