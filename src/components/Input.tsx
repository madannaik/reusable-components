import React from "react";
import { InputProps } from "../constants/_types";

export const Input: React.FC<InputProps> = ({
  label,
  disabled,
  endIcon,
  error,
  fullWidth,
  helperText,
  placeholder,
  row,
  size,
  startIcon,
  value,
  multiline,
}) => {
  const prefix = "int";
  const className =
    prefix +
    "__field " +
    `${error ? "error " : " "}` +
    prefix +
    `__field--${size} ${fullWidth ? "full-width" : ""}`;
  return (
    <div className="int ">
      {multiline ? (
        <textarea
          className={className}
          id="comment"
          placeholder={placeholder}
          rows={row}
          value={value}
          disabled={disabled}
        ></textarea>
      ) : (
        <>
          {startIcon && <div className="starticon">{startIcon}</div>}
          {endIcon && <div className="endicon">{endIcon}</div>}
          <input
            className={className}
            name=""
            id={label}
            placeholder={placeholder}
            disabled={disabled}
          />
        </>
      )}
      <label className="int__label" htmlFor={label}>
        {label}
      </label>
      {}
      {helperText && <p className="int__helper">{helperText}</p>}
    </div>
  );
};

Input.defaultProps = {
  multiline: false,
  row: 5,
  size: "sm",
  fullWidth: false,
  disabled: false,
};
