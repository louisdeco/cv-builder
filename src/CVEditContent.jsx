import CVPersonalInfo from './CVPersonalInfo.jsx'

function CVEditContent({ personalInfo, onPersonalFieldChange }) {
    return (
        <div className="cv-edit-content">
            <CVPersonalInfo personalInfo={personalInfo} onPersonalFieldChange={onPersonalFieldChange}/>
        </div>
    )
}

export default CVEditContent;