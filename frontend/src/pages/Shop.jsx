import React from 'react'
import NavbarUp from "../Components/NavbarUp/NavbarUp.jsx";
import NavbarLeft from "../Components/NavbarLeft/NavbarLeft";
import BelowNav from "../Components/BelowNav/BelowNav.jsx";
import Banner from "../Components/Banner/Banner.jsx";
import Offers from "../Components/offers/offers.jsx";

const Shop = () => {
    return (
        <div>
            <NavbarLeft/>
            <NavbarUp />
            <BelowNav/>
            <Banner/>
            <Offers/>

        </div>
    )
}
export default Shop
