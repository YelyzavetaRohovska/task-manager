import * as React from "react";
import { type EColorBg, ETextColor, ETextSize } from "../types/styleTypes";

interface ITextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  size?: ETextSize;
  color?: ETextColor;
  bg?: EColorBg
}

// const defaultStyles = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";

export default function Text({
  children,
  size = ETextSize.Default,
  color = ETextColor.Default,
  bg,
  ...props }: ITextProps) {
  return (
    <p
      className={`leading-6 font-normal p-2 ${size} ${color} ${bg ?? ""}`}
      {...props}
    >
      {children}
    </p>
  );
}
