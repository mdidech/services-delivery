import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { ServiceContext } from "../../context/context";
import Categorie from "../ProduitsByCategorie";
import Loading from "../Loading";

const SubCategories = ({ category }) => {
  const { subCategories, isLoading } = useContext(ServiceContext);
  const [searchSubCategories, setSearchSubCategories] = useState([]);
  const [SubCategoriesByCat, setSubCategoriesByCat] = useState([]);

  useEffect(() => {
    const tempCategories = subCategories.filter(
      (categorie) => categorie.categorie === category
    );
    setSubCategoriesByCat(tempCategories);
    // eslint-disable-next-line
  }, [subCategories]);
  const handleChange = (e) => {
    const categories = SubCategoriesByCat.filter((categ) => {
      return categ.nom.includes(e.target.value);
    });
    if (e.target.value === "") {
      setSearchSubCategories([]);
    } else {
      setSearchSubCategories([...categories]);
    }
  };
  return (
    <SubCategoriesWrapp>
      <div className='container categories my-5 p-3'>
        <p className='title'>{category} </p>
        <form className='my-3'>
          <input
            type='search'
            required
            className='form-control search-input'
            name='titre'
            onChange={handleChange}
            placeholder='...ابحث حسب الفئة'
            autoComplete='off'
          />
        </form>
        <div className='title-underline'></div>
        <div className='row   justify-content-end mt-5'>
          {isLoading ? (
            <Loading />
          ) : searchSubCategories.length > 0 ? (
            searchSubCategories.map((subcategorie) => {
              return (
                <Categorie categorie={subcategorie} key={subcategorie.docId} />
              );
            })
          ) : (
            SubCategoriesByCat.map((subCategorie) => (
              <Categorie categorie={subCategorie} key={subCategorie.docId} />
            ))
          )}
        </div>
      </div>
    </SubCategoriesWrapp>
  );
};
const SubCategoriesWrapp = styled.section`
  text-align: center;
  .categories {
    text-align: center;
    border-radius: 5px;
  }
  .title {
    color: var(--primaryColor-3);
    font-size: 2rem;
    font-family: var(--ff-title);
    text-align: center;
    margin: 0 auto;
    font-weight: bold;
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
  @media screen and (min-width: 768px) {
    .form-control {
      width: 35%;
    }
  }
`;

export default SubCategories;
