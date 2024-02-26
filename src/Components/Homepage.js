import { useEffect, useState } from "react";
import {carouselList} from './Data/Store';

function Homepage() {
    const [currIndex,setCurrIndex] = useState(0);
    useEffect(()=>{
        const rotationalId = setInterval(()=>{
            setCurrIndex((prevIndex)=> (prevIndex + 1) % carouselList.length);
        },5000);
        
        return () => clearInterval(rotationalId);
    },[])
    return (
        <>
        <div className="homePageContainer">
            <div className="homeHeader">
                <p id="homeHeaderInfo">Peach House: The Ultimate Cuisine destination in Sauga</p>
            </div>
            <div className="imageSlider">
                <div id="imageHeader"></div>
                <div className="displayImages">
                    <div id="carouselHeader"><h1>Signature Dishes</h1></div>
                    <img id="carouselImages" src = {carouselList[currIndex].src} alt ="Peach House Specialities" />
                    <p id="imageText">{carouselList[currIndex].desc}</p>
                </div>
            </div>
            {/* <div className="homeText">
                <>
                    Sample Text
                </>
            </div> */}
        </div>
        </>
    );
}
export default Homepage;