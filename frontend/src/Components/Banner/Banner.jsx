import React, {useState,useEffect} from 'react'
import "./Banner.css"
import { FaChevronLeft,FaChevronRight }from "react-icons/fa";

const Banner = () => {
    const ImgSlides=[
    "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/navy-blue-black-friday-etsy-banner-design-template-351d474d3af8e9fb90b015de638a8779_screen.jpg?ts=1737388357",
    "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/halloween-design-template-85e6956c902cbf5e83ef99b03724081e_screen.jpg?ts=1668839988",
    "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/black-friday-design-template-e317945af8bbda4e38ee20fedab179d7_screen.jpg?ts=1634211198",
        "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/black-friday-design-template-99e638fad8f27bb4a79d81d54a8a8e7b_screen.jpg?ts=1737489757",
        "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/pink-we-are-hiring-email-header-design-template-c3ab237ec6abfdab53499861637e2e95_screen.jpg?ts=1737660153",
        "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/blue-student-discounts-email-header-design-template-02bfb5e383249ddd95e3d4beeb8b626a_screen.jpg?ts=1561541735"
]
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(nextSlide, 4000);
        return () => clearInterval(interval); // Cleanup on unmount
    }, [currentIndex]);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? ImgSlides.length - 1 : prev - 1));
    };


    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === ImgSlides.length - 1 ? 0 : prev + 1));
    };



    return (
        <div>



                            <div id='ImgSlider' style={{ background:`url(${ImgSlides[currentIndex]})` }} >
                                <div id='switcher'>

                                    <FaChevronLeft id='ScrollLeft' onClick={prevSlide} />
                                    <FaChevronRight  id="ScrollRight" onClick={nextSlide}  />
                                </div>
                            </div>


</div>

    )
}
export default Banner
