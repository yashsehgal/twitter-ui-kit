import React, { useEffect, useState } from "react";
import './who-to-follow-styles.css';

export default function WhoToFollow({
    className,
    id,
    style,
    suggestedUsers
}) {
    const [suggestedUsersListRef, setSuggestedUsersList] = useState(suggestedUsers);
    useEffect(() => {
        if (suggestedUsersListRef === null || suggestedUsersListRef === undefined) {
            setSuggestedUsersList([]);
        }
    });
    const whoToFollowProperties = {
        'className': (className) ? `who-to-follow-container ${className}` : `who-to-follow-container`,
        'id': (id) ? id : '',
        'style': style
    };

    return (
        <React.Fragment>
            <div 
                className={whoToFollowProperties.className}
                id={whoToFollowProperties.id}
                style={whoToFollowProperties.style}
            >
                <h3>Who To Follow</h3>
                <div className="suggested-users-follow_action-wrapper">
                    {suggestedUsersListRef.map((suggestedUser, index) => {
                        return (
                            <React.Fragment key={index} >
                                <div className="suggested-user-block">
                                    <div className="suggested-user-profile-photo-wrapper">
                                        <img src={suggestedUser.profile_image} 
                                            alt={`profile ${suggestedUser.username}`}
                                            className="suggested-user-profile-photo"
                                        />
                                    </div>
                                </div>
                            </React.Fragment>
                        )
                    })}
                </div>
            </div>
        </React.Fragment>
    )
}