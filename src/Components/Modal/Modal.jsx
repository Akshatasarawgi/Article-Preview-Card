import React from 'react';
import facebookIcon from '../../../images/icon-facebook.svg';
import twitterIcon from '../../../images/icon-twitter.svg';
import pinterestIcon from '../../../images/icon-pinterest.svg';
import './Modal.css';

function Modal() {
    return (
        <div className="shareModal">
            <h1>SHARE</h1>
            <a 
                href="https://www.facebook.com" target="_blank">
                <img src={facebookIcon} alt="facebook link" />
            </a>
            <a 
                href="https://x.com" target="_blank">
                <img src={twitterIcon} alt="twitter link" />
            </a>
            <a 
                href="https://www.pinterest.com" target="_blank">
                <img src={pinterestIcon} alt="pinterest link" />
            </a>
        </div>
    )
}

export default Modal;