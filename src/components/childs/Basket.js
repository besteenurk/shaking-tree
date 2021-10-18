import React from 'react'
import { ReactSVG } from 'react-svg'
import basket from '../../assets/basket2.svg';

function Basket() {
    return <ReactSVG src={basket} id='basket' className='basket'/>;
}

export default Basket;