import './CVPreview.css'
import CVHeader from './CVHeader.jsx'
import CVEducation from './CVEducation.jsx'
import CVExperience from './CVExperience.jsx'

function CVPreview({ personalInfo, education, experience, layout }) {
    const getCVPreviewClass = () => `cv-preview${layout !== 'top' ? ` layout-${layout}` : ''}`;
    return (
        <div className={getCVPreviewClass()}>
            <CVHeader personalInfo={personalInfo} layout={layout} />
            <div className="cv-preview-sections">
                <CVEducation education={education} />
                <CVExperience experience={experience} />
            </div>
        </div>
    )
}

export default CVPreview;