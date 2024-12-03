import React from 'react'
import './Product.css'
import { Link } from 'react-router-dom'

function Product({ item, deleteEL }) {

    
    
    return (
        <>
            <div className="card">
                <div className='card_title'>
                    <h1>{item.title}</h1>
                    <i className="fa-solid fa-trash" onClick={() => {
                        
                        deleteEL(item.id)
                    }}></i>
                </div>
                <p className='time'>Cooking Times {item.cookingTime} <i className="fa-regular fa-clock"></i></p>
                <p className='ppp'>{item.method.slice(0, 100)}...</p><br /><br />
                <Link to={`/product/${item.id}`} className='card_btn' >
                    Read More
                </Link><br /><br />
            </div>
            
        </>
    )
}

export default Product