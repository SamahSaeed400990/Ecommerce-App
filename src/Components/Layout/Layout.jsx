import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Routes from '../../routes/Routers'
import Carts from '../UI/cart/Carts'
import { useSelector } from 'react-redux'
 

const Layout = () => {
  const showCart = useSelector((state) => state.cartUi.cartIsVisible)
  return  <>
    <Header/>
    {showCart && <Carts/> }
    
    <div>
        <Routes/>
    </div>
    <Footer/>
  </>
}

export default Layout