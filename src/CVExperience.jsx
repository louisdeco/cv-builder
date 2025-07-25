import './CVExperience.css'
import ExperienceCard from './ExperienceCard.jsx'

function CVExperience({ experience }) {
    return (
        <div className="cv-experience">
            {experience?.length > 0 && <h3 className="section-title">Experience</h3>}
            {experience.map(item => {
                return item?.isVisible ? <ExperienceCard item={item} key={item.id} /> : null
            })}
        </div>
    )
}

export default CVExperience;