import './CVHeader.css'

function CVHeader({ personalInfo }) {
    return (
        <div className="cv-header">
            <h1 className="full-name">{personalInfo.fullName}</h1>
            <address className="details-wrapper">
                <div className="information-wrapper">
                    {personalInfo.email && <span className="material-symbols-outlined">mail</span>}
                    <p>{personalInfo.email}</p>
                </div>
                <div className="information-wrapper">
                    {personalInfo.phone && <span className="material-symbols-outlined">call</span>}
                    <p>{personalInfo.phone}</p>
                </div>
                <div className="information-wrapper">
                    {personalInfo.address && <span className="material-symbols-outlined">location_on</span>}
                    <p>{personalInfo.address}</p>
                </div>
            </address>
        </div>
    )
}

export default CVHeader;