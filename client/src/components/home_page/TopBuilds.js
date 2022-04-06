import "./TopBuilds.css"
import Build from "./Build.js"

export default function TopBuilds(props){
    const tempBuild = ["bluestone", "mystical", "runeforged", "bullwark", "pridwen", "mantle"]
    return(
        <article className="top_builds">
            <div className="builds_top_bar">
                <h2>Daily Top Builds</h2>
            </div>
            <div className="builds_body">
                <Build name="Spencer's build" author="Spencer" items={tempBuild}/>
                <Build name="Spencer's build" author="Spencer" items={tempBuild}/>
                <Build name="Spencer's build" author="Spencer" items={tempBuild}/>
                <Build name="Spencer's build" author="Spencer" items={tempBuild}/>
                <Build name="Spencer's build" author="Spencer" items={tempBuild}/>
                <Build name="Spencer's build" author="Spencer" items={tempBuild}/>
            </div>
        </article>
    )
}