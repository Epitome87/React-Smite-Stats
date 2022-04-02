import React from "react"
import Item from "../Item.js"

export default function ItemList({ items }){

    return(
        <ul className="innerlist item">
                <div className="card">
                    { items.map((item, key) => (
                        <li key={key}>{item.name}</li>
                    ))}

                </div>
        </ul>
    )
}