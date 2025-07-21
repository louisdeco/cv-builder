import './SectionToggleButton.css'

function SectionToggleButton({ iconName, text, viewState, onClick}) {
    const getChevronClass = () => `material-symbols-outlined ${viewState.mode === 'collapsed' ? '' : 'expand-circle-up'}`
    const getButtonClass = () => `section-toggle-button ${viewState.mode == 'collapsed' ? '' : 'list-add'}`
    
    return (
        <button className={getButtonClass()} onClick={onClick}>
            <h2>
                <span className="material-symbols-outlined">{iconName}</span>
                {text}
            </h2>
            <span className={getChevronClass()}>expand_circle_down</span>
        </button>
    )
}

export default SectionToggleButton;