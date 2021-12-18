import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import NinjaForm from './components/NinjaForm';
import Ninjas from './components/Ninjas';

function App() {
  const [listOfNinjas, setListOfNinjas] = useState([])


  return (
    <div className="App container">
      <h1>This is the Wall of Ninjas</h1>
      <NinjaForm listOfNinjas={listOfNinjas} setListOfNinjas={setListOfNinjas}></NinjaForm>
      <Ninjas listOfNinjas={listOfNinjas} setListOfNinjasss={setListOfNinjas}></Ninjas>
    </div>
  );
}

export default App;

