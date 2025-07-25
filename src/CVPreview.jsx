import './CVPreview.css'
import CVHeader from './CVHeader.jsx'
import CVEducation from './CVEducation.jsx'
import CVExperience from './CVExperience.jsx'

function CVPreview({ personalInfo, education, experience }) {
    return (
        <div className="cv-preview">
            <CVHeader personalInfo={personalInfo} />
            <CVEducation education={education} />
            <CVExperience experience={experience} />
        </div>
    )
}

export default CVPreview;