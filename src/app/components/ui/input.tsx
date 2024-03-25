import React from "react";
import Text from "./text";
import { ETextColor, ETextSize } from "../types/styleTypes";

export interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: {
    text: string;
    htmlFor: string;
  };
}

const Input = ({ error, type = "text", label, ...props }: IInputProps) => {
  return (
    <div className="flex w-full flex-row">
      {label && (
        <label
          htmlFor={label.htmlFor}
          className="block text-sm font-medium text-gray-700"
        >
          {label.text}
        </label>
      )}
      <div className="flex w-full flex-col">
        <input
          id={label?.htmlFor ?? (props.id ?? undefined)}
          type={type}
          {...props}
          className="w-full border-b border-gray-300 bg-transparent py-2 text-lg font-semibold text-gray-900 focus:outline-none"
        />
        {error && (
          <Text size={ETextSize.Small} color={ETextColor.Danger}>
            {error}
          </Text>
        )}
      </div>
    </div>
  );
};

export default Input;
