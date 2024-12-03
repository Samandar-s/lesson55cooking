
import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './navbar/Navbar'
import Product from './components/product/Product'
import Home from './pages/home/Home'
import OneProduct from './components/OneProduct/OneProduct'
import Create from './pages/create/Create'

function App() {
  const [products, setProducts] = useState([
    {
      "id": 1,
      "title": "Veggie Stew",
      "ingredients": ["1 Carrot", "1 Leek", "200g Tofu", "300ml Veg stock"],
      "method": "1. Pre-heat the oven to 200C/3C/gas 5. Place the carrot, leek and tofu in a large bowl. Add the stock and mix well. 2. Add the rest of the ingredients and mix well. 3. Place the mixture in a large bowl and cover with a lid. 4. Place the lid on the oven and cook for 40 minutes. 5. Serve with a slaw of your choice",
      "cookingTime": "45 minutes"
    },
    {
      "id": 2,
      "title": "Veggie Pizza",
      "ingredients": [
        "1 Base",
        "Tomata pasata",
        "1 Green pepper",
        "100g Mushrooms"
      ],
      "method": "1. Pre-heat the oven to 200C/3C/gas 5. Add the pasata, green pepper and mushrooms to the base. Place the lid on the oven and cook for 30 minutes. 5. Serve with a slaw of your choice",
      "cookingTime": "35 minutes"
    },
    {
      "id": 3,
      "title": "Greek Salad",
      "ingredients": [
        "1 Onion",
        "1 Block of Feta",
        "Olives",
        "Tomatoes",
        "Olive Oil"
      ],
      "method": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse minima ex rem quis similique eum ratione quaerat, voluptas molestias ut repudiandae delectus voluptates. Eius esse at tenetur ab accusamus excepturi?",
      "cookingTime": "35 minutes"
    }
  ])

  const [dark, setDark] = useState(false)

  console.log(products);

  const deleteEL = (id) => {
    console.log(id);
    
    const deletee = products.filter((item) => {
      return item.id != id
    })
    setProducts(deletee)
    
  }


  return (
    <div className={dark ? "project dark" : "project"}>
      <BrowserRouter>
        <Navbar setDark={setDark} dark={dark} />
        <Routes>
          <Route path='/' element={<Home products={products} deleteEL={deleteEL} />} />
          <Route path='/create' element={<Create products={products} setProducts={setProducts}/>} />
          <Route path='/product/:id' element={<OneProduct products={products} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
