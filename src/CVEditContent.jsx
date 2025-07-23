import './CVEditContent.css'
import CVPersonalInfo from './CVPersonalInfo.jsx'
import CVSection from './CVSection.jsx'

function CVEditContent({ personalInfo, onPersonalFieldChange, experience, onExperienceVisibilityToggle, onEducationVisibilityToggle, onExperienceFieldSave, onExperienceDelete, onEducationFieldSave, onEducationDelete, education }) {
    return (
        <div className="cv-edit-content">
            <CVPersonalInfo personalInfo={personalInfo} onPersonalFieldChange={onPersonalFieldChange} />
            <CVSection items={experience} sectionType="experience" onToggleVisibility={onExperienceVisibilityToggle} onFieldSave={onExperienceFieldSave} onDelete={onExperienceDelete} />
            <CVSection items={education} sectionType="education" onToggleVisibility={onEducationVisibilityToggle} onFieldSave={onEducationFieldSave} onDelete={onEducationDelete} />
        </div>
    )
}

export default CVEditContent;