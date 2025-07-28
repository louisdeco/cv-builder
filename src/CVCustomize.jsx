import './CVCustomize.css'
import CVChangeLayout from './CVChangeLayout.jsx'
import CVChangeColor from './CVChangeColor.jsx'
import CVChangeFont from './CVChangeFont.jsx'

function CVCustomize({ onLayoutChange, color, onColorChange, font, onFontChange }) {
    return (
        <div className="cv-customize">
            <CVChangeLayout onLayoutChange={onLayoutChange} />
            <CVChangeColor color={color} onColorChange={onColorChange} />
            <CVChangeFont font={font} onFontChange={onFontChange} />
        </div>
    )
}

export default CVCustomize;