import React from 'react'
import Logo from './Logo.jsx'
import './NavbarLeft.css'
import Icones from "./icones.jsx";

const NavbarLeft = () => {
    return (
        <div className="NavbarLeft">

            <div className="Container">
                 <Logo/>
                <Icones />


            </div>
        </div>
    )
}
export default NavbarLeft
