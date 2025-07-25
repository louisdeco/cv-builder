import './ExperienceCard.css'

function ExperienceCard({ item }) {
    return (
        <div className="experience-card">
            <div className="date-location-wrapper">
                <p>{item.startDate} - {item.endDate}</p>
                <p>{item.location}</p>
            </div>
            <div className="company-position-description-wrapper">
                <p className="company">{item.company}</p>
                <p>{item.position}</p>
                <p className="description">{item.description}</p>
            </div>
        </div>
    )
}

export default ExperienceCard;