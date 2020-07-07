import React from "react"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";



export default function CarouselMain() {
    return ( 
        <div>
            <Carousel>
                <div style={{width:"100%",height:"60vh", backgroundColor:"gray"}}></div>
                <div style={{width:"100%",height:"60vh"}}></div>
            </Carousel>
        </div>
    )
}
