import React from "react";
import { useParams, Link} from "react-router-dom";
import SubCategories from "../components/SubCategoriesPage/SubCategories";
import styled from "styled-components";
const SubCategoriesPage = () => {
  const { id } = useParams();
  const acceuil = "الصفحة الرئيسية ";
  return (
    <SubcategoriesPage>
      <div className='maplinks'>
        <Link to='/' className='link-item'>
          {" "}
          {acceuil}{" "}
        </Link>
        <span>&lt; {id} </span>
      </div>

      <SubCategories category={id} />
    </SubcategoriesPage>
  );
};

const SubcategoriesPage = styled.section`
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
export default SubCategoriesPage;
