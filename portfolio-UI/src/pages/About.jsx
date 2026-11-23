import Text from "../components/Text"
import Interest from "../components/Interest"

import '../static/css/pages/About.css'


function About(){
    return(
        <>
            <section className="about" id="about">
                <div className="about-left-section">
                    <Text type = 'caption' content = '/ ABOUT' fontSize='11px'></Text>
                    <Text type = 'heading' content = 'Engineering with Purpose' fontSize='50px'></Text>
                    
                </div>
                <div className="about-right-section">
                    <Text type = 'heading' content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, culpa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, culpa.' fontSize='25px'></Text>
                    <Text type = 'paragraph' content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, culpa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, culpa.' fontSize='17px'></Text>  
                    <Interest value = 'Backend'></Interest>
                    <Interest value = 'AI'></Interest>
                    <Interest value = 'Full Stack'></Interest>
                </div>
                
            </section>
        </>
    )

}

export default About