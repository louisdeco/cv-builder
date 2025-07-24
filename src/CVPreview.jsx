import './CVPreview.css'
import CVHeader from './CVHeader.jsx'

function CVPreview({ personalInfo }) {
    return (
        <div className="cv-preview">
            <CVHeader personalInfo={personalInfo} />
        </div>
    )
}

export default CVPreview;