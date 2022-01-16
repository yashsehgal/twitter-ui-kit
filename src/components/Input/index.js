import React, { useState, useEffect } from "react";
import "./input-styles.css";

export default function Input({
  type,
  placeholder,
  UIVariant,
  style,
  className,
  id,
  value,
  defaultValue,
  onChange,
}) {
  const [_uiVariant, setUIVariant] = useState("default-input");
  useEffect(() => {
    if (UIVariant === "message") {
      setUIVariant("message-input");
    }
  });
  const inputProperties = {
    type: type || "text",
    placeholder: placeholder || "",
    className: className
      ? `input ${_uiVariant} ${className}`
      : `input ${_uiVariant}`,
    id: id || "",
    onChange: onChange,
    value: value || undefined,
    style: style,
    defaultValue: defaultValue || undefined,
  };

  return (
    <>
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
    </>
  );
}
