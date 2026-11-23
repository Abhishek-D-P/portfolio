import Text from "./Text"
import ResponsiblityRow from "./ResponsibilityRow"
import ImpactCard from "./ImpactCard"
import '../static/css/components/ExperienceCard.css'

function ExperienceCard(){
    return (
        <>
            <div className="top-section">
                <div className="left-section">
                    <Text content="MERCEDES-BENZ RESEARCH AND DEVELOPMENT INDIA" type="caption" fontSize="14px"></Text>
                    <Text content="Senior Software Engineer" type="heading" fontSize="30px"></Text>
                </div>
                <div className="duration">
                    <Text type="heading" content="AUG 2021 - Present" fontSize="14px"></Text>
                </div>
            </div>
            <div className="main-section">
                <div className="highlight-section">
                    <ImpactCard></ImpactCard>
                    {/* <FocusArea></FocusArea> */}
                </div>
                <div className="responsiblity-section">
                    <p> Responsiblities and Contribtuion</p>
                        <ResponsiblityRow no="01" title="Software Bundle Automation" content = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem quisquam aperiam, sint at doloribus molestiae. Vero placeat culpa ducimus iure."></ResponsiblityRow>
                        <ResponsiblityRow no="01" title="Software Bundle Automation" content = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem quisquam aperiam, sint at doloribus molestiae. Vero placeat culpa ducimus iure."></ResponsiblityRow>
                        <ResponsiblityRow no="01" title="Software Bundle Automation" content = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem quisquam aperiam, sint at doloribus molestiae. Vero placeat culpa ducimus iure."></ResponsiblityRow>
                        <ResponsiblityRow no="01" title="Software Bundle Automation" content = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem quisquam aperiam, sint at doloribus molestiae. Vero placeat culpa ducimus iure."></ResponsiblityRow>
                </div>
            </div>
        </>
    )
}

export default ExperienceCard