import React, { useEffect, useState } from "react";
import FollowButton from "../Button/FollowButton";
import DefaultLink from '../Link/index';
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
                <h3 className="who-to-follow-title">Who To Follow</h3>
                <div className="suggested-users-follow_action-wrapper">
                    {suggestedUsersListRef.map((suggestedUser, index) => {
                        return (
                            <React.Fragment key={index} >
                                <div className="suggested-user-block">
                                    <div className="suggested-user-details-wrapper">
                                        <div className="suggested-user-profile-photo-wrapper">
                                            <img src={suggestedUser.profile_image} 
                                                alt={`profile ${suggestedUser.username}`}
                                                className="suggested-user-profile-photo"
                                            />
                                        </div>
                                        <div className="suggested-user-account-details-wrapper">
                                            <h5 className="suggested-user-fullName">{suggestedUser.fullName}</h5>
                                            <p className="suggested-user-username">{suggestedUser.username}</p>
                                        </div>
                                    </div>
                                    <FollowButton 
                                        size='small'
                                        username={suggestedUser.username}
                                    />
                                </div>
                            </React.Fragment>
                        )
                    })}
                </div>
                <div className="show-more-action-wrapper">
                    <DefaultLink className="show-more-action-link">
                        Show more
                    </DefaultLink>
                </div>
            </div>
        </React.Fragment>
    )
}