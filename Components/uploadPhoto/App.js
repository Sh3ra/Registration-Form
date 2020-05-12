import React from 'react';
import logo from './logo.svg';
import './App.css';
import Label from "./Components/Label";
import UploadPhoto from "./Components/UploadPhoto";

function App() {
  return (
    <div className="App">
      <Label name={"upload a photo"}/>
      <UploadPhoto/>
    </div>
  );
}

export default App;
