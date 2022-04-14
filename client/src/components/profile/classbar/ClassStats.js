import React from "react"
import "./ClassStats.css"
import ClassStat from "./ClassStat"
import Stat from "../Stat"

export default function ClassStats(props){
    const hunterStats=[Stat("PLAYTIME", "365h 35m"), Stat("GOLD", "11,708,333"), Stat("GPM", "534"), Stat("KDA", "1.68"), Stat("KILLS", "6,227"), Stat("DEATHS", "5,347"),
    Stat("ASSISTS", "5,558"), Stat("DAMAGE", "4,481,732"), Stat("DPM", "204"), Stat("IN HAND", "1,679,464"), Stat("TAKEN", "6,525,835"), Stat("MITIGATED", "3,918,814"),
    Stat("HEALING", "0"), Stat("SELF HEALING", "2,029,724"), Stat("MINION KILLS", "30,301"), Stat("MINION DAMAGE", "18,843,630"), Stat("WINS", "509"), Stat("LOSSES", "456"), Stat("WIN/LOSS RATION", "52.75%")]
    const assassinStats=[Stat("PLAYTIME", "365h 35m"), Stat("GOLD", "11,708,333"), Stat("GPM", "534"), Stat("KDA", "1.68"), Stat("KILLS", "6,227"), Stat("DEATHS", "5,347"),
    Stat("ASSISTS", "5,558"), Stat("DAMAGE", "4,481,732"), Stat("DPM", "204"), Stat("IN HAND", "1,679,464"), Stat("TAKEN", "6,525,835"), Stat("MITIGATED", "3,918,814"),
    Stat("HEALING", "0"), Stat("SELF HEALING", "2,029,724"), Stat("MINION KILLS", "30,301"), Stat("MINION DAMAGE", "18,843,630"), Stat("WINS", "509"), Stat("LOSSES", "456"), Stat("WIN/LOSS RATION", "52.75%")]
    const guardianStats=[Stat("PLAYTIME", "365h 35m"), Stat("GOLD", "11,708,333"), Stat("GPM", "534"), Stat("KDA", "1.68"), Stat("KILLS", "6,227"), Stat("DEATHS", "5,347"),
    Stat("ASSISTS", "5,558"), Stat("DAMAGE", "4,481,732"), Stat("DPM", "204"), Stat("IN HAND", "1,679,464"), Stat("TAKEN", "6,525,835"), Stat("MITIGATED", "3,918,814"),
    Stat("HEALING", "0"), Stat("SELF HEALING", "2,029,724"), Stat("MINION KILLS", "30,301"), Stat("MINION DAMAGE", "18,843,630"), Stat("WINS", "509"), Stat("LOSSES", "456"), Stat("WIN/LOSS RATION", "52.75%")]
    const warriorStats=[Stat("PLAYTIME", "365h 35m"), Stat("GOLD", "11,708,333"), Stat("GPM", "534"), Stat("KDA", "1.68"), Stat("KILLS", "6,227"), Stat("DEATHS", "5,347"),
    Stat("ASSISTS", "5,558"), Stat("DAMAGE", "4,481,732"), Stat("DPM", "204"), Stat("IN HAND", "1,679,464"), Stat("TAKEN", "6,525,835"), Stat("MITIGATED", "3,918,814"),
    Stat("HEALING", "0"), Stat("SELF HEALING", "2,029,724"), Stat("MINION KILLS", "30,301"), Stat("MINION DAMAGE", "18,843,630"), Stat("WINS", "509"), Stat("LOSSES", "456"), Stat("WIN/LOSS RATION", "52.75%")]
    const mageStats=[Stat("PLAYTIME", "365h 35m"), Stat("GOLD", "11,708,333"), Stat("GPM", "534"), Stat("KDA", "1.68"), Stat("KILLS", "6,227"), Stat("DEATHS", "5,347"),
    Stat("ASSISTS", "5,558"), Stat("DAMAGE", "4,481,732"), Stat("DPM", "204"), Stat("IN HAND", "1,679,464"), Stat("TAKEN", "6,525,835"), Stat("MITIGATED", "3,918,814"),
    Stat("HEALING", "0"), Stat("SELF HEALING", "2,029,724"), Stat("MINION KILLS", "30,301"), Stat("MINION DAMAGE", "18,843,630"), Stat("WINS", "509"), Stat("LOSSES", "456"), Stat("WIN/LOSS RATION", "52.75%")]
    return(
        <div className="class_stats">
            <h1 id="title">STATS BY CLASS</h1>
            <div className="class_stats_main">
                <ClassStat cName="Assassin" stats={assassinStats} games={50} wins={30} />
                <ClassStat cName="Guardian" stats={guardianStats} games={50} wins={30}/>
                <ClassStat cName="hunter" stats={hunterStats} games={50} wins={30}/>
                <ClassStat cName="Warrior" stats={warriorStats} games={50} wins={30}/>
                <ClassStat cName="Mage" stats={mageStats} games={50} wins={30}/>
            </div>
        </div>
    )
}