import '../static/css/components/Heading.css'

function Heading({content,fontSize}){

    return <div className="heading" style={{ fontSize: fontSize}}>{content}</div>
    

}

export default Heading