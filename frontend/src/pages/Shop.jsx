import React from 'react'
import NavbarUp from "../Components/NavbarUp/NavbarUp.jsx";
import NavbarLeft from "../Components/NavbarLeft/NavbarLeft";
import BelowNav from "../Components/BelowNav/BelowNav.jsx";
import Banner from "../Components/Banner/Banner.jsx";
import Offers from "../Components/Offers/Offers.jsx";




const Shop = () => {
    return (
        <div>
            <NavbarLeft style={{zIndex: '1 !important'}}/>
            <NavbarUp />
            <BelowNav/>
            <Banner/>
            <Offers/>





        </div>
    )
}
export default Shop;
