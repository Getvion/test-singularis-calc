interface IProps {
  label: string;
  type: 'text' | 'number';
  required: boolean;
  defaultValue?: string | number;
  onChange: (e: string) => void;
}

export const Input: React.FC<IProps> = ({ label, type, required, defaultValue, onChange }) => {
  const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);

    onchange(e.target.value);
  };

  return (
    <label className='label' htmlFor={type}>
      {label}
      <input
        value={defaultValue}
        onChange={onValueChange}
        className={`input ${type === 'text' ? 'long' : 'short'}`}
        required={required}
        type={type}
      />
      {/* {errorText && <p className={classes.error}>{errorText}</p>} */}
    </label>
  );
};
