import React, { Component } from 'react';
import './style.css'


class Navbar extends Component {
    constructor(props) {
        super(props);
        // estado inicial do menu hamburger
        this.state = {
            isHidden: true
        }
    };

    toggleHidden() {
        // alterna o valor a cada clique
        this.setState({
            isHidden: !this.state.isHidden
        })
    }

    render() {
        return (
            <div className="navbar">
                <div className="dropdown">
                    {/* clicar no botão ativa a função de toggle */}
                    <button className="dropbtn" onClick={this.toggleHidden.bind(this)}><i className="fa fa-bars"></i></button>

                    {/* renderiza DropdownMenu */}
                    {!this.state.isHidden && <DropdownMenu />}
                </div>

                <div className="navbar-menu">
                    <ul className="navbar-menu-list">
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

const DropdownMenu = () => (
    <div className="dropdown-content">
        <a href="#sobremim">Sobre mim</a>
        <a href="#hobbies">Hobbies</a>
        <a href="#formacao">Formação</a>
        <a href="#habilidades">Habilidades</a>
        <a href="#experiencias">Experiências</a>
        <a href="#contato">Contato</a>
    </div>
)
export default Navbar;