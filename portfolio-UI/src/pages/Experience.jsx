import Text from "../components/Text"

import '../static/css/pages/Experience.css'

function Experience(){

    return (
        <>
            <section className="experience" id = "experience">
                <Text content="/ EXPERIENCE" type="caption" fontSize="11px"></Text>
                <Text content="My engineering toolkit" type="heading" fontSize="50px"></Text> 
                <Text content="The right tools. A strong foundation. Systems built to last." type="paragraph" fontSize="15px"></Text> 
            </section>
        </>
    )
}

export default Experience