import React, {useState} from 'react'

import { SlArrowDown } from "react-icons/sl";

const Categories = () => {
    const[isHovered , setisHovered]=useState(false);
    const Categories=['fashion' , 'Laptops' , 'Phones' , 'Toys' , 'Sports' ,'Boocks'];
    return (
        <div>
            <div    className="category-container"

                    onMouseEnter={() => setisHovered(true)}
                    onMouseLeave={() => setisHovered(false)}>

                <a href='#' id='categoryText'>Categories <SlArrowDown style={{ width: '5px', height: '5px',position:'relative'}} /> </a>

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
