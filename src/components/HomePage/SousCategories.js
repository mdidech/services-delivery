import React, { useContext } from "react";
import styled from "styled-components";
import { ServiceContext } from "../../context/context";
import Categorie from "../ProduitsByCategorie";
import Loading from "../Loading";
const SousCategories = () => {
  const { subCategories, isLoading } = useContext(ServiceContext);
  return (
    <SubCategorieswrapp id='sousCategories'>
      <div className='container categories my-3 p-3 '>
        <p className='title'>تسوق حسب الفئة</p>
        <div className='title-underline'></div>
        <div className='row  align-items-center mt-5'>
          {isLoading ? (
            <Loading />
          ) : (
            subCategories.map((subCategorie) => (
              <Categorie categorie={subCategorie} key={subCategorie.docId} />
            ))
          )}
        </div>
      </div>
    </SubCategorieswrapp>
  );
};
const SubCategorieswrapp = styled.section`
  .categories {
    text-align: center;
    /* border: 1px solid var(--primaryColor-3); */
    border-radius: 5px;
  }
  .title {
    color: var(--primaryColor-3);
    font-size: 1.75rem;
    font-family: var(--ff-title);
    text-align: center;
    font-weight: bold;
  }
  .title-underline {
    height: 0.25rem;
    width: 30vw;
    background: var(--primaryColor-2);
    margin: 0 auto;
  }

  @media screen and (min-width: 768px) {
    .card {
      width: 80%;
    }
    .title {
      text-align: right;
    }
  }
`;

export default SousCategories;
