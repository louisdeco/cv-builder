import './CVChangeColor.css'

function CVChangeColor({ color, onColorChange }) {
    function handleColorChange(e) {
        onColorChange(e.target.value);
    }

    return (
        <div className="cv-change-color">
            <h2>Color</h2>
            <label className="accent-color">
                Accent Color
                <input type="color" value={color} onChange={handleColorChange} />
            </label>
        </div>
    )
}

export default CVChangeColor;