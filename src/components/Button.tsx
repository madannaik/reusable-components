import React from "react";
import { ButtonProps } from "../constants/_types";

export const Button: React.FC<ButtonProps> = ({
  color,
  disableShadow,
  disabled,
  endIcon,
  size,
  startIcons,
  variant,
  children
}) => {
  const prefix = "btn-";
  const classname =
    prefix +
    variant +
    " " +
    prefix +
    color +
    `${disableShadow ? " btn-disableshadow " : ""}` +
    " " +
    prefix +
    size;
  return (
    <button disabled={disabled} className={"btn " + classname}>
      {startIcons}
      {children}
      {endIcon}
    </button>
  );
};
Button.defaultProps = {
  disableShadow: false,
  disabled: false,
  size: "sm",
  onClick: () => {},
};
