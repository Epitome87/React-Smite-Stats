import React from "react"
import RelicList from "./RelicList.js"
import ItemList from "./ItemList.js"

function PlayerCard({player}) {
    let username=player.username
    let character=player.character
    let items=player.items
    let relics=player.relics
    let kills=player.kills
    let deaths=player.deaths
    let assists=player.assists
    return(
        <div className="card">
                    <h1 className="player">{username}</h1>
                    <h1 className="character">{character}</h1>
                    <p>{kills}/{deaths}/{assists}</p>
                    <RelicList relics={relics} />
                    <ItemList items={items} />
        </div>
    )
}

export default PlayerCard