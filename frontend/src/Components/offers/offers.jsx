import React from 'react'
import {useState} from "react";
import './offers.css'
import { FaRegHeart } from "react-icons/fa6";
import { IoIosFlash } from "react-icons/io";
import { CiGift } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";

const Offers = () => {
    const [puted, setPuted] = useState(0);

    function handlePuted() {
        setPuted(prevPuted => prevPuted + 1);
    console.log(puted);}


    return (
        <div className="offers">

                    <h1>Best Offers</h1>
                 <div className="offers-container">
                     <div className="Recommendation">
                        <h3><FaRegHeart style={{position:'relative',top:'2px',left:'-2px'}}/>Recommondations</h3>

                         <div className="product-container">
                            <div id='productone'><FaRegHeart  style={{position:'relative',right:'-132px',width:'25px',height:'20px'}}/></div>
                             <div id='producttwo'><FaRegHeart style={{position:'relative',right:'-132px',width:'25px',height:'20px'}}/></div>
                        </div>
                         <div id='Describtion'>

                         </div>


                     </div>
                     <div className="FlashSales">
                         <h3><IoIosFlash />FlashSales</h3>
                         <div className="product-container">
                             <div id='productone'><IoIosFlash style={{position:'relative',right:'-132px',width:'25px',height:'20px'}}/></div>
                             <div id='producttwo'><IoIosFlash style={{position:'relative',right:'-132px',width:'25px',height:'20px'}}/></div>
                         </div>
                         <div id='Describtion'>


                         </div>

                     </div>
                     <div className="BigSaves">
                         <h3><CiGift style={{position:'relative',top:'2px'}}/>BigSaves</h3>
                         <div className="product-container">
                             <div id='productone'><CiGift style={{position:'relative',right:'-132px',width:'25px',height:'20px'}}/></div>
                             <div id='producttwo'><CiGift style={{position:'relative',right:'-132px',width:'25px',height:'20px'}}/></div>
                         </div>
                         <div id='Describtion'>


                         </div>

                     </div>







                 </div>


            <div className="buttons">
                <button onClick={handlePuted}> <FaPlus style={{position:'relative',top:'2px',left:'-2px'}}/> Add</button>
                <button onClick={handlePuted}> <FaPlus style={{position:'relative',top:'2px',left:'-2px'}}/> Add</button>
            </div>
            <div className="buttons2">
                <button onClick={handlePuted} > <FaPlus style={{position:'relative',top:'2px',left:'-2px'}}/> Add</button>
                <button onClick={handlePuted}> <FaPlus style={{position:'relative',top:'2px',left:'-2px'}}/> Add</button>
            </div>
            <div className="buttons3">
                <button onClick={handlePuted}> <FaPlus style={{position:'relative',top:'2px',left:'-2px'}}/> Add</button>
                <button onClick={handlePuted}> <FaPlus style={{position:'relative',top:'2px',left:'-2px'}}/> Add</button>
            </div>



        </div>
    )
}
export default Offers;
