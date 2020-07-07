import Styled from 'styled-components'

interface PropsTipography {
    background?:string 
    color?:string
    size?:string
    weight?:string
    block?:boolean
    margin?:string
    align?:string
}



const Tipography=Styled.div<PropsTipography>`
    font-weight: ${({weight})=>weight? weight:"normal"};
    font-size:${({size})=>size? size:"12px"};
    display:${({block})=>block? "block":"inline"};
    background-color:${({background})=>background ? background :"inherit"};
    color: ${({color})=>color? color:"black"};
    font-weight:${({weight})=>weight? weight:"normal"};
    margin:${({margin})=>margin? margin:"2px 0 0 0"};
    text-align: ${({align})=>align? align:"start"};

`
export default Tipography