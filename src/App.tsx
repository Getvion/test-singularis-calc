import { Button } from './components/ui';

export const App = () => (
  <div>
    <Button onClick={() => console.log('click')} disabled={false} text='Сохранить' />
  </div>
);
