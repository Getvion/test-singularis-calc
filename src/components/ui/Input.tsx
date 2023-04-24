import { FC } from 'react';

interface IProps {
  label: string;
  type: 'text' | 'number';
  required: boolean;
  defaultValue?: string | number;
  onChange: (e: string) => void;
}

export const Input: FC<IProps> = ({ label, type, required, defaultValue, onChange }) => (
  <label className='label' htmlFor={type}>
    {label}
    <input
      value={defaultValue}
      onChange={(e) => onChange(e.target.value)}
      className={`input ${type === 'text' ? 'long' : 'short'}`}
      required={required}
      type={type}
    />
  </label>
);
