import React from 'react'
import Title from "../Title";
import CartColumns from "./CartColumns";
import CartList from "./CartList";
import CartTotal from "./CartTotal";
import styled from "styled-components"
const Cart = () => {
  return (
    <CartWrapp className='py-5'>
      <div className='container'>
        <Title title='سلة المشتريات' center />
      </div>
      <CartColumns />
      <CartList />
      <CartTotal />
    </CartWrapp>
  )
}

const CartWrapp=styled.section`
min-height:80vh
`
export default Cart
