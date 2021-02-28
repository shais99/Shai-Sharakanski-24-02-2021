import React from "react";

export const Toggler = ({ isChecked, handleChange, title }) => {
  return (
    <div className="mode-toggle">
      <label className="switch">
        <span className="toggle-title">{title}</span>
        <input type="checkbox" checked={isChecked} onChange={handleChange} />
        <span className="slider"></span>
      </label>
    </div>
  );
};
