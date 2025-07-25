import './CVCustomize.css'
import CVChangeLayout from './CVChangeLayout.jsx'

function CVCustomize({ onLayoutChange }) {
    return (
        <div className="cv-customize">
            <CVChangeLayout onLayoutChange={onLayoutChange}/>
        </div>
    )
}

export default CVCustomize;