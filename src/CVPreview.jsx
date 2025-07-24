import './CVPreview.css'
import CVHeader from './CVHeader.jsx'
import CVEducation from './CVEducation.jsx'

function CVPreview({ personalInfo, education }) {
    return (
        <div className="cv-preview">
            <CVHeader personalInfo={personalInfo} />
            <CVEducation education={education} />
        </div>
    )
}

export default CVPreview;