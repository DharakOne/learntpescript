import React from "react"
import NavBar from "./components/NavBar"
import CarouselMain from "./components/CarouselMain"
import ShowOffers from "./components/ShowOffers"
import Footer from "./components/Footer"

 
export default function App (){
    return(
        <div className="App">
            <NavBar/>
            <CarouselMain/>
            <h1>Productos Recomendados</h1>
            <ShowOffers/>
            <Footer/> 

        </div>
    )
} 