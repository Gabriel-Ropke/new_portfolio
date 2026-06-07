import "./codeWindow.css";

export default function CodeWindow({ children, onRun, isActive, className }) {
    return (
        <div className={`code-window ${isActive ? "active" : ""} ${className || ""}`}>
            <div className="window-header">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
                {onRun && (
                    <button className="run-btn" onClick={onRun}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                        Run
                    </button>
                )}
            </div>
            <pre>
                <code>
                    {children}
                </code>
            </pre>
        </div>
    );
}
