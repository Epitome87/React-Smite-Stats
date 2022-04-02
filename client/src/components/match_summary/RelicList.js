import React from "react"

function RelicList({ relics }){

    return(
        <ul className="innerlist relic">
            <li>{relics[0].name}</li>
            <li>{relics[1].name}</li>
        </ul>
    )
}

export default RelicList