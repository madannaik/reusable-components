import * as CSS from "csstype";
export type ButtonProps = {
  variant?: "text" | "outline"|"default";
  disableShadow?: boolean;
  disabled?: boolean;
  startIcons?: JSX.Element;
  endIcon?: JSX.Element;
  size?: "sm" | "md" | "lg";
  color?: "default"|"primary" | "secondary" | "danger";
  _hover?: CSS.PropertiesHyphen;
  _focus?: CSS.PropertiesHyphen;
  children?: string;
  onClick?:Function;
};

