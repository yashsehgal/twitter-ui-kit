import React from "react";
import "./input-styles.css";

export default function SearchInput({ className, id, onChange, style }) {
  const searchInputProperties = {
    className: className
      ? `input search-input ${className}`
      : "input search-input",
    id: id || "",
    onChange: onChange,
    style: style,
  };

  return (
    <>
      <input
        type="text"
        className={searchInputProperties.className}
        id={searchInputProperties.id}
        style={searchInputProperties.style}
        onChange={searchInputProperties.onChange}
        placeholder="&#x1F50E;&#xFE0E; Search Twitter"
      />
    </>
  );
}
