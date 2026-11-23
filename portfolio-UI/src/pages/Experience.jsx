import Text from "../components/Text"
import ExperienceCard from "../components/ExperienceCard"

import '../static/css/pages/Experience.css'

function Experience(){

    return (
        <>
            <section className="experience" id = "experience">
                <Text content="/ EXPERIENCE" type="caption" fontSize="11px"></Text>
                <Text content="Building systems in the real world." type="heading" fontSize="50px"></Text> 
                <div className="experienceCard">
                    <ExperienceCard></ExperienceCard>
                    
                </div>
            </section>
        </>
    )
}

export default Experience