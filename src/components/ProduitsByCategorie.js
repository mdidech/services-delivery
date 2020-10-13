import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const ProduitsByCategorie = ({ categorie }) => {
  return (
    <CategorieWrapper className='col-md-3' key={categorie.docId}>
      <div className='card'>
        <img src={categorie.image} alt='' className='card-img-top' />
        <div className='category card-body'>
          <Link
            to={`/produits/${categorie.nom}`}
            className='btn btn-outline-warning px-3'
          >
            <h3>{categorie.nom} </h3>
          </Link>
        </div>
      </div>
    </CategorieWrapper>
  );
};

const CategorieWrapper = styled.article`
 .card {
    border-radius: 5px;
    width: 65vw;
    margin: 1rem auto;
  }

  h3 {
    font-size: 1.35rem;
    text-align: center;
    color: var(--primaryColor-3);
  }
   
  @media screen and (min-width: 768px) {
    .card {
      width: 80%;
  }
`;

export default ProduitsByCategorie;
