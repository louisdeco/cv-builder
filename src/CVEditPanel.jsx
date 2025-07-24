import './CVEditPanel.css'
import CVActions from './CVActions.jsx'
import CVEditContent from './CVEditContent.jsx'

function CVEditPanel({ personalInfo, experience, education, currentMode, handlePersonalFieldChange, handleExperienceVisibilityToggle, handleEducationVisibilityToggle, handleExperienceSave, handleEducationSave, handleExperienceDelete, handleEducationDelete }) {

    return (
        <div className="cv-edit-panel">
            <CVActions />
            {currentMode === 'content' && <CVEditContent personalInfo={personalInfo} onPersonalFieldChange={handlePersonalFieldChange} experience={experience} onExperienceVisibilityToggle={handleExperienceVisibilityToggle} onEducationVisibilityToggle={handleEducationVisibilityToggle} onExperienceFieldSave={handleExperienceSave} onExperienceDelete={handleExperienceDelete} onEducationFieldSave={handleEducationSave} onEducationDelete={handleEducationDelete} education={education}/>}
            {currentMode === 'customize' && <h1>Customize!</h1>}
        </div>
    )
}

export default CVEditPanel;