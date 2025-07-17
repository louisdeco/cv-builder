import './CVPersonalInfo.css'

function CVPersonalInfo({ personalInfo, onPersonalFieldChange }) {
    return (
        <form className="cv-personal-info">
            <h2>Personal Details</h2>
            <div className="input-group">
                <label htmlFor="full-name">Full name</label>
                <input type="text" id="full-name" name="full-name" autoComplete="name" value={personalInfo.fullName} onChange={onPersonalFieldChange('fullName')}/>
            </div>
            <div className="input-group">
                <label htmlFor="email">Email</label>
                <input type="mail" id="email" name="email" autoComplete="email" value={personalInfo.email} onChange={onPersonalFieldChange('email')}/>
            </div>
            <div className="input-group">
                <label htmlFor="phone-number">Phone number</label>
                <input type="tel" id="phone-number" name="phone-number" autoComplete="tel" value={personalInfo.phone} onChange={onPersonalFieldChange('phone')}/>
            </div>
            <div className="input-group">
                <label htmlFor="address">Address</label>
                <input type="text" id="address" name="address" autoComplete="street-address" value={personalInfo.address} onChange={onPersonalFieldChange('address')}/>
            </div>

        </form>
    )
}

export default CVPersonalInfo;