import React from 'react'
import './Navbar.css'
import { CiMenuBurger } from 'react-icons/ci'

function Navbar() {
  const menuHamburger = document.querySelector(".burger")
  const navLinks = document.querySelector(".navbar")

  const menuToggle = () => {
    navLinks.classList.toggle('mobile-menu')
  }

  return (
    <div>  
<header>
    <div className="logo"><a href=""><strong>LogoOfBrand</strong></a></div>
        <div className="burger" onClick={menuToggle}><i className="ri-menu-line icon"><CiMenuBurger /></i></div>
        <nav className="navbar">
            <ul className="icons">
                <a href="">
                    <li><i className="ri-account-circle-line icon" title="Account"></i></li>
                </a>
                <a href="">
                    <li><i className="ri-shopping-basket-line icon" title="Shopping"></i></li>
                </a>
            </ul>
            <ul className="links">
                <a href="">
                    <li>About</li>
                </a>
                <a href="">
                    <li>Contact</li>
                </a>
            </ul>
        </nav>
    </header>


    </div>
  )
}

export default Navbar