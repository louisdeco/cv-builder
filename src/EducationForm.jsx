import { useState } from "react";
import './EducationForm.css'

function EducationForm({ item, onSave, onClose, onDelete }) {
    console.log(item)
    const [itemState, setItemState] = useState(item ? item: null)
    function handleEducationFieldChange(fieldName) {
        return (e) => {
            setItemState({...itemState, [fieldName]: e.target.value})
        }
    }
    function handleSave(e) {
        e.preventDefault();
        onSave(itemState);
    }
    return (
        <div className="education-form">
            <div className="input-group">
                <label htmlFor="institution">Institution</label>
                <input type="text" id="institution" name="institution" defaultValue={item?.institution} onChange={handleEducationFieldChange('institution')} />
            </div>
            <div className="input-group">
                <label htmlFor="degree">Degree</label>
                <input type="text" id="degree" name="degree" defaultValue={item?.degree} onChange={handleEducationFieldChange('degree')} />
            </div>
            <div className="input-group">
                <label htmlFor="start-date">Start date</label>
                <input type="text" id="start-date" name="start-date" defaultValue={item?.startDate} onChange={handleEducationFieldChange('startDate')} />
            </div><div className="input-group">
                <label htmlFor="end-date">End date</label>
                <input type="text" id="end-date" name="end-date" defaultValue={item?.endDate} onChange={handleEducationFieldChange('endDate')} />
            </div>
            <div className="input-group">
                <label htmlFor="location">Location</label>
                <input type="text" id="location" name="location" defaultValue={item?.location} onChange={handleEducationFieldChange('location')} />
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
        </div>
    )
}

export default EducationForm;