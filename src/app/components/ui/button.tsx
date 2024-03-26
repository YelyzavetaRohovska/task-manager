"use client"

import * as React from "react";
import { EColorBg } from "../types/styleTypes";
import Text from "./text";

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  disabledText?: string;
  btnStyle?: EColorBg;
  children: React.ReactNode;
}

const defaultStyles = "text-sm text-white py-2 px-4 rounded disabled:opacity-70 disabled:pointer-events-none";

const colorBg = Object.freeze({
  [EColorBg.Default]: "bg-gray-300 hover:bg-gray-400",
  [EColorBg.Danger] : "bg-red-600 hover:bg-red-700",
  [EColorBg.Primary]: "bg-blue-600 hover:bg-blue-700",
  [EColorBg.Warning]: "bg-yellow-600 hover:bg-yellow-700",
  [EColorBg.Success]: "bg-green-600 hover:bg-green-700",
});

export default function Button({
  disabled,
  disabledText,
  className,
  btnStyle = EColorBg.Primary,
  children,
  ...props
}: IButtonProps) {
  return (
    <div className={`${className} ${disabled ? "cursor-not-allowed" : ""}`}>
      <button
        disabled={disabled}
        className={`${defaultStyles} ${colorBg[btnStyle]}`}
        {...props}
    >
      {children}
    </button>
       {disabled && disabledText && <Text>{disabledText}</Text>}
    </div>
  );
}
