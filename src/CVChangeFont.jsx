import './CVChangeFont.css'

function CVChangeFont({ font, onFontChange }) {
    const fontOptions = {
        serif: '"Lusitana", serif',
        sans: '"Rubik", sans-serif',
        mono: '"Roboto Mono", monospace'
    }

    function handleFontChange(fontType) {
        onFontChange(fontOptions[fontType])
    }

    function getButtonClass(fontType) {
        return `button-${fontType} ${font === fontOptions[fontType] ? 'selected': ''}`;
    }

    return (
        <div className="cv-change-font">
            <h2>Fonts</h2>
            <div className="buttons-font-wrapper">
                <button className={getButtonClass('serif')} onClick={() => handleFontChange('serif')}>
                    <p className="typo">Aa</p>
                    <p>Serif</p>
                </button>
                <button className={getButtonClass('sans')} onClick={() => handleFontChange('sans')}>
                    <p className="typo">Aa</p>
                    <p>Sans</p>
                </button>
                <button className={getButtonClass('mono')} onClick={() => handleFontChange('mono')}>
                    <p className="typo">Aa</p>
                    <p>Mono</p>
                </button>
            </div>
        </div>
    )
}

export default CVChangeFont;