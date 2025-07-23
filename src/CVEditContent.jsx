import './CVEditContent.css'
import CVPersonalInfo from './CVPersonalInfo.jsx'
import CVSection from './CVSection.jsx'

function CVEditContent({ personalInfo, onPersonalFieldChange, experience, onExperienceVisibilityToggle, onEducationVisibilityToggle, onExperienceFieldSave, onExperienceDelete, education }) {
    return (
        <div className="cv-edit-content">
            <CVPersonalInfo personalInfo={personalInfo} onPersonalFieldChange={onPersonalFieldChange} />
            <CVSection items={experience} sectionType="experience" onToggleVisibility={onExperienceVisibilityToggle} onExperienceFieldSave={onExperienceFieldSave} onExperienceDelete={onExperienceDelete} />
            <CVSection items={education} sectionType="education" onToggleVisibility={onEducationVisibilityToggle} onExperienceFieldSave={onExperienceFieldSave} onExperienceDelete={onExperienceDelete} />
        </div>
    )
}

export default CVEditContent;