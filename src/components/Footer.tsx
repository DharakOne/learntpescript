import React from "react"
import Styled from "styled-components"
import Tipography from '../toolComponents.tsx/Tipography'


const Container = Styled.div`
    background-color:rgb(250,200,126);
    display:grid;
    grid-template-columns: repeat(2,1fr);
    padding: 50px 15px;
    justify-items:center;

`
const FBrand = Styled.div`
    height:202px;
    width:219px;
    background-color:rgb(255,79,79);
    display:flex;
    justify-content:center;
    align-items: center;
    border-radius:10%;
`

const CContactenos = Styled.div`
    display:flex;
    flex-direction: column;
    min-width:233px;
`

const CSeguir = Styled.div`
    display:flex;
    flex-direction: column;
    max-width:350px;
    margin-top:50px;
`

const CInteres = Styled.div`
    display:flex;
    flex-direction: column;
    max-width:350px;
    margin-top:50px;
`




export default function Footer() {
    return (
        <Container>
            <FBrand>MyStore</FBrand>
            <CContactenos>
                <Tipography margin="0" weight="bold" size="36px" align="center" >Contactenos</Tipography>
                <Tipography weight="bold" size="15px" >Servico al cliente</Tipography>
                <div >  <a href="/gh">Icon phone</a> <Tipography> +(504) 9999-21321 </Tipography>  </div>
                <Tipography weight="bold" size="15px" >Escribenos</Tipography>
                <div >  <a href="/gh">Icon whatsup</a> <Tipography> +(504) 8888-21322 </Tipography>  </div>
                <div >  <a href="/gh">Icon mail</a> <Tipography> junior@store.com </Tipography>  </div>
                <Tipography weight="bold" size="15px" >Horario de atencion</Tipography>
                <Tipography >8:00 a.m. a  8:00 p.m.</Tipography>
            </CContactenos>
            <CSeguir>
                <Tipography margin="0" weight="bold" size="36px" align="center" >
                    Siguenos En Las Redes Sociales
                 </Tipography>
                <div>
                    <a href="/gh">Icon Twiter</a>
                    <a href="/gh">Icon Instagram</a>
                    <a href="/gh">Icon Facebook</a>
                </div>
            </CSeguir>
            <CInteres>
                 <Tipography margin="0" weight="bold" size="36px" align="center" >
                    Enlances de interes
                 </Tipography>
                 <Tipography>
                     <a href="/#">Quienes somos</a> 
                 </Tipography>
                 <Tipography>
                    <a href="/#">Preguntas Frecuentes</a> 
                 </Tipography>
                 <Tipography>
                    <a href="/#">Terminos y condiciones</a>
                 </Tipography>

                 <Tipography>
                    <a href="/#">Mision, Vision, Valores</a>
                 </Tipography>

                 <Tipography>
                    <a href="/#">Politicas de Cambio y Garantia</a>
                 </Tipography>
            </CInteres>
        </Container>
    )
}