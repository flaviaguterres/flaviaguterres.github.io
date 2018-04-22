import React, { Component } from 'react';
import './style.css'
import Navbar from './Navbar';
import 'font-awesome/css/font-awesome.min.css';

class Header extends Component {
        
    render() {
        return (
            <header className='header'>
                <div className='title'>
                    <a className="logo" href="">
                        <h2>Flávia Guterres</h2>
                    </a>
                </div>
                
                <Navbar />
                
            </header>
        );
    }
}

export default Header;