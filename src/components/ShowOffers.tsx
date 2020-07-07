import React from "react"
import Styled from "styled-components"
import OffersCard from "./OffersCard"


const Conteiner=Styled.div`
    background-color:rgb(227,227,227);
    display:grid;
    grid-template-columns:repeat(3,auto);
    justify-content:space-between;
    grid-gap:0.5rem;
`

export default function ShowOffers(){
    const numProducts=[0,1,2,3,4,5,6,7,8,9,10,11]
    return(
        <Conteiner>
            {numProducts.map(i=><OffersCard key={i}/>)}
        </Conteiner>
    )
}

