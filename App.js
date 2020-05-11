import React from 'react';
import './App.css';
import Label from './Components/Label';
import Input from './Components/Input';

function App() {
  return (
    <div className="App">
      <Label name={'Create Account'} className="CreateAccount"></Label>
      <Label name={'Email'} className="email"/>
      <Input type={'email'} value={'Email Address...'} className="email-input"/>
      <Label name={'Full Name'} className="email"/>
      <Input value={'First Name...'} className="name-input"/>
      <Input value={'Last Name...'} className="name-input"/>
    </div>
  );
}

export default App;
