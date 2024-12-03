import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Create.css'

function Create({ products, setProducts ,deleteEl}) {
    const [title, settitle] = useState("")
    const [method, setmethod] = useState("")
    const [cookingTime, setcookingTime] = useState("")
    
    const [ingredients, setingredients] = useState([])
    const [ingredient, setingredient] = useState("")



    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(title, ingredients, method, cookingTime);
        const obj = {
            id: Math.floor(Math.random() * 999),
            title,
            ingredients,
            method,
            cookingTime
        }
        console.log(obj);

        setProducts([...products, obj])

        navigate("/")

    }

    return (
        <div className='creat'>
            <div className="container">
                <div className="box_creat">
                <h1>Create</h1>
                <form onSubmit={handleSubmit} action="">
                    <input onInput={(e) => {
                        settitle(e.target.value)
                    }} type="text" placeholder='Add Title' /> 
                    <div className='ing'>
                        <input onChange={(e)=>{
                            setingredient(e.target.value)
                        }} value={ingredient} type="text" placeholder='Add Ingredients' />
                        <button onClick={()=>{
                            setingredients([...ingredients, ingredient])
                            setingredient("")
                        }} type='button'>Add</button>
                    </div><br />
                    <p>
                        <b>Ingredients:</b> 
                        {
                            ingredients.map((item)=>{
                                return <span>{item},</span>
                            })
                        }
                    </p><br />
                    <input onInput={(e) => {
                        setmethod(e.target.value)
                    }} type="text" placeholder='Add Method' />
                    <input onInput={(e) => {
                        setcookingTime(e.target.value)
                    }} type="text" placeholder='Add Cooking' />
                    <button className='btn_btn'>Submit</button>
                </form>
                </div>
            </div>
        </div>
    )
}

export default Create