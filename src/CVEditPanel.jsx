import { useState } from 'react'
import './CVEditPanel.css'
import CVActions from './CVActions.jsx'
import CVEditContent from './CVEditContent.jsx'
import { sampleCV } from './mockData.js'

function CVEditPanel({ currentMode }) {
    // Initialization with our sample data
    const [personalInfo, setPersonalInfo] = useState(sampleCV.personalInfo);
    const [experience, setExperience] = useState(sampleCV.experience);
    const [education, setEducation] = useState(sampleCV.education);

    function handlePersonalFieldChange(fieldName) {
        return (e) => {
            setPersonalInfo({...personalInfo, [fieldName]: e.target.value})
        }
    }

    function createVisibilityToggleHandler(items, setItem) {
        return (itemId) => {
            setItem(items.map(item =>
                item.id === itemId ? { ...item, isVisible: !item.isVisible} : item
            ))
        }
    }
    const handleExperienceVisibilityToggle = createVisibilityToggleHandler(experience, setExperience);
    const handleEducationVisibilityToggle = createVisibilityToggleHandler(education, setEducation);

    function createSaveHandler(items, setItems) {
        return (itemState) => {
            if (items.find(item => item.id === itemState.id)) {
                setItems(items.map(item =>
                    item.id === itemState.id ? itemState : item
                ))
            } else {
                const newId = Math.max(...experience.map(item => item.id), 0) + 1;
                const newItem = { ...itemState, id: newId, isVisible:true };
                setItems([...items, newItem]);

            }
        }
    }

    const handleExperienceSave = createSaveHandler(experience, setExperience);
    const handleEducationSave = createSaveHandler(education, setEducation);

    function createDeleteHandler(items, setItems) {
        return (itemState) => {
            if (itemState.id) {
                setItems(items.filter(item => item.id !== itemState.id))
            }
        }
    }

    const handleExperienceDelete = createDeleteHandler(experience, setExperience);
    const handleEducationDelete = createDeleteHandler(education, setEducation);

    return (
        <div className="cv-edit-panel">
            <CVActions />
            {currentMode === 'content' && <CVEditContent personalInfo={personalInfo} onPersonalFieldChange={handlePersonalFieldChange} experience={experience} onExperienceVisibilityToggle={handleExperienceVisibilityToggle} onEducationVisibilityToggle={handleEducationVisibilityToggle} onExperienceFieldSave={handleExperienceSave} onExperienceDelete={handleExperienceDelete} onEducationFieldSave={handleEducationSave} onEducationDelete={handleEducationDelete} education={education}/>}
            {currentMode === 'customize' && <h1>Customize!</h1>}
        </div>
    )
}

export default CVEditPanel;