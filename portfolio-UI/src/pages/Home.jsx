import NavBar from "../components/NavBar"
import Heading from "../components/Heading"


import '../static/css/pages/Home.css'
function Home(){
    return (
        <>
            <NavBar></NavBar>
            <div className="home-content">
                <div className="home-left-section">
                    <div className="designation"><p>SENIOR SOFTWARE CONSULTANT</p></div>
                    <Heading content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At non laboriosam placeat odio rerum, ' fontSize='50px'></Heading>
                    <div className="summary"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At non laboriosam placeat odio rerum, tempora esse numquam quia earum? Earum quam error eius omnis placeat nulla, suscipit debitis praesentium quae!</p></div>
                    <div className="actions">
                        <button className="primary-btn btn">Explore My Work <span>➡️</span></button>
                        <button className="secondary-btn btn">Let's Connect <span>➡️</span></button>
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
            </div>

        </>
    )
}

export default Home