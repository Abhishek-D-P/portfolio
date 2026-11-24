import '../static/css/pages/Contact.css'
import Text from '../components/Text'
import Button from '../components/Button'

function Contact(){
    return(
        <>
            <section className="contact-page" id="contact">
                <div className="contact-card">
                    <Text type="caption" content="/ LET'S CONNECT" fontSize="10px"></Text>
                    <Text type="heading" content="Lorem ipsum dolor sit amet consectetur" fontSize="62px"></Text>
                    <Text type="paragraph" content="Lorem ipsum dolor sit amet consectetur" fontSize="17px"></Text>
                    <div className="connections">
                        <Button type="primary-btn" value="Email Me ↗" link=""></Button>
                        <Button type="secondary-btn" value="LinkedIn ↗" link="https://www.linkedin.com/abhishek-pattanshetti" target="_blank"></Button>
                        <Button type="secondary-btn" value="GitHub ↗" link="https://github.com/Abhishek-D-P" target="_blank"></Button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact