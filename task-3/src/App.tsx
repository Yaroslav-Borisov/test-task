import { useState } from 'react';
import './App.css';
import CustomToggler from './components/CustomToggler';
import users from '../mocks/users.json';
import CustomList, { CustomListLayout } from './components/CustomList';

const App = (): JSX.Element => {
  const [layout, setLayout] = useState<CustomListLayout>(CustomListLayout.List);

  const togglerData = [
    { label: 'List', value: CustomListLayout.List },
    { label: 'Tiles', value: CustomListLayout.Tiles },
  ];

  return (
    <>
      <CustomToggler value={layout} data={togglerData} onChange={setLayout} />
      <CustomList layout={layout} data={users} />
    </>
  );
};

export default App;
