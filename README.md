# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview
This is a basic preview card that I made using React. This was a part of practicing how to render different components, 
based on screen size. 

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

### Screenshot
<img width="907" height="382" alt="Desktop" src="https://github.com/user-attachments/assets/c999ee14-610b-4d22-86e8-f2e9b958406b" />
<img width="944" height="393" alt="Desktop Active State" src="https://github.com/user-attachments/assets/e45b0fd9-cae9-4b07-b195-2a1759ac4024" />
<img width="383" height="638" alt="Mobile Active State" src="https://github.com/user-attachments/assets/8083056f-103e-4e83-9cdf-ca71b1efbb77" />

### Links

- Solution URL: https://github.com/Akshatasarawgi/Article-Preview-Card


## My process
I created the static site at first, moving onto creating Modal component and Footer component. Then created states to handle the display of modal and footer based on screen size. 

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- [React](https://reactjs.org/) - JS library

### What I learned

I learnt how to create components and create an instance of it in the parent component.

```
 {isModal ? <Modal /> : null}
```
I learnt how to use conditional rendering to render a ShareFooter component based on a condition(screen size < 860 for mobile devices). 
```
 {isFooter ? <ShareFooter handleClick={handleClick}/> : <div className="writer-details"> 
   <div>
                        <img src={writerImage} alt="image of writer"/>
                        <div>
                            <h2>Michelle Appleton</h2>
                            <h3>28 Jun 2020</h3>
                        </div>    
                    </div>
                    <div>
                        <button onClick={handleClick}><img className="share-image" src={shareImage} alt="share button"/></button>
                    </div>
                </div>}
```
I learnt how to use useEffect to get dynamic data 
```
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
```

I learnt how to use useEffect to change the state value based on certain conditions
```
 useEffect(() => {
        if (screenWidth >= 860) {
            setIsFooter(false);
        } else {
            setIsModal(false);
        }
    }, [screenWidth]);
```



