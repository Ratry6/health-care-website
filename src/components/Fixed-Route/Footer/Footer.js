import Button from '@restart/ui/esm/Button';
import React from 'react';
import './Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow, faCommentMedical, faPhone, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'



const Footer = () => {
    return (
        <div className="footer--part">
            <FontAwesomeIcon icon={faCommentMedical} />
            <br />

            <input className="input-text" type="text" placeholder="Enter your E-mail Address" />
            <Button className="btn-subscribe">Subscribe</Button>
            <hr></hr>
            <div className="contact">
                <h2><FontAwesomeIcon icon={faPhone} />  Contact us 24hrs</h2>
                <p><FontAwesomeIcon icon={faLocationArrow} />  Address : Dhaka,Bangladesh</p>
                <p>Email : lifeshades@gmail.com</p>
                <span><FontAwesomeIcon icon={faPhoneAlt} />  Call us at Emergency</span>


            </div>
        </div>
    );
};

export default Footer;