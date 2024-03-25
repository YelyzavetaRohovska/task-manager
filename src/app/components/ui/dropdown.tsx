import { ETextColor, ETextSize } from "../types/styleTypes";
import Text from "./text";

interface IDropdownOption {
  value: string;
  text: string;
}

interface IDropdownProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: IDropdownOption[];
  error?: string;
  label?: {
    text: string;
    htmlFor: string;
  };
}

export default function Dropdown({
  options = [],
  error,
  label,
  ...props
}: IDropdownProps) {
  return (
    <div className="flex flex-row items-center">
      {
        label && <label
          htmlFor={label.htmlFor}
          className="block text-sm font-medium leading-6 text-gray-900 mr-3"
        >
          {label.text}
        </label>
      }
      <div className="flex flex-col align-middle justify-start">
        <select
          id={label?.htmlFor ?? props.id ?? undefined}
          {...props}
          className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
            {options.map(opt => (<option key={opt.value} value={opt.value}>{opt.text}</option>))}
        </select>
        {error && <Text size={ETextSize.Small} color={ETextColor.Danger}>{error}</Text>}
      </div>
    </div>
  )
}