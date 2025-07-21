import { useState } from 'react';
import './ExperienceForm.css'

function ExperienceForm( { item, onSave, onClose, onDelete } ) {
    const [itemState, setItemState] = useState(item ? item : null)
    function handleExperienceFieldChange(fieldName) {
        return (e) => {
            setItemState({...itemState, [fieldName]: e.target.value})
        }
    }
    function handleSave(e) {
        e.preventDefault();
        onSave(itemState);
    }

    return (
        <form className="experience-form">
            <div className="input-group">
                <label htmlFor="company-name">Company name</label>
                <input type="text" id="company-name" name="company-name" defaultValue={itemState?.company || ''} onChange={handleExperienceFieldChange('company')} />
            </div>
            <div className="input-group">
                <label htmlFor="position-title">Position title</label>
                <input type="text" id="position-title" name="position-title" value={itemState?.position || ''} onChange={handleExperienceFieldChange('position')} />
            </div>
            <div className="input-group">
                <label htmlFor="start-date">Start date</label>
                <input type="text" id="start-date" name="start-date" value={itemState?.startDate || ''} onChange={handleExperienceFieldChange('startDate')} />
            </div>
            <div className="input-group">
                <label htmlFor="end-date">End date</label>
                <input type="text" id="end-date" name="end-date" value={itemState?.endDate || ''} onChange={handleExperienceFieldChange('endDate')} />
            </div>
            <div className="input-group">
                <label htmlFor="location">Location</label>
                <input type="text" id="location" name="location" value={itemState?.location || ''} onChange={handleExperienceFieldChange('location')} />
            </div>
            <div className="input-group">
                <label htmlFor="description">Description</label>
                <textarea type="text" id="description" name="description" value={itemState?.description || ''} onChange={handleExperienceFieldChange('description')} />
            </div>
            <div className="buttons">
                <button className="delete" onClick={() => onDelete(itemState)}>
                    <span className="material-symbols-outlined" type="button" >delete</span>
                    <span>Delete</span>
                </button>
                <div className="buttons-main">
                    <button className="cancel" type="button" onClick={onClose}>Cancel</button>
                    <button className="save" onClick={handleSave}>Save</button>
                </div>
            </div>
        </form>
    )
}

export default ExperienceForm;