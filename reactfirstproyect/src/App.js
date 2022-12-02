import React, { useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/button/index'
import Sidebar from './components/button/sidebar';
import Navbar from './components/navbar';
function App() {
  const [isOpen, setOpen]= useState(false);
 const onHandlerClick =()=>{
  setOpen(!isOpen);
 }
  return (

    
    <div className="App">
      <Sidebar onClose={onHandlerClick} isOpen={isOpen}>
        <h2>Item list</h2>
      </Sidebar>
      <nav className='AllList'>
      <li className='botonlista'><Navbar text ='Item 1' onHandlerClick = {onHandlerClick}/></li>
        <li className='botonlista'><Navbar text ='Item 2' onHandlerClick = {onHandlerClick}/></li>
        <li className='botonlista'><Navbar text ='Item 3' onHandlerClick = {onHandlerClick}/></li>
        <li className='botonlista'><Navbar text ='Item 4' onHandlerClick = {onHandlerClick}/></li>
      </nav>
      <header className="App-header">
      

        
      
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       <Button text='Clickeame' onHandlerClick ={onHandlerClick}/>
      
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
