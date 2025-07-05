import React from "react";
import { Label } from "./label";
import { Input } from "./input";
import { cn } from "@/lib/utils";

const FilterCheckbox = ({
  htmlFor,
  className,
  value,
  name,
  label,
  checked,
  onChange,
}) => {
  return (
    <div className="mb-4 flex items-center">
      <Input
        id={htmlFor}
        name={name}
        type="checkbox"
        value={value}
        className={cn(
          `h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600`,
          className
        )}
        checked={checked}
        onChange={onChange}
      />
      <Label
        htmlFor={htmlFor}
        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {label}
      </Label>
    </div>
  );
};

export default FilterCheckbox;
