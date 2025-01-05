import "../styles/checkout.css";
 
import { useSelector } from "react-redux";
import CommonSection from "../Components/UI/common-section/CommonSection";
import Helmet from '../Components/Helmet/Helmet'
import { Col , Container , Row } from "reactstrap";
import { useState } from "react";

 
const Checkout = () => {
  const [enteredName,setEnteredName] =useState('')
  const [enteredEmail,setEnteredEmail] =useState('')
  const [enteredNunmber,setEnteredNumber] =useState('')
  const [enteredCountry,setEnteredCountry] =useState('')
  const [enteredCity,setEnteredCity] =useState('')
  const [postalCode,setPostalCode] =useState('')
  const shippingInfo = []
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount)
  const shippingCoat = 30
  const totalAmount = cartTotalAmount + Number(shippingCoat)

  const submitHandler = e=>{
    e.preventDefault()
    const userShippingAddress ={
      name: enteredName,
      email: enteredEmail,
      phone: enteredNunmber,
      country: enteredCountry,
      city: enteredCity,
      postalCode: postalCode,
    };
    shippingInfo.push(userShippingAddress)
    console.log(shippingInfo)
  }
  return (
    <>
      <Helmet title ='checkout'>
        <CommonSection title='checkout'/>
        <section>
          <Container>
            <Row>
              <Col lg='8' md='6'>
              <h6 className="mb-4">Shipping Address</h6>
                <form className="checkout_form" onSubmit={submitHandler}>
                  <div className="form_group">
                    <input type="text" placeholder="Enter Your Name" required 
                      onChange={e=> setEnteredName(e.target.value)}
                    />
                  </div>
                  <div className="form_group">
                    <input type="email" placeholder="Enter Your Email" required 
                      onChange={e=> setEnteredEmail(e.target.value)}/>
                  </div>
                  <div className="form_group">
                    <input type="number" placeholder="Phone Number" required 
                      onChange={e=> setEnteredNumber(e.target.value)} />
                  </div>
                  <div className="form_group">
                    <input type="text" placeholder="Country" required 
                      onChange={e=> setEnteredCountry(e.target.value)} />
                  </div>
                  <div className="form_group">
                    <input type="text" placeholder="City" required 
                      onChange={e=> setEnteredCity(e.target.value)}/>
                  </div>
                  <div className="form_group">
                    <input type="number" placeholder="Postal Code" required 
                      onChange={e=> setPostalCode(e.target.value)} />
                  </div>
                  <button className="addToCart_btn">Payment</button>
                </form>
               
              </Col>
              <Col lg='4' md='6'>
                <div className="checkout">
                  <h6 className="mb-2 d-flex align-items-center justify-content-between">Subtotal: <span>${cartTotalAmount}</span></h6>
                  <h6 className="mb-2 d-flex align-items-center justify-content-between">Shipping: <span>${shippingCoat}</span></h6>
                  <div className="checkout_total">
                    <h5 className="d-flex align-items-center justify-content-between">Total: <span>${totalAmount}</span></h5>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

      </Helmet>
     
    </>
  );
};

export default Checkout;
