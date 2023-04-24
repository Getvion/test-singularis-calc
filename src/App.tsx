import { useState } from 'react';

import { UserForm, UsersList } from './components';

import { Users } from './@types/user';

export const App = () => {
  const [users, setUsers] = useState<Users>([]);

  return (
    <div className='app'>
      <UserForm users={users} setUsers={setUsers} />
      <UsersList items={users} />
    </div>
  );
};
