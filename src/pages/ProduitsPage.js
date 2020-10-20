import React from "react";
import { useParams, Link } from "react-router-dom";
import ProduitsBySubCategorie from "../components/ProduitsBySubCategorie";
import styled from "styled-components";
const ProduitsPage = () => {
  const { id } = useParams();
  const acceuil = "الصفحة الرئيسية ";

  return (
    <ProduitPageWrapper>
      <div className='maplinks'>
        <Link to='/' className='link-item'>
          {acceuil}
        </Link>
        <span>&lt; {id} </span>
      </div>
      <ProduitsBySubCategorie sousCategorie={id} />
    </ProduitPageWrapper>
  );
};

const ProduitPageWrapper = styled.section`
  min-height:80vh;
  .maplinks {
    font-size: 0.75rem;
    color: var(--DarkGrey);
    text-align: right;
    margin-right: 1.25rem;
    margin-top: 1rem;
  }
  .link-item {
    text-decoration: none;
    color: var(--primaryColor-3);
  }
`;
export default ProduitsPage;
