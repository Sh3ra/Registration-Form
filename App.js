import React from 'react';
import './App.css';
import Label from './Components/Label';
import Input from './Components/Input';
import Button from "./Components/Button";
import Gender from "./Components/Gender";
import BirthDate from "./Components/BirthDate";

function App() {
    return (
        <div className="App">
            <Label name={'Create Account'} className="CreateAccount"/>
            <Label name={'Email'} className="email"/>
            <Input type={'email'} value={'Email Address...'} className="email-input"/>
            <Label name={'Full Name'} className="email"/>
            <Input value={'First Name...'} className="name-input"/>
            <Input value={'Last Name...'} className="name2-input"/>
            <Label name={'Password'} className="email"/>
            <Input type={'password'} value={'Password...'} className="name-input"/>
            <Input type={'password'} value={'Confirm Password...'} className="name2-input"/>
            <div class="GenderLeft">
                <Label name={'Gender'} className="email"/>
                <Gender className="Gender"/>
            </div>
            <div class="BirthRight">
                <Label name={'Birth Date'} className="email"/>
                <BirthDate className="Gender"/>
            </div>
            <Button value={'email'} className="signUpButton"/>
        </div>
    );
}

export default App;
