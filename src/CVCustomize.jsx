import './CVCustomize.css'
import CVChangeLayout from './CVChangeLayout.jsx'
import CVChangeColor from './CVChangeColor.jsx'

function CVCustomize({ onLayoutChange, color, onColorChange }) {
    return (
        <div className="cv-customize">
            <CVChangeLayout onLayoutChange={onLayoutChange} />
            <CVChangeColor color={color} onColorChange={onColorChange} />
        </div>
    )
}

export default CVCustomize;