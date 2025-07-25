import './CVChangeLayout.css'

function CVChangeLayout({ onLayoutChange }) {
    return (
        <div className="cv-change-layout">
            <h2>Layout</h2>
            <div className="buttons-layout-wrapper">
                <button className="button-layout-top" onClick={() => onLayoutChange('top')}>
                    <div className="visual top"></div>
                    <p>Top</p>
                </button>
                <button className="button-layout-right" onClick={() => onLayoutChange('right')}>
                    <div className="visual right"></div>
                    <p>Right</p>
                </button>
                <button className="button-layout-top" onClick={() => onLayoutChange('left')}>
                    <div className="visual left"></div>
                    <p>Left</p>
                </button>
            </div>
        </div>
    )
}

export default CVChangeLayout;