import React from 'react'
import {ListGroupItem, ListGroup,Row,Col ,Container  } from 'reactstrap'
import logo from '../../Assets/images/res-logo.png'
import '../../styles/footer.css'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg='3' md='4' sm='6'>
            <div className="logo footer_logo text-start">
                  <img src={logo} alt="log" />
                  <h5>Testy Treat</h5>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                     Quae ab esse obcaecati. Ratione, cum mollitia?
                  </p>
            </div>
          
          
          </Col>
          <Col lg='3' md='4' sm='6'>
            <h5 className='footer_title'>Delivery Time</h5>
            <ListGroup className='.delivery_time-item'>
               <ListGroupItem className=' delivery_time-item border-0 ps-0'>
                <p>Sunday - Thursday</p>
                <span>10:00am - 11:00pm</span>
                
               </ListGroupItem>
               <ListGroupItem  className=' delivery_time-item border-0 ps-0'>
                <p>Friday - Saterday</p>
                <span>Off</span>

               </ListGroupItem >
            </ListGroup>
          </Col>
          <Col lg='3' md='4' sm='6'>
            <h5 className='footer_title'>Delivery Contact</h5>
            <ListGroup className='.delivery_time-item'>
            <ListGroupItem className=' delivery_time-item border-0 ps-0'>
                <span>Location: ZindaBazar, Sylhet-3100, Bangladesh</span>
                 

                
               </ListGroupItem>
               <ListGroupItem className=' delivery_time-item border-0 ps-0'>
               
                <span>Phone: 0157849787</span>

                
               </ListGroupItem>
               <ListGroupItem  className=' delivery_time-item border-0 ps-0'>
                 
                <span>Email: example@gmail.com</span>

               </ListGroupItem >
            </ListGroup>
          </Col>
          <Col lg='3' md='4' sm='6'>
          <h5>Newsletter</h5>
          <p>Newsletter</p>
          <div className="newsletter">
            <input type="email" placeholder='Enter Your Email' />
            <span><i class="ri-send-plane-line"></i></span>
          </div>
          </Col>
        

         
        </Row>
        <Row className='mt-5'>
          <Col lg='6' md='6'>
            <p className='copyright_text'>Copyright - 2022, website made by Muhibur Rahman. All Rights Reserved.</p>
          </Col>
          <Col lg='6' md='6'>
            <div className="social_links d-flex align-items-center justify-content-center gap-4">
              <p className='m-0'>Follow:</p>
              <span><Link to=''><i class="ri-facebook-line"></i></Link></span>
              <span><Link to='https://github.com/SamahSaeed400990'><i class="ri-github-fill"></i></Link></span>
              <span><Link to=''><i class="ri-youtube-fill"></i></Link></span>
              <span><Link to='https://www.linkedin.com/in/samah-saeed-511170287?'><i class="ri-linkedin-line"></i> </Link></span>
            </div>
          </Col>
        </Row>

      </Container>
      
  </footer>
  )
}

export default Footer