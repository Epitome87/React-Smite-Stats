import React from "react"
import "./TopBar.css"

export default function TopBar(props){
    
    return(
        <div className="gods_top_bar">
            <h2>MOST PLAYED GODS</h2>
            <div className="gods_top_bar_lifetime">
                <h3>Lifetime</h3>
                <p>23h 5m</p>
            </div>
        </div>
    )
}