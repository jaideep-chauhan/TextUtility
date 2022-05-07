import React from 'react';
import './App.css';
import Navbar from './Navbar';
import TextForm from './Components/TextForm';


function App() {
  return (
    <>
    <Navbar title="TExtUtiles" aboutText="About"/>
    <div className='container my-3'>
    <TextForm heading="Enter The Text Analyze"/>
    </div>
    </>
   
  );
}

export default App;
