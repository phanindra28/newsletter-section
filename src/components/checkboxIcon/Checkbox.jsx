import "./Checkbox.css";

export default function Checkbox({text}) {
    return <div className={"checkbox-container"}>
        <div className="checkmark-container">
            <svg viewBox="0 0 24 24" className="checkmark-icon">
                <path d="M20 6L9 17L4 12" stroke="#6567F1" stroke-width="2" fill="none" stroke-linecap="round"
                      stroke-linejoin="round"/>
            </svg>
        </div>
        <span>{text}</span>
    </div>
}