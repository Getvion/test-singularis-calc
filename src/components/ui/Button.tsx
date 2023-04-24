import { FC } from 'react';

interface IProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  text: string;
}

export const Button: FC<IProps> = ({ onClick, text }) => (
  <button onClick={onClick} className='button'>
    {text}
  </button>
);
