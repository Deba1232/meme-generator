import React from "react"

import './Header.css'
import image from'../../images/troll-face.png'

function Header(){
    return (
      <header className="header">
        <img src={image}alt="troll-face" />
        <h2>Meme Generator</h2>
      </header>
    
    );
}

export default Header