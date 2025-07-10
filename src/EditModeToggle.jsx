import './EditModeToggle.css'

function EditModeToggle ({ onChange, currentMode }) {
    const getButtonClass = mode => `mode-button ${mode === currentMode ? 'highlighted' : ''}`

    return (
        <div className = "edit-mode-toggle">
            <button className={getButtonClass('content')} onClick={onChange}>
                <span className="material-symbols-outlined">assignment</span>
                <span>Content</span>
            </button>
            <button className={getButtonClass('customize')} onClick={onChange}>
                <span className="material-symbols-outlined">design_services</span>
                <span>Customize</span>
            </button>
        </div>
    )
}

export default EditModeToggle;