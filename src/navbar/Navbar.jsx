import React, { useState } from 'react'
import './Navbar.css'
import Create from '../pages/create/Create'
import { Link } from 'react-router-dom'

function Navbar({ setDark, dark }) {
    const [mainColor, setmainColor] = useState("black")

    return (
        <>
            <nav className='nav_top' style={{ background: mainColor}}>
                <div className="container">
                    <div>
                        <Link to={"/"}><h1>Cooking</h1></Link>
                        <Link to={"/create"}>Create</Link>
                    </div>
                </div>
            </nav>
            <div className='nav_bottom'>
                <div className="container">
                    <i onClick={()=>{
                        setDark(!dark)
                    }} className="fa-solid fa-circle-half-stroke" />
                    <div className='colors'>
                        {["yellow", "red", "blue", "black", "orange", "green"].map((item)=>{
                            return (
                                <div className='yellow' 
                                onClick={()=>{
                                    setmainColor(item)}}
                                style={{background: item}}></div>
                            )
                        
                        })}
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar