import { Dispatch, FC, SetStateAction, useState } from 'react';

import { IUser, Users } from '../@types/user';

import { Button, DatePicker, Input } from './ui';
import { validateUserForm } from '../utils';
import { FormSubmitType } from '../@types/ServiceTypes';

interface IProps {
  users: Users;
  setUsers: Dispatch<SetStateAction<Users>>;
}

export const UserForm: FC<IProps> = ({ users, setUsers }) => {
  const thisMonth = new Date().getMonth();
  const thisYear = new Date().getFullYear();

  const defaultUserValues = {
    name: '',
    hoursPerDay: 8,
    month: thisMonth,
    salary: 0,
    year: thisYear,
    salaryPerHour: 0
  };

  const [errorMessage, setErrorMessage] = useState('');
  const [userData, setUserData] = useState<IUser>(defaultUserValues);

  const onFormSubmit = (e: FormSubmitType) => {
    e.preventDefault();
    const isFormValid = validateUserForm(userData);

    if (!isFormValid) {
      setErrorMessage('В одном или нескольких полях неверно указаны данные, укажите верные данные');
      return;
    }

    setUsers([...users, userData]);
    setUserData(defaultUserValues);
  };

  return (
    <form className='form' onSubmit={onFormSubmit}>
      <Input
        defaultValue={userData.name}
        onChange={(value: string) => setUserData({ ...userData, name: value })}
        label='Имя'
        type='text'
        required
      />
      <Input
        defaultValue={userData.salary}
        onChange={(value: string) => setUserData({ ...userData, salary: Number(value) })}
        label='Зарплата'
        type='number'
        required
      />
      <Input
        defaultValue={userData.hoursPerDay}
        onChange={(value: string) => setUserData({ ...userData, hoursPerDay: Number(value) })}
        label='Часов в день'
        type='number'
        required
      />

      <DatePicker data={userData} setData={setUserData} />

      {errorMessage && <p className='form__error'>{errorMessage}</p>}

      <Button onClick={onFormSubmit} text='Сохранить' />
    </form>
  );
};
