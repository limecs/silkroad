import React from 'react'
import {useState} from "react";
import { MdOutlineExplore } from "react-icons/md";
import "./icones.css"
import { FaCartShopping } from "react-icons/fa6";
import { FaUserFriends } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { LuMenu } from "react-icons/lu";
import { FaRegBookmark } from "react-icons/fa";
import { IoMoonOutline } from "react-icons/io5";
import { BsFillQuestionOctagonFill } from "react-icons/bs";
import { RiSettingsLine } from "react-icons/ri";
import LogoImg from "../Assets/logo.png";



const icones = () => {

    return (
        <>
        <div className='Container-icones'>


            <a href='/'><img className="logoImg" src={LogoImg} alt='img'/></a>
            <a href="/"><MdOutlineExplore id='Explore'/> </a>
            <a href="/Card"> <FaCartShopping id ='shoppingCart' /> </a>
             <a href="#"> <FaUserFriends id ='friends' />  </a>
            <a href="/Delivry"> <TbTruckDelivery id='Deliveries' />  </a>
            <a href="#"> <LuMenu id='menu' /></a>
            <a href="/saved"> <FaRegBookmark  id='Bookmark'/>  </a>

            <hr id='ligne'/>

                <a href='#'><IoMoonOutline id='moon' /></a>
                <a href='#'><BsFillQuestionOctagonFill id='question' /></a>
                <a href="/Settings"><RiSettingsLine  id='settings' /></a>


            </div>

        </>

    )
}
export default icones
