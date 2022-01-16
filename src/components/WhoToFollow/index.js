import React, { useEffect, useState } from "react";
import FollowButton from "../Button/FollowButton";
import DefaultLink from "../Link/index";
import "./who-to-follow-styles.css";
import ReactModal from "react-modal";

import { FaTimes } from "react-icons/fa";

ReactModal.setAppElement("#root");

export default function WhoToFollow({
  className,
  id,
  style,
  suggestedUsers = [],
}) {
  const [suggestedUsersListRef, setSuggestedUsersList] =
    useState(suggestedUsers);
  const [suggestedUsersCompletetList, setSuggestedUserCompleteList] =
    useState(suggestedUsers);
  const [showMoreSuggestedUsersPopupRef, setShowMoreSuggestedUsersPopup] =
    useState(false);
  useEffect(() => {
    if (suggestedUsersListRef === null || suggestedUsersListRef === undefined) {
      setSuggestedUsersList([]);
      setSuggestedUserCompleteList([]);
    } else if (suggestedUsersListRef.length >= 3) {
      setSuggestedUsersList([
        suggestedUsers[0],
        suggestedUsers[1],
        suggestedUsers[2],
      ]);
    }
  }, []);
  const whoToFollowProperties = {
    className: className
      ? `who-to-follow-container ${className}`
      : "who-to-follow-container",
    id: id || "",
    style: style,
  };

  return (
    <>
      <div
        className={whoToFollowProperties.className}
        id={whoToFollowProperties.id}
        style={whoToFollowProperties.style}
      >
        <h3 className="who-to-follow-title">Who To Follow</h3>
        <div className="suggested-users-follow_action-wrapper">
          <RenderSuggestedUsers suggestedUsersList={suggestedUsersListRef} />
        </div>
        <div
          className="show-more-action-wrapper"
          onClick={() => setShowMoreSuggestedUsersPopup(true)}
        >
          <DefaultLink
            className="show-more-action-link"
            onClick={() => setShowMoreSuggestedUsersPopup(true)}
          >
            Show more
          </DefaultLink>
        </div>
      </div>
      <ReactModal
        isOpen={showMoreSuggestedUsersPopupRef}
        onRequestClose={() => setShowMoreSuggestedUsersPopup(false)}
        style={{
          overlay: {
            background: "rgba(0, 0, 0, 0.125)",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          },
          content: {
            width: "560px",
            height: "fit-content",
            marginRight: "auto",
            marginLeft: "auto",
            marginTop: "auto",
            marginBottom: "auto",
            border: "transparent",
            fontFamily:
              '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif',
            borderRadius: "16px",
            padding: "28px",
          },
        }}
      >
        <div
          className="suggested-users-popup-header-wrapper"
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <h3
            style={{
              color: "var(--primary-dimmed-bg-theme)",
              margin: "0",
            }}
            className="confirmation-title-with-username"
          >
            Suggested accounts for you to follow
          </h3>
          <FaTimes
            style={{
              color: "var(--dark-outline)",
            }}
            onClick={() => setShowMoreSuggestedUsersPopup(false)}
            className="twitter-icon"
          />
        </div>
        <div
          className="suggested-users-wrapper"
          style={{
            marginTop: "2.4rem",
          }}
        >
          <RenderSuggestedUsersModal
            suggestedUsersList={suggestedUsersListRef}
          />
        </div>
      </ReactModal>
    </>
  );
}

function RenderSuggestedUsers({ suggestedUsersList }) {
  if (suggestedUsersList === null || suggestedUsersList.length === 0) {
    return (
      <>
        <p
          style={{
            width: "360px",
            paddingRight: "0.8rem",
            paddingLeft: "0.8rem",
            textAlign: "center",
            color: "var(--input-placeholder-color)",
          }}
        >
          No suggested users right now!
        </p>
      </>
    );
  } else {
    return (
      <>
        {suggestedUsersList.map((suggestedUser, index) => {
          return (
            <React.Fragment key={index}>
              <div className="suggested-user-block">
                <div className="suggested-user-details-wrapper">
                  <div className="suggested-user-profile-photo-wrapper">
                    <img
                      src={suggestedUser.profile_image}
                      alt={`profile ${suggestedUser.username}`}
                      className="suggested-user-profile-photo"
                    />
                  </div>
                  <div className="suggested-user-account-details-wrapper">
                    <h5 className="suggested-user-fullName">
                      {suggestedUser.fullName}
                    </h5>
                    <p className="suggested-user-username">
                      @{suggestedUser.username}
                    </p>
                  </div>
                </div>
                <FollowButton size="small" username={suggestedUser.username} />
              </div>
            </React.Fragment>
          );
        })}
      </>
    );
  }
}

function RenderSuggestedUsersModal({ suggestedUsersList }) {
  if (suggestedUsersList === null || suggestedUsersList.length === 0) {
    return (
      <>
        <h3
          style={{
            width: "360px",
            paddingRight: "0.8rem",
            paddingLeft: "0.8rem",
            textAlign: "center",
            color: "var(--input-placeholder-color)",
          }}
        >
          No suggested users right now!
        </h3>
      </>
    );
  } else {
    return (
      <>
        {suggestedUsersList.map((suggestedUser, index) => {
          return (
            <React.Fragment key={index}>
              <div className="suggested-user-modal-block" />
            </React.Fragment>
          );
        })}
      </>
    );
  }
}
