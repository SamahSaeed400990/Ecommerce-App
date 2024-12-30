import React from 'react'

import { Link } from 'react-router-dom'
import '../../../styles/productCard.css'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../../store/Shopping/cartSlice'

const ProductCard = (props) => {
 
  const{id,title,image01,price} =props.item
  const dispatch = useDispatch()
  const addToCart = ()=>{
    dispatch(cartActions.addItem({
      id,
      title,
      image01,
      price
    }))
  }

  return<>
  
  <div className='product_item'>
    <div className="product_img">
        <img src={image01} alt="product_img" className='w-50' />

    </div>
    <div className="product_content">
        <h5 ><Link to={`/foods/${id}`}> {title}</Link></h5>
        <div className='d-flex justify-content-between align-items-center'>
            <span className='product_price'>${price}</span>
            <button className='addToCart_btn' onClick={addToCart}>Add to Cart</button>
        </div>
    </div>
  </div>
  
  </>
   
}

export default ProductCard