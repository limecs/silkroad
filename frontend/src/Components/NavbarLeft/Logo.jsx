import React from 'react'
import LogoImg from '../Assets/logo.png'
import  './Logo.css'


const Logo = () => {
    return (
        <div className="logo">
        <a href='/'><img className="logoImg" src={LogoImg} alt='img'/></a>
        </div>
    )
}
export default Logo;
