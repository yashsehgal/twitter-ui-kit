import React from "react";
import "./tag-style.css";

export default function Tag({ children, style, onClick, className, id }) {
  const tagProperties = {
    children: children,
    style: style,
    onClick: onClick,
    className: className ? `tag ${className}` : "tag",
    id: id || "",
  };
  return (
    <>
      <span
        className={tagProperties.className}
        id={tagProperties.id}
        onClick={tagProperties.onClick}
        style={tagProperties.style}
      >
        {tagProperties.children}
      </span>
    </>
  );
}
