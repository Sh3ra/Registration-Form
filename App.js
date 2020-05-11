import React from 'react';
import './App.css';
import Label from './Components/Label';
import Input from './Components/Input';
import Button from "./Components/Button";

function App() {
  return (
    <div className="App">
      <Label name={'Create Account'} className="CreateAccount"></Label>
      <Label name={'Email'} className="email"/>
      <Input type={'email'} value={'Email Address...'} className="email-input"/>
      <Label name={'Full Name'} className="email"/>
<<<<<<< HEAD
      <Input value={'First Name...'} className="name-input"/>
      <Input value={'Last Name...'} className="name-input"/>
=======
      <Button className="signUpButton"/>
>>>>>>> d13c96905ef2ee590811e8b4677ae3fc04b0d565
    </div>
  );
}

export default App;
