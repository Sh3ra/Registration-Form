import React, { Component } from "react";
import Label from "./Label";
import Input from "./Input";
import Button from "./Button";
import Gender from "./Gender";
import BirthDate from "./BirthDate";

class Form extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          user:{
              id:"",
              email:"",
              password:"",
              firstName:"",
              lastName:"",
              gender:"",
              birthDate:""
          },
          confirmPassword:""
        };
    }
    changeEmail = (data) => {
        this.setState(prevState =>({
            user:{
                ...prevState.user,
                email:data
            }
        }))
    }
    changePassword = (data) => {
        this.setState(prevState =>({
            user:{
                ...prevState.user,
                password:data
            }
        }))
    }
    changeFirstName = (data) => {
        this.setState(prevState =>({
            user:{
                ...prevState.user,
                firstName:data
            }
        }))
    }
    changeLastName = (data) => {
        this.setState(prevState =>({
            user:{
                ...prevState.user,
                lastName:data
            }
        }))
    }
    changeGender= (data) => {
        this.setState(prevState =>({
            user:{
                ...prevState.user,
                gender:data
            }
        }))
    }
    changeBirthDate= (data) => {
        this.setState(prevState =>({
            user:{
                ...prevState.user,
                birthDate:data
            }
        }))
    }
    changeConfirmPassword = (data) => {
        this.setState(prevState =>({
            confirmPassword:data
        }))
    }
    handleSubmit =(event)=>{
        event.preventDefault();
        let user=this.state.user;
        if(!(this.state.confirmPassword===user.password))
        {
            alert(`Passwords don't match!`);
        }
        else if(user.password.length<8)
            alert(`Password Must be more than 8 characters!`)
        else if(user.email==="")
            alert(`You Must Enter Your Email`);
        else{
            let iD=user.email.substr(0,2);
            iD+=Math.floor(Math.random() * 10);  
            iD+=Math.floor(Math.random() * 10);  
            iD+=Math.floor(Math.random() * 10);  
            this.setState(prevState =>({
                user:{
                    ...prevState.user,
                    id:iD
                }
            }))
        }
    }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Label name={"Create Account"} className="CreateAccount" />
          <Label name={"Email"} className="email" />
          <Input
            type={"email"}
            value={"Email Address..."}
            className="email-input"
            onchange={this.changeEmail}
          />
          <Label name={"Full Name"} className="email" />
          <Input value={"First Name..."} className="name-input"  onchange={this.changeFirstName}/>
          <Input value={"Last Name..."} className="name2-input" onchange={this.changeLastName}/>
          <Label name={"Password"} className="email" />
          <Input
            type={"password"}
            value={"Password..."}
            className="name-input"
            onchange={this.changePassword}
          />
          <Input
            type={"password"}
            value={"Confirm Password..."}
            className="name2-input"
            onchange={this.changeConfirmPassword}
          />
          <div className="GenderLeft">
            <Label name={"Gender"} className="email" />
            <Gender className="Gender" onchange={this.changeGender}/>
          </div>
          <div className="BirthRight">
            <Label name={"Birth Date"} className="email" />
            <BirthDate className="Gender" onchange={this.changeBirthDate} />
          </div>
          <Button value={"email"} type={"submit"} className="signUpButton" />
        </form>
      </div>
    );
  }
}

export default Form;
