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
    console.log(experience)

    function handlePersonalFieldChange(fieldName) {
        return (e) => {
            setPersonalInfo({...personalInfo, [fieldName]: e.target.value})
        }
    }

    function handleExperienceVisibilityToggle(itemId) {
        setExperience(experience.map(item =>
            item.id === itemId ? { ...item, isVisible: !item.isVisible} : item
        ))
    }

    function handleExperienceSave(itemState) {
        if (experience.find(item => item.id === itemState.id)) {
            setExperience(experience.map(item =>
                item.id === itemState.id ? itemState : item
            ))  
        } else {
            const newId = Math.max(...experience.map(item => item.id), 0) + 1;
            const newItem = { ...itemState, id: newId, isVisible: true };
            setExperience([... experience, newItem]);
        }

    }

    function handleExperienceDelete(itemState) {
        if (itemState.id) {
            setExperience(experience.filter(item => item.id !== itemState.id))
        }
    }

    return (
        <div className="cv-edit-panel">
            <CVActions />
            {currentMode === 'content' && <CVEditContent personalInfo={personalInfo} onPersonalFieldChange={handlePersonalFieldChange} experience={experience} onExperienceVisibilityToggle={handleExperienceVisibilityToggle} onExperienceFieldSave={handleExperienceSave} onExperienceDelete={handleExperienceDelete}/>}
            {currentMode === 'customize' && <h1>Customize!</h1>}
        </div>
    )
}

export default CVEditPanel;