import Button from './component/Button';

const App = () => (
  <div className='m-10 font-sans'>
    <Button />
    <Button variant='outline' />
    <Button variant='text' />
    <Button disableShadow />
    <Button disabled />
    <div className='flex'>
      <Button size='sm' />
      <Button size='md' />
      <Button size='lg' />
    </div>
    <div className='flex'>
      <Button color='default' />
      <Button color='primary' />
      <Button color='secondary' />
      <Button color='danger' />
    </div>
  </div>
);

export default App;
