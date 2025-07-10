import './CVActions.css'

function CVActions() {
    return (
        <div className="cv-actions">
            <button className="action-button clear-button">
                <span className="material-symbols-outlined  clear-icon">clear</span>
                <span>Clear Resume</span>
            </button>
            <button className="action-button load-button">Load Example</button>
        </div>
    )
}

export default CVActions;