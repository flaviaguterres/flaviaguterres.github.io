import React, { Component } from 'react';
import './style.css'

class Navbar extends Component {
        
    render() {
        return (
            <div className="navbar">
                {/* <div className="menu-hamburger">
                    <i className="fa fa-bars"></i>
                </div> */}
                <div className="dropdown">
                    <button className="dropbtn"><i className="fa fa-bars"></i></button>
                        <div className="dropdown-content">
                            <a href="#sobremim">Sobre mim</a>
                            <a href="#hobbies">Hobbies</a>
                            <a href="#formacao">Formação</a>
                            <a href="#habilidades">Habilidades</a>
                            <a href="#experiencias">Experiências</a>
                            <a href="#contato">Contato</a>
                        </div>
                </div>

                <div className="navbar-menu">
                    <ul class="navbar-menu-list">
                        <li className="active"><a href="#">Home</a></li>
                        <li><a href="#sobremim">Sobre mim</a></li>
                        <li><a href="#hobbies">Hobbies</a></li>
                        <li><a href="#formacao">Formação</a></li>
                        <li><a href="#habilidades">Habilidades</a></li>
                        <li><a href="#experiencias">Experiências</a></li>
                        <li><a href="#contato">Contato</a></li>
                    </ul>    
                </div>
            </div>
        );
    }
}

export default Navbar;