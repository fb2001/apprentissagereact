// ceci est fait a l'aide de rfce
import React from 'react'
// il faut importez le css 
import "./Nav.css"
import { useState } from 'react'
function Nav() {
    const[showLinks,setShowLinks]=useState(false)
    const handleShowlinks=()=>{
        setShowLinks(!showLinks)/*si showlinks different de false on l'edit  */
    }
  return (
    <nav  className={`navbar ${showLinks ? "show-nav":"hide-nav"}`}>
        <div className="navbarlogo">Bienvenu</div>
        <ul className="navbar_links">
            <li className="navbar__link">
                <a href="/" className="navbar__link">Accueil</a>
            </li>
            <li className="navbar__link">
                <a href="/" className="navbar__link">Portfolio</a>
            </li>
            <li className="navbar__link">
                <a href="/" className="navbar__link">Services</a>
            </li>
            <li className="navbar__link">
                <a href="/" className="navbar__link">À propos de nous</a>
            </li>
            <li className="navbar__link">
                <a href="/" className="navbar__link">Contact</a>
            </li> 
        </ul>
        <button className="navbar__burger" onClick={handleShowlinks}> </button>
        <span className="burger-bar"></span>
    </nav>
  )
}

export default Nav