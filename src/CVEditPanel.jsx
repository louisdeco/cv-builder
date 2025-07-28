import './CVEditPanel.css'
import CVActions from './CVActions.jsx'
import CVEditContent from './CVEditContent.jsx'
import CVCustomize from './CVCustomize.jsx'

function CVEditPanel({ personalInfo, experience, education, currentMode, handlePersonalFieldChange, handleExperienceVisibilityToggle, handleEducationVisibilityToggle, handleExperienceSave, handleEducationSave, handleExperienceDelete, handleEducationDelete, onLayoutChange, color, onColorChange, font, onFontChange }) {

    return (
        <div className="cv-edit-panel">
            <CVActions />
            {currentMode === 'content' && <CVEditContent personalInfo={personalInfo} onPersonalFieldChange={handlePersonalFieldChange} experience={experience} onExperienceVisibilityToggle={handleExperienceVisibilityToggle} onEducationVisibilityToggle={handleEducationVisibilityToggle} onExperienceFieldSave={handleExperienceSave} onExperienceDelete={handleExperienceDelete} onEducationFieldSave={handleEducationSave} onEducationDelete={handleEducationDelete} education={education}/>}
            {currentMode === 'customize' && <CVCustomize onLayoutChange={onLayoutChange} color={color} onColorChange={onColorChange} font={font} onFontChange={onFontChange} />}
        </div>
    )
}

export default CVEditPanel;