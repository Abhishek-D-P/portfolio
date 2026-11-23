import '../static/css/components/ResponsiblityRow.css'
import Text from './Text'
function ResponsiblityRow({no,title,content}){

    return (
        <>
            <div className="row">
                    <Text content={no} type = "caption" fontSize = "11px"></Text>
                    <Text type="heading" content={title} ></Text>
                <div className="responsibility">
                    <Text type="paragraph" content= {content}></Text>
                </div>
            </div>
               
        </>
    )
}

export default ResponsiblityRow