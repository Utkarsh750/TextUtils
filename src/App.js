// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import React, {useState} from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light')

  const toggleMode = () => {
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#123456';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (

    <>
   <Navbar title="TextUtils" about="About" mode={mode}  toggleMode={toggleMode}/>
<div className="container my-3">
          <Textform heading="Enter text to analyse" mode={mode}/>
            <About />
</div>
          
    </>
  );
}

export default App;
