import React, { useContext, useState } from "react";
import styled from "styled-components";
import { FaChevronCircleUp, FaChevronCircleDown } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { ServiceContext } from "../context/context";
const Produit = ({ produit }) => {
  const { addToCart, cart } = useContext(ServiceContext);
  const [count, setCount] = useState(1);
  const increment = () => {
    let countItems = count + produit.unite_increment;
    setCount(countItems);
  };
  const decrement = () => {
    let countItems = count - produit.unite_increment;
    if (countItems > 0) {
      setCount(countItems);
    }
  };
  const addedToCart = () => {
    let tempCart = [...cart];
    let tempItem = tempCart.find((item) => item.id === produit.id);
    return tempItem ? (
      <button
        className='btn btn-block btn-outline-warning btn-tocart'
        onClick={() => addToCart(produit.id, count)}
        disabled
      >
        اضافة لسلة التسوق <FaCartPlus className='nav-icon' />
      </button>
    ) : (
      <button
        className='btn btn-block btn-outline-warning btn-tocart'
        onClick={() => addToCart(produit.id, count)}
      >
        اضافة لسلة التسوق <FaCartPlus className='nav-icon' />
      </button>
    );
  };
  return (
    <ProduitWrapper className='card'>
      <img src={produit.image} alt='' className='card-img-top' />
      <div className='card-info'>
        <h4 className='text-center'>{produit.titre} </h4>
        <p className='text-center'>
          {produit.prix} dhs/{produit.unite}
        </p>
        <div className='d-flex justify-content-center py-2'>
          <div>
          <button  type="button"  onClick={decrement} className="quantite  btn btn-outline-success font-weight-bold  px-1 py-0" >-</button>
            <span className='text-title text-muted mx-3'>{count}</span>
            <button  type="button"  onClick={increment} className="quantite  btn btn-outline-success font-weight-bold px-1 py-0">+</button>
          </div>
        </div>
      </div>
      <div className='card-footer'>{addedToCart()}</div>
    </ProduitWrapper>
  );
};

const ProduitWrapper = styled.section`
  .card {
    border: 1px solid var(--DarkGrey);
    margin-bottom: 3rem;
  }
  .quantite{
    width:25px;
    font-size:1.2rem;
  }
  .card-info {
    color: var(--primaryColor-3);
    padding: 1rem;
  }
  .card-footer {
    color: var(--primaryColor-3);
  }
  .btn-tocart {
    font-size: 0.75rem;
    color: var(--primaryColor-3);
  }
  .card-footer span {
    color: var(--primaryColor-2);
  }
  .card {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
  }
`;
export default Produit;
