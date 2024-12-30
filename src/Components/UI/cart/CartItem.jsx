import React from 'react'
import { ListGroupItem } from 'reactstrap'
 
import '../../../styles/cartItem.css'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../../store/Shopping/cartSlice'
const CartItem = ({item}) => {
    const dispatch = useDispatch()
    const {id,title,price,image01,quantity,totalPrice} = item 

    const incrementItem = ()=> {
        dispatch(cartActions.addItem({
            id,
            title,
            price,
            image01
        }))
    }
    const decreaseItem = ()=> {
        dispatch(cartActions.removeItem(id))
    }
    const deleteItem =() =>{
        dispatch(cartActions.deleteItem(id))
    }
  return  <>
    <ListGroupItem className='border-0 cart_item'>
        <div className="cart_item-info d-flex gap-2">
            <img src={image01} alt="productImg" />
            <div className="cart_product-info d-flex align-items-center w-100 gap-4 justify-content-between">
                <div>
                    <h6 className='cart_product-title'>{title}</h6>
                    <p className='d-flex align-items-center gap-4 cart_product-price'>
                        {quantity}x <span>${totalPrice}</span>
                    </p>
                    <div className='d-flex align-items-center justify-content-between increase_decrease-btn'>
                        <span className='increase_btn' onClick={incrementItem}><i class="ri-add-line"></i></span>
                        <span>{quantity}</span>
                        <span className='decrease_btn' onClick={decreaseItem}><i class="ri-subtract-line"></i></span>
                    </div> 
                </div>
                <span className='delete_btn' onClick={deleteItem}>
                    <i class="ri-close-line"></i>
                </span>
            </div>
        </div>
    </ListGroupItem>
  </>
}

export default CartItem
 