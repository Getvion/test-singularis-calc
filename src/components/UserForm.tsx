import { Dispatch, FC, SetStateAction, useState } from 'react';

import { IUser, Users } from '../@types/interface';

import { Button, DatePicker, Input } from './ui';

interface IProps {
  users: Users;
  setUsers: Dispatch<SetStateAction<Users>>;
}

export const UserForm: FC<IProps> = ({ users, setUsers }) => {
  const thisMonth = new Date().getMonth();
  const thisYear = new Date().getFullYear();

  const [userData, setUserData] = useState<IUser>({
    name: '',
    hoursPerDay: 8,
    month: thisMonth,
    salary: 0,
    year: thisYear
  });

  const onFormSubmit = () => {
    setUsers([...users, userData]);
  };

  return (
    <form className='form' onSubmit={onFormSubmit}>
      <Input
        onChange={(value: string) => setUserData({ ...userData, name: value })}
        label='Имя'
        type='text'
        required
      />
      <Input
        onChange={(value: string) => setUserData({ ...userData, salary: Number(value) })}
        label='Зарплата'
        type='number'
        required
      />
      <Input
        onChange={(value: string) => setUserData({ ...userData, hoursPerDay: Number(value) })}
        label='Часов в день'
        type='number'
        required
      />

      <DatePicker data={userData} setData={setUserData} />

      <Button onClick={() => onFormSubmit()} text='Сохранить' disabled />
    </form>
  );
};
