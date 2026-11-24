import Text from "./Text"

import '../static/css/components/ImpactCard.css'
function ImpactCard(){


    return(
        <>
            <div className="impact-card">
                <Text type = "caption" content="Reasonable Impact" fontSize="10px"></Text>
                <h3 className="impact">~ 5 hours</h3>
                <Text type = "heading" content = "Of engineering times saved" fontSize="14px"></Text>
            </div>
        </>
    )
}

export default ImpactCard