import Text from "./Text"
import Skills from "./Skills"

import '../static/css/components/ProjectCard.css'

function ProjectCard({title,desc}){

    return (
        <>
            <div className="projectCard">
                <Text type="heading" content = {title} fontSize="25px"></Text>
                <Text type="paragraph" content = {desc} fontSize="12px"></Text>
                <div className="skills">
                    <Skills value="Python"></Skills>
                    <Skills value="Flask"></Skills>
                    <Skills value="Power BI"></Skills>
                    <Skills value="SQLite"></Skills>
                </div>
                <a href="" className="projectLink">GitHub ↗</a>
            </div>
        </>
    )
}

export default ProjectCard