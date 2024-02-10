import Button from "./components/Button/Button"
import Card from "./components/Card/Card"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import NavBar from "./components/NavBar/NavBar"
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Home from "./components/Home/Home"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { CartContextProvider } from "./context/CartContext"
import Cart from "./pages/Cart"
import Admin from "./pages/Admin"
import Checkout from "./pages/Checkout"
import Contact from "./pages/Contact"


function App() {
  
  

  return (
    <>
    <CartContextProvider>

      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting='Bienvenidos'/>}/>
          <Route path="/category/:category" element={<ItemListContainer greeting='Bienvenidos'/>}/>
          <Route path="producto/:id" element={<ItemDetailContainer/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        
      </BrowserRouter>

    </CartContextProvider>
    </>
  )
}

export default App
