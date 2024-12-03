import React, { useState } from 'react'
import Product from '../../components/product/Product'
import './Home.css'

function Home({ products , deleteEL}) {

    


    return (
        <>
            <main>
                <section>
                    <div className="container">
                        <div className="block">
                            {products.map((item)=>{
                                return <Product item={item} key={products.id} deleteEL={deleteEL}/>
                            })}
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Home