import { Dispatch, FC, SetStateAction, useState } from 'react';

import Select from 'react-select';
import { Input } from './Input';
import { IUser } from '../../@types/interface';

interface IProps {
  data: IUser;
  setData: Dispatch<SetStateAction<IUser>>;
}

export const DatePicker: FC<IProps> = ({ data, setData }) => {
  const monthes = [
    { label: 'Январь', value: 1 },
    { label: 'Февраль', value: 2 },
    { label: 'Март', value: 3 },
    { label: 'Апрель', value: 4 },
    { label: 'Май', value: 5 },
    { label: 'Июнь', value: 6 },
    { label: 'Июль', value: 7 },
    { label: 'Август', value: 8 },
    { label: 'Сентябрь', value: 9 },
    { label: 'Октябрь', value: 10 },
    { label: 'Ноябрь', value: 11 },
    { label: 'Декабрь', value: 12 }
  ];

  const thisMonth = new Date().getMonth();
  const [selectedMonth, setSelectedMonth] = useState(monthes[thisMonth]);

  return (
    <div className='form__date-picker'>
      <Input
        label='Год'
        type='number'
        required={false}
        onChange={(value) => setData({ ...data, year: Number(value) })}
      />
      <Select
        defaultValue={selectedMonth}
        onChange={(data) => (data ? setSelectedMonth(data) : null)}
        options={monthes}
      />
    </div>
  );
};
