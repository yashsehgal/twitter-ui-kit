import React from 'react';
import './link-style.css';

export default function DefaultLink({
    children,
    href,
    rel,
    style,
    onClick,
    className,
    id
}) {
    const defaultLinkProperties = {
        'children': children,
        'href': (href) ? href : '#',
        'id': (id) ? id : '',
        'className': (className) ? `default-link ${className}` : 'default-link',
        'style': style,
        'onClick': onClick,
        'rel': (rel) ? rel : 'noreferrer'
    };

    return (
        <React.Fragment>
            <a href={defaultLinkProperties.href}
                className={defaultLinkProperties.className}
                id={defaultLinkProperties.id}
                onClick={defaultLinkProperties.onClick}
                style={defaultLinkProperties.style}
                rel={defaultLinkProperties.rel}
            >
                {defaultLinkProperties.children}
            </a>
        </React.Fragment>
    )
}
