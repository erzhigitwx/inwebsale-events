import React, { FC } from "react";
import "./toggle.css";

interface ToggleButtonProps {
  label: string,
  isToggled: boolean,
  onClick: () => void;
}

const ToggleButton: FC<ToggleButtonProps> = ({ label, onClick, isToggled }) => {
  return (
    <label className={"toggle-label"}>
      <input type="checkbox" defaultChecked={isToggled} onClick={onClick}/>
      <span/>
      <strong>{label}</strong>
    </label>
  );
};

export { ToggleButton };