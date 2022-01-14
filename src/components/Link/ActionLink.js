import React from 'react';
import './link-style.css';

export default function ActionLink({
    children,
    href,
    rel,
    style,
    onClick,
    className,
    id
}) {
    const actionLinkProperties = {
        'children': children,
        'href': (href) ? href : '#',
        'id': (id) ? id : '',
        'className': (className) ? `action-link ${className}` : 'action-link',
        'style': style,
        'onClick': onClick,
        'rel': (rel) ? rel : 'noreferrer'
    };

    return (
        <React.Fragment>
            <a href={actionLinkProperties.href}
                className={actionLinkProperties.className}
                id={actionLinkProperties.id}
                onClick={actionLinkProperties.onClick}
                style={actionLinkProperties.style}
                rel={actionLinkProperties.rel}
            >
                {actionLinkProperties.children}
            </a>
        </React.Fragment>
    )
}
