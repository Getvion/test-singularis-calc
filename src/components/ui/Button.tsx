interface IProps {
  disabled: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  text: string;
}

export const Button: React.FC<IProps> = ({ disabled, onClick, text }) => {
  return (
    <button onClick={onClick} className='button' disabled={disabled}>
      {text}
    </button>
  );
};
