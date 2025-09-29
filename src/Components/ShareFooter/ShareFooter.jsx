import React from 'react';
import facebookIcon from '../../../images/icon-facebook.svg';
import twitterIcon from '../../../images/icon-twitter.svg';
import pinterestIcon from '../../../images/icon-pinterest.svg';
import shareImage from '../../../images/icon-share.svg';
import './ShareFooter.css';


function ShareFooter({handleClick}) {
    return (
        <div className="share-footer">
            <h1>SHARE</h1>
            <div class="social-media-links">
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
            <button onClick={handleClick} aria-label='share this article'><img className="share-image" src={shareImage} alt="share button"/></button>  
        </div>
    )
}

export default ShareFooter;