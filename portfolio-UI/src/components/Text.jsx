import '../static/css/components/Text.css'

function Text({type, content,fontSize}){

    return <div className={type} style={{ fontSize: fontSize}}>{content}</div>
    

}

export default Text