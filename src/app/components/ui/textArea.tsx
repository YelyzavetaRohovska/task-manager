import React from "react";

interface ITextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: {
    text: string;
    htmlFor: string;
  };
}

export default function TextArea({
  label,
  ...props
}: ITextAreaProps) {
  return (
    <div className="flex flex-row w-full h-full">
      {
        label && <label
          htmlFor={label.htmlFor}
          className="block text-sm font-medium mr-2 text-gray-700"
        >
          {label.text}
        </label>
      }
        <textarea
        id={label?.htmlFor ?? props.id ?? undefined}
          {...props}
          className="block w-full h-full rounded-md border-0 p-4 min-h-16 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
        />
    </div>
  )
};
