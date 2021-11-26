import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi } from '@fortawesome/free-solid-svg-icons'
import './NotFound.css'
const NotFound = () => {
    return (
        <div >
            <div className="error-messages">
                <h2>404! Page Not Found</h2>

                <img className="error-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmsSGYw6EYm__p7LCkcpmg0HNqL6e_xyxZ0Q&usqp=CAU" />
            </div>
            <div>
                <h4>The requested page was not found.</h4>
                <p>Please Check your interner connection  <FontAwesomeIcon icon={faWifi} /> or reload this page</p>
            </div>
        </div>

            

       

    );
};

export default NotFound;