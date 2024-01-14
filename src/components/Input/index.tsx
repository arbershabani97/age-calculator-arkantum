import { FC, InputHTMLAttributes } from 'react';

import './index.css';

interface InputProps extends InputHTMLAttributes<HTMLElement> {
  id: string;
  error?: string | null;
  label: string;
}

const Input: FC<InputProps> = ({ id, type, value, placeholder, error, onChange, label }) => {
  return (
    <label htmlFor={'#' + id} className={'input-box' + (error ? ' has-error' : '')}>
      <span className="input-box--label">{label}</span>
      <input
        className="input-box--input"
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />

      <span className="input-box--error">{error}</span>
    </label>
  );
};
export default Input;
