import NavBar from "../components/NavBar"
import Text from "../components/Text"
import Button from "../components/Button"

import '../static/css/pages/Home.css'
function Home(){
    return (
        <>
            <NavBar></NavBar>
            <section className="home-content" id="home">
                <div className="home-left-section">
                    <Text type = 'caption' content = 'SENIOR SOFTWARE CONSULTANT' fontSize='11px'></Text>
                    <Text type = 'heading' content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At non laboriosam placeat odio rerum, ' fontSize='50px'></Text>
                    <Text type = 'paragraph' content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, culpa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, culpa.' fontSize='17px'></Text>
                    <div className="actions">
                        <Button type = 'primary-btn' value = 'Explore My Work 🛄' link="#experience"></Button>
                        <Button type = 'secondary-btn' value = "Let's connect 📞" link="#contact"></Button>
                    </div>
                </div>
                <div className="home-right-section">
                    
                </div>
                <div className="footer">
                    <div className="skills">PYTHON / AUTOMATION / AI ENGINEERING</div>
                    <div className="socials"> 
                        <a href="https://www.linkedin.com/abhishek-pattanshetti" target="_blank"><img src="src/assets/linkedin-svgrepo-com.svg    " alt="" /></a>
                        <a href="https://github.com/Abhishek-D-P" target="_blank"><img src="src/assets/github-svgrepo-com.svg    " alt="" /></a>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Home