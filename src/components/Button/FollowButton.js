import "./button-styles.css";
import React, { useEffect, useState } from "react";
import ReactModal from "react-modal";
import Button from ".";

ReactModal.setAppElement("#root");

export default function FollowButton({
  id,
  className,
  onChange,
  onMouseEnter,
  onMouseLeave,
  style,
  size,
  username,
}) {
  const [buttonSizeRef, setButtonSize] = useState("default-btn");
  const [followButtonContentRef, setFollowButtonContent] = useState("Follow");
  const [followButtonClassStringRef, setFollowButtonClassString] =
    useState("follow-btn");

  const [unfollowConfirmationPopupRef, setUnfollowConfirmationPopup] =
    useState(false);

  useEffect(() => {
    // validating button-sizes
    if (size === "small") {
      setButtonSize("small-btn");
    } else if (size === "large") {
      setButtonSize("large-btn");
    } else {
      setButtonSize("default-btn");
    }
  });

  const buttonProperties = {
    id: id,
    className: className
      ? `${followButtonClassStringRef} ${buttonSizeRef} ${className}`
      : `${followButtonClassStringRef} ${buttonSizeRef}`,
    onChange: onChange,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    style: style,
    username: username,
  };
  return (
    <>
      <button
        id={buttonProperties.id}
        className={buttonProperties.className}
        onClick={() => {
          if (followButtonClassStringRef === "follow-btn") {
            setFollowButtonClassString("following-btn");
            setFollowButtonContent("Following");
          } else if (followButtonClassStringRef === "unfollow-btn") {
            setUnfollowConfirmationPopup(true);
          }
        }}
        onMouseEnter={() => {
          if (followButtonClassStringRef === "following-btn") {
            setFollowButtonClassString("unfollow-btn");
            setFollowButtonContent("Unfollow");
          }
        }}
        onMouseLeave={() => {
          if (followButtonClassStringRef === "unfollow-btn") {
            setFollowButtonClassString("following-btn");
            setFollowButtonContent("Following");
          }
        }}
        style={buttonProperties.style}
      >
        {followButtonContentRef}
      </button>
      <ReactModal
        isOpen={unfollowConfirmationPopupRef}
        onRequestClose={() => setUnfollowConfirmationPopup(false)}
        style={{
          overlay: {
            background: "rgba(0, 0, 0, 0.125)",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          },
          content: {
            width: "fit-content",
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
        <h3
          style={{
            color: "var(--primary-dimmed-bg-theme)",
            margin: "0",
          }}
          className="confirmation-title-with-username"
        >
          Unfollow @{buttonProperties.username}?
        </h3>
        <p
          className="confirmation-description"
          style={{
            color: "gray",
            width: "32ch",
            fontSize: "14px",
            marginRight: "0",
            marginLeft: "0",
            marginBottom: "0",
            marginTop: "10px",
          }}
        >
          Their Tweets will no longer show up in your home timeline. You can
          still view their profile, unless their Tweets are protected.
        </p>
        <div
          className="confirmation-cta-buttons-wrapper"
          style={{
            marginTop: "1.2rem",
            display: "grid",
            gridTemplateColumns: "auto",
            gap: "0.6rem",
          }}
        >
          <Button
            type="solid"
            onClick={() => {
              setFollowButtonClassString("follow-btn");
              setFollowButtonContent("Follow");
              setUnfollowConfirmationPopup(false);
            }}
          >
            Unfollow
          </Button>
          <Button
            type="solid-secondary"
            onClick={() => {
              setUnfollowConfirmationPopup(false);
            }}
          >
            Cancel
          </Button>
        </div>
      </ReactModal>
    </>
  );
}
