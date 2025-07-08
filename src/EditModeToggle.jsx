import './EditModeToggle.css'

function EditModeToggle () {
    return (
        <div class = "edit-mode-toggle">
            <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@500&icon_names=assignment,design_services" rel="stylesheet" />

            
            <button class="mode-button">
                <span class="material-symbols-outlined">assignment</span>
                <span>Content</span>
            </button>
            <button class="mode-button">
                <span className="material-symbols-outlined">design_services</span>
                <span>Customize</span>
            </button>
        </div>
    )
}

export default EditModeToggle;