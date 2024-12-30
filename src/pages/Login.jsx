import React from 'react'
import  Helmet from '../Components/Helmet/Helmet'
import CommonSection from '../Components/UI/common-section/CommonSection'
import { Container , Row , Col } from 'reactstrap'
import { Link } from 'react-router-dom'
 
const Login = () => {
  return<>
    <Helmet title='Login'>
      <CommonSection title='Login'/>
      <section>
        <Container>
          <Row>
            <Col lg='6' md='6' sm='12' className='m-auto text-center'>
            <form  className='form-control mb-5'>
              <div className="form_group">
                <input type="email" placeholder='Email' required />
              </div>
              <div className="form_group">
                <input type="password" placeholder='Password' required />
              </div>

            </form>
            <Link to='/register'>Already have an account? Create an acount</Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  </>
}

export default Login