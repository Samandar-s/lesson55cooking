import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Product from '../product/Product'
import './OneProduct.css'

function OneProduct({ products }) {

  const { id } = useParams()

  const newproduct = products.filter((item) => {

    return item.id == id
  })

  console.log(newproduct[0].id);
  
  return (
    <>
      <div className="container">
        <div className='newproduct'>
          <h1>{newproduct[0].title}</h1>
          <h3>Cooking Time : <span>{newproduct[0].cookingTime} <i className="fa-regular fa-clock"></i></span></h3>
          <h3>Method : <span>{newproduct[0].method}</span></h3>
          <h3>Ingredients : <span>{newproduct[0].ingredients}</span></h3><br /><br />
          <Link className='newproduct_link' to='/'>Back</Link><br /><br />
        </div>
      </div>
    </>
  )
}

export default OneProduct