import { useState } from 'react';
import './App.css';
import Header from './Header';
import Nav from './Nav';
import Reasult from './Reasult';
import requists from './requists'


function App() {
  const [option,setoption]=useState(requists.fetchTrending)
  return (
    <div className="app">
      <Header/>
      <Nav setoption={setoption} />
      <Reasult option={option}/>
    </div>
  );
}

export default App;
