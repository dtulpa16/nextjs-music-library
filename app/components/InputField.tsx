import React from 'react';

interface InputFieldProps {
  label: string;
  id: string;
  type?: 'text' | 'date';
  defaultValue?: string | null
}

const InputField: React.FC<InputFieldProps> = ({ label, id, type = 'text', defaultValue }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={id}
      // value={defaultValue ?  defaultValue : ""}
      defaultValue={defaultValue ?  defaultValue : ""}
      required
      className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
    />
  </div>
);
export default InputField