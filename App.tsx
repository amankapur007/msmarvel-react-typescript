import * as React from 'react';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import './style.css';

export default function App() {
  const persons = [
    {
      first: 'bruce',
      last: 'Wayne',
    },
    {
      first: 'Diana',
      last: 'Princess',
    },
  ];
  return (
    <div>
      <Greet name="coder" messageCount={20} isLogedIn={true} />
      <Person firstName="Bruce" lastName="Wayne" />
      <PersonList names={persons} />
    </div>
  );
}
