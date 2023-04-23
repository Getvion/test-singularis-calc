import { FC } from 'react';

interface IProps {
  disabled: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  text: string;
}

export const Button: FC<IProps> = ({ disabled, onClick, text }) => (
  <button onClick={onClick} className='button' disabled={disabled}>
    {text}
  </button>
);
