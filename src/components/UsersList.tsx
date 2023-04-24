import { FC } from 'react';
import { Users } from '../@types/user';

interface IProps {
  users: Users;
}

export const UsersList: FC<IProps> = ({ users }) => (
  <div className='users'>
    <div className='users__header'>
      <p className='table__header'>Имя</p>
      <p className='table__header'>Дата (месяц / год)</p>
      <p className='table__header'>Часов в день</p>
      <p className='table__header'>Зарплата</p>
      <p className='table__header'>Зарпалата в час</p>
    </div>

    {users.map((user) => (
      <div className='user' key={user.name}>
        <p className='user__field'>{user.name}</p>
        <p className='user__field'>
          {user.month} / {user.year}
        </p>
        <p className='user__field'>{user.hoursPerDay}</p>
        <p className='user__field'>{user.salary}</p>
        <p className='user__field'>{user.salaryPerHour}</p>
      </div>
    ))}
  </div>
);
