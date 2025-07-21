import './CVEditContent.css'
import CVPersonalInfo from './CVPersonalInfo.jsx'
import CVSection from './CVSection.jsx'

function CVEditContent({ personalInfo, onPersonalFieldChange, experience, onExperienceVisibilityToggle, onExperienceFieldSave, onExperienceDelete }) {
    return (
        <div className="cv-edit-content">
            <CVPersonalInfo personalInfo={personalInfo} onPersonalFieldChange={onPersonalFieldChange} />
            <CVSection items={experience} iconName={'business_center'} name={'Experience'} onToggleVisibility={onExperienceVisibilityToggle} onExperienceFieldSave={onExperienceFieldSave} onExperienceDelete={onExperienceDelete} />
        </div>
    )
}

export default CVEditContent;