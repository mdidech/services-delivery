import React from 'react'
import styled from "styled-components"
const CartColumns = () => {
  return (
    <ColumnsWrapp className='container-fluid text-center d-none d-lg-block my-5 text-success'>
    <div className='row align-items-center flex-row-reverse'>
      <div className='col-lg-2'>
        <p className='text-uppercase'>المنتجات</p>
      </div>
      <div className='col-lg-2'>
        <p className='text-uppercase'>اسم المنتج</p>
      </div>
      <div className='col-lg-2'>
        <p className='text-uppercase'>الثمن</p>
      </div>
      <div className='col-lg-2'>
        <p className='text-uppercase'>الكمية</p>
      </div>
      <div className='col-lg-2'>
        <p className='text-uppercase'>حذف</p>
      </div>
      <div className='col-lg-2'>
        <p className='text-uppercase'>المجموع</p>
      </div>
    </div>
     <div className='title-underline'></div>
  </ColumnsWrapp>
  )
}

const ColumnsWrapp=styled.div`
 .title-underline {
    height: 1px;
    width: 90vw;
    background: var(--primaryColor-2);
    margin: 0 auto;
  }
`
export default CartColumns
