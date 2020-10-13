import React from 'react'
import styled from "styled-components"
const Title = ({title}) => {
  return (
  <TitleWrapp>
    <div className='title-underline'></div>
          <div className='title my-3'>
            <h1> {title} </h1>
          </div>
          <div className='title-underline'></div>
  </TitleWrapp>
  )
}
const TitleWrapp=styled.div`
 .title-underline {
    height: 0.25rem;
    width: 30vw;
    background: var(--primaryColor-2);
    margin: 0 auto;
  }
  .title {
    text-align: center;
    color: var(--primaryColor-3);
  }
`
export default Title
