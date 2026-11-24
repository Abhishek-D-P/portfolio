import '../static/css/pages/Projects.css'
import Text from '../components/Text'
import ProjectCard from '../components/ProjectCard'

function Projects(){
    return (
        <>
            <div className="project-page" id="projects">
                <div className="header">
                    <Text type="caption" content="/ PROJECTS" fontSize="10px"></Text>
                    <Text type="heading" content="Things I've Built" fontSize="46px"></Text>
                    <Text type="paragraph" content="Practical Problems. Thoughtful solutions" fontSize="15px"></Text>
                </div>
                <div className="projects">
                    <ProjectCard title="Authentication & Authorization Service" desc="A security-first foundation designed for clear p. A security-first foundation designed for clear p. A security-first foundation designed for clear p. A security-first foundation designed for clear p"></ProjectCard>
                    <ProjectCard title="Authentication & Authorization Service" desc="A security-first foundation designed for clear p. A security-first foundation designed for clear p. A security-first foundation designed for clear p. A security-first foundation designed for clear p"></ProjectCard>
                    <ProjectCard title="Authentication & Authorization Service" desc="A security-first foundation designed for clear p. A security-first foundation designed for clear p. A security-first foundation designed for clear p. A security-first foundation designed for clear p"></ProjectCard>
                    <ProjectCard title="Authentication & Authorization Service" desc="A security-first foundation designed for clear p. A security-first foundation designed for clear p. A security-first foundation designed for clear p. A security-first foundation designed for clear p"></ProjectCard>
                </div>
            </div>
        </>
    )
}

export default Projects