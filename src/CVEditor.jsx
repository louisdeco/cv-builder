import { useState } from 'react'
import EditModeToggle from './EditModeToggle.jsx'
import CVEditPanel from './CVEditPanel.jsx'
import CVPreview from './CVPreview.jsx'
import { sampleCV } from './mockData.js'
import './CVEditor.css'


function CVEditor() {
    const [currentMode, setCurrentMode] = useState('content');
    // Initialization with our sample data
    const [personalInfo, setPersonalInfo] = useState(sampleCV.personalInfo);
    const [experience, setExperience] = useState(sampleCV.experience);
    const [education, setEducation] = useState(sampleCV.education);
    const [layout, setLayout] = useState('top');

    function handleLayoutChange(newLayout) {
        setLayout(newLayout);
    }

    function handleChange() {
        setCurrentMode(currentMode === 'content' ? 'customize' : 'content')
    }

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
        <div className="cv-editor">
            <EditModeToggle onChange={handleChange} currentMode={currentMode}/>
            <CVEditPanel personalInfo={personalInfo} experience={experience} education={education} currentMode={currentMode} handlePersonalFieldChange={handlePersonalFieldChange} handleExperienceVisibilityToggle={handleExperienceVisibilityToggle} handleEducationVisibilityToggle={handleEducationVisibilityToggle} handleExperienceSave={handleExperienceSave} handleEducationSave={handleEducationSave} handleExperienceDelete={handleExperienceDelete} handleEducationDelete={handleEducationDelete} onLayoutChange={handleLayoutChange} />
            <CVPreview personalInfo={personalInfo} education={education} experience={experience} layout={layout} />
        </div>
    )
}

export default CVEditor;