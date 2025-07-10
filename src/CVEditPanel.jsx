import './CVEditPanel.css'
import CVActions from './CVActions.jsx'

function CVEditPanel({ currentMode }) {
    return (
        <div className="cv-edit-panel">
            <CVActions />
            {currentMode === 'content' && <h1>Content!</h1>}
            {currentMode === 'customize' && <h1>Customize!</h1>}
        </div>
    )
}

export default CVEditPanel;