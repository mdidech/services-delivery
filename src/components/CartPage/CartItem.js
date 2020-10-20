import React from "react";
import {
  FaTrash,
} from "react-icons/fa";
import styled from "styled-components"

const CartItem = ({ cartItem, increment, decrement, remove }) => {
  const { id, titre, prix, quantite, total, image } = cartItem;
  return (
    <ItemWrapp className='row mt-5 mt-lg-0 text-capitalize text-center align-items-center flex-row-reverse'>
      <div className='col-10 mx-auto col-lg-2 pb-2'>
        <img src={image} alt='produit' width='60' className='img-fluid' />
      </div>
      <div className='col-10 mx-auto col-lg-2 pb-2'>
    
         <span className='d-lg-none'>  اسم المنتج :</span>
         <span > {titre}</span>
      </div>
      <div className='col-10 mx-auto col-lg-2 pb-2'>
        
        {prix} Dhs
    <span className='d-lg-none'>: الثمن </span>
      </div>
      <div className='col-10 mx-auto col-lg-2 my-2 my-lg-0 '>
        <div className='d-flex justify-content-center'>
          <div>
          <button  type="button" onClick={() => decrement(id)} className="quantite  btn btn-outline-success font-weight-bold  px-1 py-0">-</button >
            <span className='text-title text-muted mx-3'>{quantite}</span>
            <button  type="button" onClick={() => increment(id)} className="quantite  btn btn-outline-success font-weight-bold  px-1 py-0">+</button>
          </div>
        </div>
      </div>
      <div className='col-10 mx-auto col-lg-2'>
      <button  type="button" onClick={() => remove(id)} className="border-0 bg-transparent">
        <FaTrash className='cart-icon text-danger'  />
        </button>
      </div>
      <div className='col-10 mx-auto col-lg-2'>
        <span className='text-muted'>{total} dhs</span>
      <span className='d-lg-none'> : المجموع  </span>
      </div>
      <div className='title-underline mt-5 mt-lg-0'></div>
    </ItemWrapp>
  );
};

const ItemWrapp=styled.div`
color:var(--primaryColor-3) !important;
 .title-underline {
    height: 1px;
    width: 90vw;
    background: var(--primaryColor-2);
    margin: 0 auto;
  }
  .quantite{
    width:25px;
    font-size:1.2rem;
  }
`
export default CartItem;
