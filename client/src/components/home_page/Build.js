import "./Build.css"

export default function Build({name, author, items}){
    return(
        <div className="build">
            <div className="build_topbar">
                <h3>{name}</h3>
                <p>{author}</p>
            </div>
            <div className="build_body">
                <ul className="build_items">
                    {
                        items.map((item, key) => (
                            <li key={key}>{item}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}