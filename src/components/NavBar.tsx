import React from "react"
import styled from "styled-components"
import SearchBar from "./SearchBar"

const Container = styled.div`
    display:grid;
    background-color:rgb(255,79,79);
    grid-template-columns: repeat(3,auto);
`

const LinkBrand = styled.div`
    align-self:flex-start;
`

const LinkCont = styled.div`
    display:grid;
    grid-template-columns: repeat(3,auto);
`

const Link = styled.a`
    text-decoration:none;
    color:white;
    font-family:'Courier New', Courier, monospace;
`

export default function NavBar() {

    return (
        <Container>
            <LinkBrand>
                <Link href="/">MyStore</Link>
            </LinkBrand>
            <SearchBar/>
            <LinkCont>
                <Link href="/CrearCuenta">Crear Cuenta</Link>
                <Link href="/IniniciarSession">Ininiciar Session </Link>
                <Link href="/Carrito">Carrito</Link>
            </LinkCont>
        </Container>
    )
}