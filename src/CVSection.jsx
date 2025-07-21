import { useState } from 'react';
import './CVSection.css'
import SectionToggleButton from './SectionToggleButton.jsx'
import ItemList from './ItemList.jsx'
import ExperienceForm from './ExperienceForm.jsx'

function CVSection({ items, iconName, name, onToggleVisibility, onExperienceFieldSave, onExperienceDelete}) {
    const [viewState, setViewState] = useState({ mode: 'collapsed', selectedItemId: null, shouldAnimate: true })
    function handleToggle() {
        setViewState(prev => ({ ...prev, mode: prev.mode === 'collapsed' ? 'list' : 'collapsed', shouldAnimate: true}))
    }
    function handleEditClick(itemId) {
        setViewState({ mode: 'add', selectedItemId: itemId, shouldAnimate: false })
    }
    function handleAddClick() {
        setViewState({ mode: 'add', selectedItemId: null, shouldAnimate: false })
    }
    function handleCloseForm() {
        setViewState({ mode: 'list', selectedItemId: null, shouldAnimate: false })
    }
    function handleSaveForm(itemState) {
        onExperienceFieldSave(itemState);
        handleCloseForm()
    }
    function handleDeleteForm(itemState) {
        onExperienceDelete(itemState);
        handleCloseForm()

    }
    function getSectionClass() {
        let classes = 'cv-section';
        if (viewState.mode === 'list') {
            classes += ' list'
        }
        if (!viewState.shouldAnimate) {
            classes += ' no-animate'
        }
        return classes;
    }
    const selectedItem = viewState.selectedItemId
        ? items.find(item => item.id === viewState.selectedItemId)
        : null;

    return (
        <div className={getSectionClass()}>
            <SectionToggleButton iconName={iconName} text={name} viewState={viewState} onClick={handleToggle} />
            {viewState.mode === 'list' && <ItemList items={items} onToggleVisibility={onToggleVisibility} onEditClick={handleEditClick} onAddClick={handleAddClick} />}
            {viewState.mode === 'add' && <ExperienceForm item={selectedItem} onSave={handleSaveForm} onClose={handleCloseForm} onDelete={handleDeleteForm} />}
        </div>
    )
}

export default CVSection;