import "../styles/checkout.css";
 
import { useSelector } from "react-redux";
import CommonSection from "../Components/UI/common-section/CommonSection";
import Helmet from '../Components/Helmet/Helmet'
import { Col , Container , Row } from "reactstrap";
 
const Checkout = () => {
  return (
    <>
      <Helmet title ='checkout'>
        <CommonSection title='checkout'/>
        <section>
          <Container>
            <Row>
              <Col lg='8' md='6'>
              <h6 className="mb-4">Shipping Address</h6>
                <form className="checkout_form">
                  <div className="form_group">
                    <input type="text" placeholder="Enter Your Name" />
                  </div>
                  <div className="form_group">
                    <input type="email" placeholder="Enter Your Email" />
                  </div>
                  <div className="form_group">
                    <input type="number" placeholder="Phone Number" />
                  </div>
                  <div className="form_group">
                    <input type="text" placeholder="Country" />
                  </div>
                  <div className="form_group">
                    <input type="text" placeholder="City" />
                  </div>
                  <div className="form_group">
                    <input type="number" placeholder="Postal Code" />
                  </div>
                </form>
                <button className="addToCart">Payment</button>
              </Col>
              <Col lg='4' md='6'>
                <div>
                  <h6>Subtotal: $<span></span></h6>
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
