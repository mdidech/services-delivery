import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ServiceContext } from "../../context/context";
import Loading from "../Loading";

const Categories = () => {
  const { categories, isLoading } = useContext(ServiceContext);

  return (
    <CategoriesWrapp>
      <div className='container categories p-3'>
        <p className='title'>تسوق حسب التصنيف</p>
        <div className='title-underline'></div>
        <div className='row mt-5 justify-content-around'>
          {isLoading ? (
            <Loading />
          ) : (
            categories.map((categorie) => (
              <article className='col-md-4' key={categorie.docId}>
                <div className='card'>
                  <img src={categorie.image} alt='' className='card-img-top' />
                  <div className='category card-body'>
                    <Link
                      to={`/sous-categories/${categorie.nom}`}
                      className='btn btn-outline-warning px-3'
                    >
                      <h3>{categorie.nom} </h3>
                    </Link>
                  </div>
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </CategoriesWrapp>
  );
};

const CategoriesWrapp = styled.section`
  background: #f9f9f9;
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
  .card {
    border-radius: 5px;
    width: 65vw;
    margin: 2rem auto;
  }

  h3 {
    text-align: center;
    color: var(--primaryColor-3);
    margin-bottom: 0;
  }
  @media screen and (min-width: 768px) {
    .card {
      width: 65%;
    }
    .title {
      text-align: right;
    }
  }
`;

export default Categories;
