import '../static/css/components/Skills.css'
import Text from './Text'

function Skills({value}){

    return(
        <div className="skill">
            <Text type="paragraph" content = {value} fontSize="12px"></Text>
        </div>
    )
}

export default Skills