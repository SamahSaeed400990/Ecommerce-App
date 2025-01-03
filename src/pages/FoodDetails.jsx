import React, { useState ,useEffect } from 'react'
import products from '../Assets/fake-Data/products'
import { useParams } from 'react-router-dom'
import Helmet from '../Components/Helmet/Helmet'
import CommonSection from '../Components/UI/common-section/CommonSection'
import { Container , Row , Col } from 'reactstrap'
import { useDispatch } from "react-redux";
import { cartActions } from "../store/Shopping/cartSlice";
 
import ProductCard from "../Components/UI/productCard/ProductCard"
const FoodDetails = () => {
  const [tab,setTab] = useState('desc')
  const [enteredName,setEnteredName] =useState('')
  const [enteredEmail,setEnteredEmail] =useState('')
  const [reviewMsg,setReviewMsg] =useState('')
  const {id} = useParams()
  const dispatch = useDispatch();
 
  const product = products.find((product) => product.id === id);
  const [reviewImg,setReviewImg] = useState(product.image01)
  const{title , price , desc ,category ,image01}=product
  const relatedProduct = products.filter((item) => category === item.category);
  const submittedHandler = e=>{
    e.preventDefault()
  }
  useEffect(() => {
    setReviewImg(product.image01);
    
  }, [product]);
  useEffect(() => {
    window.scrollTo(0, 0);
    
  }, [product]);
  const addItem = () => {
 
    dispatch(
      cartActions.addItem({
        id,
        title,
        price,
        image01
        
      })
      );

    };

  return <>

    <Helmet title='product-details'>

      <CommonSection title={title}/>
      <section>
        <Container>
          <Row>
            <Col lg='2' md='2'>
              <div className="product_img">
                <div className="img_item mb-3"  onClick={() =>  setReviewImg(product.image01)}>
                  <img src={product.image01} alt="productImg" className='w-100' />
                </div>
                <div className="img_item mb-3" onClick={() =>  setReviewImg(product.image02)}>
                  <img src={product.image02} alt="productImg" className='w-100' />
                </div>
                <div className="img_item mb-3"  onClick={() =>  setReviewImg(product.image03)}>
                  <img src={product.image03} alt="productImg" className='w-100' />
                </div>

              </div>


            </Col>
            <Col lg='4' md='4'>
              <div className="product_main-img">
                <img src={reviewImg} alt="product_main-img" className='w-100' />
              </div>
            </Col>
            <Col lg='6' md='6'>
              <div className="single_product-content">
                <h2  className='product_title mb-3'>{title} </h2>
                <p className='product_price'>Price: <span>${price}</span></p>
                <p className='category mb-3'>Category: <span>{category}</span></p>
                <button onClick={addItem} className="addToCart_btn">add to Cart</button>
              </div>
            </Col>
            <Col lg='12'>
              <div className="tabs d-flex py-2 gap-3 align-items-center">
                <h6 className={`${tab==='desc' ? 'tabs_active' :''}`} onClick={()=>setTab('desc')}>Description</h6>
                <h6 className={`${tab==='rev' ? 'tabs_active' :''}`} onClick={()=>setTab('rev')}>Review</h6>
              </div>
              {
                tab === 'desc' ? <div className="tabs_content">
                <p>{desc}</p>
              </div> :  <div className="tabs_form">
                <div className="review">
                  <p className='user_review mb-0'>johan</p>
                  <p className='user_email'>example@gmail.com</p>
                  <p className='text_review'>great</p>
                </div>
                <div className="review">
                  <p className='user_review mb-0'>johan</p>
                  <p className='user_email'>example@gmail.com</p>
                  <p className='text_review'>great</p>
                </div>
                <div className="review">
                  <p className='user_review mb-0'>johan</p>
                  <p className='user_email'>example@gmail.com</p>
                  <p className='text_review'>great</p>
                </div>
                <form className='form mb-3' onClick={submittedHandler}>
                  <div className='form_group'>
                    <input type="text" required placeholder='Enter your Name' value={enteredName} onChange={e=>setEnteredName(e.target.value)}/>
                  </div>
                  <div  className='form_group'>
                    <input type="email" required placeholder='Enter your Email' value={enteredEmail} onChange={e=>setEnteredEmail(e.target.value)}/>
                  </div>
                  <div  className='form_group'>
                    <textarea type="text" required rows={6} value={reviewMsg} placeholder='Enter your Review' onChange={e=>setReviewMsg(e.target.value)}></textarea>
                  </div>
                  <button type='submit' className='addToCart_btn'>Submit</button>
                </form>
              </div>
              }
              
              
            </Col>
            <Col lg="12" className="mb-5 mt-4">
              <h2 className="related_product-title">You might also like</h2>
            </Col>
            {relatedProduct.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>

  
  </>
}

export default FoodDetails
 