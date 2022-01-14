import React, { useState, useEffect } from "react";
import './input-styles.css';

export default function Input({
    type,
    placeholder,
    UIVariant,
    style,
    className,
    id,
    value,
    defaultValue,
    onChange
}) {
    const [_uiVariant, setUIVariant] = useState('default-input');
    useEffect(() => {
        if (UIVariant === 'message') {
            setUIVariant('message-input');
        }
    });
    const inputProperties = {
        'type': (type) ? type : 'text',
        'placeholder': (placeholder) ? placeholder : '',
        'className': (className) ? `input ${_uiVariant} ${className}` : `input ${_uiVariant}`,
        'id': (id) ? id : '',
        'onChange': onChange,
        'value': (value) ? value : null,
        'style': style,
        'defaultValue': (defaultValue) ? defaultValue : ''
    }

    return (
        <React.Fragment>
            <input 
                type={inputProperties.type}
                placeholder={inputProperties.placeholder}
                className={inputProperties.className}
                id={inputProperties.id}
                onChange={inputProperties.onChange}
                value={inputProperties.value}
                defaultValue={inputProperties.defaultValue}
                style={inputProperties.style}
            />
        </React.Fragment>
    )
}