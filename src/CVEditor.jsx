import { useState } from 'react'
import EditModeToggle from './EditModeToggle.jsx'
import CVEditPanel from './CVEditPanel.jsx'
import './CVEditor.css'


function CVEditor() {
    const [currentMode, setCurrentMode] = useState('content');

    function handleChange() {
        setCurrentMode(currentMode === 'content' ? 'customize' : 'content')
    }

    return (
        <div className="cv-editor">
            <EditModeToggle onChange={handleChange} currentMode={currentMode}/>
            <CVEditPanel currentMode={currentMode} />
        </div>
    )
}

export default CVEditor;