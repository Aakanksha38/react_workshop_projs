import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [person, setPerson] = useState(data);
  //passing person as prop to list component ,, and in list component we can distructure 
  return (
    <main>
      <section className='container'>
        <h3>{person.length} Birthday's today</h3>
        <List people={person}></List>
        <button className='btn' onClick={()=>{setPerson([])}}> clear all</button>
      </section>
    </main>
  );
}

export default App;
