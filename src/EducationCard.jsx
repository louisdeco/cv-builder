import './EducationCard.css'

function EducationCard({ item }) {
    return (
        <div className="education-card">
            <div className="date-location-wrapper">
                <p>{item.startDate} - {item.endDate}</p>
                <p>{item.location}</p>
            </div>
            <div className="institution-degree-wrapper">
                <p  className="institution">{item.institution}</p>
                <p>{item.degree}</p>
            </div>
        </div>
    )
}

export default EducationCard;