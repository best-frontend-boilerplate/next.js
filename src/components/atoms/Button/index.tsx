import React from "react";

type ButtonType = "primary" | "link";

export interface ButtonProps {
  children?: React.ReactNode;
  htmlType?: "button" | "submit" | "reset";
  type?: ButtonType;
  block?: boolean;
  loading?: boolean;
  disabled?: boolean;
  color?: string;
  fontSize?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
export default function Button({
  children,
  htmlType,
  loading,
  onClick,
  ...rest
}: ButtonProps) {
  return (
    <button type={htmlType} onClick={onClick}>
      {children}
    </button>
  );
}
