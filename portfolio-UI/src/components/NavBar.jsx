import '../static/css/components/NavBar.css'
function NavBar(){
    return (
        <>
            <div className="navbar">
                <div className="logo-section">Abhishek D Pattanshetti</div>
                <div className="nav-section">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#experience">Experience</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </>
    )
}

export default NavBar