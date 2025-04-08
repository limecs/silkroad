import React from 'react'
import "./offers.css"
import {OffersCard }from './OffersCard'
import offersData from "./OffersData";


const Offers = () => {
    return (

        <div className='Offers'>

            {offersData.map((productsData) =>(

                <OffersCard
                id={productsData.id}
                category={productsData.category}
                icon={productsData.icon}
                image={productsData.image}
                title={productsData.title}
                price={productsData.price}
                oldprice={productsData.oldprice}
                Pourcentage={productsData.Pourcentage}
                width={productsData.width}
                countdown={productsData.countdown}
                saves={productsData.saves}

                />

                ))}
        </div>

    )
}
export default Offers;
