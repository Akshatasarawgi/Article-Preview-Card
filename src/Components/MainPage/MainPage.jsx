import React, {useState, useEffect} from 'react';
import './MainPage.css';
import mainImage from '../../../images/drawers.jpg';
import writerImage from '../../../images/avatar-michelle.jpg';
import shareImage from '../../../images/icon-share.svg';
import Modal from '../Modal/Modal';
import ShareFooter from '../ShareFooter/ShareFooter';

function MainPage() {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize)

        return() => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (screenWidth >= 860) {
            setIsFooter(false);
        } else {
            setIsModal(false);
        }
    }, [screenWidth]);


    const [isModal, setIsModal] = useState(false);
    const [isFooter, setIsFooter] = useState(false);

    const handleClick = () => {
        screenWidth < 860 ? setIsFooter(!isFooter) : setIsModal(!isModal)
    }

    return (
        <main>
            <img src={mainImage} alt="Main Page image of furniture" className="card-image"/>
        
            <section id="info-card">
                <div className="card-details">
                    <h1>
                        Shift the overall look and feel by adding these 
                        wonderful touches to furniture in your home
                    </h1>
                    <p> 
                        Ever been in a room and felt like something was missing? 
                        Perhaps it felt slightly bare and uninviting. I've
                        got some simple tips to help you make any room feel complete.
                    </p> 
                </div>
                {isModal ? <Modal /> : null}

                {isFooter ? <ShareFooter handleClick={handleClick}/> : <div className="writer-details"> 
                    <div>
                        <img src={writerImage} alt="image of writer"/>
                        <div>
                            <h2>Michelle Appleton</h2>
                            <h3>28 Jun 2020</h3>
                        </div>    
                    </div>
                    <div>
                        <button onClick={handleClick} aria-label="share this article"><img className="share-image" src={shareImage} alt="share button"/></button>
                    </div>
                </div>}
              
               
            </section>
        </main>
    )
}

export default MainPage;