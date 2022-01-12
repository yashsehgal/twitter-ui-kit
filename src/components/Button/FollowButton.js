import './button-styles.css';

export default function FollowButton({children, id, className, onChange, onMouseEnter, onMouseLeave, style}) {
    const buttonProperties = {
        'children': children,
        'id': id,
        'className': className,
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