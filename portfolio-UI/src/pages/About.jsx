import Text from "../components/Text"

import '../static/css/pages/About.css'


function About(){
    return(
        <>
            <div className="about">
                <div className="about-left-section">
                    <Text type = 'caption' content = '/ ABOUT' fontSize='11px'></Text>
                    <Text type = 'heading' content = 'Engineering with Purpose' fontSize='50px'></Text>
                    
                </div>
                <div className="about-right-section">
                    <Text type = 'subheading' content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, culpa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, culpa.' fontSize='25px'></Text>
                    <Text type = 'paragraph' content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, culpa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, culpa.' fontSize='17px'></Text>  
                </div>
                
            </div>
        </>
    )

}

export default About