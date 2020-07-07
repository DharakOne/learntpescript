import React from "react"
import Styled from "styled-components"



const Conteiner = Styled.div`
    background-color:rgb(227,227,227);
    
`

const Name = Styled.div``

const GestoreCompra = Styled.div``

const Agregador = Styled.div``

const Button = Styled.button``

export default function OffersCard() {
    return (
        <Conteiner>
            <div
                style={{
                    backgroundColor: "pink",
                    height: "455px",
                    width: "323px"
                }}>Image</div>
            <Name> Lavadora dsd sd dss</Name>
            <GestoreCompra>
                <Agregador>
                    <Button>+</Button>
                    <input type="number" name="" value={0} />
                    <Button>-</Button>
                    <Button>Agregar</Button>
                </Agregador>
            </GestoreCompra>

        </Conteiner>
    )
}