import { useEffect, useState } from "react";
import "./button-styles.css";

export default function Button({
  children,
  id,
  className,
  onClick,
  onMouseEnter,
  onMouseLeave,
  style,
  type,
  size,
}) {
  const [buttonTypeRef, setButtonType] = useState("primary-btn");
  const [buttonSizeRef, setButtonSize] = useState("default-btn");

  useEffect(() => {
    // validating button-type
    if (type === "solid") {
      setButtonType("solid-btn");
    } else if (type === "secondary") {
      setButtonType("secondary-btn");
    } else if (type === "solid-secondary") {
      setButtonType("solid-secondary-btn");
    } else {
      setButtonType("primary-btn");
    }
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
    children: children,
    id: id || "",
    className: className
      ? `${buttonTypeRef} ${buttonSizeRef} ${className}`
      : `${buttonTypeRef} ${buttonSizeRef}`,
    onClick: onClick,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    style: style,
  };
  return (
    <button
      id={buttonProperties.id}
      className={buttonProperties.className}
      onClick={buttonProperties.onClick}
      onMouseEnter={buttonProperties.onMouseEnter}
      onMouseLeave={buttonProperties.onMouseLeave}
      style={buttonProperties.style}
    >
      {buttonProperties.children}
    </button>
  );
}
