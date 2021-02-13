import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { ServiceContext } from "../context/context";
import Produit from "./Produit";
const ProduitsBySubCategorie = ({ sousCategorie }) => {
  const { produits } = useContext(ServiceContext);
  const [searchProduits, setSearchProduits] = useState([]);
  const [Produits, setProduits] = useState([]);

  useEffect(() => {
    const tempProduits = produits.filter(
      (produit) => produit.sousCategorie === sousCategorie
    );
    setProduits(tempProduits);
    // eslint-disable-next-line
  }, [produits]);
  const handleChange = (e) => {
    const tempProduits = Produits.filter((produit) => {
      return produit.titre.includes(e.target.value);
    });
    if (e.target.value === "") {
      setSearchProduits([]);
    } else {
      setSearchProduits([...tempProduits]);
    }
  };
  return (
    <ProduitWrapper>
      <section className='cards'>
        <div className='title'>
          <h1>{sousCategorie} </h1>
        </div>
        <form className='my-3'>
          <input
            type='text'
            required
            className='form-control search-input'
            name='titre'
            onChange={handleChange}
            placeholder='...ابحث عن المنتج'
            autoComplete='off'
          />
        </form>
        <div className='title-underline'></div>
        <div className='cards-center mx-auto'>
          {searchProduits.length > 0
            ? searchProduits.map((produit) => {
                return <Produit produit={produit} key={produit.docId} />;
              })
            : Produits.map((produit) => (
                <Produit produit={produit} key={produit.docId} />
              ))}
        </div>
      </section>
    </ProduitWrapper>
  );
};

const ProduitWrapper = styled.section`
  .title {
    text-align: center;
    color: var(--primaryColor-3);
  }
  .title-underline {
    height: 0.25rem;
    width: 30vw;
    background: var(--primaryColor-2);
    margin: 0 auto;
  }
  .form-control {
    background-color: transparent;
    border: 1px solid var(--DarkGrey);

    border-radius: 5px;
    outline: none;
    height: 3rem;
    width: 60%;
    font-size: 16px;
    margin: 0 auto;
    padding: 0 0.75rem;
  }

  .search-input {
    text-align: right;
  }
  .cards {
    padding: 4rem 0;
  }
  .cards-center {
    width: 80vw;
    max-width: 1170px;
    margin: 2rem auto;
  }

  @media screen and (min-width: 768px) {
    .cards-center {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-column-gap: 2rem;
    }
    .form-control {
      width: 35%;
    }
  }
  @media screen and (min-width: 992px) {
    .cards-center {
      grid-template-columns: repeat(5, 1fr);
    }
  }
`;

export default ProduitsBySubCategorie;
