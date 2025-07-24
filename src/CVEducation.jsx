import './CVEducation.css'
import EducationCard from './EducationCard.jsx'

function CVEducation({ education }) {
    return (
        <div className="cv-education">
            {education?.length > 0 && <h3 className="section-title">Education</h3>}
            {education.map(item => {
                return item.isVisible ? <EducationCard item={item} key={item.id}/> : null
            })}
        </div>
    )
}

export default CVEducation;