import './button-styles.css';

export default function Button({children, id, className, onChange, onMouseEnter, onMouseLeave, style, type}) {
    let buttonType = "primary-btn";
    if (type === "solid") {
        buttonType = "solid-btn";
    } else if (type === "secondary") {
        buttonType = "secondary-btn"
    } else if (type === "solid-secondary") {
        buttonType = "solid-secondary-btn"
    } else {
        buttonType = "primary-btn";
    }
    const buttonProperties = {
        'children': children,
        'id': id,
        'className': (className) ? `${buttonType} ${className}` : `${buttonType}`,
        'onChange': onChange,
        'onMouseEnter': onMouseEnter,
        'onMouseLeave': onMouseLeave,
        'style': style
    };
    return (
        <button
            id={buttonProperties.id}
            className={buttonProperties.className}
            onChange={buttonProperties.onChange}
            onMouseEnter={buttonProperties.onMouseEnter}
            onMouseLeave={buttonProperties.onMouseLeave}
            style={buttonProperties.style}
        >
            {buttonProperties.children}
        </button>
    )
}