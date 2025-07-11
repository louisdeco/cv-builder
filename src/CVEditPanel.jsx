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

    return (
        <div className="cv-edit-panel">
            <CVActions />
            {currentMode === 'content' && <CVEditContent personalInfo={personalInfo} onPersonalFieldChange={handlePersonalFieldChange}/>}
            {currentMode === 'customize' && <h1>Customize!</h1>}
        </div>
    )
}

export default CVEditPanel;