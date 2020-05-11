import React from 'react';
import './App.css';
import Label from './Components/Label';

function App() {
  return (
    <div className="App">
      <Label name={'Create Account'} className="CreateAccount"></Label>
      <Label name={'Email'} className="email"/>
    </div>
  );
}

export default App;
