import React from 'react';
import "./Header.css";
import Button from '../UI/button/Button';
import "../UI/button/Button.css";
import { BsMouse } from "react-icons/bs";

const Header = () => {
  return (
    <section id='header'>
        <div className="container header">
          <div className="header-left">
            <h1>
              <span>Welcome to the</span>
              <span></span>
              <span> <i>FarmCare...</i></span>
            </h1>
            <p>
            Our purpose is to prevent or reduce newly arise crop diseases before it become huge disaster to the fields.
            The farmers can ready to them and protect their yeild by new crop diseases.
            </p>
            <div className="header-cta">  
            <Button text = {"Sign Up"} btnClass ={"btn-dark"} href={"../login/Login.jsx"}/>
            
          </div>
          </div>
          
          <div className='header-right'>
           
          </div>
         
        </div>
        <div className='floating-icon'>
          <a href='#features'>
            <BsMouse color='green' size={25} className ="mouse"/>

          </a>
        </div>
    </section>
  );
};

export default Header;