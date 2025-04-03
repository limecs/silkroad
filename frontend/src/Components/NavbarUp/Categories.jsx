import React, {useState} from 'react'
import "./Categories.css"
import { SlArrowDown } from "react-icons/sl";

const Categories = () => {
    const[isHovered , setisHovered]=useState(false);
    const Categories=['fashion' , 'Laptops' , 'Phones' , 'Toys' , 'Sports' ,'Boocks'];
    return (
        <div>
            <div    className="category-container"

                    onMouseEnter={() => setisHovered(true)}
                    onMouseLeave={() => setisHovered(false)}>

                <a href='#' id='categoryText'>Categories <SlArrowDown style={{ width: '10px', height: '10px',position:'relative',top:'1px',left:'3px'}} /> </a>

                {isHovered && (
                    <ul id='categoryList'>
                        {Categories.map((category, index) => (
                            <li key={index}  id='categoryItem'>{Categories[index]}</li>))}
                    </ul>
                )}
            </div>
        </div>
    )
}
export default Categories
