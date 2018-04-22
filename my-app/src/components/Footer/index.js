import React, { Component } from 'react';
import './style.css'

class Footer extends Component {
    
    render() {
        return (
            <div className="footer" id="contato">
                <div className="contact">
                    <h4>Quer entrar em contato comigo?</h4>
                </div>

                <div className="socialmedia">
                    <a href="mailto:guterres@gmail.com" target="_top" rel="noopener noreferrer">
                        <i class="fa fa-envelope"></i>
                    </a>
                    <a href="https://www.facebook.com/flaviaguterres" target="_blank" rel="noopener noreferrer">
                        <i class="fa fa-facebook-f"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/fguterres/" target="_blank" rel="noopener noreferrer">
                        <i class="fa fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/flaviaguterres" target="_blank" rel="noopener noreferrer">
                        <i class="fa fa-github"></i>
                    </a>
                </div>

                <div className="copyright">
                    <p>Copyright &copy; 2018 Flávia Guterres</p>
                </div>
            </div>
        );
    }
}

export default Footer;