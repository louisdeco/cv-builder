import './CVEditPanel.css'
import CVActions from './CVActions.jsx'
import CVEditContent from './CVEditContent.jsx'

function CVEditPanel({ currentMode }) {
    return (
        <div className="cv-edit-panel">
            <CVActions />
            {currentMode === 'content' && <CVEditContent/>}
            {currentMode === 'customize' && <h1>Customize!</h1>}
        </div>
    )
}

export default CVEditPanel;