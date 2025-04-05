import React from 'react'
import './offers.css'
import { IoIosFlash } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { FaGift } from "react-icons/fa";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import ReactCardFlip from 'react-card-flip'
import { IoMdAdd } from "react-icons/io";






const Offers = () => {

    const [isFliped, setIsFliped] = React.useState(false);
    function FlipCard() {

        setIsFliped(true);

    }


    return (
        <div className="offers">
                <h1>  Best Offers</h1>
                <div className="Offers-Conatiner">
                <div className='Recommendations'>
                    <h3><FaRegHeart  style={{position:'relative',left:'-4px'}}/> Recommendations</h3>
                    <div className='Prdoduct-Container'>
                        <div className='Productone'>
                            <div className={`ProductImg ${isFliped ? 'flipped' : ''}`} style={{background:isFliped?'#2a2d32':'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRURnlo91HrB-KmCRED6iTk4e1nmdjhPrS8A&s")',backgroundSize:'cover'}}>
                                {isFliped && (
                                    <div style={{transform: 'rotateY(180deg)',alignItems:'center',textAlign:'center' ,color:'#34ebab',justifyContent:'center',fontSize:'21px',position:"relative",top:'40px',fontWeight:'bold'}} className="flippedContent">
                                        Congratulations
                                        <br/>
                                        <p style={{fontSize:'18px',top:'40px'}} >your item added to the card</p>
                                    </div>
                                    )}
                            </div>
                            <div className='ProductDes'>
                                <div className='flashContainer'>
                                    <div className='text' style={{marginRight:'28px'}} > Now 62.2$</div>

                                    <p style={{color:'grey',textDecoration: 'line-through'}}>92$</p>
                                </div>
                                <p id='title' style={{fontSize:'12px',marginTop:'20px'}}>Souris Gaming </p>
                                <button onClick={FlipCard}><IoMdAdd style={{color:'black', width:'20px'}}/>Add</button>


                            </div>
                        </div>
                        <div  className='Producttwo'>
                            <div className='ProductImg2' style={{background:'url("data:image/jpeg;base64,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")',backgroundSize:'cover'}}></div>
                            <div className='ProductDes'>
                                <div className='flashContainer'>
                                    <div className='text' style={{marginRight:'35px'}} > Now 62.2$</div>

                                    <p style={{color:'grey',textDecoration: 'line-through'}}>92$</p>
                                </div>
                                <p id='title' style={{fontSize:'12px',marginTop:'20px'}}>Souris Gaming </p>
                                <button onClick={FlipCard}><IoMdAdd style={{color:'black', width:'20px'}}/>Add</button>


                            </div>

                        </div>
                    </div>

                </div>
                <div className='FlashSales'>
                    <h3><IoIosFlash/> Flash Sales</h3>
                    <div className='Prdoduct-Container'>
                        <div className='Productone'>
                            <div className='ProductImg' style={{background:'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKT75unPELhUP8wwCi2cKzBWSQ2-sZ-AqtIA&s")',backgroundSize:'cover'}}></div>
                            <div className='ProductDes'>
                                <div className='flashContainer'>
                                    <div className='flash' ></div>
                                    <IoIosFlash style={{width:'25px',height:'25px'}}/>
                                    <p>9min</p>
                                </div>
                                <p id='title' style={{fontSize:'12px',marginTop:'20px'}}>Souris Gaming </p>
                                <button onClick={FlipCard}><IoMdAdd style={{color:'black', width:'20px'}}/>Add</button>


                            </div>
                        </div>
                        <div  className='Producttwo'>
                            <div className='ProductImg2' style={{background:'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSk26I_xFAqvANjGOZ2CP2XeWzeVumc0KrzA&s")',backgroundSize:'cover'}}></div>
                            <div className='ProductDes'>
                                <div className='flashContainertwo'>
                                    <div className='flashtwo' ></div>
                                    <IoIosFlash style={{width:'25px',height:'25px'}}/>
                                    <p>1 min 30sec</p>
                                </div>
                                <p id="title" >Souris Gaming</p>
                                <button onClick={FlipCard} style={{position :'relative' ,left:'10px'}}><IoMdAdd style={{color:'black', width:'20px'}}/>Add</button>


                            </div>

                        </div>
                    </div>





                </div>
                <div className='BigSaves'>
                     <h3><FaGift  style={{position:'relative',left:'-4px'}}/> Big Save</h3>
                    <div className='Prdoduct-Container'>
                        <div className='Productone'>
                            <div className='ProductImg'style={{background:'url("data:image/jpeg;base64,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")',backgroundSize:'cover'}}></div>
                            <div className='ProductDes'>
                                <div className='flashContainer' style={{width:'200px',left:'-30px'}}>
                                    <div className='flash' style={{width:'50px'}} ></div>
                                    <FaGift style={{width:'25px',height:'25px',marginRight:'12px'}}/>
                                    <p  id='pourcentage' >80% Save</p>
                                </div>
                                <p id='title' style={{fontSize:'12px',marginTop:'20px'}}>Souris Gaming </p>
                                <button onClick={FlipCard}><IoMdAdd style={{color:'black', width:'20px'}}/>Add</button>


                            </div>
                        </div>
                        <div  className='Producttwo'>
                            <div className='ProductImg2' style={{background:'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3gxl4bWZ6q4HjCUYDh1V28H6ILno_9Y_XUA&s")',backgroundSize:'cover'}}></div>
                            <div className='ProductDes'>
                                <div className='flashContainertwo' style={{width:'200px',left:'-18px',top:'-22px'}}>
                                    <div className='flashtwo' style={{width:'30px'}} ></div>
                                    <FaGift  style={{width:'25px',height:'25px',marginRight:'28px'}}/>
                                    <p style={{fontSize:'14px'}}>30% Save</p>
                                </div>
                                <p id='title' style={{fontSize:'12px',marginTop:'20px'}}>Souris Gaming </p>
                                <button onClick={FlipCard}><IoMdAdd style={{color:'black', width:'20px'}}/>Add</button>


                            </div>

                        </div>


                    </div>

                </div>
            </div>





        </div>
    )
}
export default Offers;
