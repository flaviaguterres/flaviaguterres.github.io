import React, { Component } from 'react';
import './style.css'

class Footer extends Component {
    
render() {
    return (
        <div className="footer">
            <a href="mailto:guterres@gmail.com" target="_top">
                <i class="fa fa-envelope"></i>
            </a>
            <a href="https://www.linkedin.com/in/fguterres/" target="_blank">
                <i class="fa fa-linkedin"></i>
            </a>
            <a href="https://github.com/flaviaguterres" target="_blank">
                <i class="fa fa-github"></i>
            </a>
            <a href="https://www.facebook.com/flaviaguterres" target="_blank">
                <i class="fa fa-facebook-f"></i>
            </a>
        </div>
       
    );
}
}

export default Footer;