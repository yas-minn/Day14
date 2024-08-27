import React from 'react';
import './Navbar.css'; 
import { useContext } from 'react';
import { ThemeContext } from '../../App';

function Navbar(){
    
    
    const PassedValue = useContext(ThemeContext);

    function HandleChange(event){
        var newValue;
        if (event.target.checked == true) {
            newValue = '🌙'; }
            else {
                newValue = '☀️';
            }
        PassedValue.ChangeTheme(newValue) ;
    }
   
    return (
       <nav className='navbar'>
            <div>
                <label className="logo">devfinder</label>
            </div>
            <div className="toggle-container">
                <label className="switch">
                    <input type="checkbox"  onChange={HandleChange} />
                    <span className="slider round"></span>
                </label>
                <span>{PassedValue.theme}</span>
            </div>
        </nav>
    );
};


export default Navbar;
